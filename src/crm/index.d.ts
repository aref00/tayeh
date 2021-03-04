import { Base } from "../base";
import { SendSmsParams, SendTypedSmsParams, sms } from "./types";
export declare class Crm extends Base {
    sendSms(params: SendSmsParams): Promise<import("axios").AxiosResponse<sms>>;
    sendTypedSms(type: any, params: SendTypedSmsParams): Promise<import("axios").AxiosResponse<sms>>;
}
