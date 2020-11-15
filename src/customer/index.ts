import qs from "querystringify";
import { Base } from "../base";
import { customer } from "./types"

const resourceName = "customer";

export class Customer extends Base {
    getCustomerMe(instance_id: number) {
        return this.get<customer>(`${resourceName}/${instance_id}/me`);
      }
}