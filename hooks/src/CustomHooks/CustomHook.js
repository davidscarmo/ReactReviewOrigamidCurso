import React from "react";
import useLocalStorage from "./UseLocalStorage";
import useFetch from "./UseFetch";
const CustomHook = () => {
  const [produto, setProduto] = useLocalStorage("produto", "");
  const { request, data, loading, error } = useFetch();

  const handleClick = ({ target }) => {
    setProduto(target.innerText);
  };

  React.useEffect(() => {
   const fetchData = async() => 
   {
    const {response, json} = request("https://ranekapi.origamid.dev/json/api/produto/");

    }
    fetchData();
  }, [request]);

  if(error) return <p>{error}</p>
  if(loading) return <p>Carregando...</p>
  if (data)
    return (
        <div>
        <p>Produto: {produto}</p>

        {data.map((produto) => {
            return (
            <li>
                <button key={produto.id} onClick={handleClick}>
                {produto.nome}{" "}
                </button>
            </li>
            );
        })}
        </div>
    );
    else return null; 
};

export default CustomHook;
