import React from 'react'
import ReactDOM from 'react-dom/client'
/* import App from './App.tsx' //當不再用class export後就不可以使用這方法,因為不是default*/
import {App} from './App.tsx'

/* 加入css framework */
import 'bulma/css/bulma.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
