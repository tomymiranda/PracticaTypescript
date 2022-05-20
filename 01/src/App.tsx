import React from 'react'
import TiposBasicos from '../src/typescript/TiposBasicos'
import Contador from './components/Contador';
import ContadorConHook from './components/ContadorConHook';
import Login from './components/Login';
import Usuarios from './components/Usuarios';
import Funciones from './typescript/Funciones';
import ObjetosLiterales from './typescript/ObjetosLiterales';


const App = () => {
  return (
    <div className='mt-2'>
      <h1>Titulo</h1>
      <hr></hr>
      {/*<TiposBasicos/>*/}
      {/*<ObjetosLiterales/>*/}
      {/*<Funciones/>*/}
      {/*<Contador/> */}
      {/*<ContadorConHook/>*/}
      {/*<Login/>*/}
      <Usuarios/>
    </div>
      
  )
}

export default App;

