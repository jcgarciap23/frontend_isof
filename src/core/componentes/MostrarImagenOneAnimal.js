import React from 'react';
import {API} from '../../config';
import './estilos/MostrarImagenOneAnimal.css';

const MostrarImagen = ({item, url}) => (
  <div className="product-img">
    <img
      src={`${API}/${url}/photo/${item._id}`}
      alt={item.name}
      className="imgOne"
      style={{maxHeight: "1000px", maxWidth:"1000px"}}/>
  </div>
)

export default MostrarImagen;