import { mediaTemplate } from "../templates/mediaCard.js";
import { getPhotographer, getPhotographers } from "../utils/data.js";

//Mettre le code JavaScript lié à la page photographer.html
function displayData(photographer) {
  // ...
  const header = document.querySelector(".photograph-header");

  const photographTitle = header.querySelector(".photograph-title");
  photographTitle.textContent = photographer.name;

  const photographCountry = header.querySelector(".photograph-country");
  photographCountry.textContent = `${photographer.country}, ${photographer.city}`;

  const photographTagline = header.querySelector(".photograph-tagline");
  photographTagline.textContent = photographer.tagline;

  const photographImg = header.querySelector(".photograph-img");
  photographImg.src = `./assets/photographers/portrait/${photographer.portrait}`;

  const mediaSection = document.querySelector(".photograph-medias");
  photographer.medias.forEach((media) => {
    mediaSection.appendChild(mediaTemplate(media));
  });

  const totalLikes = document.querySelector("#totalLikes");
  totalLikes.textContent = photographer.medias.reduce((carry, media) => {
    return carry + media.likes;
  }, 0);

  const price = document.querySelector("#price");
  price.textContent = photographer.price;
}

async function init() {
  let params = new URLSearchParams(window.location.search);
  let photographerId = parseInt(params.get("id"));
  console.log(photographerId);
  const photographer = await getPhotographer(photographerId);
  displayData(photographer);
}

init();
