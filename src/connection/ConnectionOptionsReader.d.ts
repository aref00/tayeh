import { ConnectionOptions } from "./ConnectionOptions";
export declare class ConnectionOptionsReader {
    read(): Promise<ConnectionOptions>;
    plainRead(): ConnectionOptions;
    protected load(): Promise<ConnectionOptions>;
    protected get configPath(): string;
    protected get baseDirectory(): string;
    protected get baseConfigName(): string;
}
