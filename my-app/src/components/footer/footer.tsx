import style from "./footer.module.scss";

export const Footer = () => {
  return (
    <div className={style.footerContainer}>
      <div className={style.footerItem}>
        <span>О компании</span>
        <div className={style.footerText}>
          <p>Вакансии</p>
        </div>
      </div>
      <div className={style.footerItem}>
        <span>Способы оплаты</span>
        <div className={style.footerText}>
          <p>Способы доставки</p>
          <p>Гарантия</p>
        </div>
      </div>
      <div className={style.footerItem}>
        <span>Пресс-центр</span>
        <div className={style.footerText}>
          <p>Новости</p>
        </div>
      </div>
      <div className={style.footerItem}>
        <span>Контакты</span>
        <div className={style.footerText}>
          <p>
           
          </p>
        </div>
      </div>
      <div className={style.footerItem}>
        <p>Склад</p>
      </div>
    </div>
  );
};
