import React from 'react';
import {API} from '../../config';
import './estilos/ImagenReporte.css';

const MostrarImagenR = ({item, url}) => (
  <div className="product-img">
    <img 
      src={`${API}/${url}/photo/${item._id}`}
      alt={item.name}
      className="img2"
      style={{maxHeight: "1000px", maxWidth:"1000px"}}/>
  </div>
)

export default MostrarImagenR;