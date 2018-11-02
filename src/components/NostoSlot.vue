<template>
    <div class="reco-container">
        <div class="slot">
            <h2>{{title}}</h2>
            <div v-for="product in products" :key="product.id" class="product-container">
                <div class="image-container"  v-bind:style="{ 'background-image': 'url(' + product.image_url+ ')' }"></div>
                <p>{{ product.name }}</p>
                <p>{{ product.price_text }}</p>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'NostoSlot',
        props: {
            products: Array,
            title: {
                type: String,
                default: 'How about these ones (title not set)'
            }

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

    div.product-container {
        width: 15%;
        display: inline-block;
        border: 2px solid #0086B3;
        margin: auto 10px auto 10px;
        padding: 7px;
        min-height: 300px;
        position: relative;
        top: 2px;
    }

    div.reco-container {
        vertical-align: top;
    }

    div.image-container {
        width: 100%;
        height: 200px !important;
        display: block;
        position: relative;
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: 0px 0px;
    }

    div.image-container::before {
        content: '';
    }
</style>
