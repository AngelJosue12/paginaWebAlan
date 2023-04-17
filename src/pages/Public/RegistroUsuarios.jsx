import React from 'react';
import NavBar from '../../components/Public/NavBar/NavBar';
import { RegistroUsuarioss } from '../../contenedores/Public/RegistroUsuarios/RegistroUsuarios.jsx';
export default function RegistroUsuarios() {
  return (
    <div>
      <NavBar/>
      <RegistroUsuarioss/>
    </div>
    
  )
}