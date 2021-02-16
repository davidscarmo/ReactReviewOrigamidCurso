import React from "react";

class Classes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  };

  componentDidMount() {
    console.log("Quando ele monta, utilizado para o Fetch");
  };

  componentDidUpdate() {
    console.log("Sempre que atualiza");
  };

  componentWillUnmount() {
    console.log("Sempre que ele é desmontado");
  };

  handleClick() {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };

  render()
  {
      return(
        <div>
            <h1>{this.props.title}</h1>
            <p>{this.state.count}</p>
            <button onClick={this.handleClick}>Adicionar</button>
        </div>
      )
  }

}

export default Classes; 