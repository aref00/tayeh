import { Pagination } from "src/base";
import { Sex } from "../instance/types";
export declare enum PaymentMethod {
    tayeh = "tayeh",
    manual = "manual",
    zarinpal = "zarinpal"
}
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
export declare type AddToCartBody = {
    product_id: string;
    price_id: string;
    choices: string[] | [];
    count?: number;
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
export declare type RegisterCustomer = {
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
export declare type CustomerResetPass = {
    old_password: string;
    new_password: string;
};
export declare type DepositMoney = {
    Amount: number;
};
export {};
