import 'bulma/css/bulma-rtl.min.css';
import { useState } from 'react'
import { Editor } from './ToDos/Editor'
import { ToDoItem } from './ToDos/ToDoItem';
import { TodoList } from './ToDos/ToDoList';

function App() {
  // ///設定預設值,傳入Editor component
  // const todo={
  //   id:'7869-3352-970888965',
  //   title:'title',
  //   content:'content',
  //   priority:2,
  //   assignee:'chris',
  //   resolved:false
  // };
  return (
    <>
      {/* <Editor {...todo}/> */}
      {/* <ToDoItem {...todo}/> */}
      <TodoList/>
    </>
  )
}

export default App
