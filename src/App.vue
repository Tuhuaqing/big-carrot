<template>
  <div class="app">
    <router-view/>

    <tab-bars v-if="this.$store.state.showTabBars"></tab-bars>
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
