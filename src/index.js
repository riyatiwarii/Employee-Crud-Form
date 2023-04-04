import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "../src/service/i18next"
import appRouter from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />)

reportWebVitals();
