import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mapZoom: 10,//23.696051332926835, 120.53405425957615
    mapCenter: [23.906671619621868, 120.60988332403272],
   
    map: null,
    mapBounds: null,
    isSideBarOpen: false
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