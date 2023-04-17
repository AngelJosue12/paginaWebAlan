import { useState, useEffect } from "react";
import axios from "axios";
import "./VerProductos.css";

export default function VerProductos() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://api-proyecto-main.vercel.app/api/productos")
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  const handleAddToCart = (product) => {
    // Aquí puedes implementar la lógica para agregar un producto al carrito
    console.log("Agregaste un producto al carrito:", product);
  };

  return ( 
       <section class="products" id="products">
    <h1 class="heading"> productos <span> nuevos </span> </h1>
    <div class="swiper product-slider">
          {products.map((product) => (
        <div class="swiper-wrapper">
           
       
          
          <div class="swiper-slide box">
           
                <img src={product.Imagen} alt=""/>
                <h3>{product.nombreProducto}</h3>
                <h3>descripcion: {product.descripcion}</h3>
                <div class="price">precio: ${product.precio}</div>
                <div class="price">disponibilidad: {product.disponibilidad}</div>

                <button
                variant="primary"
                onClick={() => handleAddToCart(product)}  class="btn"
              > 
                Agregar al carrito
              </button>
               
            </div>
           
        </div>
          ))}
    </div>
  </section>
  
  )
}
