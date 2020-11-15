import qs from "querystringify";
import { Base } from "../base";
import { Pagination } from '../base'
import { user, NewUser, UpdateUser } from "./types";

const resourceName = "user";

export class User extends Base {
  getUserMe() {
    return this.get<user>(`${resourceName}/me`);
  }

  getInstancePrimary() {
    return this.get<user>(`${resourceName}/instance/primary`);
  }

  setInstancePrimary(instance_id: number) {
    let query = `${resourceName}/instance/primary`;
    query += qs.stringify(instance_id, "?");
    return this.post<user>(query);
  }

  getUserInstances(params?: Pagination) {
    let query = `${resourceName}/instance/primary`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<user>(`${resourceName}/instances`);
  }
}