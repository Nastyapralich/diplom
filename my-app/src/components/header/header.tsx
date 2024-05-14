import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Outlet, useNavigate } from "react-router-dom";
import style from "./header.module.scss";
import { NavBar } from "../navBar/navBar";
import { Button } from "antd";
import Input from "../input/input";
import { RoutesList } from "../../pages/router";
import { Footer } from "../footer/footer";

export const Header = () => {
  const navigate = useNavigate();
  const onCatalogClick = () => {
    navigate(RoutesList.Catalog);
  };
  return (
    <div className={style.container}>
      <div className={style.headerWrap}>
        <div className={style.locationIcon}>
          <FontAwesomeIcon icon={faLocationDot} className={style.icon} />
          <span>Минск</span>
        </div>
        <div className={style.navContainer}>
          <NavBar
            content={[
              "Бренды",
              "Новости",
              "Оплата и доставка",
              "Контакты",
              "О компании",
            ]}
          />
        </div>
        <div className={style.phoneInfo}>
          <p>+37533333333</p>
        </div>
        <div className={style.logIn}>
          <FontAwesomeIcon icon={faUser} className={style.icon} />
          <span>Вход</span>
        </div>
      </div>

      <div className={style.underHeader}>
        <div className={style.logo}>
          <img
            src="https://stroyinstrument.by/upload/resize_cache/webp/bitrix/templates/elektro_flat/images/logo2.webp"
            alt="logo"
          />
          <span>СТРОЙИНСТРУМЕНТ-М</span>
        </div>

        <Button
          onClick={onCatalogClick}
          type="primary"
          className={style.catalogItem}
        >
          <FontAwesomeIcon icon={faBars} /> Каталог
        </Button>
        <Input placeholder={"Поиск товара"} onСhange={() => {}} />
      </div>

      <Outlet />
      <Footer />
    </div>
  );
};
