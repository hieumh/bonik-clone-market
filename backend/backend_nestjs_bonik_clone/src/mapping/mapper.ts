import { classes } from '@automapper/classes';
import { CamelCaseNamingConvention, createMapper } from '@automapper/core';

export const mapper = createMapper({
  strategyInitializer: classes(),
  namingConventions: new CamelCaseNamingConvention(),
});
