import React from 'react';
import ReactDOM from 'react-dom';
import { MainContainer } from './Components/MainContainer/MainContainer';
import { GlobalStyle } from './Globalstyle';



ReactDOM.render(
  
  <React.StrictMode>
    <GlobalStyle/>
    <MainContainer/>
  </React.StrictMode>,
  document.getElementById('root')
);


