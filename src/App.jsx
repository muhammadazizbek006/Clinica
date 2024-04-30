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
import KlinikaXadiqa from "./pages/klinikaxaqida/KlinikaXadiqa";

import Kontaktlar from "./pages/kontaktlar/Kontaktlar";

import Implantatsiya from "./pages/implantatsiya/Implantatsiya";
import ImplantatsiyaDetail from "./pages/implantatsiya/ImplantatsiyaDetail";


import Ortodontiya from './pages/ortodontiya/Ortodontiya'
import OrtodontiyaDetail from './pages/ortodontiya/OrtodontiyaDetail'

import Barchaxizmatlar from "./pages/barchaxizmatlar/Barchaxizmatlar";
import OmmabopxizmatlarDetail from "./components/OmmabopxizmatlarDetail";

import BolalarStamatalogiyasi from "./pages/bolalar/BolalarStamatalogiyasi";
import Yangiliklar from "./pages/yangiliklar/Yangiliklar";
import YangiliklarDetail from './pages/yangiliklar/YangiliklarDetail'
import OmmabopXizmatlar from "./components/Home/OmmabopXizmatlar";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route path="/Tish shifokori bilan maslahatlashuv" element={<Shifokormaslaxat />} />
        <Route path="/Tish shifokori bilan maslahatlashuv/:yonalishi" element={<MaslaxatDetail />} />
        
        <Route path="/BolalarStamatalogiyasi" element={<BolalarStamatalogiyasi/>}/>
        <Route path="/BolalarStamatalogiyasi/:yonalishi" element={<BolalarDetail/>}/>

        <Route path="/chegirma" element={<Chegirma/>}/>
        <Route path="/chegirma/:nomi" element={<ChegirmaDetail/>}/>
        
        <Route path="/terapevtik" element={<Terapevtik/>}/>
        <Route path="/terapevtik/:yonalishi" element={<TerapevtDetail/>}/>
        
        
        <Route path="/EstetikStamatalogika" element={<EstetikStamatalogika/>}/>
        <Route path="/EstetikStamatalogika/:yonalishi" element={<EstetikDetail/>}/>


        <Route path="/PeriAdanatalogiya" element={<PeriAdanatalogiya/>}/>
        <Route path="/PeriAdanatalogiya/:yonalishi" element={<PeriAdanatalogiyaDetail/>}/>


        <Route path="/Protezlash" element={<Protezlash/>}/>
        <Route path="/Protezlash/:yonalishi" element={<ProtezlashDetail/>}/>


        <Route path="/Diagnostika" element={<Diagnostika/>}/>
        <Route path="/Diagnostika/:yonalishi" element={<DiagnostikaDetail/>}/>

        <Route path="/Aktsiya" element={<Aktsiya/>}/>
        <Route path="/Aktsiya/:nomi" element={<AktsiyaDetail/>}/>


        <Route path="/barchaxizmatlar" element={<Barchaxizmatlar/>}/>

        <Route path="/ShifokorlarX" element={<ShifokorlarX/>}/>
        <Route path="/shifokorlarx/:name" element={<ShifokorlarXDetail/>}/>

        <Route path="/implantatsiya" element={<Implantatsiya/>}/>
        <Route path="/implantatsiya/:yonalishi" element={<ImplantatsiyaDetail/>}/>


        <Route path="/ortodontiya" element={<Ortodontiya/>}/>
        <Route path="/ortodontiya/:yonalishi" element={<OrtodontiyaDetail/>}/>
        <Route path="/:xizmat" element={<OmmabopxizmatlarDetail/>}/>
        
        <Route path="/kilinikaxaqida" element={<KlinikaXadiqa/>}/>

        <Route path="/Yangiliklar" element={<Yangiliklar/>}/>
        <Route path="/Yangiliklar/:nomi" element={<YangiliklarDetail/>}/>
        <Route path="/kontaktlar" element={<Kontaktlar/>}/>


        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
    return(
      <RouterProvider router={router} />
    ) ;
};

export default App;
