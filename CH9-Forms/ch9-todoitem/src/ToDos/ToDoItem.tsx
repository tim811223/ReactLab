import { faList, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useState } from "react";
import { Editor } from "./Editor";

export enum Priority{
  HIGH,
  MEDIUM,
  LOW,
}

export interface Props{
  id:string;
  title:string;
  content:string;
  priority:Priority;
  assignee?:string;
  resolved:boolean;
}

export const ToDoItem:FC<Props> = ({id,title,content,priority,assignee,resolved}) =>{
const [editing,serEditing] = useState<boolean>(false);
const color = resolved ? '' : 
      priority === Priority.HIGH ? 'is-danger' :
      priority === Priority.MEDIUM ? 'is-warning' :
      priority === Priority.LOW ? 'is-info':'is-primary';
      
      const handleEditClick = () => serEditing(true);
      const handleCancelClick = () => serEditing(false);

      return(
        // 如果editing為true,則顯示Editor component,否則顯示article(這component自己的內容)
        editing 
        ? <Editor {...{id,title,content,priority,assignee,resolved}} onCancle={handleCancelClick}/>
        : <article className={`message ${color}`}>
          <div className="message-header">
            <p>{title}</p>
            <span>
              <FontAwesomeIcon  icon={faList} className="is-clickable mr-l" onClick={handleEditClick}/>
              <FontAwesomeIcon  icon={faTrashCan} className="is-clickable"/>
            </span>
          </div>
          <div className="message-body">
            <div>
              {content}
            </div>
            <div className="columns is-mobile">
              <div className="column">
                <span className="has-text-grey-light is-size-7 is-8">{id}</span>
              </div>
              <div className="column has-text-right">
                {
                  assignee!==undefined 
                  ? <span className="has-text-grey-light is-size-7">{`assignee to @${assignee}`}</span>
                  : null
                }
              </div>
              </div>
          </div>
        </article>
      );
      
}