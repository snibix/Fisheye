import { Image } from "./Image.js";
import { Video } from "./Video.js";

const PATH = `./assets/photographers/medias`;
export class MediaFactory {
  constructor(data, thumbnail = false) {
    if (data.image) {
      return new Image(PATH, data);
    } else if (data.video) {
      return new Video(PATH, data, thumbnail);
    } else {
      throw new Error("Format de media non pris en charge");
    }
  }
}
