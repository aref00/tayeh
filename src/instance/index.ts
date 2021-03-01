import qs from "querystringify";
import { Base } from "../base";
import { customer } from "../customer/types";
import {
  instance,
  NewInstance,
  UpdateInstance,
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
  InstancePageParams,
  CategoryParams,
  BannerParams,
  InviteParams,
  ProductParams,
  SearchFilters
} from "./types";

const resourceName = "instance";

export class Instance extends Base {
  // ---------- INSTANCE ----------
  getInstance(instance_id: number) {
    return this.get<instance>(`${resourceName}/${instance_id}`);
  }

  createInstance(params: NewInstance) {
    let path = `${resourceName}/instance`;
    return this.post<instance>(path, params);
  }

  updateInstance(params: UpdateInstance) {
    let path = `${resourceName}/instance/update`;
    return this.post<instance>(path, params);
  }

  // // ---------- INSTANCE-PAGE ----------
  getInstancePage(page_number: number, params?: InstancePageParams) {
    let query = `${resourceName}/page/${page_number}`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<instance[]>(query);
  }

  // // ---------- INSTANCE-PRODUCTS ----------
  getProducts(instance_id: number, params?: ProductParams) {
    let query = `${resourceName}/${instance_id}/products`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<Product[]>(query);
  }

  createInstanceProduct(instance_id: number, params: NewProduct) {
    let path = `${resourceName}/${instance_id}/product`;
    return this.post<CreatedProduct>(path, params);
  }

  deleteInstanceProduct(instance_id: number, product_id: number) {
    let path = `${resourceName}/${instance_id}/product/${product_id}`;
    return this.delete<DeletedProduct>(path);
  }

  updateInstanceProduct(instance_id: number, params: UpdateProduct) {
    let path = `${resourceName}/${instance_id}/product/update`;
    return this.post<UpdatedProduct>(path, params);
  }

  // // ---------- INSTANCE-TRANSACTION ----------
  getInstanceTransactions(instance_id: number) {
    let path = `${resourceName}/${instance_id}/transactions`;
    return this.get<Transaction[]>(path);
  }

  findInstanceTransactions(instance_id: number, params?: SearchParams) {
    let query = `${resourceName}/${instance_id}/transactions/open`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<Transaction[]>(query);
  }

  getProductTransactions(instance_id: number, product_id: number) {
    let path = `${resourceName}/${instance_id}/transactions/product/${product_id}`;
    return this.get<Transaction[]>(path);
  }

  deleteInstanceTransaction(instance_id: number, transaction_id: number) {
    let path = `${resourceName}/${instance_id}/transaction/${transaction_id}`;
    return this.delete<instance>(path);
  }

  createInstanceTransaction(instance_id: number, params: NewTransaction) {
    let path = `${resourceName}/${instance_id}/transaction`;
    return this.post<CreatedTransaction>(path, params);
  }

  updateInstanceTransaction(instance_id: number, params: UpdateTransaction) {
    let path = `${resourceName}/${instance_id}/transaction/update`;
    return this.post<UpdatedTransaction>(path, params);
  }

  // // ---------- INSTANCE-INVOICES ----------
  getInstanceInvoices(instance_id: number, params?: SearchParams) {
    let query = `${resourceName}/${instance_id}/invoices`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<Invoices>(query);
  }

  getInstanceInvoice(instance_id: number, invoice_id: number) {
    let path = `${resourceName}/${instance_id}/invoice/${invoice_id}`;
    return this.get<Invoice>(path);
  }

  deleteInstanceInvoice(instance_id: number, invoice_id: number) {
    let path = `${resourceName}/${instance_id}/invoice/${invoice_id}`;
    return this.delete<DeletedInvoice>(path);
  }

  createInstanceInvoice(instance_id: number, params: NewInvoice) {
    let path = `${resourceName}/${instance_id}/invoice`;
    return this.post<CreatedInvoice>(path, params);
  }

  updateInstanceInvoice(instance_id: number, params: UpdateInvoice) {
    let path = `${resourceName}/${instance_id}/invoice/update`;
    return this.post<UpdatedInvoice>(path, params);
  }

  // // ---------- INSTANCE-SERIES ----------
  getInstanceSeries(instance_id: number, params?: SeriesParams) {
    let query = `${resourceName}/${instance_id}/series`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<instance[]>(query);
  }

  // // ---------- INSTANCE-TOTAL ----------
  getInstanceTotal(instance_id: number, params?: TotalParams) {
    let query = `${resourceName}/${instance_id}/total/monthly`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<instance[]>(query);
  }

  // // ---------- INSTANCE-REVENUE ----------
  getInstanceRevenue(instance_id: number, params?: RevenueParams) {
    let query = `${resourceName}/${instance_id}/revenue`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<instance[]>(query);
  }

  // // ---------- INSTANCE-CUSTOMER ----------
  getInstanceCustomers(instance_id: number, params?: SearchParams) {
    let query = `${resourceName}/${instance_id}/customers`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<customer[]>(query);
  }

  getInstanceCustomer(instance_id: number, customer_id: number) {
    let path = `${resourceName}/${instance_id}/customer/${customer_id}`;
    return this.get<customer>(path);
  }

  deleteInstanceCustomer(instance_id: number, customer_id: number) {
    let path = `${resourceName}/${instance_id}/customer/${customer_id}`;
    return this.delete<instance>(path);
  }

  createInstanceCustomer(instance_id: number, params: NewCustomer) {
    let path = `${resourceName}/${instance_id}/customer`;
    return this.post<CreatedCustomer>(path, params);
  }

  updateInstanceCustomer(instance_id: number, params: UpdateCustomer) {
    let path = `${resourceName}/${instance_id}/customer/update`;
    return this.post<UpdatedCustomer>(path, params);
  }

  // // ---------- INSTANCE-USER ----------
  getInstanceUsers(instance_id: number, params?: SearchParams) {
    let query = `${resourceName}/${instance_id}/users`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<sub_users>(query);
  }

  getInstanceUser(instance_id: number, user_id: number) {
    let path = `${resourceName}/${instance_id}/user/${user_id}`;
    return this.get<sub_user>(path);
  }

  deleteInstanceUser(instance_id: number, user_id: number) {
    let path = `${resourceName}/${instance_id}/user/${user_id}`;
    return this.delete<DeletedUser>(path);
  }

  createInstanceUser(instance_id: number, params: NewUser) {
    let path = `${resourceName}/${instance_id}/user`;
    return this.post<CreatedUser>(path, params);
  }

  updateInstanceUser(instance_id: number, params: UpdateUser) {
    let path = `${resourceName}/${instance_id}/user/update`;
    return this.post<instance>(path, params);
  }

  // // ---------- INSTANCE-ADDRESS ----------
  getInstanceAddresses(instance_id: number, params?: SearchParams) {
    let query = `${resourceName}/${instance_id}/addresses`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<addresses>(query);
  }

  deleteInstanceAddress(instance_id: number, address_id: number) {
    let path = `${resourceName}/${instance_id}/address/${address_id}`;
    return this.delete<DeletedAddress>(path);
  }

  createInstanceAddress(instance_id: number, params: NewAddress) {
    let path = `${resourceName}/${instance_id}/address`;
    return this.post<instance>(path, params);
  }

  updateInstanceAddress(instance_id: number, params: UpdateAddress) {
    let path = `${resourceName}/${instance_id}/address/update`;
    return this.post<instance>(path, params);
  }

  // // ---------- INSTANCE-CATEGORIES ----------
  getCategories(instance_id: number, params?: CategoryParams) {
    let query = `${resourceName}/${instance_id}/categories`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<any[]>(query);
  }

  // // ---------- INSTANCE-BANNERS ----------
  getBanners(instance_id: number, params?: BannerParams) {
    let query = `${resourceName}/${instance_id}/banners`;
    
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<any[]>(query);
  }

  // // ---------- GetSearchFillters ----------
  getSearchFilters(instance_id: number, params?: SearchFilters) {
    let query = `${resourceName}/${instance_id}/search-filters`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<any>(query);
  }

  // // ---------- InviteSms ----------
  sendInviteSms(instance_id: number, params: InviteParams){
    let path = `${resourceName}/${instance_id}/invite-sms`;
    return this.post<instance>(path, params);
  }

  // // ---------- SearchKeywords ----------
  getTopKeywords(instance_id: number, params: SearchFilters){
    let query = `${resourceName}/${instance_id}/top-search-keywords`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.post<instance>(query, params);
  }
}
