<template>
  <div class="app">
    <transition :name="animName" mode="in-out">
      <router-view />
    </transition>
    <tab-bars v-if="$route.meta.showTabBars"></tab-bars>
  </div>
</template>

<script>
import tabBars from '@/components/tabBars.vue'

export default {
  components: {
    tabBars
  },
  data: () => ({
    animName: 'slide-left'
  }),
  watch: {
    $route(to, from) {
      const toLen = to.path.split('/').length
      const fromLen = from.path.split('/').length
      if (toLen > fromLen) {
        this.animName = 'slide-left'
      } else if (toLen < fromLen) {
        this.animName = 'slide-right'
      } else {
        this.animName = ''
      }
    }
  },
  created() {
    this.$toast.setDefaultOptions('loading', {
      forbidClick: true,
      duration: 0
    })
  }
}
</script>

<style lang="scss" scoped>
// 第一种
.slide-left-enter,
.slide-left-leave-to {
  // opacity: 0;
  transition: 0.3s;
  transform: translateX(-100%);
}
.slide-left-enter-to {
  opacity: 1;
}
.slide-left-leave {
  opacity: 1;
}

// 第二种
.slide-right-enter,
.slide-right-leave-to {
  transition: 0.3s;
  transform: translateX(100%);
}
.slide-right-enter-to {
  opacity: 1;
}
.slide-right-leave {
  opacity: 1;
}
</style>
