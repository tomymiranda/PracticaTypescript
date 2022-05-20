import React from 'react'
import TiposBasicos from '../src/typescript/TiposBasicos'
import Contador from './components/Contador';
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
      <Contador/>
    </div>
      
  )
}

export default App;

