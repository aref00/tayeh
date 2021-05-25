import qs from "querystringify";
import { Base } from "../base";
import { UploadMedia } from "./types";

const resourceName = "media";

export class Media extends Base {
  getMedia(media_id: number) {
    return this.get<any>(`${resourceName}/get/${media_id}`);
  }

  uploadMedia(body: UploadMedia) {
    let path = `image`;
    return this.post_media<any>(path, body);
  }
}
