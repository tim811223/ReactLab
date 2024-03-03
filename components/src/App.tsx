// import Anya from './Anya';

// function App() {
//   return (
//     <>
//     <Anya/>
//     </>
//   )
// }

// export default App
////////////////////////////////////////////////////////////
// import { Anya } from './Anya';

// export const App = () => {
//   return (
//     <>
//     <Anya/>
//     </>
//   )
// };
////////////////////////////////////////////////////////////
import { SpyFamily } from './SpyFamily';
import roles from './roles.json';

export const App = () => {
  return (
    <>
    <SpyFamily roles={roles}/>
    </>
  )
};

