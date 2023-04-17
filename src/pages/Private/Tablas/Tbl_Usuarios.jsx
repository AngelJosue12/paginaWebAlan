import React from "react";
import NavBarAdmin from '../../../components/Private/NavBarAdmin/NavBarAdmin'
import ListaUsuarios from "../../../contenedores/Private/VerUsuarios/VerUsuarios";
export default function TblUsuarios() {
  return (
    <div>
    <NavBarAdmin/>
    <ListaUsuarios/>
</div>
  )
}
