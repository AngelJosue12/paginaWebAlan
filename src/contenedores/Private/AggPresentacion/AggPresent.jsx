import React, { useState } from 'react';
import { Link } from "react-router-dom";



export default function AggPresent() {
    const [nombreCategoria, setNombreCategoria] = useState('');

    function validarFormulario() {
        const nombreCategoriaRegex = /^[a-zA-Z\s]+$/;

        if (!nombreCategoriaRegex.test(nombreCategoria.trim())) {
          alert('Por favor, ingrese un nombre de producto válido (solo letras y espacios).');
          return false;
        }
        return true;
      }
      

      function registrarCategoria(e) {
        e.preventDefault();
    
        if (!validarFormulario()) {
          return;
        }
    
        const data = {
            nombrePresentacion: nombreCategoria.trim()
        };
    
        fetch('https://api-proyecto-main.vercel.app/api/presentacion', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Hubo un error al registrar la presentacion.');
          }
          alert('Presentacion registrada correctamente.');
          setNombreCategoria('');
        })
        .catch(error => {
          alert(error.message);
        });
      }


  return (
    <div className='login-container'>
    <div className='login-info-container'>
        <h1 className='title'>Registro de Presentacion</h1>
          <form className='inputs-container'   onSubmit={registrarCategoria}>
                <input class="input" type="text" placeholder="Nombre de la Presentacion" value={nombreCategoria} onChange={(e) => setNombreCategoria(e.target.value)}  />   

                <button  type="submit" class="btn"  >Registrar</button>        
          </form>
          <p> <span class="span"><Link to="/TblPresentacion">Atras</Link></span></p>
    </div>
    <img class="image-container"  src={require("../../../assets/log.png")} alt=""/>
</div>
  )
}
