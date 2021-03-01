import qs from "querystringify";
import { Base } from "../base";
import { SearchParams } from "../instance/types";

const resourceName = "countries";

export class Countries extends Base {
  getCountries(params: SearchParams) {
    let query = `${resourceName}`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<any>(query);
  }

  getIranProvinces(params: SearchParams) {
    let query = `${resourceName}/IR/states`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<any>(query);
  }

  getStateCities(state_code: string, params: SearchParams) {
    let query = `${resourceName}/IR/states/${state_code}/cities`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<any>(query);
  }
}
