import React from "react";
import Product from "../Components/Product";
import {Routes, Route} from 'react-router-dom';
import ProductInfo from "./ProductInfo";
const Products = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((response) => response.json())
      .then((json) => setData(json));

    console.log(data);
  }, []);
  return (
    <>
      {data &&  <Product products={data} />}

    </>
  );
};
export default Products;
