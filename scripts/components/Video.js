export class Video {
  constructor(path, data, thumbnail = false) {
    const media = document.createElement("video");
    media.src = `${path}/${data.photographerId}/${data.video}`;
    media.title = data.title;
    media.className = "card-img video";
    if (!thumbnail) {
      media.controls = true;
      media.muted = true;
      media.autoplay = true;
    }
    return media;
  }
}
