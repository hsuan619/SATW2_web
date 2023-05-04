<template>
  <div id="app">
    <div >
      <Menu></Menu>
      
    </div>
    <div  class="mapOn"><Map/></div>
    <!-- <div v-if="$store.state.isSideBarOpen"> 
      <div class="mapOff"><Map/></div>
    </div>
    <div v-else> 
      <div class="mapOn"><Map/></div> -->
    <!-- </div> -->
  </div>
</template>

<script>
import Menu from './Menu.vue';
import Map from './MapPage.vue';
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    Menu,
    Map,

  },
  computed: {
    ...mapState
  },
  methods: {
    check(){
      $store.state.isSideBarOpen = true;
    }
  
  }
};
</script>

<style>
.menu{
  z-index: 2;
 
}
.mapOn{
  z-index: 1;
  position: relative;
}
.mapOff{
  opacity: 0.5;
  z-index: 1;
  position: relative;
}

</style>