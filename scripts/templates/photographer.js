export function photographerTemplate(data) {
  const { name, portrait, country, city, tagline, price } = data;

  const picture = `assets/photographers/Portrait/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    const h2 = document.createElement("h2");
    const countryElement = document.createElement("p");
    const taglineElement = document.createElement("p");
    const priceElement = document.createElement("p");

    h2.textContent = name;
    h2.classList.add("namePhotographer");
    countryElement.textContent = city + ", " + country;
    countryElement.classList.add("countryPhotographer");
    taglineElement.textContent = tagline;
    priceElement.textContent = price + "€ /jour";
    /***On rattache l'élément crée a un parent */
    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(countryElement);
    article.appendChild(taglineElement);
    article.appendChild(priceElement);
    return article;
  }
  return { name, picture, getUserCardDOM };
}
