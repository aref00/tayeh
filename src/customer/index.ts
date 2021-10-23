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
  DepositMoney
} from "./types";

const resourceName = "customer";

export class Customer extends Base {
  getPassword(mobile: string) {
    const url = "customer/send-mobile-verification";
    return this.post_auth<{ access_token }>(url, {
      mobile: mobile,
      instance: this.instance_id,
    });
  }

  customerVerify(mobile: string, code: string) {
    const url = "customer/verify-mobile";
    return this.post_auth<{ access_token }>(url, {
      mobile: mobile,
      verification_code: code,
      instance: this.instance_id,
    });
  }

  getVerification(email: string) {
    const url = "customer/send-email-verification";
    return this.post_auth<{ access_token }>(url, {
      email: email,
      instance: this.instance_id,
    });
  }

  emailVerify(email: string, code: string) {
    const url = "customer/verify-email";
    return this.post_auth<{ access_token }>(url, {
      email: email,
      verification_code: code,
      instance: this.instance_id,
    });
  }

  customerLogin(username: string, password: string) {
    const url = "customer/login";
    return this.post_auth<{ access_token }>(url, {
      username: username,
      password: password,
      instance: this.instance_id,
    });
  }

  customerRegister(body: RegisterCustomer) {
    const url = "customer/register";
    return this.post_auth<any>(url, body);
  }

  resetCustomerPassword(body: CustomerResetPass) {
    const url = "customer/reset-password";
    return this.post_auth<any>(url, body);
  }

  getCustomerMe() {
    return this.get<any>(`${resourceName}/me`);
  }

  getCustomer() {
    return this.get<any>(`${resourceName}`);
  }

  updateCustomer(body: UpdateCustomer) {
    const path = `${resourceName}`;
    return this.post<any>(path, body);
  }

  addProductToCart(body: AddToCartBody) {
    const path = `${resourceName}/cart`;
    return this.put<any>(path, body);
  }

  toggleProductFavorite(body: ToggleFavorite) {
    const path = `${resourceName}/favorite-product`;
    return this.post<any>(path, body);
  }

  getCustomerCart(params: Pagination) {
    let query = `${resourceName}/cart`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<any>(query);
  }

  updateCartItem(body: UpdateCartItem) {
    const path = `${resourceName}/cart`;
    return this.post<any>(path, body);
  }

  deleteCartItem(cart_item_id: string) {
    const path = `${resourceName}/cart/${cart_item_id}`;
    return this.delete<any>(path);
  }

  getNotifications(params?: Pagination) {
    let query = `${resourceName}/notifications`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<any>(query);
  }

  getCustomerNotification(notification_id: string) {
    let path = `${resourceName}/notifications/${notification_id}`;
    return this.get<any>(path);
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
    return this.get<any>(query);
  }

  getAddresses() {
    let path = `${resourceName}/addresses`;
    return this.get<any>(path);
  }

  createAddress(body: NewAddress) {
    const path = `${resourceName}/address`;
    return this.put<any>(path, body);
  }

  updateAddress(body: UpdateAddress) {
    const path = `${resourceName}/address`;
    return this.post<any>(path, body);
  }

  deleteAddress(address_id: string) {
    const path = `${resourceName}/address/${address_id}`;
    return this.delete<any>(path);
  }

  setCartDelivery(body: NewAddress, d_method_id?: string | null, methods?: PaymentMethod) {
    let path = `${resourceName}/cart/delivery`;
    return this.post<any>(path, { address: body, delivery_method: d_method_id, payment_method: methods });
  }

  setAvatar(avatar_id: string) {
    let path = `${resourceName}/avatar`;
    return this.post<any>(path, { avatar_id: avatar_id });
  }

  getInvoicesHistory(params?: InvoiceHistory) {
    let query = `${resourceName}/cart/history`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<any>(query);
  }

  getInvoice(invoice_id: string) {
    let path = `${resourceName}/invoice/${invoice_id}`;
    return this.get<any>(path);
  }

  getCustomerCredit() {
    let path = `${resourceName}/credit`;
    return this.get<any>(path);
  }

  getCartPay() {
    let path = `${resourceName}/cart/pay`;
    return this.get<any>(path);
  }

  depositCustomerMoney(body: DepositMoney){
    const path = `${resourceName}/deposit`;
    return this.put<any>(path, body);
  }

  getCartDeliveryMethods(){
    let path = `${resourceName}/delivery-methods`;
    return this.get<any>(path);
  }

  getLatestUnseenNotification(){
    let path = `${resourceName}/notifications/last-unseen`;
    return this.get<any>(path);
  }
}
