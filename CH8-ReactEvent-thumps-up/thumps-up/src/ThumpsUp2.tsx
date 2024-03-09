/*
照檔案要以 Class Component方法呈現
*/
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component, ReactNode } from "react";

interface Props{

}

interface State{
  likes:number;
}

export class ThumpsUp2 extends Component<Props,State>{
  constructor(props:Props){
    super(props);

    this.state={
      likes:0
    };
  }

  handleLikes = () => {
    this.setState(prevState => ({likes:prevState.likes+1}));
  }

  render() {
   return(
    <button className="button is-info" onClick={this.handleLikes}>
      <span className="icon">
        <FontAwesomeIcon icon={faThumbsUp} />
      </span>
      <span>{this.state.likes}</span>
    </button>
   ); 
  }
}