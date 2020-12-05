import { Pagination } from "../base";
export declare type SearchParams = Pagination & {
    search?: string;
};
export declare type SendSmsParams = {
    customers: number[];
    message: string;
};
export declare type SendTypedSmsParams = {
    customer: number;
    message: string;
};
export declare type sms = {
    sent: boolean;
    err: string;
    price: number;
};
