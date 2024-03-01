import {Card} from './Card';

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
          <div className='column is-3'><Card image='/P1.png' name='Anya' description='ttt123'/></div>
          <div className='column is-3'><Card image='/P2.png' name='Loid' description='ttt456'/></div>
          <div className='column is-3'><Card image='/P3.png' name='Yor' description='ttt789'/> </div>
        </div>
      </div>
    </div>
  );
};