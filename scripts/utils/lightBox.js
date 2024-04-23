import { MediaFactory } from "../components/MediaFactory.js";

export class Lightbox {
  constructor(selector = "#lightbox") {
    this.target = document.querySelector(selector);
    this.figure = this.target.querySelector(".figure");
    this.medias = [];
    this.current = -1;

    this.target.querySelector(".close").addEventListener("click", (e) => {
      console.log("close");
      e.preventDefault();
      this.close();
    });
    this.target.querySelector(".previous").addEventListener("click", (e) => {
      e.preventDefault();
      this.previous();
    });
    this.target.querySelector(".next").addEventListener("click", (e) => {
      e.preventDefault();
      this.next();
    });
    // Gestion des événements clavier
    document.addEventListener("keydown", (e) => {
      if (this.target.open) {
        switch (e.key) {
          case "Escape":
            this.close();
            break;
          case "ArrowLeft":
            this.previous();
            break;
          case "ArrowRight":
            this.next();
            break;
        }
      }
    });
  }

  show(medias, index) {
    this.medias = medias;
    this.update(index);
    this.target.showModal();
  }

  close() {
    this.target.close();
  }

  next() {
    this.update(this.current + 1);
  }

  previous() {
    this.update(this.current - 1);
  }

  update(index) {
    if (index < 0) {
      index = 0;
    } else if (index >= this.medias.length) {
      index = this.medias.length - 1;
    }
    this.current = index;
    const media = this.medias[this.current];
    this.figure.innerHTML = "";
    const figcaption = document.createElement("figcaption");
    figcaption.textContent = media.title;
    figcaption.className = "legend";
    this.figure.appendChild(new MediaFactory(media, false));
    this.figure.appendChild(figcaption);
  }
}

export const lightbox = new Lightbox("#lightbox");
