import qs from "querystringify";
import { Base } from "../base";
import { Qsearch, SearchParams } from "./types";

const resourceName = "countries";

export class Countries extends Base {
  getCountries(params: SearchParams) {
    let query = `${resourceName}`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<any>(query);
  }

  getIranProvinces(params: Qsearch) {
    let query = `${resourceName}/103/states`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<any>(query);
  }

  getStateCities(state_id: string, params: Qsearch) {
    let query = `${resourceName}/103/states/${state_id}/cities`;
    if (params) {
      query += qs.stringify(params, "?");
    }
    return this.get<any>(query);
  }
}
