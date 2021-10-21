import Icon from "./src/icon.vue";
export default Icon;
import type { App } from "vue";
Icon.install = function (app: App) {
  app.component(Icon.name, Icon);
};
