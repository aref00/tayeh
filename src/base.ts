import Axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export type Pagination = {
  page?: number;
  per_page?: number;
};

type Config = {
  API_KEY_VARIABLE?: string;
  API_SECRET_VARIABLE?: string;
};

export abstract class Base {
  private API_KEY: string;
  private API_SECRET: string;
  private basePath: string;
  private authPath: string;
  private mediaPath: string;
  private API_ACCESS: string;

  constructor(config: Config = {}) {
    this.API_KEY = process.env[config.API_KEY_VARIABLE || "TAYEH_API_KEY"];
    this.API_SECRET =
      process.env[config.API_SECRET_VARIABLE || "TAYEH_API_SECRET"];
    this.basePath = process.env["TAYEH_BASE_URL"] || "http://api.tayeh.ir/";
    this.authPath = process.env["TAYEH_AUTH_URL"] || "http://auth.tayeh.ir/";
    this.mediaPath = process.env["TAYEH_MEDIA_URL"] || "http://media.tayeh.ir/";
    if (typeof this.API_KEY !== "string" || typeof this.API_SECRET !== "string")
      throw new Error(
        "You should define TAYEH_API_KEY & TAYEH_API_SECRET in your environment variables."
      );
    this.get_token();
  }

  async get_token(): Promise<boolean> {
    const url = "api/token";
    try {
      const { access_token } = (
        await this.get_auth<{ access_token }>(
          url,
          {
            auth: {
              username: this.API_KEY,
              password: this.API_SECRET,
            },
          },
          true
        )
      ).data;
      this.API_ACCESS = access_token;
      return true;
    } catch (err) {
      throw new Error(err);
    }
  }

  set_token(access_token) {
    this.API_ACCESS = access_token;
  }

  protected async delete<T>(
    endpoint: string,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    const url = this.authPath + endpoint;
    const headers = {
      Authorization: `Bearer ${this.API_ACCESS}`,
      "Content-type": "application/json",
    };

    const config: AxiosRequestConfig = {
      headers: { ...headers },
      ...options,
    };
    const res = await Axios.delete(url, config);
    return res;
  }

  protected async get<T>(
    endpoint: string,
    options?: AxiosRequestConfig,
    isBasic: boolean = false
  ): Promise<AxiosResponse<T>> {
    const url = this.basePath + endpoint;

    const headers: any = {
      "Content-type": "application/json",
    };
    if (!isBasic) {
      headers.Authorization = `Bearer ${this.API_ACCESS}`;
    }
    const config: AxiosRequestConfig = {
      headers: { ...headers },
      ...options,
    };
    const res = await Axios.get(url, config);
    return res;
  }

  protected async get_auth<T>(
    endpoint: string,
    options?: AxiosRequestConfig,
    isBasic: boolean = false
  ): Promise<AxiosResponse<T>> {
    const url = this.authPath + endpoint;
    const headers: any = {
      "Content-type": "application/json",
    };
    if (!isBasic) {
      headers.Authorization = `Bearer ${this.API_ACCESS}`;
    }
    const config: AxiosRequestConfig = {
      headers: { ...headers },
      ...options,
    };
    const res = await Axios.get(url, config);
    return res;
  }

  protected async post<T>(
    endpoint: string,
    body = {},
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    const url = this.basePath + endpoint;
    const headers = {
      Authorization: `Bearer ${this.API_ACCESS}`,
      "Content-type": "application/json",
    };

    const config: AxiosRequestConfig = {
      headers: { ...headers },
      ...options,
    };
    const res = await Axios.post(url, body, config);
    return res;
  }

  protected async post_auth<T>(
    endpoint: string,
    body = {},
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    const url = this.authPath + endpoint;
    const headers = {
      Authorization: `Bearer ${this.API_ACCESS}`,
      "Content-type": "application/json",
    };
    const config: AxiosRequestConfig = {
      headers: { ...headers },
      ...options,
    };
    const res = await Axios.post(url, body, config);
    return res;
  }
}
