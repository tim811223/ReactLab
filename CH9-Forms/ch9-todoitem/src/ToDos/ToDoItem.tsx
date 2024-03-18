import { faL, faList, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useState } from "react";
import { Editor,TodoItemModel as EditorItemModel } from "./Editor";
import { TodoItemModel } from "./utils/getTodoItems";

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
  updateTodo:(id:string,update:Partial<TodoItemModel>) => void;
  deleteTodo:(id:string) => void;
}

export const ToDoItem:FC<Props> = ({id,title,content,priority,assignee,resolved,updateTodo,deleteTodo}) =>{
const [editing,serEditing] = useState<boolean>(false);
const color = resolved ? '' : 
      priority === Priority.HIGH ? 'is-danger' :
      priority === Priority.MEDIUM ? 'is-warning' :
      priority === Priority.LOW ? 'is-info':'is-primary';
      
      const handleEditClick = () => serEditing(true);
      const handleSaveClick = (todo:EditorItemModel) => {updateTodo(id,todo);serEditing(false);};
      const handleCancelClick = () => serEditing(false);
      const deleteTodos = () => deleteTodo(id);

      return(
        // 如果editing為true,則顯示Editor component,否則顯示article(這component自己的內容)
        editing 
        ? <Editor {...{todo:{title,content,priority,assignee,resolved}}} onSave={handleSaveClick} onCancle={handleCancelClick}/>
        : <article className={`message ${color}`}>
          <div className="message-header">
            <p>{title}</p>
            <span>
              <FontAwesomeIcon  icon={faList} className="is-clickable mr-l" onClick={handleEditClick}/>
              <FontAwesomeIcon  icon={faTrashCan} className="is-clickable" onClick={deleteTodos}/>
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