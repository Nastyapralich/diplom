import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/header/header";
import { MainPage } from "./MainPage/mainPage";
import { CatalogPage } from "./Catalog/catalog";
import { DetailPage } from "./DetailPage/detailPage";

export enum RoutesList {
  Main = "/",
  Catalog = "/catalog",
  DetailPage = '/:article'
}

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesList.Main} element={<Header />} >
             <Route path={RoutesList.Main} element={<MainPage />} />
             <Route path={RoutesList.Catalog} element={<CatalogPage />} />
             <Route path={RoutesList.DetailPage} element={<DetailPage />} />
        </Route>
       
      </Routes>
    </BrowserRouter>
  );
};
