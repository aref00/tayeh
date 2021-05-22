import qs from "querystringify";
import { Base } from "../base";
import { customer } from "../customer/types";
import {
  instance,
  Product,
  NewProduct,
  UpdateProduct,
  Invoice,
  NewInvoice,
  UpdateInvoice,
  NewCustomer,
  UpdateCustomer,
  SearchParams,
  CategoryParams,
  NewCategory,
  EditCategory,
  FilterGroup,
  CategoryFilter,
  NewBrand,
  EditBrand,
  BannerParams,
  InviteParams,
  ProductParams,
  CreatePrice,
  UpdatePrice,
  UpdatePrices,
  ProductMedia,
  SearchFilters,
} from "./types";

const resourceName = "instance";

export class Instance extends Base {
  // // ---------- INSTANCE-PRODUCTS ----------
  getProducts(params?: ProductParams) {
    let query = `${resourceName}/${this.instance_id}/products`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<Product[]>(query);
  }

  createProduct(params: NewProduct) {
    let path = `${resourceName}/${this.instance_id}/product`;
    return this.user_put<any>(path, params);
  }

  deleteProduct(product_id: string) {
    let path = `${resourceName}/${this.instance_id}/product/${product_id}`;
    return this.user_delete<any>(path);
  }

  updateProduct(params: UpdateProduct) {
    let path = `${resourceName}/${this.instance_id}/product/update`;
    return this.user_post<any>(path, params);
  }

  createProductPrice(params: CreatePrice) {
    let path = `${resourceName}/${this.instance_id}/product/price`;
    return this.user_put<any>(path, params);
  }

  updateProductPrice(params: UpdatePrice) {
    let path = `${resourceName}/${this.instance_id}/product/price`;
    return this.user_post<any>(path, params);
  }

  updateProductPrices(params: UpdatePrices) {
    let path = `${resourceName}/${this.instance_id}/product/prices`;
    return this.user_post<any>(path, params);
  }

  getProductPrices(product_id: string) {
    let path = `${resourceName}/${this.instance_id}/product/${product_id}/price-filter`;
    return this.user_get<any>(path);
  }

  addProductMedia(product_id: string, params: ProductMedia) {
    let path = `${resourceName}/${this.instance_id}/product/${product_id}/media`;
    return this.user_post<any>(path, params);
  }

  deleteProductMedia(product_id: string, media_id: string) {
    let path = `${resourceName}/${this.instance_id}/product/${product_id}/media/${media_id}`;
    return this.user_delete<any>(path);
  }

  // // ---------- INSTANCE-INVOICES ----------
  getInstanceInvoices(params?: SearchParams) {
    let query = `${resourceName}/${this.instance_id}/invoices`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<any[]>(query);
  }

  getInstanceInvoice(invoice_id: number) {
    let path = `${resourceName}/${this.instance_id}/invoice/${invoice_id}`;
    return this.get<Invoice>(path);
  }

  deleteInstanceInvoice(invoice_id: number) {
    let path = `${resourceName}/${this.instance_id}/invoice/${invoice_id}`;
    return this.delete<any>(path);
  }

  createInstanceInvoice(params: NewInvoice) {
    let path = `${resourceName}/${this.instance_id}/invoice`;
    return this.post<any>(path, params);
  }

  updateInstanceInvoice(params: UpdateInvoice) {
    let path = `${resourceName}/${this.instance_id}/invoice/update`;
    return this.post<any>(path, params);
  }

  // // ---------- INSTANCE-CUSTOMER ----------
  getInstanceCustomers(params?: SearchParams) {
    let query = `${resourceName}/${this.instance_id}/customers`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.user_get<customer[]>(query);
  }

  getInstanceCustomer(customer_id: string) {
    let path = `${resourceName}/${this.instance_id}/customer/${customer_id}`;
    return this.user_get<customer>(path);
  }

  deleteInstanceCustomer(customer_id: number) {
    let path = `${resourceName}/${this.instance_id}/customer/${customer_id}`;
    return this.user_delete<instance>(path);
  }

  createInstanceCustomer(params: NewCustomer) {
    let path = `${resourceName}/${this.instance_id}/customer`;
    return this.user_put<any>(path, params);
  }

  updateInstanceCustomer(customer_id: string, params: UpdateCustomer) {
    let path = `${resourceName}/${this.instance_id}/customer/${customer_id}`;
    return this.user_post<any>(path, params);
  }

  // // ---------- INSTANCE-CATEGORIES ----------
  getCategories(params?: CategoryParams) {
    let query = `${resourceName}/${this.instance_id}/categories`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<any[]>(query);
  }

  createCategory(params: NewCategory) {
    let path = `${resourceName}/${this.instance_id}/category`;
    return this.user_put<instance>(path, params);
  }

  updateCategory(params: EditCategory) {
    let path = `${resourceName}/${this.instance_id}/category`;
    return this.user_post<instance>(path, params);
  }

  deleteCategory(category_id: string) {
    let path = `${resourceName}/${this.instance_id}/category/${category_id}`;
    return this.user_delete<instance>(path);
  }

  createCategoryFilterGroup(category_id: string, params: FilterGroup) {
    let path = `${resourceName}/${this.instance_id}/category/${category_id}/filter-group`;
    return this.user_put<instance>(path, params);
  }

  createCategoryFilter(category_id: string, params: CategoryFilter) {
    let path = `${resourceName}/${this.instance_id}/category/${category_id}/filter`;
    return this.user_put<instance>(path, params);
  }

  // // ---------- INSTANCE-BRANDS ----------

  createBrand(params: NewBrand) {
    let path = `${resourceName}/${this.instance_id}/brand`;
    return this.user_put<instance>(path, params);
  }

  updateBrand(params: EditBrand) {
    let path = `${resourceName}/${this.instance_id}/brand`;
    return this.user_post<instance>(path, params);
  }

  deleteBrand(brand_id: string) {
    let path = `${resourceName}/${this.instance_id}/brand/${brand_id}`;
    return this.user_delete<instance>(path);
  }

  getBrands() {
    let path = `${resourceName}/${this.instance_id}/brands`;
    return this.get<instance>(path);
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
