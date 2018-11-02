<template>
    <div class="reco-container">
        <div class="recos">
            <div v-for="reco in recommendations" :key="reco.name" v-if="recommendations">
                <nosto-slot :products="reco.data" :title="reco.name"></nosto-slot>
            </div>
        </div>
    </div>
</template>

<script>
    import NostoContext from '../NostoContext.js'
    import NostoSlot from "./NostoSlot.vue";

    export default {
        components: {NostoSlot},
        name: 'NostoSlots',
        props: {
            msg: String,
            slots: Array
        },
        data() {
            return {
                recommendations: []
            }
        },
        mounted() {
            NostoContext.fetchAndPopulateRecommendations(this.slots).then((data) => {
                this.recommendations = data;
            });
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>
