import { instance, Product, Invoice } from "../instance/types"
import { customer } from "../customer/types"
import { user } from '../user/types'

export type media = {
    id: number;
    name: string;
    description: string;
    file: string;
    type: string;
    instance_id: number;
    instance: instance;
    products: Product[];
    user: user;
    image_of_instance: instance;
    customer: customer;
    invoice: Invoice;
    uploader_id: number;
    uploader: user;
    creator_type: string;
    deleted: boolean;
    date_deleted: Date;
    creator_id: number;
    date_created: Date;
  };

export type NewMedia = {

}