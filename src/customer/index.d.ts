import { Base, Pagination } from "../base";
import { customer, AddToCartBody, ToggleFavorite, UpdateCartItem, UpdateCustomer, NewAddress, UpdateAddress, InvoiceHistory } from "./types";
export declare class Customer extends Base {
    getPassword(username: string): Promise<import("axios").AxiosResponse<{
        access_token: any;
    }>>;
    customerVerify(usename: string, password: string): Promise<import("axios").AxiosResponse<{
        access_token: any;
    }>>;
    getCustomerMe(): Promise<import("axios").AxiosResponse<customer>>;
    getCustomer(): Promise<import("axios").AxiosResponse<customer>>;
    updateCustomer(body: UpdateCustomer): Promise<import("axios").AxiosResponse<any>>;
    addProductToCart(body: AddToCartBody): Promise<import("axios").AxiosResponse<any>>;
    toggleProductFavorite(body: ToggleFavorite): Promise<import("axios").AxiosResponse<any>>;
    getCustomerCart(): Promise<import("axios").AxiosResponse<any>>;
    updateCartItem(body: UpdateCartItem): Promise<import("axios").AxiosResponse<any>>;
    deleteCartItem(cart_item_id: string): Promise<import("axios").AxiosResponse<any>>;
    getNotifications(params?: Pagination): Promise<import("axios").AxiosResponse<any>>;
    getFavorites(params: Pagination): Promise<import("axios").AxiosResponse<any>>;
    getAddresses(): Promise<import("axios").AxiosResponse<any>>;
    createAddress(body: NewAddress): Promise<import("axios").AxiosResponse<any>>;
    updateAddress(body: UpdateAddress): Promise<import("axios").AxiosResponse<any>>;
    deleteAddress(address_id: string): Promise<import("axios").AxiosResponse<any>>;
    setCartDelivery(body: NewAddress): Promise<import("axios").AxiosResponse<any>>;
    setAvatar(avatar_id: string): Promise<import("axios").AxiosResponse<any>>;
    getInvoicesHistory(params?: InvoiceHistory): Promise<import("axios").AxiosResponse<any>>;
    getInvoice(invoice_id: string): Promise<import("axios").AxiosResponse<any>>;
    getCustomerCredit(): Promise<import("axios").AxiosResponse<any>>;
}
