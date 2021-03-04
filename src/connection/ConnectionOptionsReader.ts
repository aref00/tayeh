import appRootPath from "app-root-path";
import { ConnectionOptions } from "./ConnectionOptions";
import * as fs from "fs";
export class ConnectionOptionsReader {
  async read(): Promise<ConnectionOptions> {
    const options = await this.load();
    if (!options)
      throw new Error(
        `No connection options were found in any ty configuration files.`
      );
    return options;
  }

  plainRead(): ConnectionOptions {
    var config = JSON.parse(
      fs.readFileSync(
        "/media/hdd/aref/Documents/projects/gitcha/mersilady/mercilady-web/tyconfig.json",
        "utf8"
      )
    );
    // const configFile = this.configPath;
    return require(config);
  }

  protected async load(): Promise<ConnectionOptions> {
    const configFile = this.configPath;
    return require(configFile);
  }

  protected get configPath(): string {
    return "/media/hdd/aref/Documents/projects/gitcha/mersilady/mercilady-web/tyconfig.json";
    // return this.baseDirectory + "/" + this.baseConfigName + ".json";
  }

  protected get baseDirectory(): string {
    return appRootPath.path;
  }

  protected get baseConfigName(): string {
    return "tyconfig";
  }
}
