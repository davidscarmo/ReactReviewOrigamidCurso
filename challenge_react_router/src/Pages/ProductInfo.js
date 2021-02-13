import React from "react";
import { useParams } from "react-router-dom";
import Head from "../Components/Head";
import Loading from "../Components/Loading";
import './ProductInfo.css';

const ProductInfo = () => {
  const params = useParams();
  const [productInfo, setProductInfo] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${params.id}`)
      .then((response) => response.json())
      .then((json) => setProductInfo(json));
     
      setLoading(false);
  }, []);
  return (
    <>
        {loading && <Loading />}
        {productInfo && <section className="ProductInfoArea AnimationTransition">
                        <Head  title={productInfo.nome} description={productInfo.descricao} />
                        <div className="ProductInfoImgs">
                        {productInfo.fotos.map((photo) => {
                            return <img src={photo.src} alt={photo.titulo} />;
                        })}
                        </div>
                        <div className="ProductInfoDescription">
                          <h1>{productInfo.nome}</h1>
                          <p><span>R$ {productInfo.preco}</span></p>
                          <p>{productInfo.descricao}</p>
                        </div>
                        </section>
        } 
    </>
  );
};

export default ProductInfo;
