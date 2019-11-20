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
      <van-button type="danger" style="margin-top:.5rem;" block @click="logout">退出登录</van-button>
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

<style>
</style>