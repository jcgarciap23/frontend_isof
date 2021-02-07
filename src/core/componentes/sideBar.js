import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CgClose } from 'react-icons/cg';
import React from 'react';
import { isAuthenticated, signout } from "../Vista/UsuarioView";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 450px;
  height: 100%;
  background: #EFFFFA;
  align-items: center;
  top: 0;
  transition: 0.3s ease-in-out;
  right: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;
    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }
    &:hover {
      color: #38aaca;
    }
  }
  
`;

export const CloseIcon = styled(CgClose)`
  color: #0D0C1D;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const Btn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #38aaca;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    background: #e31837;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

const Sidebar = ({ isOpen, toggle }) => {
    return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
          <CloseIcon />
      </Icon>
      { isAuthenticated() && (
        <>
          <Link className="nav-link" to="/adoptame" >
            <span aria-hidden="true">🐕</span>
            Adóptame
          </Link>
          <Link className="nav-link" to="/darenadopcion" >
            <span aria-hidden="true">🐈</span>
            Dar en Adopción
          </Link>
          <Link className="nav-link" to="/reportar" >
            <span aria-hidden="true">🕵️</span>
            Denunciar Abuso
          </Link>
          <Link className="nav-link" to="/reporte" >
            <span aria-hidden="true">📋</span>
            Ver Reportes
          </Link>
          <Link 
            to="/"
            onClick={() =>
              signout(() => {
              })}className="nav-link">
              <Btn >Cerrar Sesión</Btn>
          </Link>
          <Link to='/'></Link>
        </>
      )}
      {!isAuthenticated() && (
        <>
          <Link className="nav-link" to="/registrarse" >
            <Btn>Regístrate</Btn>
          </Link>
          <Link className="nav-link" to="/iniciarsesion" >
            <Btn>Iniciar Sesión</Btn>
          </Link>
          <Link to='/'></Link>
        </>
        )}
    </SidebarContainer>
  )
  };
  
  export default Sidebar;
  
/*
<SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarMenu>
        {!isAuthenticated() && (
                <>
                  <SideBtnWrap>
                      <SidebarRoute to='/registrarse'>Regístrate</SidebarRoute>
                  </SideBtnWrap>

                  <SideBtnWrap>
                      <SidebarRoute to='/iniciarsesion'>Iniciar Sesión</SidebarRoute>
                  </SideBtnWrap>

                </>
        )}
        { isAuthenticated() && (
                <>
                
                  <SidebarLink>
                    <Link className="nav-link" to="/adoptame">
                    <button className="btn btn-outline-danger" type="button">Adóptame</button>
                    </Link>
                  </SidebarLink>
                  <SidebarLink>
                    <Link to="/darenadopcion" className="nav-link">
                    <button className="btn btn-outline-danger" type="button">Dar en Adopción</button>
                    </Link>
                  </SidebarLink>
                  <SidebarLink>
                    <Link to="/reportar" className="nav-link">
                    <button className="btn btn-outline-danger" type="button">Denunciar Abuso</button>
                    </Link>
                  </SidebarLink>
                  <SidebarLink>
                    <Link to="/reporte" className="nav-link">
                    <button className="btn btn-outline-danger" type="button">Ver Reportes de Abusos</button>
                    </Link>
                  </SidebarLink>
                  <SidebarLink>
                    <Link
                      to="/"
                      onClick={() =>
                        signout(() => {
                        })}className="nav-link">
                        <button className="btn btn-info" type="button">Cerrar Sesión</button>
                      </Link>
                    </SidebarLink>
                  </>
                  )}
          
        </SidebarMenu>
      </SidebarContainer>
    );*/