import React, { useEffect, useState } from "react";
import axios from "axios";

function ListaPresentacion() {

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios.get("https://api-proyecto-main.vercel.app/api/presentacion").then((response) => {
      setUsuarios(response.data);
    });
  }, []);

  const handleEliminarUsuario = (id) => {
    const confirmacion = window.confirm("¿Estás seguro que deseas eliminar la presentacioon?");
    if (confirmacion) {
      axios.delete(`https://api-proyecto-main.vercel.app/api/presentacion/${id}`)
        .then(() => {
          const newUsuarios = usuarios.filter(usuario => usuario._id !== id);
          setUsuarios(newUsuarios);
        })
        .catch((error) => console.log(error));
    }
  };

  const tableStyle = {
    borderCollapse: "collapse",
    width: "50%",
    
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
            <th style={thStyle}>Nombre Presentacion</th>
          
            <th style={thStyle}></th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario._id}>
              <td style={tdStyle}>{usuario.nombrePresentacion}</td>
             
              <td style={tdStyle}>
               
                <button style={deleteButtonStyle} onClick={() => handleEliminarUsuario(usuario._id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaPresentacion;
