<template>
    <div class="map-container">
        <!-- <button class="ui button toggle" @click="switchSUMO()" :class="{ active: isSumo }">{{ isSumo ? 'SUMO' : 'CCTV' }}</button> -->
        <!-- <button class="btnSwitch" @click="switchSUMO()">SWitch to SUMO</button> -->
        <l-map id="map" style="height: 500px; width: 700px; margin-left: 50px;" :zoom="this.$store.state.mapZoom"
            :options="{ zoomControl: false }" :center="$store.state.mapCenter" @update:zoom="zoomUpdated"
            @update:center="centerUpdated" @update:bounds="boundsUpdated">
            <l-tile-layer :url="urlMap" :attribution="attribution"></l-tile-layer>
            <l-marker v-for="item in markerList" :key="item.id" :lat-lng="item.latlng"
                @click="setImg(item.id), showCCTV(), setZoom(14)"></l-marker>
        </l-map>

        <!-- isSUMO: falsestyle="margin-right: 0px;  height: 500px; width: 500px;" 
            -->
            <div class="image-container">

                <img class="image" :src="'https://cctv.bote.gov.taipei:8501/MJPEG/028'" />
                <!-- 改成stream -->
    
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
            embedUrl2: "https://i.ytimg.com/vi/7tpod5unpqI/maxresdefault.jp", //cctv
            markerList: this.$store.state.markerList,
            // embedUrl2: "/api/stream/{{ url }}",
            urlMap: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            bounds: null,
            showImg: false,
            isSumo: false,
            imgID: 0,

        };
    },
    mounted() {
        this.$store.dispatch('')
        this.$store.dispatch('setMap')


    },
    methods: {
        showCCTV() {
            this.showImg = true;
            if (!this.clickBtn) {
                this.clickBtn = true;
            } else {
                this.clickBtn = false;
            }
        },
        setImg(id) {
            this.imgID = id - 1;
            if (!this.clickBtn) {
                this.clickBtn = true;
            } else {
                this.clickBtn = false;
            }
        },
        zoomUpdated(zoom) {
            this.zoom = zoom;
        },
        centerUpdated(center) {
            this.center = center;
        },
        boundsUpdated(bounds) {
            this.bounds = bounds;
        },
        switchSUMO() {
            //code
            if (!this.isSumo) {
                this.isSumo = true;
            } else {
                this.isSumo = false;
            }
        },

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
    width: 500px;
}

.map-container {
    display: flex;
    margin-top: 80px

}

#image-container {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

}

.image {
    width: 500px;
    flex: 1;
    height: 300px;
    background-size: cover;
    background-position: center;
}
</style>