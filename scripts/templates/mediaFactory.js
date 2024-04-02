// Retourne une img ou une video
export const mediaFactory = (media, thumbnail = false) => {
  let content;
  let src;
  let path = `./assets/photographers/medias`;

  if (media.image) {
    content = document.createElement("img");
    content.src = `${path}/${media.photographerId}/${media.image}`;
    content.alt = media.title;
    content.className = "card-img picture";
  } else if (media.video) {
    content = document.createElement("video");
    content.src = `${path}/${media.photographerId}/${media.video}`;
    content.alt = media.title;

    if (!thumbnail) {
      content.setAttribute("controls", "");
    }
    content.className = "card-img video";
  }
  return content;
};

// Voir plus tard (utiliser une class pour faire la media factories)
// class mediaFactory {
//   constructor(data) {
//     if (data.image) {
//       //   const img = document.createElement("img");
//       return new img(data);
//     } else if (data.video) {
//       //   const media = document.createElement("video");
//       return new media(data);
//     } else {
//       throw "Format de media non pris en charge";
//     }
//   }
// }
