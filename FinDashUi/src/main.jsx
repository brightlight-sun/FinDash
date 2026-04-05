import { createRoot } from 'react-dom/client'
import { StrictMode } from "react";
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { Provider } from "react-redux";
import { store } from "./app/store";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { LayoutProvider } from './context/LayoutContext';

import './styles/sidebarTransition.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <LayoutProvider>
        <BrowserRouter basename="/FinDash/">
          <App />
          <ToastContainer autoClose={2000} />
        </BrowserRouter>
      </LayoutProvider>
    </Provider>
  </StrictMode>
)
