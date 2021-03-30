import { Pagination } from "src/base";
import { Sex, instance, Invoice, address, reminder } from "../instance/types";
import { media } from "../media/types";
import { user } from "../user/types";
declare type DeliveryStatus = {};
declare type DeliveryType = {};
declare type Position = {
    latitude: string;
    longitude: string;
};
declare type Location = {
    countryId: number;
    stateId: number;
    cityId: number;
    verbal: string;
};
export declare type customer = {
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
export declare type AddToCartBody = {
    product_id: string;
    price_id: string;
    choices: string[] | [];
};
export declare type ToggleFavorite = {
    product_id: string;
    favorite: boolean;
};
export declare type UpdateCartItem = {
    cart_item_id: string;
    count: number;
};
export declare type UpdateCustomer = {
    mobile: string;
    name?: string;
    email?: string;
    id_card?: string;
    sex?: Sex;
    birthdate?: Date;
    payment_return_card_number?: string;
};
export declare type NewAddress = {
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
export declare type UpdateAddress = NewAddress & {
    id: string;
};
export declare type DeliveryParams = {
    customer: string;
    next: string;
};
export declare type InvoiceHistory = Pagination & {
    paid?: boolean;
    delivery_status?: DeliveryStatus;
    delivery_type?: DeliveryType;
};
export {};
