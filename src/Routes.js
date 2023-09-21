import SobreMim from "./paginas/SobreMim";
import Inicio from "./paginas/Inicial";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        {/*  Rotas aninhadas */}
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>
        {/* 
          Na rota "/", a estrutura a ser renderizada é:
          <PaginaPadrao>
            <Inicio/>
          </PaginaPadrao>
          Na rota "/sobremim", a estrutura a ser renderizada é:
          <PaginaPadrao>
            <SobreMim/>
          </PaginaPadrao>
        */}
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
