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
import Vazifa from "./pages/Vazifa/Vazifa";
import Labaratoriye from "./pages/Labaratoriya/Labaratoriye";
import Rahbaryat from "./pages/Rahbaryat/Rahbaryat";
import Boglanish from "./pages/Bog'lanish/Bog'lanish";
import Loyhalar from "./pages/Loyihalar/Loyhalar";
import Yangiliklar from "./pages/Yangiliklar/Yangiliklar";
import Elonlar from "./pages/Elonlar/Elonlar";
import Jurnallar from "./pages/Jurnallar/Jurnallar";
import Maqola from "./pages/Maqola/Maqola";
import Kutubxona from "./pages/Kutubxona/Kutubxona";
import Root from "./pages/Root/Root";
import Kengash from "./pages/Kengash/Kengash";
import "animate.css";
import Single from "./pages/SinglePage/Single";
import LatestNews from "./pages/Root/LatestNews";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index path="/" element={<Root />} />
        <Route path="/tuzulma" element={<Tuzulma />} />
        <Route path="/vazifa" element={<Vazifa />} />
        <Route path="/labaratoriya" element={<Labaratoriye />} />
        <Route path="/raxbaryat" element={<Rahbaryat />} />
        <Route path="/boglanish" element={<Boglanish />} />
        <Route path="/loyhalar" element={<Loyhalar />} />
        <Route path="/yangiliklar" element={<LatestNews />} />
        <Route path="/elonlar" element={<Elonlar />} />
        <Route path="/jurnallar" element={<Jurnallar />} />
        <Route path="/maqola" element={<Maqola />} />
        <Route path="/kutubxona" element={<Kutubxona />} />
        <Route path="/kengash" element={<Kengash />} />
        <Route path="/singlenews" element={<Single />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
