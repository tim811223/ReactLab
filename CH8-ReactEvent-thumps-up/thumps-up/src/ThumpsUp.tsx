import { faThumbsDown, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const ThumpsUp = ()=>{
  const [likes,setLikes] = useState<number>(0);  //(function Component方法)設定一個likes的變數,並且設定setLikes可以變更此變數,並且設定預設為0 
  return (
    <>
      <button className="button is-info" onClick={()=> setLikes(likes+1)}>
        <span className="icon">
          <FontAwesomeIcon icon={faThumbsUp} />
        </span>
        <span>{likes}</span>
      </button>
    </>
  );
}