/*
照檔案要以 Class Component方法呈現
*/
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component, ReactNode } from "react";

interface Props{

}

interface State{
  
}

export class ThumpsUp2 extends Component<Props,State>{
  constructor(props:Props){
    super(props)
  }

  render() {
   return(
    <button className="button is-info" >
      <span className="icon">
        <FontAwesomeIcon icon={faThumbsUp} />
      </span>
      <span>{0}</span>
    </button>
   ); 
  }
}