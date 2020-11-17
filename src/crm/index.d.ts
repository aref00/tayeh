import { Base } from "../base";
import { SendSmsParams, SendTypedSmsParams, sms } from "./types";
export declare class Crm extends Base {
    sendSms(shop_id: number, params: SendSmsParams): Promise<sms>;
    sendTypedSms(shop_id: number, type: any, params: SendTypedSmsParams): Promise<sms>;
}
