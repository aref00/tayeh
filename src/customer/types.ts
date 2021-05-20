import { Pagination } from "src/base";
import { Sex, instance, Invoice, reminder } from "../instance/types";
import { media } from "../media/types";
import { user } from "../user/types";

// enum

type DeliveryStatus = {};

type DeliveryType = {};

// general

type Position = {
  latitude: string;
  longitude: string;
};

type Location = {
  countryId: number;
  stateId: number;
  cityId: number;
  verbal: string;
};

export type customer = {
  id: number;
  name: string;
  sex: Sex;
  instance_id: number;
  instance: instance;
  invoices: Invoice[];
  description: string;
  id_card: string;
  father: string;
  birthdate: string;
  addresses: object[];
  phone: string;
  mobile: string;
  email: string;
  website: string;
  creator_id: number;
  creator: user;
  reminders: reminder[];
  is_verified: boolean;
  socket: string;
  image_id: number;
  image: media;
  date_created: Date;
  date_updated: Date;
};

export type AddToCartBody = {
  product_id: string;
  price_id: string;
  choices: string[] | [];
  count?: number;
};

export type ToggleFavorite = {
  product_id: string;
  favorite: boolean;
};

export type UpdateCartItem = {
  cart_item_id: string;
  count: number;
};

export type UpdateCustomer = {
  mobile: string;
  name?: string;
  email?: string;
  id_card?: string;
  sex?: Sex;
  birthdate?: Date;
  payment_return_card_number?: string;
};

export type RegisterCustomer = {
  instance_username: string;
  name: string;
  mobile: string;
  email: string;
  password: string;
  username: string;
  father: string;
  website: string;
  id_card: string;
  id_card_image_id: string;
  license_image_id: string;
  sex: Sex;
};

export type NewAddress = {
  title: string;
  description: string;
  location: Location;
  position: Position;
  reciver_name: string;
  phone: string;
  mobile: string;
  id_card: string;
  postcode: string;
};

export type UpdateAddress = NewAddress & {
  id: string;
};

export type DeliveryParams = {
  customer: string;
  next: string;
};

export type InvoiceHistory = Pagination & {
  paid?: boolean;
  delivery_status?: DeliveryStatus;
  delivery_type?: DeliveryType;
};
