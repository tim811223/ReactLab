import { FC, useState } from "react";
import { ToDoItem } from "./ToDoItem";
import { TodoItemModel, getTodoItem } from "./utils/getTodoItems";


const items = getTodoItem(10);
export const TodoList:FC=()=>{
  const [todos, setTodo] = useState<TodoItemModel[]>(items);

    return (
      <div className="column is-multiline">
        {todos.map(i => 
          <div className="column is-2" key={i.id}>
            <ToDoItem {...i} />
          </div>)}
      </div>
    );

}
