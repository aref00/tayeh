import { AxiosRequestConfig, AxiosResponse } from "axios";
export declare type Pagination = {
    page?: number;
    per_page?: number;
};
declare type Config = {
    API_KEY_VARIABLE?: string;
    API_SECRET_VARIABLE?: string;
};
export declare abstract class Base {
    private API_KEY;
    private API_SECRET;
    private basePath;
    private authPath;
    private mediaPath;
    private API_ACCESS;
    constructor(config?: Config);
    get_token(): Promise<boolean>;
    set_token(access_token: any): void;
    protected delete<T>(endpoint: string, options?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
    protected get<T>(endpoint: string, options?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
    protected get_auth<T>(endpoint: string, options?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
    protected post<T>(endpoint: string, body?: {}, options?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
    protected post_auth<T>(endpoint: string, body?: {}, options?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
}
export {};
