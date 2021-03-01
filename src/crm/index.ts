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
  sendSms(shop_id: number, params: SendSmsParams) {
    const path = `${resourceName}/${shop_id}/send/normal`;
    return this.post<sms>(path, params);
  }

  sendTypedSms(shop_id: number, type, params: SendTypedSmsParams) {
    const path = `${resourceName}/${shop_id}/send/typed/${type}`;
    return this.post<sms>(path, params);
  }
}
