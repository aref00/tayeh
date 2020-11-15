import qs from "querystringify";
import { Base, Pagination } from "../base";
import { UserType, NewUser, UpdateUser } from "./types";

const resourceName = "user";

export class User extends Base {
  getUserMe() {
    return this.get<UserType>(`${resourceName}/me`);
  }

  getShopPrimary() {
    return this.get<UserType>(`${resourceName}/instance/primary`);
  }

  createShopPrimary(shop_id: number) {
    let query = `${resourceName}/instance/primary`;
    query += qs.stringify(shop_id, "?");
    return this.post<UserType>(query);
  }

  getUserShops(params?: Pagination) {
    let query = `${resourceName}/instance/primary`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<UserType>(`${resourceName}/instances`);
  }
}