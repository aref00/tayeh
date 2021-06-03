import { Base } from "../base";
import { SendNewReview, GetReviews, GetRemaining } from "./types";
export declare class Product extends Base {
    getProduct(product_id: string): Promise<import("axios").AxiosResponse<any[]>>;
    getProductFeatures(product_id: string): Promise<import("axios").AxiosResponse<any[]>>;
    getSimilarProducts(product_id: string): Promise<import("axios").AxiosResponse<any[]>>;
    getProductChoices(product_id: string): Promise<import("axios").AxiosResponse<any[]>>;
    getProductReviews(product_id: string, params?: GetReviews): Promise<import("axios").AxiosResponse<any>>;
    getRatingOptions(product_id: string): Promise<import("axios").AxiosResponse<any>>;
    sendNewReview(product_id: string, body: SendNewReview): Promise<import("axios").AxiosResponse<any>>;
    reportReview(product_id: string, review_id: string): Promise<import("axios").AxiosResponse<any>>;
    getProductRemaining(product_id: string, params?: GetRemaining): Promise<import("axios").AxiosResponse<any>>;
    getPricableFilters(product_id: string): Promise<import("axios").AxiosResponse<any>>;
}
