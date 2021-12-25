import { Pagination } from "../base";
import { Image } from "../media/types";
import { Sex } from "../instance/types";
import { ProductInfo } from "../product/types";

// enum

export enum PaymentMethod {
  tayeh = "tayeh",
  manual = "manual",
  zarinpal = "zarinpal",
}

type DeliveryStatus = {};

type DeliveryType = {};

// general

type Position = {
  latitude?: string;
  longitude?: string;
};

type Location = {
  countryId: number;
  stateId: number;
  cityId: number;
  verbal: string;
};

export type AddToCartBody = {
  product_id: string;
  price_id?: string;
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
  description?: string;
  location: Location;
  position: Position;
  receiver_name: string;
  phone?: string;
  mobile?: string;
  id_card?: string;
  postcode?: string;
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

export type CustomerResetPass = {
  old_password: string;
  new_password: string;
};

export type DepositMoney = {
  Amount: number;
};


// Responses

export type AuthResponse = {
  access_token: string
}

export type GetCustomerProfileResposne = {
  username: string;
  name: string;
  mobile: string;
  email: string;
  avatar: Image;
  id_card: string;
  sex: Sex;
  birthdate: Date;
  payment_return_card_number: string;
  website: string;
  id_card_image: Image;
  license_image: Image;
}

class CartItem extends ProductInfo {
  cart_item_id: string;
  count: number;
  remaining: number;
  price_choice: any;
  other_choices: any[];
}

export type GetCustomerCartResponse = {
  items: CartItem[];
  total_price: number;
  total_price_with_off: number;
  payment_method: PaymentMethod;
  delivery: any;
}

export class GetCustomerNotificationResponse {
  id: string;
  message: string;
  title: string;
  clipboard: string;
  dateCreated: Date;
  image: Image;
  url: string;
  first_seen: boolean;
}

export class GetCustomerFavoriteProductResponse extends ProductInfo {
  date_added: Date;
}

export type GetCustomerAddressResponse = {
  id: string;
  title: string;
  description: string;
  location: Location;
  position: Position;
  receiver_name: string;
  phone: string;
  mobile: string;
  id_card: string;
  postcode: string;
}

export type SimpleErr = {
  err?: string|null;
}

type CustomerPayment = {
  total: number;
  date_paid: Date;
  paid: Boolean;
  ref_code: string;
}

type InvoiceDeliveryMethod = {
  name: string;
  price: number;
}

type CustomerDelivery = {
  total: number;
  address: any;
  status: DeliveryStatus;
  type: DeliveryType;
  method: InvoiceDeliveryMethod;
}

export type GetCustomerInvoiceResponse = {
  id: string;
  invoice_number: number;
  items: CartItem[];
  status: DeliveryStatus;
  date_created: Date;
  total_price: number;
  total_price_with_off: number;
  payment: CustomerPayment;
  delivery: CustomerDelivery;
}

export type GetCustomerCreditResponse = {
  credit: number;
  total_usage: number;
  currency: string;
}

export type PayCustomerCartResponse = {
  err?: string|null,
  payment_url?: string|null
}

export type CustomerDepositResponse = {
  err?: string|null,
  url?: string|null
}

type DeliveryMethod = {
  id: string;
  name: string;
  price: number
}

export type GetCustomerDeliveryMethodsResponse = {
  delivery_methods: DeliveryMethod[];
}