import { FC, useState } from "react";
import { ToDoItem } from "./ToDoItem";
import { TodoItemModel, getTodoItem } from "./utils/getTodoItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Editor,TodoItemModel as NewItemModel } from "./Editor";
import {v4 as uuid} from 'uuid';


const items = getTodoItem(1);
export const TodoList:FC=()=>{
  const [todos, setTodos] = useState<TodoItemModel[]>(items);
  const [creating, setCreating] = useState<boolean>(false);

  
  const createTodo = (newTodo:TodoItemModel) => {
    setTodos([...todos,newTodo])
  };
  const updateTodo = (id:string,update:Partial<TodoItemModel>) => {
    setTodos(todos.map(i =>i.id === id ? {...i,...update}:i))
  };
  const deleteTodo = (id:string)=>{
    setTodos(todos.filter(i=>i.id !== id));
  };

  const hamdleCreateTodo = (todo:NewItemModel) =>{
    const t= Date.now();
    createTodo({id:uuid(),createdAt:t,lastModifiedAt:t,...todo});
    setCreating(false);
  };

    return (
      <>
        <div className="column is-multiline">
          {todos.map(i => 
            <div className="column is-2" key={i.id}>
              <ToDoItem {...i} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
            </div>)}
        </div>
        {creating && <Editor onSave={hamdleCreateTodo} onCancle={()=>setCreating(false)}/>}
        <div>
          <button className="button is-rounded is-primary is-medium" onClick={()=>setCreating(true)}>
            <span className="icon">
              {/* 新增按鈕 */}
              <FontAwesomeIcon icon={faPenToSquare} size="xl"/>
            </span>
          </button>
        </div>
      </>
    );
}
