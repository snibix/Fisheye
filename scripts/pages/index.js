import { photographerTemplate } from "../templates/photographer.js";
import { getData } from "../utils/data.js";
async function getPhotographers() {
  const data = await getData();
  console.log(data);
  // et bien retourner le tableau photographers seulement une fois récupéré
  return {
    photographers: data.photographers,
  };
}

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerTemplate(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
