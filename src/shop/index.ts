import qs from "querystringify";
import { Base } from "../base";
import {
  ShopCenter,
  NewShop,
  UpdateShop,
  NewProduct,
  UpdateProduct,
  NewTransaction,
  UpdateTransaction,
  NewInvoice,
  UpdateInvoice,
  NewCustomer,
  UpdateCustomer,
  NewUser,
  UpdateUser,
  NewAddress,
  UpdateAddress,
  SearchParams,
  RevenueParams,
  TotalParams,
  SeriesParams,
  ShopPageParams,
} from "./types";

const resourceName = "shop";

export class Shop extends Base {
  // ---------- SHOP ----------
  getShop(id: number) {
    return this.get<ShopCenter>(`${resourceName}/${id}`);
  }

  createShop(params: NewShop) {
    let path = `${resourceName}/shop`;
    return this.post<ShopCenter>(path, params);
  }

  updateShop(params: UpdateShop) {
    let path = `${resourceName}/shop/update`;
    return this.post<ShopCenter>(path, params);
  }

  // // ---------- SHOP-PAGE ----------
  getShopPage(page_number: number, params?: ShopPageParams) {
    let query = `${resourceName}/page/${page_number}`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<ShopCenter[]>(query);
  }

  // // ---------- SHOP-PRODUCTS ----------
  getShopProducts(id: number, params?: SearchParams) {
    let query = `${resourceName}/${id}/products`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<ShopCenter[]>(query);
  }

  createShopProduct(id: number, params: NewProduct) {
    let path = `${resourceName}/${id}/product`;
    return this.post<ShopCenter>(path, params);
  }

  deleteShopProduct(id: number, product_id: number) {
    let path = `${resourceName}/${id}/product/${product_id}`;
    return this.delete<ShopCenter>(path);
  }

  updateShopProduct(id: number, params: UpdateProduct) {
    let path = `${resourceName}/${id}/product/update`;
    return this.post<ShopCenter>(path, params);
  }

  // // ---------- SHOP-TRANSACTION ----------
  getShopTransactions(id: number) {
    let path = `${resourceName}/${id}/transactions`;
    return this.get<ShopCenter>(path);
  }

  findShopTransactions(id: number, params?: SearchParams) {
    let query = `${resourceName}/${id}/transactions/open`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<ShopCenter[]>(query);
  }

  getProductTransactions(id: number, product_id: number) {
    let path = `${resourceName}/${id}/transactions/product/${product_id}`;
    return this.get<ShopCenter>(path);
  }

  deleteShopTransaction(id: number, transaction_id: number) {
    let path = `${resourceName}/${id}/transaction/${transaction_id}`;
    return this.delete<ShopCenter>(path);
  }

  createShopTransaction(id: number, params: NewTransaction) {
    let path = `${resourceName}/${id}/transaction`;
    return this.post<ShopCenter>(path, params);
  }

  updateShopTransaction(id: number, params: UpdateTransaction) {
    let path = `${resourceName}/${id}/transaction/update`;
    return this.post<ShopCenter>(path, params);
  }

  // // ---------- SHOP-INVOICES ----------
  getShopInvoices(id: number, params?: SearchParams) {
    let query = `${resourceName}/${id}/invoices`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<ShopCenter[]>(query);
  }

  getShopInvoice(id: number, invoice_id: number) {
    let path = `${resourceName}/${id}/invoice/${invoice_id}`;
    return this.get<ShopCenter>(path);
  }

  deleteShopInvoice(id: number, invoice_id: number) {
    let path = `${resourceName}/${id}/invoice/${invoice_id}`;
    return this.delete<ShopCenter>(path);
  }

  createShopInvoice(id: number, params: NewInvoice) {
    let path = `${resourceName}/${id}/invoice`;
    return this.post<ShopCenter>(path, params);
  }

  updateShopInvoice(id: number, params: UpdateInvoice) {
    let path = `${resourceName}/${id}/invoice/update`;
    return this.post<ShopCenter>(path, params);
  }

  // // ---------- SHOP-SERIES ----------
  getShopSeries(id: number, params?: SeriesParams) {
    let query = `${resourceName}/${id}/series`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<ShopCenter[]>(query);
  }

  // // ---------- SHOP-TOTAL ----------
  getShopTotal(id: number, params?: TotalParams) {
    let query = `${resourceName}/${id}/total/monthly`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<ShopCenter[]>(query);
  }

  // // ---------- SHOP-REVENUE ----------
  getShopRevenue(id: number, params?: RevenueParams) {
    let query = `${resourceName}/${id}/revenue`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<ShopCenter[]>(query);
  }

  // // ---------- SHOP-CUSTOMER ----------
  getShopCustomers(id: number, params?: SearchParams) {
    let query = `${resourceName}/${id}/customers`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<ShopCenter[]>(query);
  }

  getShopCustomer(id: number, customId: number) {
    let path = `${resourceName}/${id}/customer/${customId}`;
    return this.get<ShopCenter>(path);
  }

  deleteShopCustomer(id: number, customId: number) {
    let path = `${resourceName}/${id}/customer/${customId}`;
    return this.delete<ShopCenter>(path);
  }

  createShopCustomer(id: number, params: NewCustomer) {
    let path = `${resourceName}/${id}/customer`;
    return this.post<ShopCenter>(path, params);
  }

  updateShopCustomer(id: number, params: UpdateCustomer) {
    let path = `${resourceName}/${id}/customer/update`;
    return this.post<ShopCenter>(path, params);
  }

  // // ---------- SHOP-USER ----------
  getShopUsers(id: number, params?: SearchParams) {
    let query = `${resourceName}/${id}/users`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<ShopCenter[]>(query);
  }

  getShopUser(id: number, user_id: number) {
    let path = `${resourceName}/${id}/user/${user_id}`;
    return this.get<ShopCenter>(path);
  }

  deleteShopUser(id: number, user_id: number) {
    let path = `${resourceName}/${id}/user/${user_id}`;
    return this.delete<ShopCenter>(path);
  }

  createShopUser(id: number, params: NewUser) {
    let path = `${resourceName}/${id}/user`;
    return this.post<ShopCenter>(path, params);
  }

  updateShopUser(id: number, params: UpdateUser) {
    let path = `${resourceName}/${id}/user/update`;
    return this.post<ShopCenter>(path, params);
  }

  // // ---------- SHOP-ADDRESS ----------
  getShopAddresses(id: number, params?: SearchParams) {
    let query = `${resourceName}/${id}/addresses`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<ShopCenter[]>(query);
  }

  deleteShopAddress(id: number, address_id: number) {
    let path = `${resourceName}/${id}/address/${address_id}`;
    return this.delete<ShopCenter>(path);
  }

  createShopAddress(id: number, params: NewAddress) {
    let path = `${resourceName}/${id}/address`;
    return this.post<ShopCenter>(path, params);
  }

  updateShopAddress(id: number, params: UpdateAddress) {
    let path = `${resourceName}/${id}/address/update`;
    return this.post<ShopCenter>(path, params);
  }
}