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

import Shifokormaslaxat from "./pages/Shifokormaslaxat";
import MaslaxatDetail from "./pages/MaslaxatDetail";

import BolalarS from "./pages/BolalarS";
import BolalarDetail from "./pages/BolalarDetail";
import ChegirmaDetail from "./pages/ChegirmaDetail";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/shifokormaslaxat" element={<Shifokormaslaxat />} />
        <Route path="/mdetail/:yonalishi" element={<MaslaxatDetail />} />
        <Route path="/bolalars" element={<BolalarS/>}/>
        <Route path="/bolalar/:yonalishi" element={<BolalarDetail/>}/>
        <Route path="/chegirmaDetail/:chegirmanomi" element={<ChegirmaDetail/>}/>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
