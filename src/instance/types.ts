import { Pagination } from "../base";
import { customer } from "../customer/types"
import { user } from '../user/types'

// ---------- ENUMS ----------

export enum Sex {
  male,
  female,
  na,
}

export enum user_role {
  user,
  manager,
  admin,
}

enum SubUser_Status {
  pending,
  accepted,
  rejected,
}

enum Invoice_Type {
  Sold,
  Bought,
}

enum Transaction_Type {
  buy,
  sell,
  income,
  cost,
}

// ---------- GENERAL ----------

export type SearchParams = Pagination & {
  search?: string;
};

export type CategoryParams = SearchParams & {
  show_filters?: boolean;
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

export type InstancePageParams = {
  text?: string;
  creator_id?: number;
};

export type reminder = {};

export type Province = {
  id: number;
  name: string;
  addresses: address[];
  instances: instance[];
  users: user[];
  date_created: Date;
  date_updated: Date;
};

export type City = {
  id: number;
  province_id: number;
  county_id: number;
  name: string;
  addresses: address[];
  instances: instance[];
  users: user[];
  date_created: Date;
  date_updated: Date;
};

type source = {
  id: number;
  to_transaction_id: number;
  to_transaction: Transaction;
  from_transaction_id: number;
  from_transaction: Transaction;
  count: number;
  date_created: Date;
  date_updated: Date;
};

export type Payment = {
  id: number;
  Amount: number;
  url: string;
  paid: boolean;
  type: string;
  user_id: number;
  subscription_id: number;
  invoice_id: number;
  user: user;
  date_created: Date;
  date_paid: Date;
};

export type subscription = {
  id: number;
  user_id: number;
  user: user;
  type: user;
  payment: Payment;
  gift: boolean;
  active: boolean;
  date_created: Date;
  date_updated: Date;
};

// ---------- INSTANCE ----------

export type instance = {
  id: number;
  name: string;
  credit: number;
  description: string;
  type: string;
  category: string;
  owner_id: number;
  addresses: address[];
  province_id: number;
  city_id: number;
  users_count: number;
  invoices_count: number;
  products_count: number;
  transactions_count: number;
  inventory_type: string;
  image_id: number;
};

export type NewInstance = {};

export type UpdateInstance = {
  instance_id: number;
};

// ---------- PRODUCTS ----------

export type Product = {
  id: number;
  name: string;
  description: string;
  instance_id: number;
  instance: instance;
  transactions: Transaction[];
  reminders: reminder[];
  predicted_percent: number;
  remaining: number;
  date_created: string;
};

export type NewProduct = {
  name: string;
  description?: string;
  predicted_percent?: number;
};

export type CreatedProduct = {
  err: string;
  response: string;
};

export type DeletedProduct = {
  err: string;
  response: string;
};

export type UpdateProduct = {
  id: number;
  name?: string;
  description?: string;
  predicted_percent?: number;
};

export type UpdatedProduct = {
  err: string;
  response: string;
};

// ---------- TRANSACTION ----------

export type Transaction = {
  id: number;
  transaction_no: number;
  instance_id: number;
  instance: instance;
  product_id: number;
  from_sources: source;
  to_transactions: source;
  reminders: reminder;
  count: number;
  remaining: number;
  value: number;
  type: Transaction_Type;
  name: string;
  paid: string;
  date_paid: string;
  description: string;
  invoice_id: number;
  options: string;
  locked: boolean;
  archived: boolean;
  creator_id: number;
  date_created: string;
  date_updated: string;
  date_archived: string;
};

export type NewTransaction = {
  product_id: number;
  count: number;
  value: number;
  name: string;
  description: string;
  type: Transaction_Type;
  paid: boolean;
};

export type CreatedTransaction = {
  err: string;
  transaction: Transaction;
};

export type UpdateTransaction = {
  id: number;
  product_id: number;
  count: number;
  value: number;
  name: string;
  description: string;
  invoice_id: number;
  options: string;
  locked: boolean;
};

export type UpdatedTransaction = {
  err: string;
  transaction: Transaction;
};

// ---------- INVOICE ----------

export type Invoice = {
  id: number;
  invoice_number: number;
  file_id: number;
  file: string;
  transactions: Transaction[];
  type: number;
  total: number;
  payment: Payment;
  instance_id: number;
  instance: instance;
  reminders: reminder[];
  admin_id: number;
  customer_id: number;
  customer: customer;
  more_info: string;
  sent: boolean;
  paid: boolean;
  date_paid: string;
  date_sent: string;
  done: boolean;
  date_arrived: string;
  closed: boolean;
  date_created: string;
  date_updated: string;
};

export type Invoices = {
  invoices: Invoice[];
  count: number;
};

export type NewInvoice = {
  transactions: number[];
  count: number;
  value: number;
  name: string;
  description: string;
  type: string;
  paid: boolean;
};

export type CreatedInvoice = {
  err: string;
};

export type DeletedInvoice = {
  raw: any;
  affected: number;
  generatedMaps: any;
};

export type UpdateInvoice = {
  id: number;
  invoice_number: number;
  file_id: number;
  type: Invoice_Type;
  total: number;
  customer_id: number;
  more_info: string;
  sent: boolean;
  done: boolean;
  closed: boolean;
};

export type UpdatedInvoice = {
  raw: any;
  affected: number;
  generatedMaps: any;
};

// ---------- CUSTOMER ----------

export type NewCustomer = {
  name: string;
  description: string;
  mobile: string;
};

export type CreatedCustomer = {
  err: string;
};

export type UpdateCustomer = {
  customer_id: number;
};

export type UpdatedCustomer = {
  raw: any;
  affected: number;
  generatedMaps: any;
};

// ---------- SUB_USER ----------

export type sub_user = {
  id: number;
  instance_id: number;
  instance: instance;
  user_id: number;
  user: user;
  creator_id: number;
  creator: user;
  reminders: reminder[];
  status: SubUser_Status;
  date_created: Date;
  date_updated: Date;
};

export type sub_users = {
  users: sub_user[];
  count: number;
};

export type NewUser = {
  name: string;
  description: string;
  mobile: string;
};

export type CreatedUser = {
  err: string;
};

export type DeletedUser = {
  raw: any;
  affected: number;
  generatedMaps: any;
};

export type UpdateUser = {
  user_id: number;
};

// ---------- ADDRESS ----------

export type address = {
  id: number;
  province_id: number;
  city_id: number;
  lat: string;
  lng: string;
  address: string;
  user_id: number;
  user: user;
  reminders: reminder[];
  primary_address: boolean;
  instance_id: number;
  instance: instance;
  title: string;
  description: string;
  phone: string;
  creator_id: number;
  date_created: string;
  date_updated: string;
};

export type addresses = {
  addresses: address[];
  count: number;
};

export type NewAddress = {};

export type DeletedAddress = {
  raw: any;
  affected: number;
  generatedMaps: any;
};

export type UpdateAddress = {
  address_id: number;
};
