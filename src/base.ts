import Axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { ConnectionOptions } from "./connection/ConnectionOptions";
import { ConnectionOptionsReader } from "./connection/ConnectionOptionsReader";
export type Pagination = {
  page?: number;
  per_page?: number;
};

// type Config = {
//   API_KEY_VARIABLE?: string;
//   API_SECRET_VARIABLE?: string;
// };

export abstract class Base {
  private basePath: string;
  private authPath: string;
  private mediaPath: string;
  private API_ACCESS: string;
  private USER_ACCESS: string;
  public instance_id: number;

  constructor(options: ConnectionOptions) {
    // const optionsReader = new ConnectionOptionsReader();
    // const options = optionsReader.plainRead();
    this.API_ACCESS = options.api_access;
    this.USER_ACCESS;
    this.basePath = options.api_url||"api.tayeh.ir";
    this.authPath = options.auth_url||"auth.tayeh.ir";
    this.mediaPath = options.media_url||"media.tayeh.ir";
    this.instance_id = options.instance_id;
    // this.API_KEY = process.env[config.API_KEY_VARIABLE || "TAYEH_API_KEY"];
    // this.API_SECRET =
    //   process.env[config.API_SECRET_VARIABLE || "TAYEH_API_SECRET"];
    // this.basePath = process.env["TAYEH_BASE_URL"] || "http://api.tayeh.ir/";
    // this.authPath = process.env["TAYEH_AUTH_URL"] || "http://auth.tayeh.ir/";
    // this.mediaPath = process.env["TAYEH_MEDIA_URL"] || "http://media.tayeh.ir/";
    // this.mediaPath = process.env["REACT_APP_MEDIA_URL"] || "http://media.tayeh.ir/";
    if (typeof this.API_ACCESS !== "string")
      throw new Error(
        "You should define TAYEH_API_ACCESS in your environment variables."
      );
    // this.get_token();
  }

  // async get_token(): Promise<boolean> {
  //   const url = "api/token";
  //   try {
  //     const { access_token } = (
  //       await this.get_auth<{ access_token }>(url, {
  //         auth: {
  //           username: this.API_KEY,
  //           password: this.API_SECRET,
  //         },
  //       })
  //     ).data;
  //     this.API_ACCESS = access_token;
  //     return true;
  //   } catch (err) {
  //     throw new Error(err);
  //   }
  // }

  set_token(access_token) {
    this.API_ACCESS = access_token;
  }

  set_user(access_token) {
    this.USER_ACCESS = access_token;
  }

  protected async delete<T>(
    endpoint: string,
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
    const res = await Axios.delete(url, config);
    return res;
  }

  protected async user_delete<T>(
    endpoint: string,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    const url = this.basePath + endpoint;
    const headers = {
      Authorization: `Bearer ${this.USER_ACCESS}`,
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
    const res = await Axios.get(url, config);
    return res;
  }

  protected async user_get<T>(
    endpoint: string,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    const url = this.basePath + endpoint;
    const headers = {
      Authorization: `Bearer ${this.USER_ACCESS}`,
      "Content-type": "application/json",
    };
    const config: AxiosRequestConfig = {
      headers: { ...headers },
      ...options,
    };
    const res = await Axios.get(url, config);
    return res;
  }

  // protected async get_auth<T>(
  //   endpoint: string,
  //   options?: AxiosRequestConfig
  // ): Promise<AxiosResponse<T>> {
  //   const url = this.authPath + endpoint;
  //   const headers = {
  //     "Content-type": "application/json",
  //   };
  //   const config: AxiosRequestConfig = {
  //     headers: { ...headers },
  //     ...options,
  //   };
  //   const res = await Axios.get(url, config);
  //   return res;
  // }

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

  protected async user_post<T>(
    endpoint: string,
    body = {},
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    const url = this.basePath + endpoint;
    const headers = {
      Authorization: `Bearer ${this.USER_ACCESS}`,
      "Content-type": "application/json",
    };
    const config: AxiosRequestConfig = {
      headers: { ...headers },
      ...options,
    };
    const res = await Axios.post(url, body, config);
    return res;
  }

  protected async post_media<T>(
    endpoint: string,
    body = {},
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    const url = this.mediaPath + endpoint;
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

  protected async put<T>(
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
    const res = await Axios.put(url, body, config);
    return res;
  }

  protected async user_put<T>(
    endpoint: string,
    body = {},
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    const url = this.basePath + endpoint;
    const headers = {
      Authorization: `Bearer ${this.USER_ACCESS}`,
      "Content-type": "application/json",
    };
    const config: AxiosRequestConfig = {
      headers: { ...headers },
      ...options,
    };
    const res = await Axios.put(url, body, config);
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
