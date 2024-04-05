import { mediaFactory } from "./mediaFactory.js";

export function mediaTemplate(data, clickImg) {
  const card = document.createElement("article");
  card.className = "card";
  card.dataset.id = data.id;

  const media = mediaFactory(data, true);
  media.addEventListener("click", clickImg);
  card.appendChild(media);

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const cardTitle = document.createElement("h3");
  cardTitle.className = "card-title";
  cardTitle.textContent = data.title;

  const cardLikes = document.createElement("div");
  cardLikes.className = "card-likes";

  const numberLikes = document.createElement("span");
  numberLikes.className = "number-likes";
  numberLikes.textContent = data.likes;
  cardLikes.appendChild(numberLikes);

  const btnLikes = document.createElement("button");
  btnLikes.className = "btn-likes";

  const heart = document.createElement("i");
  heart.className = "fa-solid fa-heart icon-likes";
  btnLikes.appendChild(heart);

  cardLikes.appendChild(btnLikes);

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardLikes);

  card.appendChild(cardBody);

  return card;
}
