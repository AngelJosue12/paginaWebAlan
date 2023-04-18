import React from 'react'
import './Login.css';
import { useState, useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";


export const Logiin = () => {

    const [users, setUsers] = useState([]);
    const [, setIsLoading] = useState(false);
    const [, setServerError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);
    
        fetch("https://api-proyecto-main.vercel.app/api/usuarios")
          .then((response) => response.json())
          .then((data) => {
            setUsers(data);
            setIsLoading(false);
          })
          .catch((error) => {
            console.log(error);
            setIsLoading(false);
            setServerError("Error al obtener los usuarios.");
          });
      }, []);

      const handleLogin = () => {
        const user = users.find((u) => u.correo === email && u.pwd === password);
        if (user) {
          const tipoUser = user.nombreTipoUser[0].nombreTipoUser;
          if (tipoUser === "Administrador") {
            navigate('/HomeAdmin');
          } else {
            setLoginError("No tienes permisos para iniciar sesión.");
          } if (tipoUser === "Cliente") {
            navigate('/HomeCliente');
          }
        } else {
          setLoginError("Correo electrónico o contraseña incorrectos.");
        }
      };

  return (
    <div className='login-container'>
            <div className='login-info-container'>
                <h1 className='title'>Log in with</h1>
                <div className='social-login'>
                        <div className='social-login-element'>
                            <img src={require("../../../assets/google.png")} alt="google-image"/>
                                <span>Google</span>
                        </div>

                        <div className='social-login-element'>
                            <img src={require("../../../assets/facebook.png")} alt="facebook-image"/>
                                <span>Facebook</span>
                        </div>             
                </div>
                  <p>or</p>
                  <form className='inputs-container'>
                        <input class="input" type="email" placeholder="Correo electronico"  value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <input class="input" type="password" placeholder="Password"  value={password}  onChange={(e) => setPassword(e.target.value)}/>
                       
                        <button type="button" class="btn" onClick={handleLogin} >login</button>
                        <p>¿Olvidaste tu password? <span class="span"><Link to="/RecuperarPassword">Out Up</Link></span></p> 
                        <p>¿No tienes cuenta? <span class="span"><Link to="/RegistroUsuarios">Sign Up</Link></span></p>
                        {loginError && <p style={{color:"#5b0808",fontWeight:"bold"}}>{loginError}</p>}
                  </form>
            </div>
            <img class="image-container"  src={require("../../../assets/log.png")} alt=""/>
    </div>
  )
}
