import Home from "./pages/home";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Login from "./pages/login";
import Cadastro from "./pages/Cadastro";
import InsercaoDados from "./pages/InsercaoDados";
import RegistroHistorico from "./pages/RegistroHistorico";
import Graficos from "./pages/Graficos";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path="/insercao" element={<InsercaoDados/>} />
        <Route path="/historico" element={<RegistroHistorico/>} />
        <Route path="/graficos" element={<Graficos/>} />
      </Routes>
    </>
  );
}

export default App;
