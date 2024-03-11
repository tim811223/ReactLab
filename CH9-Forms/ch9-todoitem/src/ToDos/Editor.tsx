import { FC, useRef } from "react";

export const Editor : FC =()=> {
  const titleRef = useRef<HTMLInputElement>(null); //新增一個參數來傳送title的內容
  return(
    <div className="box">
      <div className="field">
        <div className="control">
          {/* 使用ref來綁定html物件與參數titleRef */}
          <input ref={titleRef} type="text" className="input" placeholder="title" /> 
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
                <button className="button is-link" onClick={()=>console.log(titleRef)}> Save </button>
                <button className="button is-link is-light"> Cancel </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}