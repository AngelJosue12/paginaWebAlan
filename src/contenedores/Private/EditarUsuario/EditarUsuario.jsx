import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function ActualizarUsuario() {
    const [nombre, setNombre] = useState("");
    const [apellidopa, setApellidoPa] = useState("");
    const [apellidoma, setApellidoMa] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [setters, setSetters] = useState({});

    const location = useLocation();
    const navigate = useNavigate();
    const userId = new URLSearchParams(location.search).get("id");
console.log(userId);
    useEffect(() => {
        axios
            .put(`https://api-proyecto-main.vercel.app/api/usuarios/${userId}`)
            .then((response) => {
                const newSetters = {
                    nombre: setNombre,
                    apellidopa: setApellidoPa,
                    apellidoma: setApellidoMa,
                    correo: setCorreo,
                    pwd:setPassword ,
                    telefono: setTelefono,
                };
                setSetters(newSetters);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [userId]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === "password") {
            setPassword(value);
        } else if (name === "confirmPassword") {
            setConfirmPassword(value);
        } else if (setters[name]) { // Si el nombre del setter es válido
            setters[name](value); // Llama a la función de set correspondiente
        }
    };
    const handleUpdate = (event) => {
        event.preventDefault();
        if (
            nombre.trim() === "" ||
            apellidopa.trim() === "" ||
            apellidoma.trim() === "" ||
            correo.trim() === "" ||
            telefono.trim() === "" ||
            password.trim() === "" ||
            confirmPassword.trim() === ""
        ) {
            setError("Todos los campos son obligatorios.");
            return;
        }
        if (password !== confirmPassword) {
            setError("Las contraseñas no coinciden.");
            return;
        }
        axios
            .put(`https://api-proyecto-main.vercel.app/api/usuarios/${userId}`, {
                nombre,
                apellidopa,
                apellidoma,
                correo,
                telefono,
                password,
            })
            .then(() => {
                navigate("/TblUsuarios");
            })
            .catch((error) => {
                console.error(error);
            });
    };
    return (
        <div className='login-container'>
           <div className='login-info-container'>
           <h1 className='title'>Formulario de Registro</h1>
        <br></br>
        <div className='social-login'>
                
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
             <form onSubmit={handleUpdate} className='inputs-container'>
            <div>
                <label htmlFor="nombre">Nombre:</label>
                <input class="input" placeholder="Nombre"
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={nombre}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="apellidopa">Apellido Paterno:</label>
                <input class="input" placeholder="Apellido Paterno"
                    type="text"
                    id="apellidopa"
                    name="apellidopa"
                    value={apellidopa}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="apellidoma">Apellido Materno:</label>
                <input class="input" placeholder="Apellido Materno" 
                    type="text"
                    id="apellidoma"
                    name="apellidoma"
                    value={apellidoma}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="correo">Correo electrónico:</label>
                <input class="input" placeholder="Correo electronico"
                    type="email" 
                    id="correo"
                    name="correo"
                    value={correo}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="telefono">Teléfono:</label>
                <input class="input"  placeholder="telefono"
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={telefono}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="password">Contraseña:</label>
                <input class="input"  placeholder="Password" 
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
                <input class="input" placeholder="Confirmar Password"
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <button type="submit" class="btn">Actualizar Usuario</button>
            </div>
            {error && <div style={{color:"#5b0808",fontWeight:"bold"}} className="alert alert-danger" >{error}</div>}
        </form>
           </div>
           <img class="image-container"  src={require("../../../assets/log.png")} alt=""/>
        </div>

    );}