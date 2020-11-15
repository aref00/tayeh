import qs from "querystringify";
import { Base } from "../base";
import { media, NewMedia } from "./types";

const resourceName = "media";

export class Media extends Base {
  getMedia(media_id: number) {
    return this.get<media>(`${resourceName}/get/${media_id}`);
  }

  uploadMedia(params: NewMedia) {
    let query = `${resourceName}/upload`;
    return this.post<media>(query, params);
  }
}
