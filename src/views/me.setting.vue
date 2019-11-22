<template>
  <div class="page">
    <nav class="top-tool back-top">
      <div @click="$router.back()">
        <van-icon name="arrow-left" />
        <span class="text-back">返回</span>
      </div>
      <div class="title">设置</div>
      <div></div>
    </nav>
    <main>
      <div class="center wxts">暂无内容</div>
      <van-button type="danger" class="btm-btn" round block @click="logout">退出登录</van-button>
    </main>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
        this.$store.commit('logout')
    }
  }
}
</script>

<style lang="scss" scoped>
  main{
    // padding: 0.5rem;
    .btm-btn{
      position: fixed;
      bottom: .5rem;
      left: 0;
      right: 0;
      margin: 0 auto;
      display: block;
      width: 8rem;
    }
  }

  .wxts{
    padding-top: .5rem;
    font-size: .5rem;
    color:gray;
  }
</style>