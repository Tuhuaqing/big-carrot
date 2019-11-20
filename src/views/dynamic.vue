<template>
  <div class="page">
    <nav class="top-tool me-tool">
      <span>动态广场</span>
      <span class="set" @click="addPost">
        <van-icon name="plus" />
      </span>
    </nav>
    <main>
      <div class="header">
        <p>上传图片</p>
        <file-selector></file-selector>
      </div>
      <br>
      <section>
        <van-skeleton :key="index" v-for="(item,index) in 10" title avatar :row="3" />
      </section>
    </main>
  </div>
</template>

<script>
import fileSelector from '@/components/fileSelector.vue'
export default {
  components: {
    fileSelector
  },
  methods: {
    addPost() {
      this.$dialog.alert({
        message: '发帖功能正在拼命开发中...'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.me-tool {
  text-align: center;

  .set {
    position: absolute;
    right: 0.5rem;
    top: 50%;
    font-size: 0.4rem;
    transform: translateY(-50%);
    font-family: '微软雅黑';
  }
}

main {
  background: white;
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-size: 0.7rem;
      color: black;
    }
  }
}
</style>