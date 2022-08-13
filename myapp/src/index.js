import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';
import { Button } from './components/app/app';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapTest from './BootstrapTest';

const BigButton = styled(Button)`
  margin: 0 auto;
  width: 245px;
  text-align: center;
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <BigButton as="a">Отправить отчет</BigButton>
    <BootstrapTest/>
  </React.StrictMode>
);

reportWebVitals();
