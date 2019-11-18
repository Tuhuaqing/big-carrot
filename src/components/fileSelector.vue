<template>
  <div>
    <input class="file" hidden type="file" ref="fileInput" />
    <div class="file-btn" @click="inputDom.click()">
      <img id="img" class="file-img" :src="img" v-show="img" />
      <span v-show="!img">+</span>
    </div>
  </div>
</template>

<script>
import defaultImg from '@/assets/logo.png'
export default {
  data() {
    return {
      inputDom: null,
      img: null
    }
  },
  mounted() {
    let self = this
    this.inputDom = this.$refs.fileInput
    document.getElementById('img').onload = function() {
      URL.revokeObjectURL(this.src)
    }
    $(this.inputDom).change(function() {
      if (this.files.length > 0 && this.files.length == 1) {
        let url = URL.createObjectURL(this.files[0])
        self.img = url
        self.$emit('selected', new Blob([url]))
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.file-btn {
  width: 3rem;
  height: 3rem;
  background: white;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  line-height: 3rem;
  color: lightgray;
  border: 1px solid lightgray;
}
.file-img {
  width: 100%;
  height: 100%;
}
</style>