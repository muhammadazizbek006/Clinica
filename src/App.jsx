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
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
