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
// class Img {
//   constructor(data) {
//     this.path = `./assets/photographers/medias`;
//     this.img = document.createElement("img");
//     this.img.src = `${path}/${media.photographerId}/${media.image}`;
//     this.img.alt = data.media.title;
//   }
// }

// class Video {
//   constructor(data) {
//     this.path = `./assets/photographers/medias`;
//     this.media = document.createElement("video");
//     this.media.src = `${path}/${media.photographerId}/${media.video}`;
//   }
// }

// class mediaFactory {
//   constructor(data) {
//     if (data.image) {
//       return new Img(data);
//     } else if (data.video) {
//       return new Video(data);
//     } else {
//       throw "Format de media non pris en charge";
//     }
//   }
// }
