import { useState } from "react";
import style from "./tabs.module.scss";
import classNames from "classnames";
import { Product } from "../../redux/mockapi";
import { log } from "console";

type TabsProps = {
  card: Product;
};

export const Tabs = (props: TabsProps) => {
  const [activeTab, setActiveTab] = useState("description");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className={style.tabsContainer}>
        <div
          className={classNames(
            style.tab,
            activeTab === "description" && style.active
          )}
          onClick={() => handleTabClick("description")}
        >
          О товаре
        </div>
        <div
          className={classNames(
            style.tab,
            activeTab === "specifications" && style.active
          )}
          onClick={() => handleTabClick("specifications")}
        >
          Характеристики
        </div>
        <div
          className={classNames(
            style.tab,
            activeTab === "availability" && style.active
          )}
          onClick={() => handleTabClick("availability")}
        >
          Наличие и доставка
        </div>
        <div
          className={classNames(
            style.tab,
            activeTab === "installment" && style.active
          )}
          onClick={() => handleTabClick("installment")}
        >
          Оплата частями
        </div>
        <div
          className={classNames(
            style.tab,
            activeTab === "reviews" && style.active
          )}
          onClick={() => handleTabClick("reviews")}
        >
          Отзывы
        </div>
        <div
          className={classNames(
            style.tab,
            activeTab === "questions" && style.active
          )}
          onClick={() => handleTabClick("questions")}
        >
          Вопросы
        </div>
      </div>

      <div className={style.tabContent}>
        {activeTab === "description" && (
          <div className={style.item}>
            <p>{props.card.detailed_description}</p>
          </div>
        )}
        {activeTab === "specifications" && (
          <div className={style.specificationsContaainer}>
            <div className={style.item}>
              <span>Артикул </span>
              <p>{props.card.article}</p>
            </div>
            <div className={style.item}>
              <span>Название</span> <p>{props.card.title}</p>
            </div>

            <div className={style.item}>
              <span>Бренд</span> <p> {props.card.brands}</p>
            </div>
            {/* <div className={style.item}>Режим работы <p>{props.card.work_modes?.map((el)=>{return <span>{el}</span>})}</p></div> */}
            <div className={style.item}>
              <span>Тип аккумулятора</span> <p>{props.card.power_type}</p>
            </div>
            <div className={style.item}>
              <span>Батарея</span> <p>{props.card.battery_voltage}</p>
            </div>
            <div className={style.item}>
              <span>Картридж</span> <p>{props.card.cartridge_type}</p>
            </div>
            <div className={style.item}>
              <span>Уровень звукового шума</span>{" "}
              <p>{props.card.sound_pressure_level}</p>
            </div>
            <div className={style.item}>
              <span>Скорость оборотов</span> <p>{props.card.idle_speed}</p>
            </div>
            <div className={style.item}>
              <span>Удары в минуту</span> <p>{props.card.strokes_per_minute}</p>
            </div>
            <div className={style.item}>
              <span>Рукоядка</span> <p>{props.card.handle}</p>
            </div>
            <div className={style.item}>
              <span>Вес</span> <p>{props.card.weight}</p>
            </div>
            <div className={style.item}>
              <span>Артикул</span> <p>{props.card.article}</p>
            </div>
          </div>
        )}
        {activeTab === "availability" && 
        <div className={style.delivery}>
  <h2 className={style.delivery__title}>Доставка</h2>

  <div className={style.delivery__method}>
    <h3 className={style.delivery__method_title}>Доставка курьером до двери</h3>
    <p className={style.delivery__method_description}>
      Мы осуществляем доставку для юридических и физических лиц по всей территории Республики Беларусь.
    </p>
    <ul className={style.delivery__method_list}>
      <li className={style.delivery__method_item}>Стоимость доставки зависит от населенного пункта, суммы заказа и веса товара.</li>
      <li className={style.delivery__method_item}>Доступны следующие виды доставки:</li>
    </ul>
    <ul className={style.delivery__method_options}>
      <li className={style.delivery__method_option}>Доставка курьером до двери по Минску и РБ - осуществляем доставку в 23 000 населенных пункта!</li>
      <li className={style.delivery__method_option}>Стоимость и срок доставки рассчитываются в корзине, после выбора Вашего населенного пункта.</li>
      <li className={style.delivery__method_option}>Курьер свяжется с Вами и согласует удобное время доставки.</li>
    </ul>
    <div className={style.delivery__method_restrictions}>
      <h4 className={style.delivery__method_restrictions_title}>Ограничения по габаритам:</h4>
      <ul className={style.delivery__method_restrictions_list}>
        <li className={style.delivery__method_restrictions_item}>Максимальный вес 1-го отправления – 50 кг;</li>
        <li className={style.delivery__method_restrictions_item}>Любой из габаритов грузового места: длина, ширина, высота не более 1,5 м;</li>
        <li className={style.delivery__method_restrictions_item}>Максимальные габариты одного места — 3 м по сумме двух измерений (сумма длины и наибольшей окружности, взятой в любом направлении, кроме длины).</li>
      </ul>
    </div>
    <p className={style.delivery__method_cost}>Стоимость доставки от 3 рублей</p>
  </div>

  <div className={style.delivery__method}>
    <h3 className={style.delivery__method_title}>Доставка курьером до пункта самовывоза Автолайтэкспресс</h3>
    <p className={style.delivery__method_description}>
      Мы осуществляем доставку для юридических и физических лиц по всей территории Республики Беларусь.
    </p>
    <ul className={style.delivery__method_list}>
      <li className={style.delivery__method_item}>Стоимость доставки зависит от населенного пункта, суммы заказа и веса товара.</li>
      <li className={style.delivery__method_item}>Доступны следующие виды доставки:</li>
    </ul>
    <ul className={style.delivery__method_options}>
      <li className={style.delivery__method_option}>Доставка курьером до пункта самовывоза Автолайтэкспресс</li>
      <li className={style.delivery__method_option}>56 пунктов самовывоза на территории РБ.</li>
      <li className={style.delivery__method_option}>Стоимость и срок доставки рассчитываются в корзине, после выбора Вашего населеленного пункта.</li>
      <li className={style.delivery__method_option}>Вы получаете уведомление о готовности заказа по SMS или электронной почте.</li>
      <li className={style.delivery__method_option}>Срок хранения заказа в пункте самовывоза - 7 дней.</li>
    </ul>
    <div className={style.delivery__method_restrictions}>
      <h4 className={style.delivery__method_restrictions_title}>Ограничения по габаритам:</h4>
      <ul className={style.delivery__method_restrictions_list}>
        <li className={style.delivery__method_restrictions_item}>Максимальный вес 1-го отправления – 50 кг;</li>
        <li className={style.delivery__method_restrictions_item}>Любой из габаритов грузового места: длина, ширина, высота не более 1,5 м;</li>
        <li className={style.delivery__method_restrictions_item}>Максимальные габариты одного места — 3 м по сумме двух измерений (сумма длины и наибольшей окружности, взятой в любом направлении, кроме длины).</li>
      </ul>
    </div>
    <p className={style.delivery__method_cost}>Стоимость доставки от 2 рублей</p>
  </div>
</div>}
        {activeTab === "installment" && <div className="payment">
  <h2 className="payment__title">Оплата услуг</h2>
  <p className="payment__description">Оплатить услуги Вы можете через систему "Расчет" (ЕРИП), в любом удобном для Вас месте, в удобное для Вас время, в удобном для Вас пункте банковского обслуживания: интернет-банкинге, М-банкинге, инфокиоске, кассе банков, банкомате и т.д. Совершить оплату можно с использованием наличных денежных средств, электронных денег и банковских платежных карточек в пунктах банковского обслуживания банков, которые оказывают услуги по приему платежей, а также посредством инструментов дистанционного банковского обслуживания.</p>

  <p className="payment__note">Оплата через ЕРИП производиться только после подтверждения заказа менеджером и получения номера заказа!</p>

  <h3 className="payment__instructions-title">ДЛЯ ПРОВЕДЕНИЯ ПЛАТЕЖА НЕОБХОДИМО:</h3>
  <ol className="payment__instructions-list">
    <li className="payment__instruction">Согласовать с менеджером способ оплаты и получить Номер заказа.</li>
    <li className="payment__instruction">Выбрать:</li>
    <ul className="payment__sub-list">
      <li className="payment__sub-instruction">Пункт "Система "Расчет" (ЕРИП)"</li>
      <li className="payment__sub-instruction">"Интернет-магазины/сервисы"</li>
      <li className="payment__sub-instruction">"A-Z Латинские домены"</li>
      <li className="payment__sub-instruction">"S"</li>
      <li className="payment__sub-instruction">"Stroyinstrument.by" (Обратите внимание на правильное написание домена, в дереве услуг ЕРИП есть похожие домены)</li>
    </ul>
    <li className="payment__instruction">Для оплаты ввести Номер заказа.</li>
    <li className="payment__instruction">Проверить корректность информации.</li>
    <li className="payment__instruction">Совершить платеж.</li>
  </ol>

  <p className="payment__note">Если Вы осуществляете платеж в кассе банка, пожалуйста, сообщите кассиру о необходимости проведения платежа через систему "Расчет" (ЕРИП).</p>
</div>}
        {activeTab === "reviews" && <p>Отзывы о товаре</p>}
        {activeTab === "questions" && <p>Вопросы о товаре</p>}
      </div>
    </>
  );
};
