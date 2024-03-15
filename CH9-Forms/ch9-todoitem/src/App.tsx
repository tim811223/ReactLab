import 'bulma/css/bulma-rtl.min.css';
import { useState } from 'react'
import { Editor } from './ToDos/Editor'
import { ToDoItem } from './ToDos/ToDoItem';

function App() {
  ///設定預設值,傳入Editor component
  const todo={
    title:'title',
    content:'content',
    priority:2,
    assignee:'chris',
    resolved:false
  };
  return (
    <>
      {/* <Editor {...todo}/> */}
      <ToDoItem {...todo}/>
    </>
  )
}

export default App
