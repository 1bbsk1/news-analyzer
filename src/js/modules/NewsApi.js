export default class NewsApi {
  constructor(options) {
    this._options = options;
  }

  getNews(query) {
    const rightNow = new Date();
    const rightNowIsoString = rightNow.toISOString();

    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    const weekAgoIsoString = weekAgo.toISOString();

    const numArticles = 100;

    const language = "ru";

    const url = `${this._options.baseUrl}?q=${query}&from=${weekAgoIsoString}&to=${rightNowIsoString}&pageSize=${numArticles}&language=${language}`;

    return fetch(url, {
      method: "GET",
      headers: {
        "X-Api-Key": this._options.apiKey,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })

      .catch((err) => console.log(err));
  }
}
