import { useState, useEffect } from "react";
import axios from "axios";
import "./Ver.css";
import { Link } from "react-router-dom";


export default function VerProductos() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://api-proyecto-main.vercel.app/api/productos")
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  const handleEliminarUsuario = (id) => {
    const confirmacion = window.confirm("¿Estás seguro que deseas eliminar el Productoo?");
    if (confirmacion) {
      axios.delete(`https://api-proyecto-main.vercel.app/api/productos/${id}`)
        .then(() => {
          const newUsuarios = products.filter(products => products._id !== id);
          setProducts(newUsuarios);
        })
        .catch((error) => console.log(error));
    }
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
       <section class="products" id="products">
    <h1 class="heading"> productos <span> nuevos </span> </h1>
    
    <button variant="primary"  class="btn" ><Link to="/RegistrarProducto">Agregar Producto</Link>    </button>
    <div class="swiper product-slider">
          {products.map((product) => (
        <div class="swiper-wrapper">
           
       
          
          <div class="swiper-slide box">
           
                <img src={product.Imagen} alt=""/>
                <h3>{product.nombreProducto}</h3>
                <h3>descripcion: {product.descripcion}</h3>
                <div class="price">precio: ${product.precio}</div>
                <div class="price">disponibilidad: {product.disponibilidad}</div>
                <div class="price">id Presentacion: {product.nombrePresentacion}</div>
            </div>
            <button style={deleteButtonStyle} onClick={() => handleEliminarUsuario(product._id)}>Eliminar</button>
        </div>
          ))}
    </div>
  </section>
  
  )
}
