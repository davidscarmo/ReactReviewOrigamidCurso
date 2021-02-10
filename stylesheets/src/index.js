import React from 'react';
import ReactDOM from 'react-dom';

// import App from './App';
// import Bootstrap from './Bootstrap';
// import ReactBootstrap from './ReactBootstrap';
// import Animated from './Animated';
// import SlidesExample from './SlidesExample';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Imgs from './Imgs';

ReactDOM.render(
  <React.StrictMode>
    <Imgs />
  </React.StrictMode>,
  document.getElementById('root')
);

