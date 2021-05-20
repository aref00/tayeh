import { Pagination } from "../base";
import { customer } from "../customer/types";
import { user } from "../user/types";

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

enum Banner_Size {
  all,
  small,
  medium,
  large,
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

enum ProductSort {
  fresh,
  price_low_2_high,
  price_high_2_low,
  discount,
  bestsellers,
}

// ---------- GENERAL ----------

export type SearchParams = Pagination & {
  search?: string;
};

export type CategoryParams = SearchParams & {
  show_filters?: boolean;
  parent_id?: number;
  category_id?: string;
};

export type SearchFilters = {
  category?: string;
};

export type BannerParams = {
  category?: string;
  size?: Banner_Size;
};

export type InviteParams = {
  mobile: string;
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

export type ProductParams = SearchParams & {
  suggested?: boolean;
  min_price?: number;
  max_price?: number;
  category?: string;
  brands?: string[];
  only_available?: boolean;
  discounted?: boolean;
  sort?: ProductSort;
  filters?: string[];
  similar_to?: string;
};

export type NewProduct = {
  name: string;
  description: string;
  category_id: string;
  brand_id: string;
  image_id: string;
  barcode: string;
  price: number;
  price_with_off: number;
  predicted_percent: number;
};

export type UpdateProduct = NewProduct & {
  id: string;
};

export type CreatePrice = {
  product_id: string;
  option_id: string;
  price: number;
  price_with_off: number;
};

export type UpdatePrice = CreatePrice & {
  id: string;
};

export type UpdatePrices = UpdatePrice[];

export type ProductMedia = {
  media_id: string;
};

// ---------- TRANSACTION ----------

type Transaction = {
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

export type NewInvoice = {
  transactions: number[];
  count: number;
  value: number;
  name: string;
  description: string;
  type: string;
  paid: boolean;
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

// ---------- CUSTOMER ----------

export type NewCustomer = {
  name: string;
  description: string;
  mobile: string;
};

export type UpdateCustomer = {
  customer_id: number;
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

// ---------- ADDRESS ----------

type address = {
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

// ------------------------- Category -----------------------

type CategoryFilterType = {
  TEXT: "text";
  SELECT: "select";
  NUMBER: "number";
  BOOLEAN: "boolean";
  COLOR: "color";
  RATING: "rating";
  IMAGE: "image";
};

type Option = {
  value: string;
  id: string;
  category_filter_id: string;
};

export type NewCategory = {
  name: string;
  parent_id: string;
};

export type EditCategory = {
  id: string;
  name: string;
  description: string;
  parent_id: string;
};

export type FilterGroup = {
  name: string;
};

export type CategoryFilter = {
  name: string;
  options: Option[];
  type: CategoryFilterType;
  category_id: string;
  group_id?: string;
};

// ------------------------- Brand -----------------------

export type NewBrand = {
  name: string;
  translated_name: string;
  logo_id: string;
};

export type EditBrand = NewBrand & {
  id: string;
};
