import qs from "querystringify";
import { Base, Pagination } from "../base";
import {
  CustomerResetPass,
  AddToCartBody,
  ToggleFavorite,
  UpdateCartItem,
  UpdateCustomer,
  NewAddress,
  UpdateAddress,
  InvoiceHistory,
  RegisterCustomer,
  PaymentMethod,
  DepositMoney,
  AuthResponse,
  GetCustomerProfileResposne,
  GetCustomerCartResponse,
  GetCustomerNotificationResponse,
  GetCustomerFavoriteProductResponse,
  GetCustomerAddressResponse,
  SimpleErr,
  GetCustomerInvoiceResponse,
  GetCustomerCreditResponse,
  PayCustomerCartResponse,
  CustomerDepositResponse,
  GetCustomerDeliveryMethodsResponse
} from "./types";

const resourceName = "customer";

export class Customer extends Base {
  getPassword(mobile: string) {
    const url = "customer/send-mobile-verification";
    return this.post_auth<AuthResponse>(url, {
      mobile: mobile,
      instance: this.instance_id,
    });
  }

  customerVerify(mobile: string, code: string) {
    const url = "customer/verify-mobile";
    return this.post_auth<AuthResponse>(url, {
      mobile: mobile,
      verification_code: code,
      instance: this.instance_id,
    });
  }

  getVerification(email: string) {
    const url = "customer/send-email-verification";
    return this.post_auth<AuthResponse>(url, {
      email: email,
      instance: this.instance_id,
    });
  }

  emailVerify(email: string, code: string) {
    const url = "customer/verify-email";
    return this.post_auth<AuthResponse>(url, {
      email: email,
      verification_code: code,
      instance: this.instance_id,
    });
  }

  customerLogin(username: string, password: string) {
    const url = "customer/login";
    return this.post_auth<AuthResponse>(url, {
      username: username,
      password: password,
      instance: this.instance_id,
    });
  }

  customerRegister(body: RegisterCustomer) {
    const url = "customer/register";
    return this.post_auth<AuthResponse>(url, body);
  }

  resetCustomerPassword(body: CustomerResetPass) {
    const url = "customer/reset-password";
    return this.post_auth<void>(url, body);
  }

  getCustomerMe() {
    return this.get<GetCustomerProfileResposne>(`${resourceName}/me`);
  }

  getCustomer() {
    return this.get<GetCustomerProfileResposne>(`${resourceName}`);
  }

  updateCustomer(body: UpdateCustomer) {
    const path = `${resourceName}`;
    return this.post<SimpleErr>(path, body);
  }

  addProductToCart(body: AddToCartBody) {
    const path = `${resourceName}/cart`;
    return this.put<SimpleErr>(path, body);
  }

  toggleProductFavorite(body: ToggleFavorite) {
    const path = `${resourceName}/favorite-product`;
    return this.post<SimpleErr>(path, body);
  }

  getCustomerCart(params: Pagination) {
    let query = `${resourceName}/cart`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<GetCustomerCartResponse>(query);
  }

  updateCartItem(body: UpdateCartItem) {
    const path = `${resourceName}/cart`;
    return this.post<any>(path, body);
  }

  deleteCartItem(cart_item_id: string) {
    const path = `${resourceName}/cart/${cart_item_id}`;
    return this.delete<SimpleErr>(path);
  }

  getNotifications(params?: Pagination) {
    let query = `${resourceName}/notifications`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<{objects: GetCustomerNotificationResponse[], count: number}>(query);
  }

  getCustomerNotification(notification_id: string) {
    let path = `${resourceName}/notifications/${notification_id}`;
    return this.get<GetCustomerNotificationResponse>(path);
  }

  getFavorites(params: Pagination) {
    let query = `${resourceName}/favorite-products`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<any>(query);
  }

  getProductsHistory(params: Pagination) {
    let query = `${resourceName}/products-history`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<[GetCustomerFavoriteProductResponse]>(query);
  }

  getAddresses() {
    let path = `${resourceName}/addresses`;
    return this.get<GetCustomerAddressResponse[]>(path);
  }

  createAddress(body: NewAddress) {
    const path = `${resourceName}/address`;
    return this.put<SimpleErr>(path, body);
  }

  updateAddress(body: UpdateAddress) {
    const path = `${resourceName}/address`;
    return this.post<void>(path, body);
  }

  deleteAddress(address_id: string) {
    const path = `${resourceName}/address/${address_id}`;
    return this.delete<SimpleErr>(path);
  }

  setCartDelivery(body: NewAddress, d_method_id?: string | null, methods?: PaymentMethod) {
    let path = `${resourceName}/cart/delivery`;
    return this.post<SimpleErr>(path, { address: body, delivery_method: d_method_id, payment_method: methods });
  }

  setAvatar(avatar_id: string) {
    let path = `${resourceName}/avatar`;
    return this.post<SimpleErr>(path, { avatar_id: avatar_id });
  }

  getInvoicesHistory(params?: InvoiceHistory) {
    let query = `${resourceName}/cart/history`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<[GetCustomerInvoiceResponse]>(query);
  }

  getInvoice(invoice_id: string) {
    let path = `${resourceName}/invoice/${invoice_id}`;
    return this.get<GetCustomerInvoiceResponse>(path);
  }

  getCustomerCredit() {
    let path = `${resourceName}/credit`;
    return this.get<GetCustomerCreditResponse>(path);
  }

  getCartPay(discount?: string) {
    let path = `${resourceName}/cart/pay?${discount?'discount='+discount:''}`;
    return this.get<PayCustomerCartResponse>(path);
  }

  depositCustomerMoney(body: DepositMoney){
    const path = `${resourceName}/deposit`;
    return this.put<CustomerDepositResponse>(path, body);
  }

  getCartDeliveryMethods(){
    let path = `${resourceName}/delivery-methods`;
    return this.get<GetCustomerDeliveryMethodsResponse>(path);
  }

  getLatestUnseenNotification(){
    let path = `${resourceName}/notifications/last-unseen`;
    return this.get<GetCustomerNotificationResponse[]>(path);
  }
}
