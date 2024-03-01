import {Anya} from './Anya';
import {Loid} from './Loid';
import {Yor} from './Yor';

export const SpyFamily = () => {
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
          <div className='column is-3'><Anya/></div>
          <div className='column is-3'><Loid/></div>
          <div className='column is-3'><Yor/> </div>
        </div>
      </div>
    </div>
  );
};