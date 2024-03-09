import { faThumbsDown, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const ThumpsDown = ()=>{
  const [dislikes,setdislikes] = useState<number>(0);  
  return (
    <>
        <button className="button is-danger" onClick={()=> setdislikes(dislikes+1)}>
          <span className="icon">
            <FontAwesomeIcon icon={faThumbsDown} />
          </span>
          <span>{dislikes}</span>
        </button>
    </>
  );
}