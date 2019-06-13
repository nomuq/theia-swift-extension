import { injectable, inject } from "inversify";
import {
  BaseLanguageClientContribution,
  Workspace,
  Languages,
  LanguageClientFactory
} from "@theia/languages/lib/browser";
import { SWIFT_LANGUAGE_ID, SWIFT_LANGUAGE_NAME } from "../common";

@injectable()
export class SwiftClientContribution extends BaseLanguageClientContribution {
  readonly id = SWIFT_LANGUAGE_ID;
  readonly name = SWIFT_LANGUAGE_NAME;

  constructor(
    @inject(Workspace) protected readonly workspace: Workspace,
    @inject(Languages) protected readonly languages: Languages,
    @inject(LanguageClientFactory)
    protected readonly languageClientFactory: LanguageClientFactory
  ) {
    super(workspace, languages, languageClientFactory);
  }

  protected get globPatterns() {
    return ["**/*.swift"];
  }
}
