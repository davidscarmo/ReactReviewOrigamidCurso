import React from "react";
import "./App.css";
import Produto from "./Components/Produto";
import styled from "styled-components";

const ProductContainer = styled.div`
  display: flex;
`;
const Product = styled.div`
  flex: 1;
`;
const Title = styled.h1`
  font-size: 2rem;
  color: #000;
`;
const Paragrafo = styled.p`
  font-size: 1.5rem;
  color: green;
`;

const Price = styled.p`
  background: ${(props) => props.cor};
`
const Price2 = styled.p `
  background: hsl(${Math.random() * 360}, 100%, 50%);
`
const Buy = styled.button `
  background-color: ${({active}) => active ? '#000000' : '#FFFFFF'};
  font-size: 1rem; 
  border: 2px solid #000; 
  padding: 0.5rem; 
  color: ${({active}) => active ? '#FFFFFF' : '#000000'};
  cursor: pointer;

  &:hover 
  {
    background: tomato;
  }
`;


function App() {
  
  const [active, setActive] = React.useState(false); 
  return (
    <div className="container">
      <Buy active={active} onClick={() => setActive(!active)}>Comprar</Buy>
      <ProductContainer>
        <Product>
          <Title> Aloha </Title>
          <Paragrafo>Esse é um texto.</Paragrafo>
          <Price cor="#354587">R$5000 </Price>
          <Produto />
        </Product>
        <Product>
          <Title> Aloha </Title>
          <Paragrafo>Esse é um texto.</Paragrafo>
          <Price2>R$ 5000,00 </Price2> 
          <Produto />
        </Product>
      </ProductContainer>
    </div>
  );
}

export default App;
