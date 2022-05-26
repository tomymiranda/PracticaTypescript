import React from 'react'
import { useState } from 'react';

export const Formulario = () => {
  
    const [formulario, setFormulario] = useState({
      email: "test@gamil.com",
      password: "asd123",
    });

    const onChange = (value: string, campo:string) => {
        setFormulario({
            ...formulario,
            [campo]: value
        })
    }

    return (
      <>
        <h3>Formulario</h3>
        <form>
          <input
            type="text"
            placeholder="email"
            className="form-control"
            value={formulario.email}
            onChange={(e) => onChange(e.target.value, "email")}
          />
          <input
            type="text"
            placeholder="password"
            className="form-control mt-2 mb-2"
            value={formulario.password}
            onChange={(e) => onChange(e.target.value, "password")}
          />
          <code>
              <pre>{JSON.stringify(formulario,null,2)}</pre>
          </code>
        </form>
      </>
    );
}
