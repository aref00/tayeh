import qs from "querystringify";
import { Base } from "../base";
import {
  ShopCenter,
  NewShop,
  UpdateShop,
  Product,
  NewProduct,
  CreatedProduct,
  DeletedProduct,
  UpdateProduct,
  UpdatedProduct,
  Transaction,
  NewTransaction,
  CreatedTransaction,
  UpdateTransaction,
  UpdatedTransaction,
  Invoice,
  Invoices,
  NewInvoice,
  CreatedInvoice,
  DeletedInvoice,
  UpdateInvoice,
  UpdatedInvoice,
  Customer,
  NewCustomer,
  CreatedCustomer,
  UpdateCustomer,
  UpdatedCustomer,
  sub_user,
  sub_users,
  NewUser,
  CreatedUser,
  DeletedUser,
  UpdateUser,
  addresses,
  NewAddress,
  DeletedAddress,
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
  getShop(shop_id: number) {
    return this.get<ShopCenter>(`${resourceName}/${shop_id}`);
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
  getShopProducts(shop_id: number, params?: SearchParams) {
    let query = `${resourceName}/${shop_id}/products`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<Product[]>(query);
  }

  createShopProduct(shop_id: number, params: NewProduct) {
    let path = `${resourceName}/${shop_id}/product`;
    return this.post<CreatedProduct>(path, params);
  }

  deleteShopProduct(shop_id: number, product_id: number) {
    let path = `${resourceName}/${shop_id}/product/${product_id}`;
    return this.delete<DeletedProduct>(path);
  }

  updateShopProduct(shop_id: number, params: UpdateProduct) {
    let path = `${resourceName}/${shop_id}/product/update`;
    return this.post<UpdatedProduct>(path, params);
  }

  // // ---------- SHOP-TRANSACTION ----------
  getShopTransactions(shop_id: number) {
    let path = `${resourceName}/${shop_id}/transactions`;
    return this.get<Transaction[]>(path);
  }

  findShopTransactions(shop_id: number, params?: SearchParams) {
    let query = `${resourceName}/${shop_id}/transactions/open`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<Transaction[]>(query);
  }

  getProductTransactions(shop_id: number, product_id: number) {
    let path = `${resourceName}/${shop_id}/transactions/product/${product_id}`;
    return this.get<Transaction[]>(path);
  }

  deleteShopTransaction(shop_id: number, transaction_id: number) {
    let path = `${resourceName}/${shop_id}/transaction/${transaction_id}`;
    return this.delete<ShopCenter>(path);
  }

  createShopTransaction(shop_id: number, params: NewTransaction) {
    let path = `${resourceName}/${shop_id}/transaction`;
    return this.post<CreatedTransaction>(path, params);
  }

  updateShopTransaction(shop_id: number, params: UpdateTransaction) {
    let path = `${resourceName}/${shop_id}/transaction/update`;
    return this.post<UpdatedTransaction>(path, params);
  }

  // // ---------- SHOP-INVOICES ----------
  getShopInvoices(shop_id: number, params?: SearchParams) {
    let query = `${resourceName}/${shop_id}/invoices`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<Invoices>(query);
  }

  getShopInvoice(shop_id: number, invoice_id: number) {
    let path = `${resourceName}/${shop_id}/invoice/${invoice_id}`;
    return this.get<Invoice>(path);
  }

  deleteShopInvoice(shop_id: number, invoice_id: number) {
    let path = `${resourceName}/${shop_id}/invoice/${invoice_id}`;
    return this.delete<DeletedInvoice>(path);
  }

  createShopInvoice(shop_id: number, params: NewInvoice) {
    let path = `${resourceName}/${shop_id}/invoice`;
    return this.post<CreatedInvoice>(path, params);
  }

  updateShopInvoice(shop_id: number, params: UpdateInvoice) {
    let path = `${resourceName}/${shop_id}/invoice/update`;
    return this.post<UpdatedInvoice>(path, params);
  }

  // // ---------- SHOP-SERIES ----------
  getShopSeries(shop_id: number, params?: SeriesParams) {
    let query = `${resourceName}/${shop_id}/series`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<ShopCenter[]>(query);
  }

  // // ---------- SHOP-TOTAL ----------
  getShopTotal(shop_id: number, params?: TotalParams) {
    let query = `${resourceName}/${shop_id}/total/monthly`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<ShopCenter[]>(query);
  }

  // // ---------- SHOP-REVENUE ----------
  getShopRevenue(shop_id: number, params?: RevenueParams) {
    let query = `${resourceName}/${shop_id}/revenue`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<ShopCenter[]>(query);
  }

  // // ---------- SHOP-CUSTOMER ----------
  getShopCustomers(shop_id: number, params?: SearchParams) {
    let query = `${resourceName}/${shop_id}/customers`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<Customer[]>(query);
  }

  getShopCustomer(shop_id: number, customer_id: number) {
    let path = `${resourceName}/${shop_id}/customer/${customer_id}`;
    return this.get<Customer>(path);
  }

  deleteShopCustomer(shop_id: number, customer_id: number) {
    let path = `${resourceName}/${shop_id}/customer/${customer_id}`;
    return this.delete<ShopCenter>(path);
  }

  createShopCustomer(shop_id: number, params: NewCustomer) {
    let path = `${resourceName}/${shop_id}/customer`;
    return this.post<CreatedCustomer>(path, params);
  }

  updateShopCustomer(shop_id: number, params: UpdateCustomer) {
    let path = `${resourceName}/${shop_id}/customer/update`;
    return this.post<UpdatedCustomer>(path, params);
  }

  // // ---------- SHOP-USER ----------
  getShopUsers(shop_id: number, params?: SearchParams) {
    let query = `${resourceName}/${shop_id}/users`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<sub_users>(query);
  }

  getShopUser(shop_id: number, user_id: number) {
    let path = `${resourceName}/${shop_id}/user/${user_id}`;
    return this.get<sub_user>(path);
  }

  deleteShopUser(shop_id: number, user_id: number) {
    let path = `${resourceName}/${shop_id}/user/${user_id}`;
    return this.delete<DeletedUser>(path);
  }

  createShopUser(shop_id: number, params: NewUser) {
    let path = `${resourceName}/${shop_id}/user`;
    return this.post<CreatedUser>(path, params);
  }

  updateShopUser(shop_id: number, params: UpdateUser) {
    let path = `${resourceName}/${shop_id}/user/update`;
    return this.post<ShopCenter>(path, params);
  }

  // // ---------- SHOP-ADDRESS ----------
  getShopAddresses(shop_id: number, params?: SearchParams) {
    let query = `${resourceName}/${shop_id}/addresses`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<addresses>(query);
  }

  deleteShopAddress(shop_id: number, address_id: number) {
    let path = `${resourceName}/${shop_id}/address/${address_id}`;
    return this.delete<DeletedAddress>(path);
  }

  createShopAddress(shop_id: number, params: NewAddress) {
    let path = `${resourceName}/${shop_id}/address`;
    return this.post<ShopCenter>(path, params);
  }

  updateShopAddress(shop_id: number, params: UpdateAddress) {
    let path = `${resourceName}/${shop_id}/address/update`;
    return this.post<ShopCenter>(path, params);
  }
}
