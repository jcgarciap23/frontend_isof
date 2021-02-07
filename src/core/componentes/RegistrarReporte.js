import React, {useEffect, useState} from 'react';
import Navigation from './Navigation';
import { createReporte } from '../Vista/ReporteView'
import { isAuthenticated } from '../Vista/UsuarioView'
import './estilos/RegistrarReporte.css';
import Sidebar from './sideBar';

const RegistrarReporte = () => {

    const { user, token } = isAuthenticated()
    localStorage.setItem('id',user._id);
    localStorage.setItem('nombre',user.name);
  
    const [values, setValues] = useState({
      nombre: '',
      descripcion: '',
      contacto: '',
      categoria: '',
      photo: '',
      nombreUsuario: '',
      idUsuario: '',
      loading: false,
      error: '',
      createdReporte: '',
      redirectToProfile: false,
      formData: ''
    })  
  
    const {
      nombre,
      descripcion,
      contacto,
      categoria,
      photo,
      nombreUsuario,
      idUsuario,
      loading,
      error,
      createdReporte,
      redirectToProfile,
      formData
    } = values;
    
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };
  
    useEffect(() => {
      setValues({...values, formData: new FormData()});
    }, []); 
  
    const handleChange = nombre => event => {
      const value = nombre === 'photo' ? event.target.files[0] : event.target.value
      formData.set(nombre, value)
      formData.set('idUsuario', localStorage.getItem('id'))
      formData.set('nombreUsuario', localStorage.getItem('nombre'))
      
      setValues({ ...values, [nombre]: value,  })
    }
  
    const showError = () => (
      <div
        className='alert alert-danger'
        style={{ display: error ? '' : 'none' }}
      >
        {error}
      </div>
    )
  
    const showSuccess = () => (
      <div
        className='alert alert-info'
        style={{ display: createdReporte ? '' : 'none' }}
      >
        <h2>{`${createdReporte} was succesfully created`}</h2>
      </div>
    )
  
    const showLoading = () =>
      loading && (
        <div className='alert alert-success'>
          <h2>Loading ...</h2>
        </div>
      )
  
    const clickSubmit = event  => {
      event.preventDefault()
      setValues({ ...values, error: '', loading: true })
      createReporte(user._id, token, formData).then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error })
        } else {
          setValues({
            ...values,
            nombre: '',
            descripcion: '',
            photo: '',
            contacto: '',
            categoria: '',
            loading: false,
            createdReporte: data.nombre
          })
        }
      })
      
    }
  
    const newReporteForm = () => (
    <form className="new-post" onSubmit={clickSubmit}>
      
    
    <div className="login-wrap">
    <div className="login-html">
      <label align="center" className="tab">Reporte de Vulnerabilidad</label>
      <div className="hr"></div>
    <div className="login-form">
    <div className="sign-up-htm">
    
    
    <div align="center" className='group'>
      <label className="label">Foto de Evidencia:</label>
     <label align="center" className='label'>
        <input 
          onChange={handleChange('photo')}
          type='file'
          name='photo'
          accept='image/*'
          required
          className="file"
        />
      </label>
    </div>
    
    <div className='group'>
      <label className='label'>Nombre del Reporte</label>
      <input 
        onChange={handleChange('nombre')}
        type='text'
        className='input'
        value={nombre}
        required
      />
    </div>
    <div className='group'>
      <label className='label'>Descripción</label>
      <input
        onChange={handleChange('descripcion')}
        type='text'
        className='input'
        value={descripcion}
        required
      />
    </div>
    <div className='group'>
      <label className='label'>Contacto</label>
      <input
        onChange={handleChange('contacto')}
        type='text'
        className='input'
        value={contacto}
        required
      />
    </div>
    <div className="group"><input type="submit" className="button" value="Reportar"/></div>
    </div>
    </div>
    </div>
    </div>
  </form>
    )
  
    return (
      <>
        <Navigation toggle={toggle}/>
        <Sidebar isOpen={isOpen} toggle={toggle} />
            <div className="fondo">
              {showLoading()}
              {showSuccess()}
              {showError()}
              {newReporteForm()}
            </div>
       
      </>
    )
  }
  
  export default RegistrarReporte;

