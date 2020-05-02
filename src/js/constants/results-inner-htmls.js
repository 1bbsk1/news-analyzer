const notFoundInnerHTML = `<svg
class="results__icon"
width="96"
height="96"
viewBox="0 0 96 96"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<circle cx="43" cy="43" r="36.5" stroke="#D1D2D6" />
<path d="M69 69L88.5 88.5" stroke="#D1D2D6" />
<path
  d="M58.3283 55.9592C54.6606 51.6981 49.2275 49 43.1642 49C37.1009 49 31.6678 51.6981 28 55.9592"
  stroke="#D1D2D6"
/>
<circle cx="55.5" cy="33.5" r="1.5" fill="#D1D2D6" />
<circle cx="30.5" cy="33.5" r="1.5" fill="#D1D2D6" />
</svg>
<h3 class="results__not-found">Ничего не найдено</h3>
<p class="results__text"
>К сожалению по вашему запросу ничего не найдено.</p
>`;

const searchInProgressInnerHTML = `<i class="circle-preloader"></i>
<h3 class="results__text">Идет поиск новостей...</h3>`;

const resultsReadyInnerHTML = `<div class="results__header">
  <h2 class="results__title">Результаты поиска</h2>
  <a class="link results__link" href="./analytics/"
    >Посмотреть аналитику
  </a>
</div>
<div class="news-grid"> </div>
<button class="button results__button">Показать еще</button>`;

export { notFoundInnerHTML, searchInProgressInnerHTML, resultsReadyInnerHTML };
