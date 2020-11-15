import { Base } from "../base";
import { Pagination } from '../base';
import { user } from "./types";
export declare class User extends Base {
    getUserMe(): Promise<user>;
    getInstancePrimary(): Promise<user>;
    setInstancePrimary(instance_id: number): Promise<user>;
    getUserInstances(params?: Pagination): Promise<user>;
}
