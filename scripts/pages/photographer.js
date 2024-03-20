import { photographerTemplate } from "../templates/photographerCard.js";
import { getPhotographer, getPhotographers } from "../utils/data.js";

//Mettre le code JavaScript lié à la page photographer.html
let params = new URLSearchParams(window.location.search);
let photographerId = parseInt(params.get("id"));
console.log(photographerId);

console.log(await getPhotographer(photographerId));

function cardMediaPhotographer(photographerId, data) {
  const dataPhotographer = getPhotographer(photographerId);
  const { name, portrait, country, city, tagline, price, id } = data;
  function cardPhotographer(data, dataPhotographer) {
    const article = document.createElement("artcile");

    const img = document.createElement("img");

    const namePhotographer = document.createElement("h1");
    namePhotographer.textContent = name;

    article.appendChild(namePhotographer);
    return article;
  }
}
console.log(cardMediaPhotographer(photographerId, data));
