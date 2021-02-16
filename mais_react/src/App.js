import React from 'react';
import Button from './Button';
import Classes from './Classes';
import Example from './Example';
import Header from './Header'; 
import UseReducer from './UseReducer';
const Contato = React.lazy(() => import('./Contact')); 

function App() {

  const [active, setActive] = React.useState(false);
  return (
    <div>
      <Header />
      <h1>Meu App</h1>

      {active && 
      (
        <React.Suspense fallback={<div> Carregando...</div>}>
          <Contato />
        </React.Suspense>
      )}
      <Button margin="10px" width={300}>
        Clique Aqui  
      </Button>      
      <button onClick={() => setActive(!active)}>Ativar</button>

      <div>
        <UseReducer />
      </div>

      <div>
        <Example />
      </div>

      <div>
        <Classes title="Classes" />
      </div>
    </div>
  );
}

export default App;
