import React from 'react'
//importamos sobre routes DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//importamos las paginas publicas
import HomePublic from '../pages/Public/HomePublic.jsx';
import Login from '../pages/Public/Login.jsx';
import RegistroUsuarios from '../pages/Public/RegistroUsuarios.jsx';

//importamos las paginas del lado cliente
import HomeCliente from '../pages/Client/HomeCliente.jsx';

//importamos del lado administrador
import HomeAdmin from '../pages/Private/HomeAdmin.jsx';

//tablas \
import TblUsuarios from '../pages/Private/Tablas/Tbl_Usuarios.jsx';
import TblProductos from '../pages/Private/Tablas/Tbl_Productos.jsx';
import TblCategorias from '../pages/Private/Tablas/Tbl_Categorias.jsx';
import TblPresentacion from '../pages/Private/Tablas/Tbl_Presentacion.jsx';

//registro
import RCategorias from '../pages/Private/Registro/R_Categorias.jsx';
import RPresentacion from '../pages/Private/Registro/R_Presentacion.jsx';
import RProductos from '../pages/Private/Registro/R_Productos.jsx';

//actualizar user
import ActualizarUsuario from '../contenedores/Private/EditarUsuario/EditarUsuario.jsx';

//em caso de que ingrese otro enlace que no sea las correpiendtes
import Found from '../pages/Found.js';

export default function AppRoutes() {
  return (
    <div>
      <Router>
          <Routes>

            {/*LADO HOME PUBLIC */}
              <Route exact path="/" element={<HomePublic/>} />
              <Route exact path="/Login" element={<Login/>} />
              <Route exact path="/RegistroUsuarios" element={<RegistroUsuarios/>} />

                {/*LADO HOME CLIENTE */}
              <Route exact path="/HomeCliente" element={<HomeCliente/>} />
            
                  { /*LADO HOME ADMINISTRADOR */}
                <Route exact path="/HomeAdmin" element={<HomeAdmin/>} />

                <Route exact path="/TblUsuarios" element={<TblUsuarios/>} />
                <Route exact path="/TblProductos" element={<TblProductos/>} />
                <Route exact path="/TblCategorias" element={<TblCategorias/>} />
                <Route exact path="/TblPresentacion" element={<TblPresentacion/>} />


                <Route exact path="/RCategorias" element={<RCategorias/>} />
                <Route exact path="/RPresentacion" element={<RPresentacion/>} />
                <Route exact path="/RProductos" element={<RProductos/>} />


                <Route exact path="/ActualizarUsuario" element={<ActualizarUsuario/>} />


                <Route exact path="/*" element={<Found/>} />
            
          </Routes>

      </Router>

    </div>
  )
}
