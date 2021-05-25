import qs from "querystringify";
import { Base } from "../base";

const resourceName = "user";

export class User extends Base {
  userLogin(username: string, password: string) {
    const url = `${resourceName}/instance/${this.instance_id}/login`;
    return this.post_auth<{ access_token }>(url, {
      username: username,
      password: password,
    });
  }

  getUserMe() {
    return this.user_get<any>(`${resourceName}/me`);
  }
}
