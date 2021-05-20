import { Base } from "../base";
import { user } from "./types";
export declare class User extends Base {
    userLogin(username: string, password: string): Promise<import("axios").AxiosResponse<{
        access_token: any;
    }>>;
    getUserMe(): Promise<import("axios").AxiosResponse<user>>;
}
