<template>
  <div class="page">
    <div class="center">
      <h1 class="green-color">首页</h1>
      <img class="vue-logo" alt="Vue logo" src="../assets/logo.png" />
      <p class="text">该版本目前仅有 登录,注册,修改头像,昵称等功能</p>
      <p class="text">敬请期待后续更新</p>
      <p class="text">
        可以加作者QQ:
        <span style="color:dodgerblue;" id="copy" @click="copy">2438974094</span>
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
  },
  methods: {
    copy() {
    }
  }
}
</script>

<style lang="scss" scoped>
.vue-logo {
  width: 5rem;
  height: 5rem;
}
.text {
  font-size: 0.4rem;
}
</style>
