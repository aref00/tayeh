export interface ConnectionOptionsBase {
    readonly name: string;
    readonly api_url: "api.tayeh.ir"|string;
    readonly auth_url: "auth.tayeh.ir"|string;
    readonly media_url: "media.tayeh.ir"|string;
    readonly api_key: string;
    readonly api_secret: string;
}

export type ConnectionOptions = ConnectionOptionsBase;