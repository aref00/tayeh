import qs from "querystringify";
import { Base, Pagination } from "../base";
import {
  customer,
  AddToCartBody,
  ToggleFavorite,
  UpdateCartItem,
  UpdateCustomer,
  NewAddress,
  UpdateAddress,
  InvoiceHistory,
} from "./types";

const resourceName = "customer";

export class Customer extends Base {
  getPassword(username: string) {
    const url = "customer/login";
    return this.post_auth<{ access_token }>(url, {
      username: username,
      instance: this.instance_id,
    });
  }

  customerVerify(usename: string, password: string) {
    const url = "customer/verify";
    return this.post_auth<{ access_token }>(url, {
      username: usename,
      password: password,
      instance: this.instance_id,
    });
  }

  getCustomerMe() {
    return this.get<customer>(`${resourceName}/me`);
  }

  getCustomer() {
    return this.get<customer>(`${resourceName}`);
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

  getCustomerCart() {
    let path = `${resourceName}/cart`;
    return this.get<any>(path);
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

  getFavorites(params: Pagination) {
    let query = `${resourceName}/favorite-products`;
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

  setCartDelivery(body: NewAddress) {
    let path = `${resourceName}/cart/delivery`;
    return this.post<any>(path, { address: body });
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
}
