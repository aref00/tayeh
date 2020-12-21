import { Base } from "../base";
import { Pagination } from '../base';
import { user } from "./types";
export declare class User extends Base {
    getUserMe(): Promise<import("axios").AxiosResponse<user>>;
    getInstancePrimary(): Promise<import("axios").AxiosResponse<user>>;
    setInstancePrimary(instance_id: number): Promise<import("axios").AxiosResponse<user>>;
    getUserInstances(params?: Pagination): Promise<import("axios").AxiosResponse<user>>;
}
