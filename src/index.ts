import "./index.css";
import NewsApi from "./js/modules/NewsApi";
import NewsCard from "./js/components/NewsCard";
import NewsCardList from "./js/components/NewsCardList";
import SearchInput from "./js/components/SearchInput";
import { API_KEY, ENDPOINT } from "./js/constants/news-api-variables";
import { NewsArticle, NewsApiResponse, NewsCardConfig } from "./js/types";

const mainElement = document.querySelector(".main") as HTMLElement;
const searchInputElement = document.querySelector(
  ".search__input",
) as HTMLInputElement;
const searchButtonElement = document.querySelector(
  ".search__button",
) as HTMLButtonElement;
const authorSectionElement = document.querySelector(".author") as HTMLElement;

const searchInput = new SearchInput(searchInputElement);

const newsApi = new NewsApi({
  baseUrl: ENDPOINT,
  apiKey: API_KEY,
});

const cardList = new NewsCardList({
  container: mainElement,
  nextElement: authorSectionElement,
  showMoreHandler: showMoreHandler,
});

searchButtonElement.addEventListener("click", searchButtonClickHandler);

function searchButtonClickHandler(event: MouseEvent): void {
  event.preventDefault();
  searchButtonElement.disabled = true;
  searchInputElement.disabled = true;

  const queryString = searchInput.fetchQuery();
  cardList.renderLoading();

  newsApi
    .getNews(queryString)
    .then((response: NewsApiResponse) => {
      response.query = queryString;
      localStorage.setItem("newsData", JSON.stringify(response));

      const cardsArray = JSON.parse(
        localStorage.getItem("newsData") || "{}",
      ).articles.map((article: NewsArticle) => {
        return new NewsCard({
          title: article.title,
          text: article.description,
          image: article.urlToImage,
          date: article.publishedAt,
          source: article.source.name,
          url: article.url,
        } as NewsCardConfig);
      });

      cardList.addCards(cardsArray);
      cardList.renderNews();

      searchButtonElement.disabled = false;
      searchInputElement.disabled = false;
    })
    .catch((error: Error) => {
      console.error("Search failed:", error);
      cardList.renderNoResults();
      searchButtonElement.disabled = false;
      searchInputElement.disabled = false;
    });
}

function showMoreHandler(event: MouseEvent): void {
  event.preventDefault();
  cardList.loadBunch();
  if (cardList.isFinished()) {
    (event.currentTarget as HTMLElement).classList.add(
      "results__button_hidden",
    );
  }
}
