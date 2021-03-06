import React from "react";
import { Link } from "react-router-dom";
import { TOKEN_POST, USER_GET } from "../../api";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";
import Button from "../Forms/Button";
import Input from "../Forms/Input";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  
  const {userLogin} = React.useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username.validate() && password.validate()) {
        userLogin(username.value, password.value);
    }
  };

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button> Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
