import { FC, useState } from "react";
import { Props as ToDoItemProps, Priority } from "./ToDoItem";
import teammembers from "./team-members.json";

//這表示Props的內容在ToDoItemProps內都有,並且可以再加上其他的內容
interface Props extends ToDoItemProps{
  onCancle:()=>void;
}

export const Editor : FC<Props> = props => { ///預設值改為由model帶入,model<Props>並把用props參數來接收傳入的預設內容
  const [title,setTitle] = useState<string>(props.title);
  const [priority,setPriority] = useState<Priority>(props.priority);
  const [assignee,setAssignee] = useState<string>(props.assignee ?? '');
  const [content,setContent] = useState<string>(props.content);
  const [resolved,setResolved] = useState<boolean>(props.resolved);

  const handleTitleChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {setTitle(e.target.value);};
  const handlePriorityChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {setPriority(parseInt(e.target.value));};
  const handleAssigneeChange:React.ChangeEventHandler<HTMLSelectElement> = (e) => {setAssignee(e.target.value);};
  const handlecontentChange:React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {setContent(e.target.value);};
  const handleResolvedChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {setResolved(!resolved);};
  const handleSaveClick =() =>{
    props.updateTodo(props.id,{title,priority,assignee,content,resolved});
    props.onCancle();
  };
  
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
              {
                Object.entries(Priority)
                .filter(([k,v]) => isNaN(k as any))
                .map(([k,v]) => 
                  <label className="radio" key={k}>
                    <input type="radio" checked={priority===v} value={v} onChange={handlePriorityChange}/> {" " + k} 
                  </label>
                )
              }
            </div>
          </div>
        </div>
        <div className="column has-text-right">
          <div className="field">
            <div className="control">
              <div className="select">
                <select value={assignee} onChange={handleAssigneeChange}>
                  <option value="">assign to</option>
                  {teammembers.map(m=><option value={m} key={m}>{m}</option>)}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <textarea className="textarea" placeholder="content" value={content} onChange={handlecontentChange}/>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <div className="field">
            <div className="control">
              <label className="checkbox"><input type="checkbox" checked={resolved} onChange={handleResolvedChange} /> Resolved </label>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="field is-grouped is-grouped-right">
            <div className="control">
              <div className="buttons has-addons">
                <button className="button is-link" onClick={handleSaveClick}> Save </button>
                <button className="button is-link is-light" onClick={props.onCancle}> Cancel </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}