import React, { useEffect } from 'react'

const Usuarios = () => {
  
    useEffect(() => {
      //llamado a la API
    
     
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