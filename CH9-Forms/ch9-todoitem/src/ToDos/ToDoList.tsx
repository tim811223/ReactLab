import { FC, useState } from "react";
import { ToDoItem } from "./ToDoItem";
import { TodoItemModel, getTodoItem } from "./utils/getTodoItems";


const items = getTodoItem(10);
export const TodoList:FC=()=>{
  const [todos, setTodos] = useState<TodoItemModel[]>(items);
  const updateTodo = (id:string,update:Partial<TodoItemModel>) => {
    setTodos(todos.map(i =>i.id === id ? {...i,...update}:i))

  };

    return (
      <div className="column is-multiline">
        {todos.map(i => 
          <div className="column is-2" key={i.id}>
            <ToDoItem {...i} updateTodo={updateTodo}/>
          </div>)}
      </div>
    );

}
