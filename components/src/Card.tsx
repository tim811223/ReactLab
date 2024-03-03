/* 這邊產生共用Card 的component */

import {FC} from 'react';

export interface Props{
  image:string;
  name:string;
  description:string;
};

export const Card :FC<Props> = ({image,name,description}) => {

  const Style = {border:'1px solid red'};

  return(
    <div className='card'>
      <div className='card-image'>
        <img src={image}  style={Style}></img>
      </div>
      <div className='card-content'>
        <h3 className='title is-3'>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};


