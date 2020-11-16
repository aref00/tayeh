// import fetch from "isomorphic-unfetch";
import Axios, { AxiosRequestConfig } from "axios";

type Config = {
  API_KEY: string;
  API_SECRET: string;
  basePath?: string;
};

export type Pagination = {
  page?: number;
  per_page?: number;
};

export abstract class Base {
  private API_KEY: string;
  private API_SECRET: string;
  private basePath: string;
  private API_ACCESS: string;

  constructor(config: Config) {
    this.API_KEY = config.API_KEY;
    this.API_SECRET = config.API_SECRET;
    if (typeof this.API_KEY !== 'string' || typeof this.API_SECRET !== 'string') throw new Error("You should define API_KEY & API_SECRET.")
    this.basePath = config.basePath || "https://api.tayeh.ir/";
    // this.get_token();
  }

  protected async get_token(): Promise<boolean> {
    const url = "api/token";
    try {
      const {access_token}  = await this.get<{ access_token }>(
        url,
        {
          auth: {
            username: this.API_KEY,
            password: this.API_SECRET,
          },
        },
        true
      );
      this.API_ACCESS = access_token;
      return true;
    } catch (err) {
      throw new Error(err);
    }
  }

  protected async delete<T>(
    endpoint: string,
    options?: AxiosRequestConfig
  ): Promise<T> {
    const url = this.basePath + endpoint;
    const headers = {
      Authorization: `Bearer ${this.API_ACCESS}`,
      "Content-type": "application/json",
    };

    const config: AxiosRequestConfig = {
      headers: {...headers},
      ...options,
    };
    const res = await Axios.delete(url, config);
    return res.data;
  }

  protected async get<T>(endpoint: string, options?: AxiosRequestConfig, isBasic : boolean = false ): Promise<T> {
    const url = this.basePath + endpoint;
    const headers: any = {
      "Content-type": "application/json",
    }
    if (!isBasic) {
       headers.Authorization = `Bearer ${this.API_ACCESS}`
    }
    const config: AxiosRequestConfig = {
      headers: {...headers},
      ...options,
    };
    const res = await Axios.get(url, config);
    return res.data;
  }

  protected async post<T>(
    endpoint: string,
    body = {},
    options?: AxiosRequestConfig
  ): Promise<T> {
    const url = this.basePath + endpoint;
    const headers = {
      Authorization: `Bearer ${this.API_ACCESS}`,
      "Content-type": "application/json",
    };

    const config: AxiosRequestConfig = {
      headers: {...headers},
      ...options,
    };
    const res = await Axios.post(url, body, config);
    return res.data;
  }

  //   protected request<T>(endpoint: string, options?: AxiosRequestConfig): Promise<T> {
  //     const url = this.basePath + endpoint;
  //     const headers = {
  //       // @todo change based on our api
  //       Authorization: this.apiKey,
  //       "Content-type": "application/json",
  //     };

  //     const config = {
  //       ...options,
  //       headers,
  //     };

  //     return fetch(url, config).then((r) => {
  //       if (r.ok) {
  //         return r.json();
  //       }
  //       throw new Error(r.statusText);
  //     });
  //   }
}
