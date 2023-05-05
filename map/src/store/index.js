import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mapZoom: 13,//23.696051332926835, 120.53405425957615
    mapCenter: [23.906671619621868, 120.60988332403272],
    map: null,
    mapBounds: null,
    isSideBarOpen: false,
    clickBtn: false,
    markerList: [
      {
        id: 1,
        latlng: [23.908865090204138, 120.53309659725994],
        testSrc: "http://140.125.84.43:6006/api/stream/https://cctv.bote.gov.taipei:8501/MJPEG/028"

      },
      {
        id: 2,
        latlng: [23.913262679155643, 120.61473275636878],
        testSrc: "http://140.125.84.43:6006/api/stream/https://cctv.bote.gov.taipei:8501/MJPEG/012"
      }

    ],
  },
  mutations: {
    setMap(state, map) {
      state.map = map;
    },
    addMarker(state, marker) {
      state.markers.push(marker);
    },
    removeMarker(state, markerId) {
      state.markers = state.markers.filter(marker => marker.id !== markerId);
    },
    setCenter(state, center) {
      state.mapCenter = center;
      state.clickBtn = true;
    },
    setZoom(state, z) {
      state.mapZoom = z;
      state.clickBtn = true;
    },
    addUrl(state, link) {
      state.Url.push(link);
    }

  },
  actions: {
    setMap({ commit }, map) {
      commit('setMap', map);
    },
    addMarker({ commit }, marker) {
      commit('addMarker', marker);
    },
    removeMarker({ commit }, markerId) {
      commit('removeMarker', markerId);
    },
    setCenter({ commit }, center) {
      commit('setCenter', center);
    },
    setZoom({ commit }, z) {
      commit('setZoom', z);
    },
    addUrl({ commit }) {
      commit('addUrl');
    },
  },
  getters: {
    mapCenter(state) {
      return state.mapCenter;
    },
    markers(state) {
      return state.markers;
    },

  },
  modules: {
  }
})