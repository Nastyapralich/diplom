import { useParams } from "react-router-dom";
import { MOCKAPI } from "../../redux/mockapi";
import style from "./detailPage.module.scss";
import { Button } from "antd";
import { faShop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const DetailPage = () => {
  const { article } = useParams();
  const card = MOCKAPI.filter((element, index) => {
    return element.article === article;
  });
  console.log(card);
  return (
    <div>
      {card.map((element, index) => {
        return (
          <div className={style.detailPageContainer}>
            <h1 className={style.title}>{element.title}</h1>
            <div className={style.upper}>
              <div className={style.img}>
                <img src={element.img} alt="#" />
              </div>

              <div className={style.textContainer}>
                <div className={style.mainFeatures}>
                  <div className={style.mainFeatureItem}>
                    <p> Артикул </p>
                    <p>{element.article}</p>
                  </div>
                  <div className={style.mainFeatureItem}>
                    <p> Страна производства </p>
                    <p>{element.country_of_origin}</p>
                  </div>
                  <div className={style.mainFeatureItem}>
                    <p> Гарантия </p>
                    <p>{element.warranty} </p>
                  </div>
                  <div className={style.mainFeatureItem}>
                    <p> Тип питания </p>
                    <p>{element.power_type}</p>
                  </div>
                  <div className={style.mainFeatureItem}>
                    <p> Потребляемая мощность, Вт </p>
                    <p>{element.power_consumption}</p>
                  </div>
                  <div className={style.mainFeatureItem}>
                    <p> Гарантия </p>
                    <p></p>
                  </div>
                </div>
                <div className={style.info}>
                  <div className={style.infoCard}>
                    <div className={style.infoUpper}>
                      <span>{element.price}</span>
                      <Button>Добавить в корзину</Button>
                      <span>Скидка: </span>
                    </div>
                    <div className={style.infoDescription}>
                      <div className={style.descrItem}>
                        <FontAwesomeIcon icon={faShop} /> <span>Самовывоз</span> <span>Минск-сегодня</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
