<template>
    <div class="map-container">
        <!-- <button class="btnSwitch" @click="switchSUMO()">SWitch to SUMO</button> style="width: 800px; height: 500px; margin-left: 100px;"-->
        <l-map id="map"  :zoom="this.$store.state.mapZoom"
            :options="{ zoomControl: false }" :center="this.$store.state.mapCenter" @update:zoom="zoomUpdated"
            @update:center="centerUpdated" @update:bounds="boundsUpdated">
            <l-tile-layer :url="urlMap" :attribution="attribution"></l-tile-layer>
            <l-marker v-for="item in markerList" :key="item.id" :lat-lng="item.latlng" @click="setZoom(14),setCenter(item.latlng), setImgID(item.id)">
            <!-- <l-popup>{{$store.state.clickBtn}}</l-popup> -->
            </l-marker>
        </l-map>

        <!-- isSUMO: falsestyle="margin-right: 0px;  height: 500px; width: 500px;" 
            -->
            <div class="image-container" >

                <img class="image" :src="markerList[this.$store.state.imgID].testSrc" />
   
                <img class="image" :src="sumoUrl" />
            </div>
    </div>



    <!-- <img class="pop" :src="markerList[imgID].testSrc" /> -->
</template>
  
<script>
import { LMap, LTileLayer, LMarker, LPopup, LControl } from 'vue2-leaflet';
import { mapActions, mapState } from 'vuex';

export default {
    components: {
        LMap,
        LTileLayer,
        LMarker,
        LPopup,
        LControl
    },
    data() {
        return { //`http://140.125.84.43:6006/api/sumo`
            sumoUrl: "http://140.125.84.43:6006/api/sumo", //sumo
            markerList: this.$store.state.markerList,
            urlMap: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            bounds: null,
            isSumo: false,
            imgID: this.$store.state.imgID,
            mapZoom: this.$store.state.mapZoom,
            mapCenter: this.$store.state.mapCenter,
            // ...mapState({imgID: 'imgID'})
        };
    },
    mounted() {
        this.$store.dispatch('')
        this.$store.dispatch('setMap')


    },
    methods: {
        zoomUpdated(zoom) {
            this.mapZoom = zoom;
        },
        centerUpdated(center) {
            this.mapCenter = center;
        },
        boundsUpdated(bounds) {
            this.bounds = bounds;
        },
        isCilck(){
            this.$store.state.clickBtn = false;
        },
        ...mapActions({ setImgID: 'setImgID' }),
        ...mapActions({ setCenter: 'setCenter' }),
        ...mapActions({ setZoom: 'setZoom' }),
    },
    computed: {
        
    }

}
</script>

<style>
.btnSwitch {
    z-index: 500;
    margin-bottom: 50px;
}

body {
    margin: 0;
    padding: 0;
    display: flex;
}

#map {
    width: 800px;
    height: 600px;
    margin-left: 100px;
}

.map-container {
    display: flex;
    margin-top: 30px;
}

#image-container {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

}

.image {
    width: 600px;
    flex: 1;
    height: 300px;
    background-size: cover;
    background-position: center;
}
</style>