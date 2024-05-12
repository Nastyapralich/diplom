import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/header/header";
import { MainPage } from "./MainPage/mainPage";
import { CatalogPage } from "./Catalog/catalog";

export enum RoutesList {
  Main = "/",
  Catalog = "/catalog",
}

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesList.Main} element={<Header />} >
             <Route path={RoutesList.Main} element={<MainPage />} />
             <Route path={RoutesList.Catalog} element={<CatalogPage />} />
        </Route>
       
      </Routes>
    </BrowserRouter>
  );
};
