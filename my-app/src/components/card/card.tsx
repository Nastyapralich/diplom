import { Button } from "antd";
import style from "./card.module.scss";
import { useNavigate } from "react-router-dom";
import { RoutesList } from "../../pages/router";
import { Product } from "../../redux/mockapi";

type CardProps = {
  articte?: string;
  img?: string;
  title?: string;
  price?: string | number;
  onClick: () => void;
  product?: Product;
};

export const Card = (props: CardProps) => {
  const generateRating = (): number => {
    const rating = Math.random() * (5.0 - 4.0) + 4.0;
    return parseFloat(rating.toFixed(1));
  };

  const rating = generateRating();

  const calculateDiscount = (
    price: string
  ): { discount: number; discountedPrice: number } => {
    const discountPercentage = Math.floor(Math.random() * 6) + 5;
    const discountAmount = (Number(price) * discountPercentage) / 100;
    const discountedPrice = Number(price) - discountAmount;

    return {
      discount: discountPercentage,
      discountedPrice: discountedPrice,
    };
  };

  const navigate = useNavigate();
  const onTitleClick = (article: string | undefined) => {
    navigate(`/${article}`);
  };

  return (
    <div className={style.container}>
      <div className={style.img}>
        <img src={props.img} alt="" />
      </div>
      <div className={style.textContainer}>
        <div className={style.upperText}>
          <p className={style.titleCard} onClick={() => onTitleClick(props.articte)}>
            {props.title}
          </p>
          <div className={style.rait}>
            <span>{rating}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 17.314l-6.871 4.19a1 1 0 0 1-1.414-1.057l1.96-7.39-5.226-4.531a1 1 0 0 1 .558-1.705l7.638-.63 2.976-7.017a1 1 0 0 1 1.79 0l2.976 7.017 7.638.63a1 1 0 0 1 .558 1.705l-5.226 4.53 1.96 7.392a1 1 0 0 1-1.413 1.056L12 17.314z" />
            </svg>
          </div>
        </div>
        <div className={style.price}>
          <div className={style.newPrice}>
            {calculateDiscount(`${props.price}`).discountedPrice}
            <span>руб</span>
          </div>
          <div className={style.oldPrice}>
            {props.price}
            <span>руб</span>
            <div className={style.discount}>
              {calculateDiscount(`${props.price}`).discount} %
            </div>
          </div>
        </div>
        <Button type="primary" className={style.btnBye} onClick={props.onClick}>
          В корзину
        </Button>
      </div>
    </div>
  );
};
