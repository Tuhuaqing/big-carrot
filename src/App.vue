<template>
  <div class="app">
    <router-view/>

    <tab-bars></tab-bars>
  </div>
</template>

<script>
import tabBars from '@/components/tabBars.vue'

export default {
  components: {
    tabBars
  }
}
</script>

<style lang="scss" scoped>
</style>
