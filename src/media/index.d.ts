import { Base } from "../base";
import { media, NewMedia } from "./types";
export declare class Media extends Base {
    getMedia(media_id: number): Promise<import("axios").AxiosResponse<media>>;
    uploadMedia(params: NewMedia): Promise<import("axios").AxiosResponse<media>>;
}
