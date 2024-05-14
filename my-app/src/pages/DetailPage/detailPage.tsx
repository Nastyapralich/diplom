import React from "react";
import { useParams } from "react-router-dom";
import { MOCKAPI } from "../../redux/mockapi";
import style from "./detailPage.module.scss";
import { Button } from "antd";
import { faShop, faTruck, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Tabs } from "../../components/tabs/tabs";
import Slider from "react-slick";
import { CardsArray } from "../../components/cardArray/cardsArray";
import Modal from "../../components/moodal/modal";
import StarRating from "../../components/stars/stars";
import { useForm } from "react-hook-form";

export const DetailPage = () => {
  const { article } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  const card = MOCKAPI.filter((element) => element.article === article);

  const calculateDiscount = (price: string | number) => {
    const discountPercentage = Math.floor(Math.random() * 6) + 5;
    const discountAmount = (Number(price) * discountPercentage) / 100;
    const discountedPrice = Number(price) - discountAmount;

    return {
      discount: discountPercentage,
      discountedPrice: discountedPrice,
    };
  };

  const settings = {
    infinite: true,
    slidesToShow: 1,
    arrows: true,
  };

  const onSubmit = (data: any) => {
    // Обработка отправки формы
    console.log(data);
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div className={style.backToCatalog}>
        <p>
          <span>Главная </span>- <span>Каталог товаров</span> -{" "}
          <span>Электроинструменты</span> - <span>Шуруповерты</span>
        </p>
      </div>
      {card.map((element, index) => (
        <div className={style.detailPageContainer} key={index}>
          <h1 className={style.title}>{element.title}</h1>
          <div className={style.upper}>
            <div className={style.img}>
              <img src={element.img} alt="#" />
            </div>

            <div className={style.textContainer}>
              <div className={style.mainFeatures}>
                <div className={style.mainFeatureItem}>
                  <p>Артикул</p>
                  <p>{element.article}</p>
                </div>
                <div className={style.mainFeatureItem}>
                  <p>Страна производства</p>
                  <p>{element.country_of_origin}</p>
                </div>
                <div className={style.mainFeatureItem}>
                  <p>Гарантия</p>
                  <p>{element.warranty}</p>
                </div>
                <div className={style.mainFeatureItem}>
                  <p>Тип питания</p>
                  <p>{element.power_type}</p>
                </div>
                <div className={style.mainFeatureItem}>
                  <p>Потребляемая мощность, Вт</p>
                  <p>{element.power_consumption}</p>
                </div>
              </div>
              <div className={style.info}>
                <div className={style.infoCard}>
                  <div className={style.infoUpper}>
                    <div className={style.price}>
                      <div className={style.newPrice}>
                        {element.price &&
                          calculateDiscount(element.price).discountedPrice}
                        <span>руб</span>
                      </div>
                      <div className={style.oldPrice}>
                        {element.price}
                        <span>руб</span>
                        <div className={style.discount}>
                          {element.price &&
                            calculateDiscount(element.price).discount}
                          %
                        </div>
                      </div>
                    </div>

                    <div className={style.infoDescription}>
                      <div className={style.descrItem}>
                        <div>
                          <FontAwesomeIcon icon={faShop} />{" "}
                          <span>Самовывоз</span>{" "}
                        </div>
                        <span>Минск-сегодня</span>
                      </div>
                      <div className={style.descrItem}>
                        <div>
                          <FontAwesomeIcon icon={faTruck} />{" "}
                          <span>Доставка</span>{" "}
                        </div>

                        <span>Минск-завтра</span>
                      </div>
                      <div className={style.descrItem}>
                        <div>
                          <FontAwesomeIcon icon={faWallet} />{" "}
                          <span>Оплата</span>{" "}
                        </div>

                        <span>Минск-сегодня</span>
                      </div>
                    </div>
                    <Button
                      type="primary"
                      className={style.btn}
                      onClick={openModal}
                    >
                      Добавить в корзину
                    </Button>
                    <StarRating />
                  </div>
                  <Modal isOpened={modalIsOpen} onClose={closeModal}>
                    <div onClick={closeModal} className={style.onCloseModal}>
                      х
                    </div>
                    <span className={style.modalContainer}>
                      Оставить заявку
                    </span>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div>
                        <input
                          className={style.input}
                          type="text"
                          id="name"
                          placeholder="Введите имя"
                          {...register("name", { required: true })}
                        />
                        {errors.name && (
                          <span className={style.error}>Введите имя</span>
                        )}
                      </div>
                      <div>
                        <input
                          type="text"
                          className={style.input}
                          id="phone"
                          placeholder="Введите номер телефона"
                          {...register("phone", {
                            required: true,
                            pattern: {
                              value: /^[+]375\d{9}$/,
                              message:
                                "Введите корректный белорусский номер телефона",
                            },
                          })}
                        />
                        {errors.phone && (
                          <span className={style.error}>
                            Введите корректный номер
                          </span>
                        )}
                      </div>
                      <button
                        type="submit"
                        className={`${style.btnModal} ${
                          isValid ? style.activeBtn : ""
                        }`}
                        disabled={!isValid}
                        onClick={onSubmit}
                      >
                        Отправить
                      </button>
                    </form>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
          <div className={style.descriptionItem}>
            <Tabs card={element} />
          </div>
          <div className={style.similar}>
            {" "}
            <h2>Похожие товары</h2>
            <CardsArray />
          </div>
        </div>
      ))}
    </div>
  );
};
