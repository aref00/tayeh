import { AxiosRequestConfig } from "axios";
declare type Config = {
    API_KEY: string;
    API_SECRET: string;
};
export declare type Pagination = {
    page?: number;
    per_page?: number;
};
export declare abstract class Base {
    private API_KEY;
    private API_SECRET;
    private basePath;
    private mediaPath;
    private API_ACCESS;
    constructor(config: Config);
    get_token(): Promise<boolean>;
    protected delete<T>(endpoint: string, options?: AxiosRequestConfig): Promise<T>;
    protected get<T>(endpoint: string, options?: AxiosRequestConfig, isBasic?: boolean): Promise<T>;
    protected post<T>(endpoint: string, body?: {}, options?: AxiosRequestConfig): Promise<T>;
}
export {};
