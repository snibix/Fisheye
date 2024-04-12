// Récuperation des données du fichier JSON
export async function getData() {
  const data = await fetch("./data/photographers.json").then((response) => {
    return response.json();
  });
  return data;
}

export async function getPhotographers() {
  const data = await getData();
  // et bien retourner le tableau photographers seulement une fois récupéré
  return {
    photographers: data.photographers,
  };
}

export async function getPhotographer(id) {
  const data = await getData();
  const medias = data.media.filter((media) => media.photographerId === id);
  const photographer = data.photographers.find(
    (photographer) => photographer.id === id
  );
  photographer.medias = medias;
  photographer.likes = medias.reduce((carry, media) => {
    return carry + media.likes;
  }, 0);
  return photographer;
}
