import React from "react";
import Loading from "../Components/Loading";
import Product from "../Components/Product";

const Products = () => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((response) => response.json())
      .then((json) => setData(json));

    setLoading(false);
  }, []);
  return (
    <>
      {loading && <Loading />}
      {data &&  <Product products={data} />}
    </>
  );
};
export default Products;
