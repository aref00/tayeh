import { Base } from "../base";
import { UploadMedia } from "./types";
export declare class Media extends Base {
    getMedia(media_id: number): Promise<import("axios").AxiosResponse<any>>;
    uploadMedia(body: UploadMedia): Promise<import("axios").AxiosResponse<any>>;
}
