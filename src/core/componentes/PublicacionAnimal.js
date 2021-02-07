import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './estilos/PublicacionAnimal.css';
import MostrarImagen from './MostrarImagen';

const Publicacion = ({animales}) => {
  const [count, setCount] = useState(animales.count)

  return (
    <body >
      <div className="wrapperm">
        <div className="cardm">
          <MostrarImagen className="img" item={animales} url="animales"/>
          <div className="infom" >
            <h1 className="h1m">¡Soy {animales.nombre}!</h1>
            <p className="pm">Tengo {animales.edad}</p>
            <p className="pm">Soy {animales.sexo}</p>
            <Link to={`/animal/${animales._id}`}>
              <a herf="#" className="btnm">Ver Más</a>
            </Link>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Publicacion;

/*<section id="post-list">
      {
        <article >
          
          <header>
              
            <div className="user-info"><img className="img" src={usuario} alt="Usuario"></img><span className="place">{ animales.nombreUsuario }</span> </div>
            <img src={more} alt="More" />
          </header>
            <MostrarImagen className="img" item={animales} url="animales"/>
            <footer>
              <strong>Nombre: </strong>{ animales.nombre }
              <p><strong>Edad: </strong>{ animales.edad }</p> 
              <p><strong>Sexo: </strong>{ animales.sexo }</p> 
              <p><strong>Ciudad: </strong> ciudad</p>
              <p>Descripción: {animales.descripcion}</p>
              <div align="center"> 
                <Link to={`/animal/${animales._id}`}>
                  <button className="btn btn-dark">Ver Mas</button>
                </Link>
              </div>
            </footer>
        </article> 
      }
    </section>*/