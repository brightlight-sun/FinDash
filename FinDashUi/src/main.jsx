import { createRoot } from 'react-dom/client'
import { StrictMode } from "react";
import App from './App.jsx' 

import { BrowserRouter } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'

import { Provider } from "react-redux";
import { store } from "./app/store";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store}>
  <BrowserRouter>
    <App />
    <ToastContainer autoClose={2000} />
  </BrowserRouter>
  </Provider>
  </StrictMode>
)
