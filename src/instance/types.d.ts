import { Pagination } from "../base";
import { customer } from "../customer/types";
import { user } from "../user/types";
export declare enum Sex {
    male = 0,
    female = 1,
    na = 2
}
export declare enum user_role {
    user = 0,
    manager = 1,
    admin = 2
}
declare enum SubUser_Status {
    pending = 0,
    accepted = 1,
    rejected = 2
}
declare enum Banner_Size {
    all = 0,
    small = 1,
    medium = 2,
    large = 3
}
declare enum Invoice_Type {
    Sold = 0,
    Bought = 1
}
declare enum Transaction_Type {
    buy = 0,
    sell = 1,
    income = 2,
    cost = 3
}
declare enum ProductSort {
    fresh = 0,
    price_low_2_high = 1,
    price_high_2_low = 2,
    discount = 3,
    bestsellers = 4
}
export declare type SearchParams = Pagination & {
    search?: string;
};
export declare type CategoryParams = SearchParams & {
    show_filters?: boolean;
    parent_id?: number;
    category_id?: string;
};
export declare type SearchFilters = {
    category?: string;
};
export declare type BannerParams = {
    category?: string;
    size?: Banner_Size;
};
export declare type InviteParams = {
    mobile: string;
};
export declare type reminder = {};
export declare type Province = {
    id: number;
    name: string;
    addresses: address[];
    instances: instance[];
    users: user[];
    date_created: Date;
    date_updated: Date;
};
export declare type City = {
    id: number;
    province_id: number;
    county_id: number;
    name: string;
    addresses: address[];
    instances: instance[];
    users: user[];
    date_created: Date;
    date_updated: Date;
};
declare type source = {
    id: number;
    to_transaction_id: number;
    to_transaction: Transaction;
    from_transaction_id: number;
    from_transaction: Transaction;
    count: number;
    date_created: Date;
    date_updated: Date;
};
export declare type Payment = {
    id: number;
    Amount: number;
    url: string;
    paid: boolean;
    type: string;
    user_id: number;
    subscription_id: number;
    invoice_id: number;
    user: user;
    date_created: Date;
    date_paid: Date;
};
export declare type subscription = {
    id: number;
    user_id: number;
    user: user;
    type: user;
    payment: Payment;
    gift: boolean;
    active: boolean;
    date_created: Date;
    date_updated: Date;
};
export declare type instance = {
    id: number;
    name: string;
    credit: number;
    description: string;
    type: string;
    category: string;
    owner_id: number;
    addresses: address[];
    province_id: number;
    city_id: number;
    users_count: number;
    invoices_count: number;
    products_count: number;
    transactions_count: number;
    inventory_type: string;
    image_id: number;
};
export declare type Product = {
    id: number;
    name: string;
    description: string;
    instance_id: number;
    instance: instance;
    transactions: Transaction[];
    reminders: reminder[];
    predicted_percent: number;
    remaining: number;
    date_created: string;
};
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
declare type Transaction = {
    id: number;
    transaction_no: number;
    instance_id: number;
    instance: instance;
    product_id: number;
    from_sources: source;
    to_transactions: source;
    reminders: reminder;
    count: number;
    remaining: number;
    value: number;
    type: Transaction_Type;
    name: string;
    paid: string;
    date_paid: string;
    description: string;
    invoice_id: number;
    options: string;
    locked: boolean;
    archived: boolean;
    creator_id: number;
    date_created: string;
    date_updated: string;
    date_archived: string;
};
export declare type Invoice = {
    id: number;
    invoice_number: number;
    file_id: number;
    file: string;
    transactions: Transaction[];
    type: number;
    total: number;
    payment: Payment;
    instance_id: number;
    instance: instance;
    reminders: reminder[];
    admin_id: number;
    customer_id: number;
    customer: customer;
    more_info: string;
    sent: boolean;
    paid: boolean;
    date_paid: string;
    date_sent: string;
    done: boolean;
    date_arrived: string;
    closed: boolean;
    date_created: string;
    date_updated: string;
};
export declare type NewInvoice = {
    transactions: number[];
    count: number;
    value: number;
    name: string;
    description: string;
    type: string;
    paid: boolean;
};
export declare type UpdateInvoice = {
    id: number;
    invoice_number: number;
    file_id: number;
    type: Invoice_Type;
    total: number;
    customer_id: number;
    more_info: string;
    sent: boolean;
    done: boolean;
    closed: boolean;
};
export declare type NewCustomer = {
    name: string;
    description: string;
    mobile: string;
};
export declare type UpdateCustomer = {
    customer_id: number;
};
export declare type sub_user = {
    id: number;
    instance_id: number;
    instance: instance;
    user_id: number;
    user: user;
    creator_id: number;
    creator: user;
    reminders: reminder[];
    status: SubUser_Status;
    date_created: Date;
    date_updated: Date;
};
declare type address = {
    id: number;
    province_id: number;
    city_id: number;
    lat: string;
    lng: string;
    address: string;
    user_id: number;
    user: user;
    reminders: reminder[];
    primary_address: boolean;
    instance_id: number;
    instance: instance;
    title: string;
    description: string;
    phone: string;
    creator_id: number;
    date_created: string;
    date_updated: string;
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
export {};
