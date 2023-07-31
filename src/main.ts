import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Tolgee, DevTools, VueTolgee, FormatSimple } from '@tolgee/vue';

const tolgee = Tolgee()
  .use(DevTools())
  .use(FormatSimple())
  .init({
    language: 'en',
    apiUrl: process.env.VUE_APP_TOLGEE_API_URL,
    apiKey: process.env.VUE_APP_TOLGEE_API_KEY,
  });

createApp(App).use(VueTolgee, { tolgee }).mount('#app')
