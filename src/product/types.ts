import { Image } from "../media/types";
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


class ProductBrand {
  id: string;
  name!: string;
  logo: Image;
}

class AverageRating {
  constructor (name, score, max) {
      this.name = name;
      this.score = Math.round((score + Number.EPSILON) * 10) / 10;
      this.max = max;
  }
  name: string;
  score: number = 0;
  max: number = 5;
}

class RatingOption {
  constructor( id: string, name: string, max: number ){
      this.id = id;
      this.name = name;
      this.max = max;
  }

  id: string;
  name: string;

  max: number = 5;
}

export class ProductInfo {
  id: string;
  name: string;
  description?: string;
  available: boolean;
  price: number;
  price_with_off: number;
  off_percent: number;
  currency = 'تومان';
  image: Image;
  images: Image[];
  brand?: ProductBrand;
  category: string = '';
  category_id?: string;
  rating_score = '0';
  max_rating_score = 5;
  rating_averages: AverageRating[] = [];
  rating_options: RatingOption[] = [];
  rating_count = '0';
  comments_count = '0';
  favorite = false;
  remaining = 0;
  bare_product_remaining: number;
  barcode: string;
  predicted_percent: number;
  suggested: boolean;
  hide: boolean;
}