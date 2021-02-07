import React, { useState } from 'react';
import './estilos/PublicacionReportes.css';
import MostrarImagenR from './ImagenReporte';
import usuario from '../../assets/usuario.svg';

const PublicacionReportes = ({reportes}) => {
  const [count, setCount] = useState(reportes.count)

  return (
    
    <body >
      <div className="container">
          <div className="card">
            <div>
            <img className="icon" src={usuario} alt="Usuario"></img> <a> {reportes.nombreUsuario}</a></div>
            <p className="pnombre" align="center">{reportes.nombre}</p>
              <div className="face face1"> 
                <div className="content">
                <MostrarImagenR className="img" item={reportes} url="reportes"/>
                </div>
              </div>
            <div className="face face2">
              <div className="content">
                <p>{reportes.descripcion}</p>
                <a align="center">Contacto: {reportes.contacto}</a>
              </div>
            </div>
          </div>
      </div>
    </body>
   
  );
}

export default PublicacionReportes;
/*
<section id="post-list">
      {
        <article >
          
          <header>
              
            <div className="user-info">
                <img className="img" src={usuario} alt="Usuario">
                </img>
                <span className="place"> { reportes.nombreUsuario }
                </span> 
            </div>
            <img src={more} alt="More" />
          </header>
            <MostrarImagen className="img" item={reportes} url="reportes"/>
            <footer>
              <strong>Nombre: </strong>{reportes.nombre}
              <p><strong>Descripción: </strong>{reportes.descripcion}</p> 
              <div align="center"> 
                <Link to={`/reporte/${reportes._id}`}>
                  <button className="btn btn-dark">Ver Mas</button>
                </Link>
              </div>
            </footer>
        </article> 
      }
    </section>*/