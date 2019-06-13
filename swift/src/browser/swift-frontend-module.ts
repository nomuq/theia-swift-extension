import { SwiftClientContribution } from "./swift-client-contribution";
import { LanguageClientContribution } from "@theia/languages/lib/browser";

import { ContainerModule } from "inversify";

export default new ContainerModule(bind => {
  bind(SwiftClientContribution)
    .toSelf()
    .inSingletonScope();
  bind(LanguageClientContribution).toDynamicValue(ctx =>
    ctx.container.get(SwiftClientContribution)
  );
});
