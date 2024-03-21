export function photographerTemplate(data) {
  const { name, portrait, country, city, tagline, price, id } = data;

  const picture = `assets/photographers/portrait/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    article.className = "card";

    const img = document.createElement("img");
    img.src = picture;
    img.className = "card-img";

    const h2 = document.createElement("h2");
    h2.textContent = name;
    h2.className = "card-title";

    const countryElement = document.createElement("p");
    countryElement.textContent = city + ", " + country;
    countryElement.className = "country_photographer";

    const taglineElement = document.createElement("p");
    taglineElement.textContent = tagline;

    const priceElement = document.createElement("p");
    priceElement.textContent = price + "€ /jour";

    const url = document.createElement("a");
    url.href = `./photographer.html?id=${id}`;

    /***On rattache l'élément crée a un parent */
    url.appendChild(img);
    url.appendChild(h2);
    article.appendChild(url);
    article.appendChild(countryElement);
    article.appendChild(taglineElement);
    article.appendChild(priceElement);
    return article;
  }
  return { name, picture, getUserCardDOM };
}
