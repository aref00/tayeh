import { Sex, instance, Invoice, address, reminder } from "../instance/types";
import { media } from "../media/types";
import { user } from "../user/types";

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
  addresses: address[];
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
  birthdate?:Date;
  payment_return_card_number?: string;
}

type Position = {
  latitude: string;
  longitude: string;
}

type Location = {
  countryId: number;
  stateId: number;
  cityId: number;
  verbal: string;
}

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
}

export type UpdateAddress = NewAddress & {
  id: string;
}
