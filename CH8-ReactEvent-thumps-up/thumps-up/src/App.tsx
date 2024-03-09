import 'bulma/css/bulma.min.css'
import { ThumpsUp } from './ThumpsUp'
import { ThumpsDown } from './ThumpsDown'
import { ThumpsUp2 } from './ThumpsUp2'

export const App =()=>{

  return(
    <div className='section'>
      <div className='container'>
        
        (function Component方法)
        <br/>
        <ThumpsUp/>
        <ThumpsDown/>

        {/*         
        <br/>
        <hr/>

        (class Component方法)
        <br/>
        <ThumpsUp2/>
         */}
      
      </div>
    </div>
  )
};