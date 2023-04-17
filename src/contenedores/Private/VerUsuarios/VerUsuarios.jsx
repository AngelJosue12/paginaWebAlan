import React, { useEffect, useState } from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";
function ListaUsuarios() {

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios.get("https://api-proyecto-main.vercel.app/api/usuarios").then((response) => {
      setUsuarios(response.data);
    });
  }, []);
  const navigate = useNavigate();

  const handleEliminarUsuario = (id) => {
    const confirmacion = window.confirm("¿Estás seguro que deseas eliminar al usuario?");
    if (confirmacion) {
      axios.delete(`https://api-proyecto-main.vercel.app/api/usuarios/${id}`)
        .then(() => {
          const newUsuarios = usuarios.filter(usuario => usuario._id !== id);
          setUsuarios(newUsuarios);
        })
        .catch((error) => console.log(error));
    }
  };

  const tableStyle = {
    borderCollapse: "collapse",
    width: "100%",
  };

  const thStyle = {
    padding: "8px",
    textAlign: "left",
    borderBottom: "1px solid #ddd",
    backgroundColor: "#f2f2f2",
    color: "#333",
    fontWeight: "bold",
    textTransform: "uppercase",
  };

  const tdStyle = {
    padding: "8px",
    textAlign: "left",
    borderBottom: "1px solid #ddd",
    color: "#555",
  };

  const buttonStyle = {
    padding: "6px 12px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginRight: "4px",
  };

  const editButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#2196F3",
  };

  const deleteButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#f44336",
  };

  return (
    <div>
      <br />
      <br />

      {/*      <Link to="/RegAdmin" style={buttonStyle1}>Registrar Administrador</Link>*/}
      <br />
      <br />
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Nombre</th>
            <th style={thStyle}>Apellido paterno</th>
            <th style={thStyle}>Apellido materno</th>
            <th style={thStyle}>Correo electrónico</th>
            <th style={thStyle}>Password</th>
            <th style={thStyle}>Teléfono</th>
            <th style={thStyle}>Tipo de usuario</th>
            <th style={thStyle}></th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario._id}>
              <td style={tdStyle}>{usuario.nombre}</td>
              <td style={tdStyle}>{usuario.apellidopa}</td>
              <td style={tdStyle}>{usuario.apellidoma}</td>
              <td style={tdStyle}>{usuario.correo}</td>
              <td style={tdStyle}>{usuario.pwd}</td>
              <td style={tdStyle}>{usuario.telefono}</td>
              <td style={tdStyle}>{usuario.nombreTipoUser[0].nombreTipoUser}</td>  
              <td style={tdStyle}>
                <button style={editButtonStyle} type="button" onClick={() => navigate(`/ActualizarUsuario?id=${usuario._id}`)}>Editar</button>
                <button style={deleteButtonStyle} onClick={() => handleEliminarUsuario(usuario._id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaUsuarios;
