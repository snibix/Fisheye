import { getPhotographer } from "../utils/data.js";

//Mettre le code JavaScript lié à la page photographer.html
let params = new URLSearchParams(window.location.search);
let photographerId = parseInt(params.get("id"));
console.log(photographerId);

console.log(await getPhotographer(photographerId));
