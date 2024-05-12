import { useState } from "react";
import { CardsArray } from "../../components/cardArray/cardsArray";
import style from "./catalog.module.scss";
import classNames from "classnames";

export const CatalogPage = () => {
  const filterContent = [
    "Электроинструменты",
    "Оснастка к электроинструментам",
    "Ручной инструмент",
    "Инструменты измерительные",
    "Хозяйственный инвентарь",
    "Средства индивидуальной защиты",
    "Строительная техника и оборудование",
    "Сад и дача",
    "Климатическая техника",
    "Сварочное оборудование и материалы",
    "Крепеж",
    " Электротехническая продукция",
    "Сантехнические принадлежности",
    "Автомобильные аксессуары и химия",
    "'Масла и смазки'",
    "Строительные и отделочные материалы",
    "Запчасти",
  ];

  const [activeIndex, setActiveIndex] = useState(-1);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className={style.container}>
      <div className={style.filter}>
        {filterContent.map((el, index) => (
          <div
            key={index}
            className={classNames(style.filterItem, activeIndex === index && style.activeItem)}
            onClick={() => handleItemClick(index)}
          >
            <p className={style.filterText}>{el}</p>
          </div>
        ))}
      </div>
      <div className={style.contentCatalog}>
        <CardsArray />
      </div>
    </div>
  );
};
