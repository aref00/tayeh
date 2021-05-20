import { Base } from "../base";
import { Qsearch, SearchParams } from "./types";
export declare class Countries extends Base {
    getCountries(params: SearchParams): Promise<import("axios").AxiosResponse<any>>;
    getIranProvinces(params: Qsearch): Promise<import("axios").AxiosResponse<any>>;
    getStateCities(state_id: string, params: Qsearch): Promise<import("axios").AxiosResponse<any>>;
}
