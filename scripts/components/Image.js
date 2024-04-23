export class Image {
  constructor(path, data) {
    const img = document.createElement("img");
    img.src = `${path}/${data.photographerId}/${data.image}`;
    img.alt = data.title;
    img.className = "card-img picture";
    return img;
  }
}
