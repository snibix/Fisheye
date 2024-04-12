import { mediaCard } from "../templates/mediaCard.js";
import { getPhotographer } from "../utils/data.js";
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
  mediaSection.innerHTML = "";
  photographer.medias.forEach((item, index) => {
    const media = mediaCard(photographer, item, index);
    mediaSection.appendChild(media);
  });
}

async function init() {
  let params = new URLSearchParams(window.location.search);
  let photographerId = parseInt(params.get("id"));
  console.log(photographerId);
  const photographer = await getPhotographer(photographerId);

  const dropDown = document.querySelector("#sort");
  sortBy(photographer.medias, dropDown.value);
  displayData(photographer);

  //Trie en fonction du dropdown
  dropDown.addEventListener("change", () => {
    sortBy(photographer.medias, dropDown.value);
    displayMedias(photographer);
  });
}

function sortBy(medias, by) {
  switch (by) {
    case "likes":
      medias.sort((media1, media2) => {
        return media2.likes - media1.likes;
      });
      break;
    case "titles":
      medias.sort((media1, media2) => {
        if (media1.title > media2.title) {
          return +1;
        } else if (media1.title < media2.title) {
          return -1;
        } else {
          return 0;
        }
        // return media1.title.localeCompare(media2.title);
      });
      break;
    case "dates":
      medias.sort((media1, media2) => {
        return (
          new Date(media2.date).getTime() - new Date(media1.date).getTime()
        );
      });
      break;
  }
}

init();
