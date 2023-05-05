<template>

      <!--  -->
    <Slide   @openMenu="handleOpenMenu" @closeMenu="handleCloseMenu">
      <div ><h2/>Area Text</div>
      <a id="R1" href="#">
        <i class="fa fa-fw fa-star-o"></i>
        <span @click="setCenter([23.908865090204138, 120.53309659725994]), setZoom(14);" > {{$store.state.mapCenter}}  Road1</span>
      </a>
      <a id="R2" href="#">
        <i class="fa fa-fw fa-star-o"></i>
        <span @click="setCenter([23.913262679155643, 120.61473275636878]), setZoom(14)" > {{$store.state.mapCenter}} Road2</span>
      </a>
      <a id="R3" href="#">
        <i class="fa fa-fw fa-star-o"></i>
        <span>Road3</span>
      </a>
      <a id="R4" href="#">
        <i class="fa fa-fw fa-star-o"></i>
        <span>Road4</span>
      </a>
    </Slide>


</template>

<script>
import { Slide } from 'vue-burger-menu'
import { mapActions } from 'vuex';
  export default {
    name: 'menubar',
    components: {
      Slide,
      // Map,
    },
    data() {
      return {
        
      };
    },
    methods: {
      ...mapActions({setCenter: 'setCenter'},),
      ...mapActions({ setZoom: 'setZoom'}),

    },
    computed: {

    }

  }
</script>
<style>

.bm-burger-button {
      position: fixed;
      width: 36px;
      height: 30px;
      left: 36px;
      top: 36px;
      cursor: pointer;
      z-index: 800;
    }
    .bm-burger-bars {
      background-color: #373a47;
    }
    .line-style {
      position: absolute;
      height: 20%;
      left: 0;
      right: 0;
    }
    .cross-style {
      position: absolute;
      top: 12px;
      right: 2px;
      cursor: pointer;
    }
    .bm-cross {
      background: #bdc3c7;
    }
    .bm-cross-button {
      height: 24px;
      width: 24px;
    }
    .bm-menu {
      height: 100%; /* 100% Full-height */
      width: 0; /* 0 width - change this with JavaScript */
      position: fixed; /* Stay in place */
      z-index: 1000; /* Stay on top */
      top: 0;
      left: 0;
      background-color: rgb(63, 63, 65); /* Black*/
      overflow-x: hidden; /* Disable horizontal scroll */
      padding-top: 60px; /* Place content 60px from the top */
      transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
    }

    .bm-overlay {
      background: rgba(0, 0, 0, 0.3);
    }
    .bm-item-list {
      color: #b8b7ad;
      margin-left: 10%;
      font-size: 20px;
    }
    .bm-item-list > * {
      display: flex;
      text-decoration: none;
      padding: 0.7em;
    }
    .bm-item-list > * > span {
      margin-left: 10px;
      font-weight: 700;
      color: white;
    }
</style>