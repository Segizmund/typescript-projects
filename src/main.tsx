import './index.css'
import ReactDOM from 'react-dom/client';
import Layout from './layout/Layout';
import App from './App.tsx'
import QuoteDisplay from './components/QuoteDisplay.tsx'
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <App/>,
            },
            {
                path: "/quote",
                element: <QuoteDisplay/>,
            },
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <RouterProvider router={router}/>
    </>
);
