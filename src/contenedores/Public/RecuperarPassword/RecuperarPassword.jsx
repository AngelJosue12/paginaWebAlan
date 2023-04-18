import React, { useState } from 'react'
import { Link } from "react-router-dom";

export default function RecuperarPasswords() {
  const [correo, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleRecuperar = async () => {
    try {
      const response = await fetch('https://api-alan-ah5318740-gmailcom.vercel.app/api/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ correo:correo })
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message);
      }

      setMessage('Se ha enviado un correo electrónico con instrucciones para restablecer tu contraseña.');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='login-container'>
      <div className='login-info-container'>
        <h1 className='title'>Recuperar Password</h1>

        <form className='inputs-container'>
          <label>Ingrese su correo</label>
          <input className="input" type="email" placeholder="Correo electrónico" value={correo} onChange={(event) => setEmail(event.target.value)} />

          <button type="button" className="btn" onClick={handleRecuperar}>Recuperar</button>

          <p>¿Atras? <span className="span"><Link to="/Login">Sign Up</Link></span></p>

          {message && <p className="message" style={{color:"#008000",fontWeight:"bold"}}>{message}</p>}
          {error && <p className="error" style={{color:"#5b0808",fontWeight:"bold"}}>{error}</p>}
        </form>
      </div>
      <img className="image-container"  src={require("../../../assets/log.png")} alt=""/>
    </div>
  )
}
