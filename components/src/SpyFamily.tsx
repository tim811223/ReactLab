import { FC } from 'react';
import {Card,Props as CardProps} from './Card';
import { Yor } from './Yor';

export type Role = CardProps; //沿用存在的Modle給Role使用

interface Props{
  roles:Role[];
}

export const SpyFamily :FC<Props> = ({roles}) => {
  return (
    /* 6-66 */
    //<Anya/>
    //<Loid/>
    //<Yor/> 

    /* 6-67 
        加上html讓每個card看起來整齊且橫向排列
    */
    <div className='section'>
      <div className='container'>
        <div className='columns'>
          {roles.map(r=><div className='column is-3'><Card {...r}/></div>)}
          
          <div className='column is-3'><Yor /></div>
        </div>
      </div>
    </div>
  );
};