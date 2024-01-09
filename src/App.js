import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout';
import Gepel from './pages/Gepel';
import NoPage from './pages/NoPage';
import Rendez from './pages/Rendez';
import Valaszto from './pages/Valaszto';
import Model from "./model/Model";


export default function App() {
  const MODEL = new Model();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Valaszto model={MODEL} />} />
          <Route path="gepel" element={<Gepel />} />
          <Route path="rendez" element={<Rendez />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}