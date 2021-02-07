import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// View Components
import MostrarAnimales from './core/componentes/MostrarAnimales';
import RegistrarUsuario from './core/componentes/RegistrarUsuario';
import IniciarSesion from './core/componentes/IniciarSesion';
import RegistrarAnimal from './core/componentes/RegistrarAnimal';
import Animal from './core/componentes/Animal';
import RegistrarReporte from './core/componentes/RegistrarReporte';
import MostrarReporte from './core/componentes/MostrarReporte';
import Home from './core/componentes/Home/Home'

// Functional Components

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/adoptame" exact component={MostrarAnimales} />
        <Route path="/animal/:animalId" exact component={Animal}/>
        <Route path="/darenadopcion" exact component={RegistrarAnimal}/>
        <Route path="/reportar" exact component={RegistrarReporte}/>
        <Route path="/reporte" exact component={MostrarReporte}/>
        <Route path="/" exact component={Home}/>   
        <Route path="/iniciarsesion" exact component={IniciarSesion} />
        <Route path="/registrarse" exact component={RegistrarUsuario} />
        <Route path="/" exact component={Home}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;