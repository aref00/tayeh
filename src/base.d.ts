import { AxiosRequestConfig, AxiosResponse } from "axios";
import { ConnectionOptions } from "./connection/ConnectionOptions";
export declare type Pagination = {
    page?: number;
    per_page?: number;
};
export declare abstract class Base {
    private basePath;
    private authPath;
    private mediaPath;
    private API_ACCESS;
    private USER_ACCESS;
    instance_id: number;
    constructor(options: ConnectionOptions);
    set_token(access_token: any): void;
    set_user(access_token: any): void;
    protected delete<T>(endpoint: string, options?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
    protected user_delete<T>(endpoint: string, options?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
    protected get<T>(endpoint: string, options?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
    protected userGet<T>(endpoint: string, options?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
    protected post<T>(endpoint: string, body?: {}, options?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
    protected user_post<T>(endpoint: string, body?: {}, options?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
    protected post_media<T>(endpoint: string, body?: {}, options?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
    protected put<T>(endpoint: string, body?: {}, options?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
    protected user_put<T>(endpoint: string, body?: {}, options?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
    protected post_auth<T>(endpoint: string, body?: {}, options?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
}
