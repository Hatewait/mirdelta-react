import React from 'react';
import './Flagships.css';

const Flagships: React.FC = () => {
  return (
    <section className="flagships section-offset" aria-labelledby="flagships-title">
      <div className="container d-flex flex-column row-gap-4 row-gap-lg-5">
        <p className="headline-1">Флагманы бренда</p>

        <div className="row row-cols-3">
          <div className="col">
            <div className="flagships__card">
              <p className="flagships__title headline-3" data-flagships-title>Гидромолот <br/> Delta FX15S</p>
              <p className="flagships__subtitle headline-4">Защита от коррозии до первого пуска</p>
              <img className="flagships__icon" src="/main-page/flagmans-1.png" alt="Гидромолот Delta FX15S" />
            </div>
          </div>

          <div className="col">
            <div className="flagships__card">
              <p className="flagships__title headline-3" data-flagships-title>Вибропогружатель <br/> Delta VM760</p>
              <p className="flagships__subtitle headline-4">Наработка на отказ — 7000 мото-часов</p>
              <img className="flagships__icon" src="/main-page/flagmans-2.png" alt="Гидромолот Delta FX15S" />
            </div>
          </div>

          <div className="col">
            <div className="flagships__card">
              <p className="flagships__title headline-3" data-flagships-title>Гидровращатель <br/> Delta RD–7</p>
              <p className="flagships__subtitle headline-4">Несмещаемый вал с пожизненной гарантией!</p>
              <img className="flagships__icon" src="/main-page/flagmans-3.png" alt="Гидромолот Delta FX15S" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flagships;
