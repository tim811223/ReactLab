/* 這邊產生共用Card 的component */

import {FC} from 'react';
// import './Card.scss';
import styles from './BorderedImage.module.css';

export interface Props{
  image:string;
  name:string;
  description:string;
};

export const Card :FC<Props> = ({image,name,description}) => {
  return(
    <div className='card'>
      <div className='card-image'>
        <img src={image} className={styles.borderedImage}></img>
      </div>
      <div className='card-content'>
        <h3 className='title is-3'>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};


