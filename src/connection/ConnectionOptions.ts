export interface ConnectionOptionsBase {
    readonly name: string;
    readonly api_url: "api.tayeh.ir"|string;
    readonly auth_url: "auth.tayeh.ir"|string;
    readonly media_url: "media.tayeh.ir"|string;
    readonly api_access: string;
    readonly instance_id: number;
}

export type ConnectionOptions = ConnectionOptionsBase;