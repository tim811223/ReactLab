import 'bulma/css/bulma-rtl.min.css';
import { useState } from 'react'
import { Editor } from './ToDos/Editor'

function App() {
  ///設定預設值,傳入Editor component
  const todo={
    title:'title',
    content:'content',
    priority:0,
    assignee:'chris',
    resolved:false
  };
  return (
    <>
      <Editor {...todo}/>
    </>
  )
}

export default App
