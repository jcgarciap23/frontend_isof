import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation'
import "./estilos/RegistroIngreso.css"
import { signup } from '../Vista/UsuarioView';
import Sidebar from './sideBar';

const RegistrarUsuario = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    success: false
  })

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const { name, email, password, success, error } = values

  const handleChange = name => event => {
    setValues({...values, error: false, [name]: event.target.value }) 
  }

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false })
    signup({ name, email, password }).then(data => { 
      if (data.error) {
        setValues({ ...values, error: data.error, success: false })
      } else {
        setValues({
          ...values,
          name: '',
          email: '',
          password: '',
          error: '',
          success: true
        })
      }
    }).catch(err => console.log(err))
  }

  const signUpForm = () => (
    
    <div className="login-wrap3">

      <div className="login-html">
        
        <label for="tab-2" className="tab" >Regístrate</label>
        
          <div className="login-form">
            
            <div className="sign-up-htm">
              <div className="group">
                <label for="user" className="label">Nombre</label>
                <input id="user" type="text" className="input" 
                  onChange={handleChange('name')}
                  value={name}
                  required/>
              </div>
              <div className="group">
                <label for="pass" className="label">Contraseña</label>
                <input id="pass" type="password" className="input" data-type="password" 
                  onChange={handleChange('password')}
                  value={password}
                  required
                  />
              </div>
              <div className="group">
                <label for="pass" className="label">Email</label>
                <input id="pass" required className="input" 
                onChange={handleChange('email')}
                type='email'
                value={email}
                />
              </div>
              <div className="group">
                <input type="submit" onClick={clickSubmit} className="button" value="Registrarme" />
              </div>
              <div className="hr"></div>
              <div className="foot-lnk">
                <label for="tab-1">Ya estás registrado?</label>
              </div>
            </div>
          </div>
      </div>
    </div>
    
  


  );

  const showError = () => (
    <div className='alert alert-danger' style={{ display: error ? '' : 'none' }}> Usuario ya se encuentra registrado 
    </div>
  )

  const showSuccess = () => (
    <div className='alert alert-info' style={{display: success ? '':'none'}}>  Registro exitoso 
      <Link to='/iniciarsesion'> Iniciar sesión</Link>
    </div>
  )

  return (
    <>
      <Navigation toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <div className="fondo">
        {showError()}
        {showSuccess()}
        {signUpForm()}
      </div>
    </>
  )
}

export default RegistrarUsuario;

/*
<form action="/">
      <div className='form-group'>
        <label className='text-muted'>Nombre</label>
        <input
          onChange={handleChange('name')}
          value={name}
          required
          type='text'
          className='form-control'/>
      </div>
      <div className='form-group'>
        <label className='text-muted'>Email</label>
        <input
          onChange={handleChange('email')}
          type='email'
          value={email}
          required
          className='form-control'/>
      </div>
      <div className='form-group'>
        <label>Contraseña</label>
        <input
          onChange={handleChange('password')}
          value={password}
          required
          type='password'
          className='form-control'/>
      </div>
      <button onClick={clickSubmit} className='btn btn-primary'>
        Registrarme
      </button>
      
    </form>
    */