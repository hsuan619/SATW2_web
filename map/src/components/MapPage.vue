<template>

    <div style="height: 500px;z-index: 1">

      <l-map class="map"
        style="height: 80%; width: 100%"
        :zoom="$store.state.mapZoom"
        :center="$store.state.mapCenter"
        @update:zoom="zoomUpdated"
        @update:center="centerUpdated"
        @update:bounds="boundsUpdated"
      >
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>

        <l-marker> 
            <!-- <l-popup :content="item.content"></l-popup>  -->
         </l-marker>
        <l-control position="bottomleft" >
           
                <!-- <a v-if="this.switchSumo">change to sumo</a> -->
                
        </l-control>

        <!--  for i in items :lat-lng="this.markerList[i].latlng" -->
    </l-map>
    <button class=".btnSwitch" @click="setCenter([23.516059632178987, 120.94403942975357]),setZoom(10);" >
{{markerList.length}}</button>
    </div>
  </template>
  
  <script>
  import {LMap, LTileLayer, LMarker, LPopup,  LControl} from 'vue2-leaflet';
import { mapActions, mapState } from 'vuex';
  
  export default {
    components: {
      LMap,
      LTileLayer,
      LMarker,
      LPopup,
      LControl
    },
    data () {
      return {
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        bounds: null,
        switchSumo: false,
        markerList: [
        {
            id: 1,
            latlng: [23.908865090204138, 120.53309659725994],

        },
        {
          id: 2,
          latlng: [23.913262679155643, 120.61473275636878],

        }

        ],
        
      };
    },

    methods: {
        zoomUpdated (zoom) {
        this.zoom = zoom;
        },
        centerUpdated (center) {
        this.center = center;
        },
        boundsUpdated (bounds) {
        this.bounds = bounds;
        },
        switchSUMO(){
        //code
        this.switchSumo = true;
        },
        ...mapState(['mapCenter', 'mapZoom', 'markerList']),
        ...mapActions({setCenter: 'setCenter'}),
        setZoom(z){
            this.$store.state.mapZoom = z
     }
    },
    computed: {
        
    }
    
  }
</script>

<style>
  .btnSwitch{
    z-index: 500;
  }
  .map{
    position: absolute;
    top: 100px;
    z-index: 300;
  }
</style>