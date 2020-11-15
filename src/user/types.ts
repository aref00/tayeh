import { customer } from '../customer/types'
import { media } from '../media/types'
import {
  Sex,
  address,
  Province,
  City,
  sub_user,
  subscription,
  Payment,
  instance,
  reminder,
  Invoice,
  Product,
  user_role
} from "../instance/types";

export type user = {
  id: number;
  name: string;
  sex: Sex;
  description: string;
  id_card: string;
  father: string;
  birthdate: string;
  addresses: address[];
  phone: string;
  mobile: string;
  email: string;
  website: string;
  referent_id: number;
  province_id: number;
  province: Province;
  city_id: number;
  city: City;
  sub_user_of: sub_user[];
  customers_created: customer[];
  sub_users_created: sub_user[];
  subscriptions: subscription[];
  payments: Payment[];
  instances: instance[];
  my_instances: instance[];
  my_instances_count: number;
  primary_instance_id: number;
  primary_instance: instance;
  reminders: reminder[];
  is_verified: boolean;
  socket: string;
  image_id: number;
  image: media;
  uploads: media[];
  generated_invoices: Invoice[];
  created_products: Product[];
  online: boolean;
  lastonline: Date;
  role: user_role;
  is_developer: boolean;
  date_created: Date;
  date_updated: Date;
};

export type NewUser = {
  mobile: string;
  name?: string;
  description?: string;
  image_id?: number;
};

export type UpdateUser = {
  user_id: number;
};
