import type { App, Plugin } from 'vue';
import components from './components';

export const IonicForm: Plugin = {
  install(Vue: App) {
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop];
        Vue.component(component.name as string, component);
      }
    }
  },
};
