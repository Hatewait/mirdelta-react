import React from 'react';

type SwiperSlideItemProps = {
  src: string,
  alt: string,
  heroDescription: string,
  description: string,
}

const SwiperSlideItem: React.FC<SwiperSlideItemProps> = ({src, alt, heroDescription, description}) => {
  return (
    <div className="d-flex flex-column justify-content-center">
      <img src={src} alt={alt} />

      <div className="d-flex flex-column main-page__main-slider_text">
        {heroDescription && <p className="hero">{heroDescription}</p>}
        <p>{description}</p>

        <div className="d-flex column-gap-md-4 column-gap-2">
          <button className="arrow left arrow_50 btn-reset" data-main-page-slider-arrow_prev>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.3161 0.0526552C4.00501 1.2527 -6.40646 23.2216 4.289 39.3114C13.978 53.8876 37.1522 53.5029 46.2231 38.4793C56.8266 20.926 43.805 -1.22266 23.3161 0.0526552ZM12.1321 42.7903C-4.61902 30.6058 3.44539 3.60681 24.5607 3.27648C36.2752 3.0925 45.2625 11.0789 46.6866 22.6487C48.9961 41.423 27.4507 53.942 12.1321 42.7945V42.7903Z"
                    fill="#4E6280"></path>
              <path d="M26.653 13.7006C25.0744 12.6427 23.3496 14.5829 24.5273 16.0338L31.9527 23.5184H12.3785C12.3492 23.5184 11.9316 23.7735 11.8606 23.832C11.0295 24.4801 11.0337 25.6802 11.8606 26.3283C11.9358 26.3868 12.3492 26.6419 12.3785 26.6419H31.9527L24.4771 34.1809C23.3579 35.7029 25.1913 37.5343 26.7073 36.4137L36.9893 26.1234C37.503 25.5422 37.503 24.6181 36.9893 24.0411L26.6488 13.7048L26.653 13.7006Z"
                    fill="#4E6280"></path>
            </svg>
          </button>
          <button className="arrow right arrow_50 btn-reset" data-main-page-slider-arrow_next>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.3161 0.0526552C4.00501 1.2527 -6.40646 23.2216 4.289 39.3114C13.978 53.8876 37.1522 53.5029 46.2231 38.4793C56.8266 20.926 43.805 -1.22266 23.3161 0.0526552ZM12.1321 42.7903C-4.61902 30.6058 3.44539 3.60681 24.5607 3.27648C36.2752 3.0925 45.2625 11.0789 46.6866 22.6487C48.9961 41.423 27.4507 53.942 12.1321 42.7945V42.7903Z"
                    fill="#4E6280"></path>
              <path d="M26.653 13.7006C25.0744 12.6427 23.3496 14.5829 24.5273 16.0338L31.9527 23.5184H12.3785C12.3492 23.5184 11.9316 23.7735 11.8606 23.832C11.0295 24.4801 11.0337 25.6802 11.8606 26.3283C11.9358 26.3868 12.3492 26.6419 12.3785 26.6419H31.9527L24.4771 34.1809C23.3579 35.7029 25.1913 37.5343 26.7073 36.4137L36.9893 26.1234C37.503 25.5422 37.503 24.6181 36.9893 24.0411L26.6488 13.7048L26.653 13.7006Z"
                    fill="#4E6280"></path>
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
};

export default SwiperSlideItem;
