import { Pagination } from "../base";
export declare enum Sex {
    male = 0,
    female = 1,
    na = 2
}
export declare type SearchParams = Pagination & {
    search?: string;
};
export declare type SearchFilters = {
    category?: string;
};
export declare type InviteParams = {
    mobile: string;
};
declare enum ProductSort {
    fresh = 0,
    price_low_2_high = 1,
    price_high_2_low = 2,
    discount = 3,
    bestsellers = 4
}
export declare type ProductParams = SearchParams & {
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
export declare type NewProduct = {
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
export declare type UpdateProduct = NewProduct & {
    id: string;
};
export declare type CreatePrice = {
    product_id: string;
    option_id: string;
    price: number;
    price_with_off: number;
};
export declare type UpdatePrice = CreatePrice & {
    id: string;
};
export declare type UpdatePrices = UpdatePrice[];
export declare type ProductMedia = {
    media_id: string;
};
declare enum InvoiceType {
    SOLD = "sold",
    BOUGHT = "bought",
    INCOME = "income",
    COST = "cost",
    RETURN_FROM_SOLD = "rs",
    RETURN_FROM_BOUGHT = "rb",
    TRANSFER = "transfer"
}
export declare type InvoicesParams = {
    page: number;
    type: InvoiceType;
};
export declare type NewCustomer = {
    name: string;
    description: string;
    mobile: string;
};
export declare type UpdateCustomer = {
    customer_id: number;
};
declare type CategoryFilterType = {
    TEXT: "text";
    SELECT: "select";
    NUMBER: "number";
    BOOLEAN: "boolean";
    COLOR: "color";
    RATING: "rating";
    IMAGE: "image";
};
declare type Option = {
    value: string;
    id: string;
    category_filter_id: string;
};
export declare type CategoryParams = SearchParams & {
    show_filters?: boolean;
    parent_id?: number;
    category_id?: string;
};
export declare type NewCategory = {
    name: string;
    parent_id: string;
};
export declare type EditCategory = {
    id: string;
    name: string;
    description: string;
    parent_id: string;
};
export declare type FilterGroup = {
    name: string;
};
export declare type CategoryFilter = {
    name: string;
    options: Option[];
    type: CategoryFilterType;
    category_id: string;
    group_id?: string;
};
export declare type NewBrand = {
    name: string;
    translated_name: string;
    logo_id: string;
};
export declare type EditBrand = NewBrand & {
    id: string;
};
declare enum Banner_Size {
    all = 0,
    small = 1,
    medium = 2,
    large = 3
}
declare enum BannerPosition {
    CUSTOM = "custom",
    MAIN = "main",
    SOCIAL_SHOP = "social_shop"
}
declare enum BannerSize {
    ALL = "all",
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large"
}
declare enum BannerLinkType {
    NONE = "none",
    URL = "url",
    PRODUCT = "product",
    CATEGORY = "category"
}
export declare type BannerParams = {
    category?: string;
    size?: Banner_Size;
};
export declare type NewBannerCat = {
    type: BannerPosition;
    title: string;
};
export declare type NewBanner = {
    banner_category_id: string;
    link_type: BannerLinkType;
    link: string;
    media_id: string;
    size: BannerSize;
    title: string;
    description: string;
    status: boolean;
};
export declare type EditBanner = NewBanner & {
    id: string;
};
export {};
