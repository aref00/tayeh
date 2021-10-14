import { Base, Pagination } from "../base";
import { CustomerResetPass, AddToCartBody, ToggleFavorite, UpdateCartItem, UpdateCustomer, NewAddress, UpdateAddress, InvoiceHistory, RegisterCustomer, PaymentMethod, DepositMoney } from "./types";
export declare class Customer extends Base {
    getPassword(mobile: string): Promise<import("axios").AxiosResponse<{
        access_token: any;
    }>>;
    customerVerify(mobile: string, code: string): Promise<import("axios").AxiosResponse<{
        access_token: any;
    }>>;
    getVerification(email: string): Promise<import("axios").AxiosResponse<{
        access_token: any;
    }>>;
    emailVerify(email: string, code: string): Promise<import("axios").AxiosResponse<{
        access_token: any;
    }>>;
    customerLogin(username: string, password: string): Promise<import("axios").AxiosResponse<{
        access_token: any;
    }>>;
    customerRegister(body: RegisterCustomer): Promise<import("axios").AxiosResponse<any>>;
    resetCustomerPassword(body: CustomerResetPass): Promise<import("axios").AxiosResponse<any>>;
    getCustomerMe(): Promise<import("axios").AxiosResponse<any>>;
    getCustomer(): Promise<import("axios").AxiosResponse<any>>;
    updateCustomer(body: UpdateCustomer): Promise<import("axios").AxiosResponse<any>>;
    addProductToCart(body: AddToCartBody): Promise<import("axios").AxiosResponse<any>>;
    toggleProductFavorite(body: ToggleFavorite): Promise<import("axios").AxiosResponse<any>>;
    getCustomerCart(params: Pagination): Promise<import("axios").AxiosResponse<any>>;
    updateCartItem(body: UpdateCartItem): Promise<import("axios").AxiosResponse<any>>;
    deleteCartItem(cart_item_id: string): Promise<import("axios").AxiosResponse<any>>;
    getNotifications(params?: Pagination): Promise<import("axios").AxiosResponse<any>>;
    getCustomerNotification(notification_id: string): Promise<import("axios").AxiosResponse<any>>;
    getFavorites(params: Pagination): Promise<import("axios").AxiosResponse<any>>;
    getProductsHistory(params: Pagination): Promise<import("axios").AxiosResponse<any>>;
    getAddresses(): Promise<import("axios").AxiosResponse<any>>;
    createAddress(body: NewAddress): Promise<import("axios").AxiosResponse<any>>;
    updateAddress(body: UpdateAddress): Promise<import("axios").AxiosResponse<any>>;
    deleteAddress(address_id: string): Promise<import("axios").AxiosResponse<any>>;
    setCartDelivery(body: NewAddress, d_method_id: string, methods: PaymentMethod): Promise<import("axios").AxiosResponse<any>>;
    setAvatar(avatar_id: string): Promise<import("axios").AxiosResponse<any>>;
    getInvoicesHistory(params?: InvoiceHistory): Promise<import("axios").AxiosResponse<any>>;
    getInvoice(invoice_id: string): Promise<import("axios").AxiosResponse<any>>;
    getCustomerCredit(): Promise<import("axios").AxiosResponse<any>>;
    getCartPay(): Promise<import("axios").AxiosResponse<any>>;
    depositCustomerMoney(body: DepositMoney): Promise<import("axios").AxiosResponse<any>>;
    getCartDeliveryMethods(): Promise<import("axios").AxiosResponse<any>>;
    getLatestUnseenNotification(): Promise<import("axios").AxiosResponse<any>>;
}
