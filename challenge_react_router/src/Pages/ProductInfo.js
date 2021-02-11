import React from "react";
import { useParams } from "react-router-dom";
const ProductInfo = () => {
  const params = useParams();
  const [productInfo, setProductInfo] = React.useState(null);
  React.useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${params.id}`)
      .then((response) => response.json())
      .then((json) => setProductInfo(json));
  }, []);
  return (
    <>
        {productInfo && <div>
                        <div>
                        {productInfo.fotos.map((photo) => {
                            return <img src={photo.src} alt={photo.titulo} />;
                        })}
                        </div>
                       <h1>{productInfo.nome}</h1>
                        <p>{productInfo.preco}</p>
                        <p> {productInfo.descricao}</p>
                        </div>
        } 
    </>
  );
};

export default ProductInfo;
