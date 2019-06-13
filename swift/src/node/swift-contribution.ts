import { injectable } from "inversify";
import {
  BaseLanguageServerContribution,
  IConnection
} from "@theia/languages/lib/node";
import { SWIFT_LANGUAGE_ID, SWIFT_LANGUAGE_NAME } from "../common";

@injectable()
export class SwiftContribution extends BaseLanguageServerContribution {
  readonly id = SWIFT_LANGUAGE_ID;
  readonly name = SWIFT_LANGUAGE_NAME;

  start(clientConnection: IConnection): void {
    let command = process.env.SWIFT_LS_PATH || "sourcekit-lsp";
    const args: string[] = [];
    const serverConnection = this.createProcessStreamConnection(command, args);
    this.forward(clientConnection, serverConnection);
  }

  protected onDidFailSpawnProcess(error: Error): void {
    super.onDidFailSpawnProcess(error);
    const message =
      "Error starting swift language server.\n" +
      "Please make sure it is installed on your system.";
    console.error(message);
  }
}
