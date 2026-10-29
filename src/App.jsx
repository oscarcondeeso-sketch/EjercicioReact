import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout.jsx";
import Home from "./pages/Home.jsx";
import SearchDwellings from "./pages/SearchDwellings.jsx";
import DwellingPage from "./pages/DwellingPage.jsx";
import Convocatorias from "./pages/Convocatorias.jsx";
import ConvocatoriaPage from "./pages/ConvocatoriaPage.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="viviendas" element={<SearchDwellings />} />
        <Route path="viviendas/:id" element={<DwellingPage />} />
        <Route path="convocatorias" element={<Convocatorias />} />
        <Route path="convocatorias/:id" element={<ConvocatoriaPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
