import { faList } from "@fortawesome/free-solid-svg-icons";
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

export const ToDoItem:FC<Props> = ({title,content,priority,resolved}) =>{
const color = resolved ? '' : 
      priority === Priority.HIGH ? 'is-danger' :
      priority === Priority.MEDIUM ? 'is-warning' :
      priority === Priority.LOW ? 'is-info':'is-primary';

      return(
        <article className={`message ${color}`}>
          <div className="message-header">
            <p>{title}</p>
            <span>
              <FontAwesomeIcon  icon={faList} className="is-clickable"/>
              <button className="delete" aria-label="delete"></button>
            </span>
          </div>
          <div className="message-body">
            {content}
          </div>
        </article>
      );
      
}