<template>
    <div>
    <div id="map" style="margin-top: 150px;">   
        <l-map class="map" style="height: 500px; width: 600px;" :zoom="this.$store.state.mapZoom" :options="{zoomControl: false}"
            :center="$store.state.mapCenter" @update:zoom="zoomUpdated" @update:center="centerUpdated"
            @update:bounds="boundsUpdated">
            <l-tile-layer :url="urlMap" :attribution="attribution"></l-tile-layer>
            <l-marker v-for="item in markerList" :key="item.id" :lat-lng="item.latlng"  @click="setImg(item.id), setZoom(14)"></l-marker>
            
            <!--    src="${embedUrl}" -->
        </l-map>
    <div>
    <img class="pop" src="${embedUrl}" />
</div>
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
        return {
            
            urlMap: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            bounds: null,
            switchSumo: false,
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
            showImg: false,
            imgID: 0,
            iconUrl: 'cctv.png',
        };
    },
    mounted() {
        this.$store.dispatch('')
        this.$store.dispatch('setMap')
    },
    methods: {
        setImg(id) {
            this.imgID = id - 1;
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
            this.switchSumo = true;
        },
        popupContent() {
            const embedUrl = `http://140.125.84.43:6006/api/sumo`;
            embedUrl2 = "/api/stream/{{ url }}";
            //     return `
            // <div >
            //     <img object-fit:"fill" width="300px" height="315px" src="${embedUrl}" frameborder="0" encrypted-media" ></img>
            // </div>
            // `;
            return embedUrl
        },
        ...mapState(['mapCenter', 'mapZoom', 'markerList']),
        ...mapActions({ setCenter: 'setCenter' }),
        setZoom(z) {
            this.$store.state.mapZoom = z
        },

    },
    computed: {

    }

}
</script>

<style>


.btnSwitch {
    z-index: 500;
}

.map {
    position: absolute;
    margin-left: 100px;
    z-index: 300;

}

.pop {
    float: right;
    display: flex;
    width: 700px;
    height: 500px;
    object-fit: fill;
    margin-right: 100px;
}
</style>