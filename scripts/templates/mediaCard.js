import { lightbox } from "../utils/lightBox.js";
import { mediaFactory } from "./mediaFactory.js";

export function mediaCard(photographer, media, index) {
  const card = document.createElement("article");
  card.className = "card";
  card.dataset.id = media.id;

  const mediaElement = mediaFactory(media, true);
  mediaElement.addEventListener("click", () => {
    lightbox.show(photographer.medias, index);
  });
  card.appendChild(mediaElement);

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const cardTitle = document.createElement("h3");
  cardTitle.className = "card-title";
  cardTitle.textContent = media.title;

  const cardLikes = document.createElement("div");
  cardLikes.className = "card-likes";

  const numberLikes = document.createElement("span");
  numberLikes.className = "number-likes";
  numberLikes.textContent = media.likes;
  cardLikes.appendChild(numberLikes);

  const btnLikes = document.createElement("button");
  btnLikes.className = "btn-likes";

  // écouteur pour incrémenter ou décrémenter likes est total likes
  btnLikes.addEventListener("click", () => {
    if (media.liked) {
      media.likes--;
      photographer.likes--;
      media.liked = false;
    } else {
      media.likes++;
      photographer.likes++;
      media.liked = true;
    }
    const totalLikes = document.querySelector("#totalLikes");
    totalLikes.textContent = photographer.likes;
    numberLikes.textContent = media.likes;
  });

  const heart = document.createElement("i");
  heart.className = "fa-solid fa-heart icon-likes";

  btnLikes.appendChild(heart);

  cardLikes.appendChild(btnLikes);

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardLikes);

  card.appendChild(cardBody);

  return card;
}
