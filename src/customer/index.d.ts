import { Base } from "../base";
import { customer } from "./types";
export declare class Customer extends Base {
    getPassword(username: string): Promise<import("axios").AxiosResponse<{
        access_token: any;
    }>>;
    customerVerify(usename: string, password: string): Promise<import("axios").AxiosResponse<{
        access_token: any;
    }>>;
    getCustomerMe(): Promise<import("axios").AxiosResponse<customer>>;
    getCostomerAddresses(customer_id: number): Promise<import("axios").AxiosResponse<any[]>>;
}
