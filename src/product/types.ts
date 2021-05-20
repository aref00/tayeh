import { Pagination } from "../base";

enum suggestion_status {
  yes,
  no,
  na,
}

enum Sort {
  latest,
  oldest,
}

export type ProductParams = {
  instance: number;
};

export type SendNewReview = {
  product_id: string;
  comment: string;
  suggestion_status: suggestion_status;
  ratings:
    | {
        id: string;
        score: number;
      }[]
    | [];
};

export type GetReviews = Pagination & {
  sort: Sort;
  only_buyers: boolean;
};

export type GetRemaining = {
  price_id: string | null;
  options: string[] | [];
};
