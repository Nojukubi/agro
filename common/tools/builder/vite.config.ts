import eslintConfig from '@internal/eslint';
import pluginVue from '@vitejs/plugin-vue';
import pluginEslint from 'vite-plugin-eslint';
import pluginGraphQL from '@rollup/plugin-graphql';
import { quasar as pluginQuasar } from '@quasar/vite-plugin';
import pluginDeIndent from './plugin/deIndent';
import { resolve } from './vite.resolve';
import type { UserConfig } from 'vite';

// Define and export vite configs.
// https://vitejs.dev/config
export default <UserConfig>{
  resolve,
  plugins: [
    pluginGraphQL(),
    pluginDeIndent(),
    pluginVue({
      reactivityTransform: true
    }),
    pluginQuasar({
      sassVariables: false
    }),
    pluginEslint({
      baseConfig: eslintConfig
    })
  ]
};
