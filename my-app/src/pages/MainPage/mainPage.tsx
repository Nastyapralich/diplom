import { SliderBlock } from "../../components/slider/slider";
import style from "./mainPage.module.scss";
import { Button } from "antd/es/radio";

export const MenuArray = [
  "Электроинструменты",
  "Ручной инструмент",
  "Строительная техника",
  "Хозяйственный инвентарь",
  "Сад и дача",
  "Климатическая техника",
  "Масла и смазки",
  "Запчасти",
];

export const MainPage = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.container}>
        {MenuArray.map((elem, index) => {
          return <span className={style.menuItem}>{elem}</span>;
        })}
      </div>
      <div className={style.sliderContainer}>
        <SliderBlock />
      </div>
      
    </div>
  );
};
