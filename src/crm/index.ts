import qs from "querystringify";
import { Base } from "../base";
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

const resourceName = "crm";

export class Instance extends Base {
  // ---------- SHOP ----------
  sendSms(shop_id: number) {
    const path = `${resourceName}/${shop_id}/send/normal`;
    return this.post<{sent: boolean, err: string, price: number}>(path);
  }

  sendTypedSms(type, params: NewInstance) {
    const path = `${resourceName}/${shop_id}/send/normal`;
    return this.post<instance>(path, params);
  }

  updateInstance(params: UpdateInstance) {
    let path = `${resourceName}/shop/update`;
    return this.post<instance>(path, params);
  }
}
