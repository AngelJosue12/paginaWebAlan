import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './RegistrarProducto.css'
import {  useNavigate } from "react-router-dom";


export default function RegistrarProducto() {
    const navigate = useNavigate();

    const [nombreProducto, setNombreProducto] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [disponibilidad, setDisponibilidad] = useState('');
    const [categoria, setCategoria] = useState('');
    const [presentacion, setPresentacion] = useState('');
    const [imagen, setImagen] = useState(null);
    const [categorias, setCategorias] = useState([]);
    const [presentaciones, setPresentaciones] = useState([]);
  
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

     

      function validarFormulario() {
        const nombreProductoRegex = /^[a-zA-Z\s]+$/;

        if (!nombreProductoRegex.test(nombreProducto.trim())) {
          alert('Por favor, ingrese un nombre de producto válido (solo letras y espacios).');
          return false;
        }
      
        if (descripcion.trim() === '') {
          alert('Por favor, ingrese la descripción del producto.');
          return false;
        }
        if (precio.trim() === '') {
         alert( 'El precio del producto es obligatorio');
            return false;
          }
          
          if (isNaN(precio)) {
           alert( 'El precio debe ser un número');
            return false;
          }
          
          if (precio < 0) {
        alert( 'El precio no puede ser negativo');
            return false;
          }
          
          // Si llegamos hasta aquí, el precio es válido y podemos guardarlo en la base de datos
          // (código para guardar el precio en la base de datos)
       
          
          if (disponibilidad.trim() === '') {
     alert( 'La disponibilidad del producto es obligatoria');
            return false;
          }
          if (isNaN(disponibilidad)) {
            alert( 'La disponibilidad debe ser un número');
            return false;
          }
      
          if (disponibilidad < 0) {
           alert( 'la disponibilidad no puede ser negativo');
            return false;
          }
        
        return true;
      }
      
    /*     function registrarProducto(e) {
        e.preventDefault();

        if (!validarFormulario()) {
            alert( 'responda todo los campos');
            return;
        }
        const formData = new FormData();
        formData.append('nombreProducto', nombreProducto);
        formData.append('descripcion', descripcion);
        formData.append('precio', precio);
        formData.append('disponibilidad', disponibilidad);
        formData.append('categoria', categoria);
        formData.append('presentacion', presentacion);
        formData.append('imagen', imagen);

     axios.post('https://api-proyecto-main.vercel.app/api/productos', formData)
        .then(res => {
            alert('Producto registrado exitosamente');
            setNombreProducto('');
            setDescripcion('');
            setPrecio('');
            setDisponibilidad('');
            setCategoria('');
            setPresentacion('');
            setImagen(null);
        })
        .catch(err => {
            setError('Error al registrar el producto');
            console.log(err);
        });
}*/

function validarImagen(imagen) {
    const tiposImagenes = ['image/jpeg', 'image/png', 'image/gif' , 'image/webp' ];
    if (!tiposImagenes.includes(imagen.type)) {
      alert('Solo se aceptan imágenes (JPG, PNG, GIF).');
      return false;
    }
    return true;
  }
  

const onSubmit = async (e) => {
    e.preventDefault();
    if (!validarFormulario()) {
      alert('Responda todos los campos');
      return;
    }

    if (!imagen || !validarImagen(imagen)) {
        return;
      }

    const formData = new FormData();
    formData.append('Imagen', imagen);
    formData.append('nombreProducto', nombreProducto);
    formData.append('descripcion', descripcion);
    formData.append('precio', precio);
    formData.append('disponibilidad', disponibilidad);
    formData.append('nombreCategoria', categoria);
    formData.append('nombrePresentacion', presentacion);

    try {
        await axios.post('https://sein.onrender.com/api/productsImage', formData);
        alert('Producto registrado exitosamente');
        console.log("REGISTRADOOO");
        setNombreProducto('');
        setDescripcion('');
        setPrecio('');
        setDisponibilidad('');
        setCategoria('');
        setPresentacion('');
        setImagen(null);

        navigate("/HomeAdmin");

      } catch (error) {
        console.log(error);
        alert('Producto registrado exitosamente');
        navigate("/TblProductos");
      }
  };

  

  return (
    <div className='login-container'>
        <div className='login-info-container'>
             <h1 className='title'>Registro de Productos</h1>
                <br></br>
                <br></br>
                <form className='inputs-container'>
                <br></br>
                <br></br>
                <br></br>
                        <input type="text" placeholder='ingrese el nombre del producto' className='input' id="nombreProducto" value={nombreProducto} onChange={(e) => setNombreProducto(e.target.value)}/>
                        <br></br>
                        <input type="text" placeholder='ingrese la descripcion del producto' className='input' id="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/>
                        <br></br>
                        <input type="text" placeholder='ingrese el precio del producto' className='input'  id="precio" value={precio} onChange={(e) => setPrecio(e.target.value)} />
                        <br></br>
                        <input   type="text" placeholder='ingrese la disponibilidad' className='input' id="disponibilidad" value={disponibilidad} onChange={(e) => setDisponibilidad(e.target.value)} />
                        <br></br>
                        
                            <div>
                                    <label htmlFor="categoria">Categoría:</label>
                                    <select id="categoria"className='input' value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                                    <option value="" >Selecciona una categoría</option>
                                    {categorias.map((categoria) => ( <option key={categoria._id} value={categoria._id}>{categoria.nombreCategoria}</option>))}
                                </select>
                        </div>
                            <div>
                            <br></br>
                                <label htmlFor="presentacion">Presentación:</label>
                                <select className='input'  id="presentacion" value={presentacion} onChange={(e) => setPresentacion(e.target.value)}>
                                <option value="">Selecciona una  presentación</option>
                                 {presentaciones.map((presentacion) => (<option key={presentacion._id} value={presentacion._id}>{presentacion.nombrePresentacion}</option> ))}
                                </select>
                        </div>

                            <div>
                            <br></br>
                                <label htmlFor="imagen">Imagen:</label>
                                <input type="file"  id="imagen" onChange={(e) => setImagen(e.target.files[0])} />
                            </div>


                            <button  type="submit" class="btn" onClick={onSubmit} >Registrar</button>
                </form>
                <br></br>
                <br></br>
                <br></br>
                <p> <span class="span"><Link to="/TblProductos">Atras</Link></span></p>
        </div>
        <img class="image-container"  src={require("../../../assets/log.png")} alt=""/>
    </div>
  )
}
