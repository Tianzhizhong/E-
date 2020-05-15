<template>
  <div id="app">
    <Tabbar/>
    <router-view/>
  </div>
</template>
<script>
import Tabbar from './common/tabbar'
export default {
  components: {
    Tabbar
  }
}
</script>
<style lang="scss" scoped>
#app{
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
