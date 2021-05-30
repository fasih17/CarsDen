import React from 'react';
import REACTDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './index.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';

REACTDOM.render(
    <>
        <BrowserRouter>
        <App/> 
        </BrowserRouter>
        
    </>
, document.getElementById('root'));