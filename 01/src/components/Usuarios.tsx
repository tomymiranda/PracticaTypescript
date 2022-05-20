import React, { useEffect } from 'react'
import {reqResApi} from '../api/reqRes'
const Usuarios = () => {
  
    useEffect(() => {
      //llamado a la API
        reqResApi.get('/users').then(response => {
            console.log(response);

        }).catch(console.log);
     
    }, [])
    

    return (
    <>
        <h3>Usuarios</h3>
        <table className="table">
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>        
    </>
  )
}

export default Usuarios