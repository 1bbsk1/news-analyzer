import "./index.css";
import Statistics from "../js/components/Statistics";

const graphContainer = document.querySelector(".analytics") as HTMLElement;
const newsData = localStorage.getItem("newsData");

if (graphContainer && newsData) {
  new Statistics(graphContainer, newsData).render();
}
