import React, { useEffect } from 'react'
import {reqResApi} from '../api/reqRes'
import { ReqResListado, DataUsuarios } from "../interfaces/reqRes";

const Usuarios = () => {
    const [usuariosDelSistema, setUsuarios] = React.useState<DataUsuarios[]>([]);

    useEffect(() => {
      //llamado a la API
        reqResApi.get<ReqResListado>('/users').then(response => {
            console.log(response.data.data);
            setUsuarios(response.data.data);

        }).catch(console.log);
     
    }, [])
    
    const cargarUsuarios = ({id,first_name,last_name,email,avatar}: DataUsuarios) => {
        return (
          <tr key={id.toString()}>
            <td>
                <img src={avatar} alt={first_name} className="rounded-circle" width="50" />
            </td>
            <td>{first_name}{last_name}</td>
            <td>{email}</td>
          </tr>
        );
    }

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
          <tbody>{usuariosDelSistema.map(cargarUsuarios)}</tbody>
        </table>
      </>
    );
}

export default Usuarios