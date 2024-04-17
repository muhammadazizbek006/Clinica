import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// LAYOUTS
import MainLayout from "./layouts/MainLayout";

// PAGES
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

import Shifokormaslaxat from './pages/maslaxat/Shifokormaslaxat'
import MaslaxatDetail from "./pages/maslaxat/MaslaxatDetail";

import BolalarS from "./pages/bolalar/BolalarS";
import BolalarDetail from "./pages/bolalar/BolalarDetail";

import Chegirma from "./pages/chegirma/Chegirma";
import ChegirmaDetail from "./pages/chegirma/ChegirmaDetail";


import Terapevtik from "./pages/terapevt/Terapevtik";
import TerapevtDetail from "./pages/terapevt/TerapevtDetail";
import EstetikStamatalogika from "./pages/estetikStamatalogika/EstetikStamatalogika";
import EstetikDetail from "./pages/estetikStamatalogika/EstetikDetail";

import PeriAdanatalogiya from "./pages/periAdanatalogiya/PeriAdanatalogiya";
import PeriAdanatalogiyaDetail from "./pages/periAdanatalogiya/PeriAdanatalogiyaDetail";
import Protezlash from "./pages/protezlash/Protezlash";
import ProtezlashDetail from "./pages/protezlash/ProtezlashDetail";
import Diagnostika from "./pages/Diagnostik/Diagnostika";
import DiagnostikaDetail from "./pages/Diagnostik/DiagnostikaDetail";
import Aktsiya from "./pages/aktsiya/Aktsiya";
import AktsiyaDetail from "./pages/aktsiya/AktsiyaDetail";
import Shifokorlar from "./components/Shifokorlar";
import ShifokorlarX from "./pages/biznishifokorlar/ShifokorlarX";
import ShifokorlarXDetail from "./pages/biznishifokorlar/ShifokorlarXDetail";


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route path="/shifokormaslaxat" element={<Shifokormaslaxat />} />
        <Route path="/mdetail/:yonalishi" element={<MaslaxatDetail />} />
        
        <Route path="/bolalars" element={<BolalarS/>}/>
        <Route path="/bolalar/:yonalishi" element={<BolalarDetail/>}/>

        <Route path="/chegirma" element={<Chegirma/>}/>
        <Route path="/chegirma/:chegirmanomi" element={<ChegirmaDetail/>}/>
        
        <Route path="/terapevtik" element={<Terapevtik/>}/>
        <Route path="/terapevt/:yonalishi" element={<TerapevtDetail/>}/>
        
        
        <Route path="/EstetikStamatalogika" element={<EstetikStamatalogika/>}/>
        <Route path="/estetika/:yonalishi" element={<EstetikDetail/>}/>


        <Route path="/PeriAdanatalogiya" element={<PeriAdanatalogiya/>}/>
        <Route path="/periadanatalog/:yonalishi" element={<PeriAdanatalogiyaDetail/>}/>


        <Route path="/Protezlash" element={<Protezlash/>}/>
        <Route path="/protez/:yonalishi" element={<ProtezlashDetail/>}/>


        <Route path="/Diagnostika" element={<Diagnostika/>}/>
        <Route path="/diga/:yonalishi" element={<DiagnostikaDetail/>}/>

        <Route path="/Aktsiya" element={<Aktsiya/>}/>
        <Route path="/Akt/:nomi" element={<AktsiyaDetail/>}/>


        <Route path="/ShifokorlarX" element={<ShifokorlarX/>}/>
        <Route path="/detail/:name" element={<ShifokorlarXDetail/>}/>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
    return(
      <RouterProvider router={router} />
    ) ;
};

export default App;
