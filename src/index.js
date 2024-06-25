import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './pages/About/about';
import ProductDetail from './pages/productDetail/ProductDetail';
import Error from './pages/Error/Error'
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter} from 'react-router-dom'

// Initialise route paths
const paths = createBrowserRouter([
  { // home path
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
  },
  { // about path
    path: "/about",
    element: <About/>
  },
  {
    path: "/product/:id",
    element: <ProductDetail/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={paths} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
