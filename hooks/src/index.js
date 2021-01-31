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
import UseRef from './UseRef/UseRef'; 
import SetTimeOut from './UseRef/SetTimeOut'; 

ReactDOM.render(
  <React.StrictMode>
    <SetTimeOut />
  </React.StrictMode>,
  document.getElementById('root')
);
