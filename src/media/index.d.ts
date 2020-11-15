import { Base } from "../base";
import { media, NewMedia } from "./types";
export declare class Media extends Base {
    getMedia(media_id: number): Promise<media>;
    uploadMedia(params: NewMedia): Promise<media>;
}
