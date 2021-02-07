import React, {useState, useEffect} from 'react';
import Navigation from './Navigation';
import { getAnimales } from '../Vista/AnimalView';
import Publicacion from './PublicacionAnimal';
import Sidebar from './sideBar';

const MostrarAnimales = () => {
  const [animalesF, setAnimales] = useState([]);
  const [error, setError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  
  const loadAnimales = () => {
    getAnimales().then(data => {
      if (data.error) {
        setError(data.error)
      } else {
        setAnimales(data);
        console.log(data);
      }
    }).catch(err => console.log(err))
  }

  useEffect(() => {
    loadAnimales();
  }, [])

  return (
    <>
      <Navigation toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <div className="container">
      <div className="row">
        {animalesF.map((animales, i) => (
          <div key={i} className="col-lg-4 col-md-6 col-sm-6 col-sm-6">
            <Publicacion animales={animales} />
          </div>
        ))}
      </div>
      </div>
      
    </>
  )
}

export default MostrarAnimales;

/*<ProductsContainer>
      <ProductsHeading></ProductsHeading>
      <ProductWrapper>
    
        {animalesF.map((animales, i) => (
 
         <ProductCard key={i}>
           
          <ProductImg src={usuario} alt="Usuario" />
          <a>  {animales.nombreUsuario}</a>
         
          <MostrarImagen className="img" item={animales} url="animales"/>
         <ProductInfo>
           <ProductTitle>¡Hola soy {animales.nombre}!</ProductTitle>
           <ProductDesc>Soy {animales.sexo}</ProductDesc>
           <ProductPrice>Tengo {animales.edad}</ProductPrice>
           <Link to={`/animal/${animales._id}`}>
                <ProductButton>Ver Más</ProductButton>
            </Link>
         </ProductInfo>
       </ProductCard>
         
        ))}
     </ProductWrapper>
    </ProductsContainer>*/