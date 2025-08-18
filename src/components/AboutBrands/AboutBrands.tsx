import React from 'react';
import './AboutBrands.css';

const AboutBrands:React.FC = () => {
  return (
    <section className="about-brand section-offset">
      <div className="container">
        <div className="d-flex flex-column gap-5">
          <div className="d-flex flex-column flex-md-row gap-2 gap-md-4 justify-content-between">
            <h2 className="flex-shrink-0 headline-1 color-dark-blue about-brand__title">О бренде</h2>

            <div className="d-flex flex-column gap-4">
              <p className="text-1">
                Навесное оборудование Delta сочетает проверенные мировые решения с пониманием специфики российского рынка. Оптимальное соотношение цены и качества подтверждено 20-летней практикой.
              </p>

              <a href="#" className="button-main color-dark-blue">Узнать подробнее</a>
            </div>
          </div>

          <div className="row row-cols-2 row-cols-md-4 g-4">
            <article className="col">
              <div className="about-brand__card h-100 p-4">
                <div className="card-body d-flex flex-column justify-content-center align-items-center gap-2">
                  <p className="headline-1 color-dark-blue mb-0">2004</p>
                  <p className="headline-5 text-center">c 2004 года экскаваторщики выбирают Delta</p>
                </div>
              </div>
            </article>

            <article className="col">
              <div className="about-brand__card h-100 p-4">
                <div className="card-body d-flex flex-column justify-content-center align-items-center gap-2">
                  <p className="headline-1 color-dark-blue mb-0">35&nbsp;000+</p>
                  <p className="headline-5 text-center">проданных гидромолотов Delta в России</p>
                </div>
              </div>
            </article>

            <article className="col">
              <div className="about-brand__card h-100 p-4">
                <div className="card-body d-flex flex-column justify-content-center align-items-center gap-2">
                  <p className="headline-1 color-dark-blue mb-0">20</p>
                  <p className="headline-5 text-center">сервис-мобилей — выезд в любую точку России</p>
                </div>
              </div>
            </article>

            <article className="col">
              <div className="about-brand__card h-100 p-4">
                <a href="#video" className="">
                  <img src="/images/service/9217.jpg" className="object-fit-cover w-100 h-100" alt="Видео о Delta" />
                </a>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutBrands;
