import React, { useState} from "react";
import { Link } from "react-router-dom";


export default function EditarPresentacion() {
    const [nombrePresentacion, setNombreCategoria] = useState('');
    const [error, setError] = useState("");


    function validarFormulario() {
        const nombreCategoriaRegex = /^[a-zA-Z\s]+$/;

        if (!nombreCategoriaRegex.test(nombrePresentacion.trim())) {
          alert('Por favor, ingrese un nombre de producto válido (solo letras y espacios).');
          return false;
        }
        return true;
      }

 
  return (
    <div className='login-container'>
    <div className='login-info-container'>
        <h1 className='title'>Registro de Presentacion</h1>
          <form className='inputs-container'  >
                <input class="input" type="text" placeholder="Nombre de la Presentacion" value={nombrePresentacion} onChange={(e) => setNombreCategoria(e.target.value)}  />   

                <button  type="submit" class="btn"  >Registrar</button>     
                {error && <div style={{color:"#5b0808",fontWeight:"bold"}} className="alert alert-danger" >{error}</div>}   
                <p> <span class="span"><Link to="/TblPresentacion">Atras</Link></span></p>
          </form>
        
    </div>
    <img class="image-container"  src={require("../../../assets/log.png")} alt=""/>
</div>
  )
}
