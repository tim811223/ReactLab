
// function Anya() {
//   return (
//     <>
//     <h1>Anya</h1>
//     </>
//   )
// }

// export default Anya

import P1 from '/P1.png';

export const Anya = () => {
  return(
    // <>
    //   <h1>Anya</h1>
    // </>

    /*6-68
      加上 bulma css framework , class 加上: card,card-image,card-content,title is-3 */
    <div className='card'>
      <div className='card-image'>
        {/*以下這種方法表示去public內找圖片*/}
        {/* <img src='/P1.png'></img> */}

        {/*以下這種方法為import圖片*/}
        <img src={P1}></img>
      </div>
      <div className='card-content'>
        <h3 className='title is-3'>Anya</h3>
        <p>ttttttttttttttttttt</p>
      </div>
    </div>

  );
};


