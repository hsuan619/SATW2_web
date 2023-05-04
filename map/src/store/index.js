import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mapZoom: 10,//23.696051332926835, 120.53405425957615
    mapCenter: [23.906671619621868, 120.60988332403272],
    map: null,
    mapBounds: null,
    isSideBarOpen: false,
    markerList: [
      {
          id: 1,
          latlng: [23.908865090204138, 120.53309659725994],
          testSrc: "https://lh3.googleusercontent.com/ckp3Ja2gVgQT3MMTMxy4kaiItLfbOMvuHEBbhxfDYb774DVy0qNsmntgG7bgdb34ZB82Y4HtVmPLOG2c=w544-h544-l90-rj"

      },
      {
          id: 2,
          latlng: [23.913262679155643, 120.61473275636878],
          testSrc: "https://lh3.googleusercontent.com/Cg_2aGl_419YNtK9QXnnYeOP3LTgLa8N35pVqzLpFHoGQKI9jGRNZ1IzumFKIaFLHJXpjecQdLGiOEdU=w544-h544-l90-rj"
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
    setCenter(state, center){
      state.mapCenter = center
    },
    setZoom(state, z){
      state.mapZoom = z
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
      setCenter({ commit }, center){
        commit('setCenter', center);
      },
      setZoom({ commit }, z){
        commit('setZoom', z);
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