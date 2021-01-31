import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Count from './Count';
import ModalExample from './ModalExample';
import UseStateChallenge from './UseStateChallenge';
import UseEffect from './UseEffect/UseEffect'; 
import AfterBuildComponent from './UseEffect/AfterBuildComponent';
import BeforeDemolishComponent from './UseEffect/BeforeDemolishComponent'; 
import UseEffectChallenge from './UseEffect/UseEffectChallenge';

ReactDOM.render(
  <React.StrictMode>
    <UseEffectChallenge />
  </React.StrictMode>,
  document.getElementById('root')
);
