import React from 'react';
import './Features.css';

const Features:React.FC = () => {
  return (
    <section className="features section-offset">
      <div className="container">
        <div className="d-flex flex-column gap-4 gap-lg-5">
          <h2 id="features-title" className="headline-1 color-dark-blue text-center">Почему выбирают Delta</h2>
          <div className="row row-cols-2 row-cols-md-4 g-4">
            <article className="col d-flex flex-column align-items-center gap-2 feature">
              <img className="feature__icon" src="/main-page/icon-expertise.png" alt="Экспертиза" />
              <h3 className="title-1 color-dark-blue d-flex align-items-center text-center feature__title">Экспертиза</h3>
              <p className="d-none d-lg-block text-2 text-center feature__text">За нами опыт и огромный фонд знаний о подборе, эксплуатации и обслуживании навески</p>
            </article>
            <article className="col d-flex flex-column align-items-center gap-2 feature">
              <img className="feature__icon" src="/main-page/icon-new.png" alt="Новые решения" />
              <h3 className="title-1 color-dark-blue d-flex align-items-center text-center feature__title">Новые решения</h3>
              <p className="d-none d-lg-block text-2 text-center feature__text">Постоянное развитие технологий для ваших задач</p>
            </article>
            <article className="col d-flex flex-column align-items-center gap-2 feature">
              <img className="feature__icon" src="/main-page/icon-fast.png" alt="Оперативно и в наличии" />
              <h3 className="title-1 color-dark-blue d-flex align-items-center text-center feature__title">Оперативно и в наличии</h3>
              <p className="d-none d-lg-block text-2 text-center feature__text">Широкий спектр оборудования на складах и оперативное изготовление под заказ</p>
            </article>
            <article className="col d-flex flex-column align-items-center gap-2 feature">
              <img className="feature__icon" src="/main-page/icon-service.png" alt="Сервис" />
              <h3 className="title-1 color-dark-blue d-flex align-items-center text-center feature__title">Сервис</h3>
              <p className="d-none d-lg-block text-2 text-center feature__text">Оперативное решение ваших проблем в любой точке страны</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
