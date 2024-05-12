import { useNavigate } from "react-router-dom";
import { MOCKAPI, Product } from "../../redux/mockapi";
import { Card } from "../card/card";
import style from "./cardsArray.module.scss";

export const CardsArray = (props: Product) => {


  return (
    <div className={style.container}>

    
      {MOCKAPI.map((element, index) => (
        <div key={index}>
          <Card
          articte={element.article}
            img={element.img}
            title={element.title}
            price={element.price}
            onClick={()=>{}}
          />
        </div>
      ))}
    </div>
  );
};