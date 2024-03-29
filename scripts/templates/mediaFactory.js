// Retourne une img ou une video
export const mediaFactory = (media, thumbnail = false) => {
  let content;
  let src;
  if (media.image) {
    content = document.createElement("img");
    content.src = `./assets/photographers/medias/${media.photographerId}/${media.image}`;
    content.alt = media.title;
    content.className = "card-img picture";
  } else if (media.video) {
    content = document.createElement("video");
    content.src = `./assets/photographers/medias/${media.photographerId}/${media.video}`;
    content.alt = media.title;

    if (!thumbnail) {
      content.setAttribute("controls", "");
    }
    content.className = "card-img video";
  }
  return content;
};
