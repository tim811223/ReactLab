import { faList, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

export enum Priority{
  HIGH,
  MEDIUM,
  LOW,
}

export interface Props{
  title:string;
  content:string;
  priority:Priority;
  assignee?:string;
  resolved:boolean;
}

export const ToDoItem:FC<Props> = ({title,content,priority,assignee,resolved}) =>{
const color = resolved ? '' : 
      priority === Priority.HIGH ? 'is-danger' :
      priority === Priority.MEDIUM ? 'is-warning' :
      priority === Priority.LOW ? 'is-info':'is-primary';

      return(
        <article className={`message ${color}`}>
          <div className="message-header">
            <p>{title}</p>
            <span>
              <FontAwesomeIcon  icon={faList} className="is-clickable mr-l"/>
              <FontAwesomeIcon  icon={faTrashCan} className="is-clickable"/>
            </span>
          </div>
          <div className="message-body">
            <div>
              {content}
            </div>
            <div className="has-text-right">
              {
                assignee!==undefined 
                ? <span className="has-text-grey-light is-size-7">{`assignee to @${assignee}`}</span>
                : null
              }
            </div>
          </div>
        </article>
      );
      
}