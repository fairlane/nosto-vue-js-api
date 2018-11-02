<template>
  <div id="app">
      <img alt="Vue logo" src="./assets/logo.png">
    <NostoSlots
            msg="This are your recos"
            :slots="slots"
    />
  </div>

</template>

<script>
import NostoSlots from './components/NostoSlots.vue'
import NostoContext from './NostoContext.js'

export default {
    name: 'app',
    components: {
        NostoSlots
    },
    computed: {
        slots() {
            return [
                'frontpage-nosto-1',
                'frontpage-nosto-2'
            ];
        }
    }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
