import { Base } from "../base";
import { media, UploadMedia } from "./types";
export declare class Media extends Base {
    getMedia(media_id: number): Promise<import("axios").AxiosResponse<media>>;
    uploadMedia(body: UploadMedia): Promise<import("axios").AxiosResponse<media>>;
}
