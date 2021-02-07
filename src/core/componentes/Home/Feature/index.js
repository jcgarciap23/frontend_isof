import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';
import { Link } from 'react-router-dom';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Denuncia el abuso animal</h1>
      <p>Realiza y Visualiza Reportes de Vulnerabilidad</p>
      <Link className="nav-link" to="/iniciarsesion">
        <FeatureButton>Acceder</FeatureButton>
      </Link>
    </FeatureContainer>
  );
};

export default Feature;
