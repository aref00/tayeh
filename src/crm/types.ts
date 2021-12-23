import { Pagination } from "../base";

export type SearchParams = Pagination & {
  search?: string;
};

export type SendSmsParams = {
  customers: number[];
  message: string;
};

export type SendTypedSmsParams = {
  customer: number;
  message: string;
};

export type sms = {
  sent: boolean;
  err: string;
  price: number;
};