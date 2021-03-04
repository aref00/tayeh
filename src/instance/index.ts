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
  SearchFilters,
} from "./types";

const resourceName = "instance";

export class Instance extends Base {
  // ---------- INSTANCE ----------
  getInstance() {
    return this.get<instance>(`${resourceName}/${this.instance_id}`);
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
  getProducts(params?: ProductParams) {
    let query = `${resourceName}/${this.instance_id}/products`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<Product[]>(query);
  }

  createInstanceProduct(params: NewProduct) {
    let path = `${resourceName}/${this.instance_id}/product`;
    return this.post<CreatedProduct>(path, params);
  }

  deleteInstanceProduct(product_id: number) {
    let path = `${resourceName}/${this.instance_id}/product/${product_id}`;
    return this.delete<DeletedProduct>(path);
  }

  updateInstanceProduct(params: UpdateProduct) {
    let path = `${resourceName}/${this.instance_id}/product/update`;
    return this.post<UpdatedProduct>(path, params);
  }

  // // ---------- INSTANCE-TRANSACTION ----------
  getInstanceTransactions() {
    let path = `${resourceName}/${this.instance_id}/transactions`;
    return this.get<Transaction[]>(path);
  }

  findInstanceTransactions(params?: SearchParams) {
    let query = `${resourceName}/${this.instance_id}/transactions/open`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<Transaction[]>(query);
  }

  getProductTransactions(product_id: number) {
    let path = `${resourceName}/${this.instance_id}/transactions/product/${product_id}`;
    return this.get<Transaction[]>(path);
  }

  deleteInstanceTransaction(transaction_id: number) {
    let path = `${resourceName}/${this.instance_id}/transaction/${transaction_id}`;
    return this.delete<instance>(path);
  }

  createInstanceTransaction(params: NewTransaction) {
    let path = `${resourceName}/${this.instance_id}/transaction`;
    return this.post<CreatedTransaction>(path, params);
  }

  updateInstanceTransaction(params: UpdateTransaction) {
    let path = `${resourceName}/${this.instance_id}/transaction/update`;
    return this.post<UpdatedTransaction>(path, params);
  }

  // // ---------- INSTANCE-INVOICES ----------
  getInstanceInvoices(params?: SearchParams) {
    let query = `${resourceName}/${this.instance_id}/invoices`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<Invoices>(query);
  }

  getInstanceInvoice(invoice_id: number) {
    let path = `${resourceName}/${this.instance_id}/invoice/${invoice_id}`;
    return this.get<Invoice>(path);
  }

  deleteInstanceInvoice(invoice_id: number) {
    let path = `${resourceName}/${this.instance_id}/invoice/${invoice_id}`;
    return this.delete<DeletedInvoice>(path);
  }

  createInstanceInvoice(params: NewInvoice) {
    let path = `${resourceName}/${this.instance_id}/invoice`;
    return this.post<CreatedInvoice>(path, params);
  }

  updateInstanceInvoice(params: UpdateInvoice) {
    let path = `${resourceName}/${this.instance_id}/invoice/update`;
    return this.post<UpdatedInvoice>(path, params);
  }

  // // ---------- INSTANCE-SERIES ----------
  getInstanceSeries(params?: SeriesParams) {
    let query = `${resourceName}/${this.instance_id}/series`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<instance[]>(query);
  }

  // // ---------- INSTANCE-TOTAL ----------
  getInstanceTotal(params?: TotalParams) {
    let query = `${resourceName}/${this.instance_id}/total/monthly`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<instance[]>(query);
  }

  // // ---------- INSTANCE-REVENUE ----------
  getInstanceRevenue(params?: RevenueParams) {
    let query = `${resourceName}/${this.instance_id}/revenue`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<instance[]>(query);
  }

  // // ---------- INSTANCE-CUSTOMER ----------
  getInstanceCustomers(params?: SearchParams) {
    let query = `${resourceName}/${this.instance_id}/customers`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<customer[]>(query);
  }

  getInstanceCustomer(customer_id: number) {
    let path = `${resourceName}/${this.instance_id}/customer/${customer_id}`;
    return this.get<customer>(path);
  }

  deleteInstanceCustomer(customer_id: number) {
    let path = `${resourceName}/${this.instance_id}/customer/${customer_id}`;
    return this.delete<instance>(path);
  }

  createInstanceCustomer(params: NewCustomer) {
    let path = `${resourceName}/${this.instance_id}/customer`;
    return this.post<CreatedCustomer>(path, params);
  }

  updateInstanceCustomer(params: UpdateCustomer) {
    let path = `${resourceName}/${this.instance_id}/customer/update`;
    return this.post<UpdatedCustomer>(path, params);
  }

  // // ---------- INSTANCE-USER ----------
  getInstanceUsers(params?: SearchParams) {
    let query = `${resourceName}/${this.instance_id}/users`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<sub_users>(query);
  }

  getInstanceUser(user_id: number) {
    let path = `${resourceName}/${this.instance_id}/user/${user_id}`;
    return this.get<sub_user>(path);
  }

  deleteInstanceUser(user_id: number) {
    let path = `${resourceName}/${this.instance_id}/user/${user_id}`;
    return this.delete<DeletedUser>(path);
  }

  createInstanceUser(params: NewUser) {
    let path = `${resourceName}/${this.instance_id}/user`;
    return this.post<CreatedUser>(path, params);
  }

  updateInstanceUser(params: UpdateUser) {
    let path = `${resourceName}/${this.instance_id}/user/update`;
    return this.post<instance>(path, params);
  }

  // // ---------- INSTANCE-ADDRESS ----------
  getInstanceAddresses(params?: SearchParams) {
    let query = `${resourceName}/${this.instance_id}/addresses`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<addresses>(query);
  }

  deleteInstanceAddress(address_id: number) {
    let path = `${resourceName}/${this.instance_id}/address/${address_id}`;
    return this.delete<DeletedAddress>(path);
  }

  createInstanceAddress(params: NewAddress) {
    let path = `${resourceName}/${this.instance_id}/address`;
    return this.post<instance>(path, params);
  }

  updateInstanceAddress(params: UpdateAddress) {
    let path = `${resourceName}/${this.instance_id}/address/update`;
    return this.post<instance>(path, params);
  }

  // // ---------- INSTANCE-CATEGORIES ----------
  getCategories(params?: CategoryParams) {
    let query = `${resourceName}/${this.instance_id}/categories`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<any[]>(query);
  }

  // // ---------- INSTANCE-BANNERS ----------
  getBanners(params?: BannerParams) {
    let query = `${resourceName}/${this.instance_id}/banners`;

    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<any[]>(query);
  }

  // // ---------- GetSearchFillters ----------
  getSearchFilters(params?: SearchFilters) {
    let query = `${resourceName}/${this.instance_id}/search-filters`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<any>(query);
  }

  // // ---------- InviteSms ----------
  sendInviteSms(params: InviteParams) {
    let path = `${resourceName}/${this.instance_id}/invite-sms`;
    return this.post<instance>(path, params);
  }

  // // ---------- SearchKeywords ----------
  getTopKeywords(params: SearchFilters) {
    let query = `${resourceName}/${this.instance_id}/top-search-keywords`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.post<instance>(query, params);
  }
}
