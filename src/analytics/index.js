import "./index.css";
import Statistics from "../js/components/Statistics.js";
const graphContainer = document.querySelector(".analytics");

new Statistics(graphContainer, sessionStorage.getItem("newsData")).render();
