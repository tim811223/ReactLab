import { FC, useState } from "react";

export const Editor : FC =()=> {
  const [title,setTitle] = useState<string>('');
  const handleTitleChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {setTitle(e.target.value);};
  return(
    <div className="box">
      <div className="field">
        <div className="control">
          <input type="text" className="input" placeholder="title" value={title} onChange={handleTitleChange}/> 
          {/* 也可以省略上面的handleTitleChange (event function) 直接寫在html內 */}
          {/* <input type="text" className="input" placeholder="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>     */}
        </div>
      </div>
      <div className="columns is-vcentered">
        <div className="column">
          <div className="field">
            <div className="control">
              <label className="radio"><input type="radio" /> High </label>
              <label className="radio"><input type="radio" /> Medium </label>
              <label className="radio"><input type="radio" /> Low </label>
            </div>
          </div>
        </div>
        <div className="column has-text-right">
          <div className="field">
            <div className="control">
              <div className="select">
                <select>
                  <option>assign to</option>
                  <option>alax</option>
                  <option>bob</option>
                  <option>chris</option>
                  <option>david</option>
                  <option>ed</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <textarea className="textarea" placeholder="content"/>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <div className="field">
            <div className="control">
              <label className="checkbox"><input type="checkbox"/> Resolved </label>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="field is-grouped is-grouped-right">
            <div className="control">
              <div className="buttons has-addons">
                <button className="button is-link" onClick={()=>console.log(title)}> Save </button>
                <button className="button is-link is-light"> Cancel </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}