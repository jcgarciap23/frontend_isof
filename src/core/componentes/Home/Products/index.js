import React from 'react';
import styled from 'styled-components';

export const ProductsContainer = styled.div`
  /* width: 100vw; */
  min-height: 1vh;
  padding: 2.8rem calc((100vw - 1300px) / 2);
  background: #0d0909;
  color: #fff;
`;

const Products = () => {
  return (
    <ProductsContainer>
    </ProductsContainer>
  );
};

export default Products;
