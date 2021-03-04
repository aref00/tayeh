import qs from "querystringify";
import { Base } from "../base";
import {
  SendSmsParams,
  SendTypedSmsParams,
  sms,
} from "./types";

const resourceName = "crm";

export class Crm extends Base {
  // ---------- SHOP ----------
  sendSms(params: SendSmsParams) {
    const path = `${resourceName}/${this.instance_id}/send/normal`;
    return this.post<sms>(path, params);
  }

  sendTypedSms(type, params: SendTypedSmsParams) {
    const path = `${resourceName}/${this.instance_id}/send/typed/${type}`;
    return this.post<sms>(path, params);
  }
}
