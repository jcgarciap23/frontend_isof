import React, {useState, useEffect} from 'react';
import Navigation from './Navigation';
import { getReportes } from '../Vista/ReporteView';
import PublicacionReportes from './PublicacionReportes';
import Sidebar from './sideBar';

const MostrarReporte = () => {
  const [reportesF, setReportes] = useState([]);
  const [error, setError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const loadReportes = () => {
    getReportes().then(data => {
      if (data.error) {
        setError(data.error)
      } else {
        setReportes(data);
        console.log(data);
      }
    }).catch(err => console.log(err))
  }

  useEffect(() => {
    loadReportes();
  }, [])

  return (
    <>
      <Navigation toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <div className="container">
      <div className="row">
        {reportesF.map((reportes, i) => (
          <div key={i} className="col-lg-4 col-md-6 col-sm-6 col-sm-6">
            <PublicacionReportes reportes={reportes} />
          </div>
        ))}
      </div></div>
    </>
  )
}

export default MostrarReporte;