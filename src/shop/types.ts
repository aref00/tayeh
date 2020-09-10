import { Pagination } from "../base";

export type SearchParams = Pagination & {
  search?: string;
};

export type RevenueParams = {
  unit?: string;
  product_id?: number;
  start?: number;
  end?: number;
};

export type TotalParams = Pagination & {
  product_id?: number;
};

export type SeriesParams = Pagination & {
  type?: string;
  page_unit?: string;
};

export type ShopPageParams = {
  text?: string;
  creator_id?: number;
};

export type ShopCenter = {};

export type NewShop = {};

export type UpdateShop = {
  shop_id: number;
};

export type NewProduct = {};

export type UpdateProduct = {
  product_id: number;
};

export type NewTransaction = {};

export type UpdateTransaction = {
  transaction_id: number;
};

export type NewInvoice = {};

export type UpdateInvoice = {
  invoice_id: number;
};

export type NewCustomer = {};

export type UpdateCustomer = {
  customer_id: number;
};

export type NewUser = {};

export type UpdateUser = {
  user_id: number;
};

export type NewAddress = {};

export type UpdateAddress = {
  address_id: number;
};
