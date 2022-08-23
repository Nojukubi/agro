import { defineConfig } from 'vite';
import buildConfig from '@internal/builder';

// Url to Strapi API endpoint.
const apiUrl: string = process.env.API_URL ?? 'http://localhost:1337';

// Token to Strapi API endpoint.
const apiToken: string = process.env.API_TOKEN;

// Define and export vite configs.
// https://vitejs.dev/config
export default defineConfig({
  ...buildConfig,
  server: {
    proxy: {
      '/uploads': {
        target: apiUrl
      },
      '/graphql': {
        target: apiUrl,
        headers: {
          Authorization: `Bearer ${apiToken}`
        }
      }
    }
  }
});
