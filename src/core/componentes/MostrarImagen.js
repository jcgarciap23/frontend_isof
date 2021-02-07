import React from 'react';
import {API} from '../../config';
import './estilos/MostrarImagen.css';

const MostrarImagen = ({item, url}) => (
  <div className="product-img">
    <img
      src={`${API}/${url}/photo/${item._id}`}
      alt={item.name}
      className="mb-3 img-cont"
      style={{maxHeight: "1000px", maxWidth:"1000px"}}/>
  </div>
)

export default MostrarImagen;