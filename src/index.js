import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./index.css";

import Tuzulma from "./pages/Tuzulma/Tuzulma";
// import Vazifa from "./pages/Vazifa/Vazifa";
import Labaratoriye from "./pages/Labaratoriya/Labaratoriye";
import Rahbaryat from "./pages/Rahbaryat/Rahbaryat";
import Boglanish from "./pages/Bog'lanish/Bog'lanish";
import Loyhalar from "./pages/Loyihalar/Loyhalar";
import Elonlar from "./pages/Elonlar/Elonlar";
import Jurnallar from "./pages/Jurnallar/Jurnallar";
import Maqola from "./pages/Maqola/Maqola";
import Kutubxona from "./pages/Kutubxona/Kutubxona";
import Root from "./pages/Root/Root";
import Kengash from "./pages/Kengash/Kengash";

import "animate.css";

import NewsSingle from "./pages/NewsSingle/Single";
import ElonlarSingle from "./pages/ElonlarSingle/Single";
import LoyihalarSingle from "./pages/LoyihalarSingle/Single";
import IlmiyKengashSingle from "./pages/KengashSingle/Single";
import Yangiliklar from "./pages/Yangiliklar/Yangiliklar";
import LabaratoriyaMudrlari from "./pages/InstitutTarkibi/LabaratoriyaMudrlari";
import BolimBoshliqlari from "./pages/InstitutTarkibi/BolimBoshliqlari";
import InstitutTarixi from "./pages/InstitutTarixi/InstitutTarixi";
import SingleMudir from "./pages/InstitutTarkibi/SingleMudir";
import SingleBolim from "./pages/InstitutTarkibi/SingleBolim";

import "./i18n";
import SingleRaxbariyat from "./pages/Rahbaryat/SingleRaxbariyat";
import Doktrant from "./pages/Doktrantlar/Doktrant";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index path="/" element={<Root />} />
        <Route path="/tuzulma" element={<Tuzulma />} />
        {/* <Route path="/vazifa" element={<Vazifa />} /> */}
        <Route path="/labaratoriya" element={<Labaratoriye />} />
        <Route path="/raxbaryat" element={<Rahbaryat />} />
        <Route path="/boglanish" element={<Boglanish />} />
        <Route path="/loyhalar" element={<Loyhalar />} />
        <Route path="/yangiliklar" element={<Yangiliklar />} />
        <Route path="/elonlar" element={<Elonlar />} />
        <Route path="/jurnallar" element={<Jurnallar />} />
        <Route path="/maqola" element={<Maqola />} />
        <Route path="/kutubxona" element={<Kutubxona />} />
        <Route path="/kengash" element={<Kengash />} />
        <Route path="/news/:id" element={<NewsSingle />} />
        <Route path="/elonlar/:id" element={<ElonlarSingle />} />
        <Route path="/loyihalar/:id" element={<LoyihalarSingle />} />
        <Route path="/kengash/:id" element={<IlmiyKengashSingle />} />
        <Route
          path="/laboratoriya-mudrlari"
          element={<LabaratoriyaMudrlari />}
        />
        <Route path="/bolim-boshliqlari" element={<BolimBoshliqlari />} />
        <Route path="/institut-tarixi" element={<InstitutTarixi />} />
        <Route path="/mudirlar/:id" element={<SingleMudir />} />
        <Route path="/bolimlar/:id" element={<SingleBolim />} />
        <Route path="/raxbaryat/:id" element={<SingleRaxbariyat />} />
        <Route path="/doktrantlar" element={<Doktrant />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
