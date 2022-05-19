import React from 'react'
import { json } from 'stream/consumers'

const ObjetosLiterales = () => {
  
  const persona = {
    nombre: 'Juan',
    edad: 23,
    direccion: {
        calle: 'Calle falsa 123',
        pais: 'EEUU'
    }
  }
  
    return (
      <div>
        <h3>Objeto literal</h3>
        <code>
            {/*el replacer[donde va null] sirve  */}
          <pre>{JSON.stringify(persona,null,2)}</pre>
        </code>
      </div>
    );
}
export default ObjetosLiterales