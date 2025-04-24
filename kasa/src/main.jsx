//import { StrictMode } from "react";
//import { createRoot } from 'react-dom/client'
import "./index.scss";
import App from "./Pages/Homepage/App";
import About from "./Pages/About/About";
import Detail from "./Pages/Detail/Detail";
import Error from "./components/Error/Error.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
      <BrowserRouter>
            <Routes>
                  <Route path="/" element={<App />} />
                  <Route path="about" element={<About />} />
                  <Route path="/logement/:id" element={<Detail />} />
                  <Route path="*" element={<Error />} />
            </Routes>
      </BrowserRouter>
);
