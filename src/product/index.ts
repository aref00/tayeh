import qs from "querystringify";
import { Base } from "../base";
import { SendNewReview, GetReviews, GetRemaining } from "./types";

const resourceName = "product";

export class Product extends Base {
  getProduct(product_id: string) {
    let path = `${resourceName}/${product_id}`;
    return this.get<any[]>(path);
  }

  getProductFeatures(product_id: string) {
    let path = `${resourceName}/${product_id}/features`;
    return this.get<any[]>(path);
  }

  getSimilarProducts(product_id: string) {
    let path = `${resourceName}/${product_id}/similar-products`;
    return this.get<any[]>(path);
  }

  getProductChoices(product_id: string) {
    let path = `${resourceName}/${product_id}/choices`;
    return this.get<any[]>(path);
  }

  getProductReviews(product_id: string, params?: GetReviews) {
    let query = `${resourceName}/${product_id}/reviews`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<any>(query);
  }

  getRatingOptions(product_id: string) {
    let path = `${resourceName}/${product_id}/rating-options`;
    return this.get<any>(path);
  }

  sendNewReview(product_id: string, body: SendNewReview) {
    const path = `${resourceName}/${product_id}/review`;
    return this.put<any>(path, body);
  }

  reportReview(product_id: string, review_id: string) {
    const path = `${resourceName}/${product_id}/review/${review_id}/report`;
    return this.post<any>(path);
  }

  getProductRemaining(product_id: string, params?: GetRemaining) {
    let query = `${resourceName}/${product_id}/remaining`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<any>(query);
  }

  getPricableFilters(product_id: string) {
    let path = `${resourceName}/${product_id}/price-filter`;
    return this.user_get<any>(path);
  }
}
