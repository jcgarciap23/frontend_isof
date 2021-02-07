import React from "react";
import { Link, withRouter } from "react-router-dom";
import { NavItem } from "reactstrap";
import { isAuthenticated, signout } from "../Vista/UsuarioView";
import styled from 'styled-components';
import { FaDog } from 'react-icons/fa';

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 5;
  right: 0;
  cursor: pointer;
  color: #922B21;

  p {
    transform: translate(-50%, 200%);
    font-weight: bold;
  }
`;
export const Bars = styled(FaDog)`
  font-size: 2.5rem;
  transform: translate(0%, -10%);
`;

const Navigation = ({toggle}) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-dark bg-secondary ">
        <div className="container-fluid">
            <Link className="nav-link" to="/">
              <a className="navbar-brand mb-0 h1" href="#">
                +COTAS
              </a> 
            </Link>
             
          <NavIcon
            onClick={toggle}
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ><span className="navbar-toggler-icon"></span>
          
          </NavIcon>

          <div className="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul className="navbar-nav mr-auto">
          
            </ul>
            <ul className="navbar-nav">
              {!isAuthenticated() && (
                <>
                  <NavItem className="nav-link">
                    <Link className="nav-link" to="/registrarse">
                    <button className="btn btn-info" type="button">Regístrate</button>
                    </Link>
                  </NavItem>
                  <NavItem className="nav-link">
                    <Link className="nav-link" to="/iniciarsesion">
                    <button className="btn btn-info" type="button">Iniciar Sesión</button>
                    </Link>
                  </NavItem>
                </>
              )}
              { isAuthenticated() && (
                <>
                
                  <NavItem className="nav-link">
                    <Link className="nav-link" to="/adoptame">
                    <button className="btn btn-outline-light" type="button">Adóptame</button>
                    </Link>
                  </NavItem>
                  <NavItem className="nav-link">
                    <Link to="/darenadopcion" className="nav-link">
                    <button className="btn btn-outline-light" type="button">Dar en Adopción</button>
                    </Link>
                  </NavItem>
                  <NavItem className="nav-link">
                    <Link to="/reportar" className="nav-link">
                    <button className="btn btn-outline-light" type="button">Denunciar Abuso</button>
                    </Link>
                  </NavItem>
                  <NavItem className="nav-link">
                    <Link to="/reporte" className="nav-link">
                    <button className="btn btn-outline-light" type="button">Ver Reportes de Abusos</button>
                    </Link>
                  </NavItem>
                  <NavItem className="nav-link">
                    <Link
                      to="/"
                      onClick={() =>
                        signout(() => {
                          //history.push("/");
                        })} className="nav-link">
                      <button className="btn btn-info" type="button">Cerrar Sesión</button>
                    </Link>
                  </NavItem>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default withRouter(Navigation);
