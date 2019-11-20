<template>
  <div class="cmp">
    <div class="item" :key="index" v-for="(item,index) in tabBarList_fun()" @click="item.onClick">
      <van-icon
        :name="getIcon(item)"
        :class="['my-icon',{'blue-icon':$route.name == item.toName}]"
      />
      <span class="text">{{item.text}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabBarList: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({}),
  methods: {
    tabBarList_fun() {
      return [
        {
          text: '首页',
          toName: 'home',
          icon: 'wap-home-o',
          activeIcon: 'wap-home',
          onClick: () => {
            if (this.$route.name != 'home') {
              this.$router.push('/Home')
            }
          }
        },
        // {
        //   text: '财富',
        //   toName: 'treasure',
        //   icon: 'gold-coin-o',
        //   activeIcon: 'gold-coin',
        //   onClick: () => {
        //     if (this.$route.name != 'treasure') {
        //       this.$router.push('/treasure')
        //     }
        //   }
        // },
        {
          text: '动态',
          toName: 'dynamic',
          icon: 'closed-eye',
          activeIcon: 'eye',
          onClick: () => {
            if (this.$route.name != 'dynamic') {
              this.$router.push('/dynamic')
            }
          }
        },
        {
          text: '朋友',
          toName: 'friends',
          icon: 'friends-o',
          activeIcon: 'friends',
          onClick: () => {
            if (this.$route.name != 'friends') {
              this.$router.push('/friends')
            }
          }
        },
        {
          text: '我的',
          toName: 'me',
          icon: 'user-o',
          activeIcon: 'manager',
          onClick: () => {
            if (this.$route.name != 'me') {
              this.$router.push('/me')
            }
          }
        }
      ]
    }
  },
  computed: {
    getIcon() {
      return item => {
        return this.$route.name == item.toName ? item.activeIcon : item.icon
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cmp {
  width: 100%;
  height: 7vh;
  border-top: 0.1px solid gray;
  background: white;
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

    .my-icon {
      font-size: 0.5rem;
    }

    .text{
      font-size: 0.21rem;
    }

    .blue-icon{
      color:dodgerblue;
    }
  }
}
</style>
