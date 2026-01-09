// eslint-disable-next-line import/no-extraneous-dependencies
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://dev.api.minetxc.com/graphql',
  // schema: 'http://127.0.0.1:4000/graphql',
  // schema: 'https://unjovially-untyrannic-leisa.ngrok-free.dev/graphql',
  // this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
  documents: ['src/**/*.{ts,tsx}'],
  generates: {
    './src/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
