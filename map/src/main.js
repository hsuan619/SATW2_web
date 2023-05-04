// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store' // 這個
import { LMap, LTileLayer, LMarker, LPopup, LIcon } from "vue2-leaflet";
import 'leaflet/dist/leaflet.css';


Vue.component("l-map", LMap);
Vue.component("l-tile-layer", LTileLayer);
Vue.component("l-marker", LMarker);
Vue.component("l-popup", LPopup);
Vue.component("l-icon", LIcon);

import { Icon } from "leaflet";
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("D:/work_js/0501Web/tw2/Scripts/0502/SATW_forant/map/src/assets/cctv.png"),
  iconUrl: require("D:/work_js/0501Web/tw2/Scripts/0502/SATW_forant/map/src/assets/cctv.png"),
  shadowUrl: false,
  iconSize: [40, 40]
});

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
