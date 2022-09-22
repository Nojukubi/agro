import './App.sass';
import { Quasar } from 'quasar';
import { createApp } from 'vue';
import { useConfigQuery } from './api/query';
import { getLanguage } from './helpers/language';
import { router, i18n, setI18nLang } from './plugins';
import Application from './App.vue';
import type { App } from 'vue';
import type { Page } from './api/query';

// Create the application based on props.
export async function create(props: { url?: string }) {
  // Create the Vue application with props.
  const app: App = createApp(Application, props);

  // Current active interface language.
  const language: string = getLanguage();

  // Composable to handle the Config Query.
  const { pages, execConfigQuery } = useConfigQuery();

  // Set and load the I18n language.
  await setI18nLang(language);

  // Execute the config query and load it.
  await execConfigQuery(language);

  // Create the dynamic routes based on pages.
  createDynamicRoutes(pages.value);

  // Configure the application plugins and mount it.
  app.use(i18n).use(router).use(Quasar).mount('#app');
}

/**
 * Create the dynamic routes based on the pages.
 * @param pages Pages retrieved from Strapi.
 */
function createDynamicRoutes(pages: Page[]): void {
  pages.forEach(({ name, path }: Page) => {
    // prettier-ignore
    router.addRoute({ name, path,
      component: () => import('#/views/dynamic/DynamicView.vue') });
  });
}
