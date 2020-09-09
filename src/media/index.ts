import qs from "querystringify";
import { Base } from "../base";
import { MediaType, NewMedia } from "./types";

const resourceName = "media";

export class Media extends Base {
  getMedia(media_id: number) {
    return this.get<MediaType>(`${resourceName}/get/${media_id}`);
  }

  createMedia(params: NewMedia) {
    let query = `${resourceName}/upload`;
    return this.post<MediaType>(query, params);
  }
}
