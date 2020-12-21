import qs from "querystringify";
import { Base } from "../base";
import { customer } from "./types";

const resourceName = "customer";

export class Customer extends Base {
  getPassword(username: string) {
    const url = "customer/login";
    return this.post_auth<{ access_token }>(url, {
      username: username,
    });
  }

  customerVerify(usename: string, password: string) {
    const url = "customer/verify";
    return this.post_auth<{ access_token }>(url, {
      username: usename,
      password: password,
    });
  }

  getCustomerMe() {
    return this.get<customer>(`${resourceName}/me`);
  }

  getCostomerAddresses(customer_id: number) {
    let query = `${resourceName}/addresses/me`;
    console.log(query);
    return this.get<any[]>(query);
  }
}
