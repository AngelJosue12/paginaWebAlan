import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './AgregarProducto.css';

export default function AgregarProducto() {

    const [nombreProducto, setNombreProducto] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [disponibilidad, setDisponibilidad] = useState('');
  const [categoria, setCategoria] = useState('');
  const [presentacion, setPresentacion] = useState('');
  const [imagen, setImagen] = useState(null);
  const [categorias, setCategorias] = useState([]);
  const [presentaciones, setPresentaciones] = useState([]);
  const [, setError] = useState('');

  useEffect(() => {
    // Obtiene las categorías disponibles al cargar el componente
    axios.get('https://api-proyecto-main.vercel.app/api/categorias')
      .then(res => {
        setCategorias(res.data);
      })
      .catch(err => console.log(err));

    // Obtiene las presentaciones disponibles al cargar el componente
    axios.get('https://api-proyecto-main.vercel.app/api/presentacion')
      .then(res => {
        setPresentaciones(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    if (nombreProducto.trim() === '' || descripcion.trim() === '' || precio < 0 || disponibilidad < 0) {
        setError('Todos los campos son requeridos y el precio y la disponibilidad deben ser números positivos');
        return;
      } else {
        setError('');
      }
  
   

    
      
   

    const formData = new FormData();
    formData.append('Imagen', imagen);
    formData.append('nombreProducto', nombreProducto);
    formData.append('descripcion', descripcion);
    formData.append('precio', precio);
    formData.append('disponibilidad', disponibilidad);
    formData.append('nombreCategoria', categoria);
    formData.append('nombrePresentacion', presentacion);

    axios.post('https://sein.onrender.com/api/productsImage', formData)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }


  return (
    <div className='login-container'>
    <div className='login-info-container'>
        <h1 className='title'>Registro de Productos</h1>
        <br></br>
          <form className='inputs-container' onSubmit={onSubmit} >
                <input class="input" type="text" placeholder="Nombre producto"  id="nombreProducto" value={nombreProducto} onChange={(e) => setNombreProducto(e.target.value)}/>

                <input class="input" type="text" placeholder="descripcion del producto" i id="descripcion"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}/>

                 <input class="input"  placeholder="precio del producto"  type="number"
          id="precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}/>


                <input class="input"  placeholder="disponibilidad"  type="number"
          id="disponibilidad"
          value={disponibilidad}
          onChange={(e) => setDisponibilidad(e.target.value)}/>

                <div>
        <label htmlFor="categoria">Categoría:</label>
        <select
          id="categoria"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="">Selecciona una categoría</option>
          {categorias.map((categoria) => (
            <option key={categoria._id} value={categoria._id}>{categoria.nombreCategoria}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="presentacion">Presentación:</label>
        <select
          id="presentacion"
          value={presentacion}
          onChange={(e) => setPresentacion(e.target.value)}
        >
          <option value="">Selecciona una  presentación</option>
      {presentaciones.map((presentacion) => (
        <option key={presentacion._id} value={presentacion._id}>{presentacion.nombrePresentacion}</option>
      ))}
    </select>
  </div>

  <div>
    <label htmlFor="imagen">Imagen:</label>
    <input
      type="file"
      id="imagen"
      onChange={(e) => setImagen(e.target.files[0])}
    />
  </div>
               
                <button  type="submit" class="btn"  >Registrar</button>
               
          </form>
          <p> <span class="span"><Link to="/TblProductos">Atras</Link></span></p>
    </div>
    <img class="image-container"  src={require("../../../assets/log.png")} alt=""/>
</div>
  )
}
