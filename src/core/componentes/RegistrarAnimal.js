import React, {useEffect, useState} from 'react';
import Navigation from './Navigation';
import { createAnimales } from '../Vista/AnimalView';
import { isAuthenticated } from '../Vista/UsuarioView';
import './estilos/RegistrarAnimales.css';
import Sidebar from './sideBar';

const RegistrarAnimal = () => {

  const { user, token } = isAuthenticated()
  localStorage.setItem('id',user._id);
  localStorage.setItem('nombre',user.name);

  const [values, setValues] = useState({
    nombre: '',
    descripcion: '',
    edad: '',
    categoria: '',
    raza: '',
    photo: '',
    sexo: '',
    estadoVacunas: '',
    estadoDespa: '',
    nombreUsuario: '',
    idUsuario: '',
    contacto: '',
    loading: false,
    error: '',
    createdAnimales: '',
    redirectToProfile: false,
    formData: ''
  })  

  const {
    nombre,
    descripcion,
    edad,
    categoria,
    raza,
    photo,
    sexo,
    estadoVacunas,
    estadoDespa,
    nombreUsuario,
    idUsuario,
    contacto,
    loading,
    error,
    createdAnimales,
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
    formData.set('idUsuario', localStorage.getItem('id'))
    formData.set('nombreUsuario', localStorage.getItem('nombre'))
    const value = nombre === 'photo' ? event.target.files[0] : event.target.value
    formData.set(nombre, value)
    
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
      style={{ display: createdAnimales ? '' : 'none' }}
    >
      <h2>{`${createdAnimales} was succesfully created`}</h2>
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
    createAnimales(user._id, token, formData).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error })
      } else {
        setValues({
          ...values,
          nombre: '',
          descripcion: '',
          photo: '',
          edad: '',
          categoria: '',
          raza: '',
          sexo: '',
          estadoVacunas: '',
          estadoDespa: '',
          contacto: '',
          loading: false,
          createdAnimales: data.nombre
        })
      }
    })
    
  }

  const newAnimalForm = () => (
    <form className="new-post" onSubmit={clickSubmit}>
      
    
    <div className="login-wrap2">
    <div className="login-html">
      <label align="center" className="tab">Dar en Adopción</label>
      <div className="hr"></div>
    <div className="login-form">
    <div className="sign-up-htm">
    
    
    <div align="center" className='group'>
      <label className="label">Subir una foto:</label>
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
      <label className='label'>Nombre del Animal</label>
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
      <label className='label'>Edad</label>
      <input
        onChange={handleChange('edad')}
        type='text'
        className='input'
        value={edad}
        required
      />
    </div>
    <div className='group'>
        <label className='label'>Categoría</label>
        <select
          onChange={handleChange('categoria')}
          type='text'
          className='input'
        >
          <option>Seleccionar Categoría</option>
          <option value={'Perro'}>Perro</option>
          <option value={'Gato'}>Gato</option>
          <option value={'Otro'}>Otro</option>
        </select>
    </div>
    <div className='group'>
      <label className='label'>Raza</label>
      <input
        onChange={handleChange('raza')}
        type='text'
        className='input'
        value={raza}
        required
      />
    </div>
    <div className='group'>
      <label className='label'>Sexo</label>
      <input
        onChange={handleChange('sexo')}
        type='text'
        className='input'
        value={sexo}
        required
      />
    </div>
    <div className='group'>
      <label className='label'>Estado de Vacunas</label>
      <input
        onChange={handleChange('estadoVacunas')}
        type='text'
        className='input'
        value={estadoVacunas}
        required
      />
    </div>
    <div className='group'>
      <label className='label'>Estado de Desparasitación</label>
      <input
        onChange={handleChange('estadoDespa')}
        type='text'
        className='input'
        value={estadoDespa}
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
    <div className="group"><input type="submit" className="button" value="Dar en Adopción"/></div>
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
            {newAnimalForm()}
        </div>
        
    </>
  )
}

export default RegistrarAnimal;
