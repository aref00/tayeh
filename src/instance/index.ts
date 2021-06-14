import qs from "querystringify";
import { Base, Pagination } from "../base";
import {
  NewProduct,
  UpdateProduct,
  SetFeatures,
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
  NewBannerCat,
  NewBanner,
  EditBanner,
  InviteParams,
  ProductParams,
  SetProPrices,
  CreatePrice,
  UpdatePrice,
  UpdatePrices,
  ProductMedia,
  SearchFilters,
  InvoicesParams,
  CreateNotif,
  AutoRemaining,
  BatchRemaining
} from "./types";

const resourceName = "instance";

export class Instance extends Base {
  // // ---------- INSTANCE-PRODUCTS ----------
  getProducts(params?: ProductParams) {
    let query = `${resourceName}/${this.instance_id}/products`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<any[]>(query);
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
    let path = `${resourceName}/${this.instance_id}/product`;
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
    return this.user_put<any>(path, params);
  }

  deleteProductMedia(product_id: string, media_id: string) {
    let path = `${resourceName}/${this.instance_id}/product/${product_id}/media/${media_id}`;
    return this.user_delete<any>(path);
  }

  setProductFeatures(product_id: string, body: SetFeatures) {
    const path = `${resourceName}/${this.instance_id}/product/${product_id}/features`;
    return this.user_put<any>(path, body);
  }

  setProductPriceFilter(product_id: string, params: SetProPrices) {
    let path = `${resourceName}/${this.instance_id}/product/${product_id}/price-filter`;
    return this.user_post<any>(path, params);
  }

  // // ---------- INSTANCE-INVOICES ----------
  getInstanceInvoices(params?: InvoicesParams) {
    let query = `${resourceName}/${this.instance_id}/invoices`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.user_get<any[]>(query);
  }

  getInstanceInvoice(invoice_id: string) {
    let path = `${resourceName}/${this.instance_id}/invoice/${invoice_id}`;
    return this.user_get<any>(path);
  }

  deleteInstanceInvoice(invoice_id: number) {
    let path = `${resourceName}/${this.instance_id}/invoice/${invoice_id}`;
    return this.delete<any>(path);
  }

  // // ---------- INSTANCE-CUSTOMER ----------
  getInstanceCustomers(params?: SearchParams) {
    let query = `${resourceName}/${this.instance_id}/customers`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.user_get<any[]>(query);
  }

  getInstanceCustomer(customer_id: string) {
    let path = `${resourceName}/${this.instance_id}/customer/${customer_id}`;
    return this.user_get<any>(path);
  }

  deleteInstanceCustomer(customer_id: number) {
    let path = `${resourceName}/${this.instance_id}/customer/${customer_id}`;
    return this.user_delete<any>(path);
  }

  createInstanceCustomer(params: NewCustomer) {
    let path = `${resourceName}/${this.instance_id}/customer`;
    return this.user_put<any>(path, params);
  }

  updateInstanceCustomer(customer_id: string, params: UpdateCustomer) {
    let path = `${resourceName}/${this.instance_id}/customer/${customer_id}`;
    return this.user_post<any>(path, params);
  }

  acceptInstanceCustomer(customer_id: string) {
    let path = `${resourceName}/${this.instance_id}/customer/${customer_id}/accept`;
    return this.user_post<any>(path);
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
    return this.user_put<any>(path, params);
  }

  updateCategory(params: EditCategory) {
    let path = `${resourceName}/${this.instance_id}/category`;
    return this.user_post<any>(path, params);
  }

  deleteCategory(category_id: string) {
    let path = `${resourceName}/${this.instance_id}/category/${category_id}`;
    return this.user_delete<any>(path);
  }

  createCategoryFilterGroup(category_id: string, params: FilterGroup) {
    let path = `${resourceName}/${this.instance_id}/category/${category_id}/filter-group`;
    return this.user_put<any>(path, params);
  }

  createCategoryFilter(category_id: string, params: CategoryFilter) {
    let path = `${resourceName}/${this.instance_id}/category/${category_id}/filter`;
    return this.user_put<any>(path, params);
  }

  getCategoryFeatures(category_id: string) {
    let path = `${resourceName}/${this.instance_id}/category/${category_id}/features`;
    return this.user_get<any>(path);
  }

  deleteCategoryFilter(category_id: string, filter_id: string) {
    let path = `${resourceName}/${this.instance_id}/category/${category_id}/filter/${filter_id}`;
    return this.user_delete<any>(path);
  }

  deleteFilterOption(
    category_id: string,
    filter_id: string,
    option_id: string
  ) {
    let path = `${resourceName}/${this.instance_id}/category/${category_id}/filter/${filter_id}/option/${option_id}`;
    return this.user_delete<any>(path);
  }

  // // ---------- INSTANCE-BRANDS ----------

  createBrand(params: NewBrand) {
    let path = `${resourceName}/${this.instance_id}/brand`;
    return this.user_put<any>(path, params);
  }

  updateBrand(params: EditBrand) {
    let path = `${resourceName}/${this.instance_id}/brand`;
    return this.user_post<any>(path, params);
  }

  deleteBrand(brand_id: string) {
    let path = `${resourceName}/${this.instance_id}/brand/${brand_id}`;
    return this.user_delete<any>(path);
  }

  getBrands() {
    let path = `${resourceName}/${this.instance_id}/brands`;
    return this.get<any[]>(path);
  }

  // // ---------- INSTANCE-BANNERS ----------
  createBannerCategory(body: NewBannerCat) {
    let path = `${resourceName}/${this.instance_id}/banner-category`;
    return this.user_put<any>(path, body);
  }

  getBannerCategories() {
    let path = `${resourceName}/${this.instance_id}/banner-categories`;
    return this.user_get<any[]>(path);
  }

  deleteBannerCategory(category_id: string) {
    let path = `${resourceName}/${this.instance_id}/banner-category/${category_id}`;
    return this.user_delete<any>(path);
  }

  getBanners(params?: BannerParams) {
    let query = `${resourceName}/${this.instance_id}/banners`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<any[]>(query);
  }

  createBanner(body: NewBanner) {
    let path = `${resourceName}/${this.instance_id}/banner`;
    return this.user_put<any>(path, body);
  }

  deleteBanner(banner_id: string) {
    let path = `${resourceName}/${this.instance_id}/banner/${banner_id}`;
    return this.user_delete<any>(path);
  }

  updateBanner(body: EditBanner) {
    let path = `${resourceName}/${this.instance_id}/banner/update`;
    return this.user_post<any>(path, body);
  }

  // // ---------- INSTANCE-NOTIFICATIONS ----------
  createNotification(body: CreateNotif) {
    let path = `${resourceName}/${this.instance_id}/notification`;
    return this.user_put<any>(path, body);
  }

  getInstanceNotifications(params: Pagination) {
    let query = `${resourceName}/${this.instance_id}/notifications`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.user_get<any[]>(query);
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
    return this.post<any>(path, params);
  }

  // // ---------- SearchKeywords ----------
  getTopKeywords(params: SearchFilters) {
    let query = `${resourceName}/${this.instance_id}/top-search-keywords`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.post<any>(query, params);
  }

  // // ---------- AutoRemaining ----------
  updateRemainingWithChoices(body: AutoRemaining) {
    let path = `${resourceName}/${this.instance_id}/auto-remaining`;
    return this.user_post<any>(path, body);
  }

  updateRemainingsWithChoices(body: BatchRemaining) {
    let path = `${resourceName}/${this.instance_id}/batch-auto-remaining`;
    return this.user_post<any>(path, body);
  }
}
