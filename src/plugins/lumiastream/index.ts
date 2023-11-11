import { createPluginBuilder } from '../utils/builder';

const builder = createPluginBuilder('lumiastream', {
  name: 'Lumia Stream [beta]',
  restartNeeded: true,
  config: {
    enabled: false,
  },
});

export default builder;

declare global {
  interface PluginBuilderList {
    [builder.id]: typeof builder;
  }
}
