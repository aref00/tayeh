import { Base } from "../base";
import { customer } from "./types";
export declare class Customer extends Base {
    getCustomerMe(instance_id: number): Promise<customer>;
}
