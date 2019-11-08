<template>
  <div class="cmp">
    <div class="item" :key="index" v-for="(item,index) in tabBarList_fun()" @click="item.onClick">
      <van-icon :name="item.icon" style="font-size:0.45rem;" />
      <span class="text">{{item.text}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabBarList: {
      type: Array,
      default: () => [
        {
          text: '首页',
          icon: 'wap-home-o',
          onClick: () => {
            console.log(this)
            this.$route.push('/Home')
          }
        },
        {
          text: '消息',
          icon: 'wap-home-o',
          onClick: () => {
            this.$route.push('/dynamic')
          }
        },
        {
          text: '我的',
          icon: 'wap-home-o',
          onClick: () => {
            this.$route.push('/me')
          }
        }
      ]
    }
  },
  data: () => ({}),
  methods: {
    tabBarList_fun() {
      return [
        {
          text: '首页',
          icon: 'wap-home-o',
          onClick: () => {
            if (this.$route.name != 'home') {
              this.$router.push('/Home')
            }
          }
        },
        {
          text: '消息',
          icon: 'wap-home-o',
          onClick: () => {
            if (this.$route.name != 'dynamic') {
              this.$router.push('/dynamic')
            }
          }
        },
        {
          text: '我的',
          icon: 'wap-home-o',
          onClick: () => {
            if (this.$route.name != 'me') {
              this.$router.push('/me')
            }
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.cmp {
  width: 100%;
  height: 5vh;
  border-top: 1px solid gray;

  position: fixed;
  bottom: 0;
  display: flex;
  display: -webkit-flex;
  justify-content: space-around;
  align-items: center;
  z-index: 9999;

  .item {
    height: 100%;
    // border: 1px solid lightskyblue;
    flex: 1;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
