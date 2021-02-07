import React, {useState, useEffect} from 'react';
import { read } from '../Vista/AnimalView';
import Navigation from './Navigation';
import usuario from '../../assets/usuario.svg';
import MostrarImagen from './MostrarImagenOneAnimal';
import './estilos/Animal.css'
import Sidebar from './sideBar';

const Animal = (props) => {
  const [animales, setAnimales] = useState({});
  const [error, setError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const loadAnimal = animalId => {
    read(animalId).then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setAnimales(data);
      }
    });
  }

  useEffect(() => {
    const animalesId = props.match.params.animalId; 
    loadAnimal(animalesId);
  }, [props])

  return (
    <>
      <Navigation toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <div className="container">
      <div className="row">
    <section id="post-list">
      {
        <article >
          
          
              
            <div className="user-info"><img className="imgUser" src={usuario} alt="Usuario"></img><a> { animales.nombreUsuario }</a> </div>
           
          
            <MostrarImagen className="img" item={animales} url="animales"/>
            <footer>
              <p align="center"><strong>Nombre: </strong>{ animales.nombre }</p>
              <p align="center"><strong>Edad: </strong>{ animales.edad }</p> 
              <p align="center"><strong>Sexo: </strong>{ animales.sexo }</p> 
              <p align="center"><strong>Raza: </strong>{ animales.raza }</p>
              <p align="center"><strong>Estado de Vacunas: </strong>{ animales.estadoVacunas }</p> 
              <p align="center"><strong>Estado de Desparasitación: </strong>{ animales.estadoDespa }</p> 
              <p align="center"><strong>Descripción: </strong>{ animales.descripcion }</p>
              <div align="center">
              <a>Contacto: {animales.contacto}</a>
              </div>
            </footer>
        </article> 
      }
    </section>
    </div></div>
    </>
  )
}

export default Animal;