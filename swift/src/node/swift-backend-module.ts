import { ContainerModule } from "inversify";
import { LanguageServerContribution } from "@theia/languages/lib/node";
import { SwiftContribution } from "./swift-contribution";

export default new ContainerModule(bind => {
  bind(LanguageServerContribution)
    .to(SwiftContribution)
    .inSingletonScope();
});
