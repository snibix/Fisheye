import { mediaTemplate } from "../templates/mediaCard.js";
import { mediaFactory } from "../templates/mediaFactory.js";
import { getPhotographer, getPhotographers } from "../utils/data.js";
import { Lightbox } from "../utils/lightBox.js";
import "./../utils/contactForm.js";

//Mettre le code JavaScript lié à la page photographer.html
function displayData(photographer) {
  const header = document.querySelector(".photograph-header");

  const photographTitle = header.querySelector(".photograph-title");
  photographTitle.textContent = photographer.name;

  const photographCountry = header.querySelector(".photograph-country");
  photographCountry.textContent = `${photographer.country}, ${photographer.city}`;

  const photographTagline = header.querySelector(".photograph-tagline");
  photographTagline.textContent = photographer.tagline;

  const photographImg = header.querySelector(".photograph-img");
  photographImg.src = `./assets/photographers/portrait/${photographer.portrait}`;

  displayMedias(photographer);

  const totalLikes = document.querySelector("#totalLikes");
  totalLikes.textContent = photographer.likes;

  const price = document.querySelector("#price");
  price.textContent = photographer.price;
}

function displayMedias(photographer) {
  const mediaSection = document.querySelector(".photograph-medias");
  photographer.medias.forEach((item, index) => {
    const media = mediaTemplate(photographer, item, (e) => {
      // showLightbox(photographer.medias, index);
      lightbox.show(photographer.medias, index);
    });
    mediaSection.appendChild(media);
  });
}

const lightbox = new Lightbox("#lightbox");

async function init() {
  let params = new URLSearchParams(window.location.search);
  let photographerId = parseInt(params.get("id"));
  console.log(photographerId);
  const photographer = await getPhotographer(photographerId);
  displayData(photographer);
}

init();
