import { Pagination } from "../base";
declare enum suggestion_status {
    yes = 0,
    no = 1,
    na = 2
}
declare enum Sort {
    latest = 0,
    oldest = 1
}
export declare type ProductParams = {
    instance: number;
};
export declare type SendNewReview = {
    product_id: string;
    comment: string;
    suggestion_status: suggestion_status;
    ratings: {
        id: string;
        score: number;
    }[] | [];
};
export declare type GetReviews = Pagination & {
    sort: Sort;
    only_buyers: boolean;
};
export {};
