import React, { useState } from 'react';
import { useNavigate,Link } from "react-router-dom";

export const RegistroUsuarioss = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const nombre = form.nombre.value;
        const apellidopa = form.apellidopa.value;
        const apellidoma = form.apellidoma.value;
        const correo = form.correo.value;
        const pwd = form.pwd.value;
        const pwdConfirm = form.pwdConfirm.value;
        const telefono = form.telefono.value;
        const nombreTipoUser = '642b4197d270aa4a64ba286d'; // Id del tipo de usuario "cliente"
    
        // Validación de contraseñas
        if (pwd !== pwdConfirm) {
          setErrorMessage('Las contraseñas no coinciden');
          return;
        }
    
        // Validación de campos vacíos
        if (!nombre || !apellidopa || !apellidoma || !correo || !pwd || !pwdConfirm || !telefono) {
          setErrorMessage('Todos los campos son obligatorios');
          return;
        }
        const regexNombre = /^[A-Za-zÁ-Ÿá-ÿ ]+$/;
        if (!regexNombre.test(nombre)) {
          setErrorMessage('Error de validacion Nombre', 'Ingrese un nombre válido ,inicie con Letra Mayuscula Sin dejar espacios , No introduzca valores numericos');
          return false;
        }
        if (!regexNombre.test(apellidopa)) {
          setErrorMessage('Error de validacion apellido paterno', 'Ingrese un nombre válido ,inicie con Letra Mayuscula Sin dejar espacios , No introduzca valores numericos');
          return false;
        }
    
        if (!regexNombre.test(apellidoma)) {
          setErrorMessage('Error de validacion apellido materno', 'Ingrese un nombre válido ,inicie con Letra Mayuscula Sin dejar espacios , No introduzca valores numericos');
          return false;
        }
    
        // Validación de correo electrónico
        const regexEmail = /\S+@\S+\.\S+/;
        if (!regexEmail.test(correo)) {
          setErrorMessage('El correo electrónico no es válido');
          return;
        }
    
        // Validación de número telefónico
        const regexPhone = /^[0-9]{10}$/;
        if (!regexPhone.test(telefono)) {
          setErrorMessage('El número telefónico no es válido');
          return;
        }


        //validaciones de password
        const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;
        if (!regexPassword.test(pwd)) {
          setErrorMessage('La contraseña es obligatoria');
          setErrorMessage('');
        } else if (pwd.length < 6) {
          setErrorMessage('La contraseña debe tener al menos 6 caracteres, Sin dejar espacios');
        } else {
          setErrorMessage('');
        }
    
        if (pwdConfirm !== pwd) {
          setErrorMessage('Error', 'Las contraseñas no coinciden');
          return false;
        }
    
        // Envío de formulario
        const data = {
          nombre,
          apellidopa,
          apellidoma,
          correo,
          pwd,
          telefono,
          nombreTipoUser
        };
    
        const response = await fetch('https://api-proyecto-main.vercel.app/api/usuarios', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
    
        if (response.ok) {
          navigate('/Login');
        } else {
          setErrorMessage('El correo electrónico ya se encuentra registrado');
        }
      };

      
  const handleValidation = (form) => {
    let isValid = true;

    // Validación de campos vacíos
    Array.from(form.elements).forEach((field) => {
      if (!field.value) {
        isValid = false;
        field.classList.add('is-invalid');
      } else {
        field.classList.remove('is-invalid');
      }
    });

    return isValid;
  };


  return (
    <div className='login-container'>
    <div className='login-info-container'>
        <h1 className='title'>Formulario de Registro</h1>
        <br></br>
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
          <form className='inputs-container' onSubmit={handleSubmit}>
                <input class="input" type="text" placeholder="Nombre"  id="nombre" name="nombre"/>
                <input class="input" type="text" placeholder="Apellido Paterno" id="apellidopa" name="apellidopa"/>
                 <input class="input" type="text" placeholder="Apellido Materno"  id="apellidoma" name="apellidoma"/>
                <input class="input" type="email" placeholder="Correo electronico"  id="correo" name="correo"/>
                <input class="input" type="password" placeholder="Password" id="pwd" name="pwd"  />
                <input class="input" type="password" placeholder="Confirmar Password"id="pwdConfirm" name="pwdConfirm"  />
                <input class="input" type="tel" placeholder="telefono" id="telefono" name="telefono"  />
                
                {errorMessage && <div className="alert alert-danger" style={{color:"#5b0808",fontWeight:"bold"}}>{errorMessage}</div>}

                <button  type="submit" class="btn"  >Registrar</button>
               
          </form>
          <p>¿Ya tienes cuenta? <span class="span"><Link to="/Login">Atras</Link></span></p>
    </div>
    <img class="image-container"  src={require("../../../assets/log.png")} alt=""/>
</div>
  )
}
