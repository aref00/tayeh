import { Pagination } from "../base";

export enum Sex {
  male,
  female,
  na,
}

// ---------- GENERAL ----------

export type SearchParams = Pagination & {
  search?: string;
};

export type SearchFilters = {
  category?: string;
};

export type InviteParams = {
  mobile: string;
};

// ---------- PRODUCTS ----------

enum ProductSort {
  fresh,
  price_low_2_high,
  price_high_2_low,
  discount,
  bestsellers,
}

type SetProductFeaturesRequestFilter = {
  category_id: string;
  position?: number;
  group_id?: string;
  name: string;
  id: string;
  type?: CategoryFilterType;
};

type SetProductFeaturesRequestFeature = {
  filter_id: string;
  text?: string;
  id?: string | null;
};

export type ProductParams = SearchParams & {
  suggested?: boolean;
  min_price?: number;
  max_price?: number;
  category?: string;
  brands?: string[];
  only_available?: boolean;
  discounted?: boolean;
  sort?: ProductSort;
  filters?: string[];
  similar_to?: string;
};

export type NewProduct = {
  name: string;
  description: string;
  category_id: string;
  brand_id: string;
  image_id: string;
  barcode: string;
  price: number;
  price_with_off: number;
  predicted_percent: number;
};

export type UpdateProduct = NewProduct & {
  id: string;
};

export type CreatePrice = {
  product_id: string;
  option_id: string;
  price: number;
  price_with_off: number;
};

export type UpdatePrice = CreatePrice & {
  id: string;
};

export type UpdatePrices = UpdatePrice[];

export type ProductMedia = {
  media: string;
};

export type SetFeatures = {
  filters: SetProductFeaturesRequestFilter[];
  features: SetProductFeaturesRequestFeature[];
};

class Price {
  id: string = null;
  price: number = 0;
  price_with_off: number = null;
  option_id: string;
}

export type SetProPrices = {
  filter_id: string;
  prices: Price[];
};

// ---------- INVOICE ----------

enum DeliveryStatus {
  IN_INVENTORY = 0,
  SENDING = 1,
  SENT = 2,
  DELIVERED = 3,
  RETURNED = 4
}

enum InvoiceType {
  SOLD = "sold", //فروش
  BOUGHT = "bought", //خرید
  INCOME = "income", //درآمد
  COST = "cost", // هزینه
  RETURN_FROM_SOLD = "rs", // بازگشت از فروش
  RETURN_FROM_BOUGHT = "rb", // بازگشت از خرید
  TRANSFER = "transfer", //انتقال
}

export type InvoicesParams = {
  page: number;
  per_page: number;
  type: InvoiceType;
};

export type SetDeliveryStatus = {
  status: DeliveryStatus;
};

// ---------- CUSTOMER ----------

export type NewCustomer = {
  name: string;
  description: string;
  mobile: string;
};

export type UpdateCustomer = {
  customer_id: number;
};

// ------------------------- Category -----------------------

type CategoryFilterType = {
  TEXT: "text";
  SELECT: "select";
  NUMBER: "number";
  BOOLEAN: "boolean";
  COLOR: "color";
  RATING: "rating";
  IMAGE: "image";
};

type Option = {
  value: string;
  id: string;
  category_filter_id: string;
};

export type CategoryParams = SearchParams & {
  show_filters?: boolean;
  parent_id?: number;
  category_id?: string;
};

export type NewCategory = {
  name: string;
  parent_id: string;
};

export type EditCategory = NewCategory & {
  id: string;
  description: string;
};

export type FilterGroup = {
  name: string;
};

export type CategoryFilter = {
  name: string;
  options: Option[];
  type: CategoryFilterType;
  category_id: string;
  group_id?: string;
};

// ------------------------- Brand -----------------------

export type NewBrand = {
  name: string;
  translated_name: string;
  logo_id: string;
};

export type EditBrand = NewBrand & {
  id: string;
};

// ------------------------- BANNER -----------------------

enum Banner_Size {
  all,
  small,
  medium,
  large,
}

enum BannerPosition {
  CUSTOM = "custom",
  MAIN = "main",
  SOCIAL_SHOP = "social_shop",
}

enum BannerSize {
  ALL = "all",
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

enum BannerLinkType {
  NONE = "none",
  URL = "url",
  PRODUCT = "product",
  CATEGORY = "category",
}

export type BannerParams = {
  category?: string;
  size?: Banner_Size;
};

export type NewBannerCat = {
  type: BannerPosition;
  title: string;
};

export type NewBanner = {
  banner_category_id: string;
  link_type: BannerLinkType;
  link: string;
  media_id: string;
  size: BannerSize;
  title: string;
  description: string;
  status: boolean; //true
};

export type EditBanner = NewBanner & {
  id: string;
};

// ------------------------- Notifications -----------------------

export type CreateNotif = {
  customer_id: string;
  title: string;
  message: string;
  clipboard: string;
  url: string;
};

// ------------------------- Auto-Remaining -----------------------

export class AutoRemaining {
  product_id: string;
  remaining: number;
  price_id: string;
  inventory_id?: string = null;
  choices?: string[] = [];
}

export class BatchRemaining {
  remainings: AutoRemaining[];
}
