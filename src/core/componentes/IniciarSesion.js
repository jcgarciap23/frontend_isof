import React, { useState } from 'react';
import { Redirect, Link} from 'react-router-dom';
import Navigation from './Navigation';
import { signin, authenticate, isAuthenticated } from '../Vista/UsuarioView';
import Sidebar from './sideBar';

const IniciarSesion = () => {

  const [values, setValues] = useState({
    email: '',
    password: '',
    error: '',
    loading: false,
    redirectToReferrer: false
  });

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const {email, password, loading, error, redirectToReferrer} = values;
  const {user} = isAuthenticated();

  const handleChange = name => event => {
    setValues({...values, error: false, [name]: event.target.value})
  }

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({...values, error: false, loading: true})
    signin({email, password})
      .then(data => {
        if (data.error) {
          setValues({...values, error: data.error, loading:false})
        } else {
          authenticate(
            data, () => {
              setValues({
                ...values,
                redirectToReferrer: true
              })
            }
          )
        }
      }).catch(err => console.log(err))
  }


  const signInForm = () => (
    <div className="login-wrap3">

    <div className="login-html">
    
   <label for="tab-1" className="tab">Iniciar Sesión</label>
      <div className="login-form">
        <div className="sign-in-htm">
          <div className="group">
            <label for="user" className="label">Email</label>
            <input 
              id="user" className="input"
              onChange={handleChange('email')}
              value={email}
              required
              type='email'
                />
          </div>
          <div className="group">
            <label for="pass" className="label">Contraseña</label>
            <input 
              id="pass" className="input" 
              onChange={handleChange('password')}
              type="password"
              value={password}
              required
              />
          </div>
          <div className="group">
            <input id="check" type="checkbox" className="check" checked />
            <label for="check"><span className="icon"></span>Recordar Usuario</label>
          </div>
          <div className="group">
            <input type="submit" className="button" onClick={clickSubmit} value="Iniciar Sesión" />
          </div>
          <div className="hr"></div>
          <div className="foot-lnk">
            <a href="#forgot">Olvidé mi contraseña</a>
          </div>
        </div>
        
        </div>
      </div>
    </div>
  )

  const redirectUser = () => {
    if(redirectToReferrer) {
      if(user && user.role === 1) {
        return <Redirect to="/admin/dashboard" />
      } else {
        return <Redirect to="/adoptame"/>
      }
    }
    if(isAuthenticated()) {
      return <Redirect to="/adoptame" />
    }
  }

  const showError = () => (
    <div className="alert alert-danger" style={{display: error ? '': 'none'}}> Usuario no existe o contraseña incorrecta, intenta de nuevo o
    <Link to='/registrarse'> Regístrate</Link>
    </div>
  )

  const showLoading = () => (
    loading && (
      <div className="alert alert-info">
        <h2>Loading...</h2>
      </div>
    )
  )

  return (
    <>
      <Navigation toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <div className="fondo">
        {showError()}
        {showLoading()}
        {signInForm()}
        {redirectUser()}
      </div>
  </>
  )
}

export default IniciarSesion;
/*
<form className="sign-box">
<div className="form-group">
  <label className="text-muted">Email</label>
  <input
    onChange={handleChange('email')}
    type="email"
    className="form-control"
    value={email}
    required
    />
</div>
<div className="form-group">
  <label className="text-muted">Contraseña</label>
  <input
    onChange={handleChange('password')}
    type="password"
    className="form-control"
    value={password}
    required
    />
</div>
<button onClick={clickSubmit} className="s-btn btn btn-primary">
  Iniciar sesión
</button>
</form>*/