import { Base } from "../base";
import { SearchParams } from "../instance/types";
export declare class Countries extends Base {
    getCountries(params: SearchParams): Promise<import("axios").AxiosResponse<any>>;
    getIranProvinces(params: SearchParams): Promise<import("axios").AxiosResponse<any>>;
    getStateCities(state_code: string, params: SearchParams): Promise<import("axios").AxiosResponse<any>>;
}
