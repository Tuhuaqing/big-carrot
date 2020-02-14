<template>
  <div>
    <header>
      <van-nav-bar
        title="发动态"
        left-text="返回"
        right-text="发送"
        left-arrow
        @click-left="$router.go(-1)"
        @click-right="ping"
      />
    </header>
    <main>
      <div class="text-box">
        <van-field
          ref="text_input"
          type="textarea"
          v-model="text"
          placeholder="请输入文字"
          class="text-input"
          autosize
          @click="$refs.text_input.focus()"
        />
      </div>
      <div class="img-box">
        <van-uploader
          v-model="files"
          multiple
          :max-count="9"
          accept=".jpg, .jpeg, .png"
          :after-read="afterSelect"
        />
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data: () => ({
    userInfo: {},
    text: '',
    files: []
  }),
  methods: {
    ping() {
      if (!this.files.length) {
        this.$notify({ type: 'warning', message: '请上传至少一张图片' });
        return
      }

      let loading = this.$toast.loading({
        message: '发布中'
      })

      let formData = new FormData()
      this.files.forEach(f => {
        formData.append('files', f.file)
      })
      this.$api.file
        .uploadMany(formData)
        .then(r => {
          if (r.status == 200 && r.data.status == 'ok') {
            let result = r.data.data
            return this.$api.myserver.releasePost({
              userId: this.userInfo._id,
              dateTime: this.$moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
              text: this.text,
              imgs: result
            })
          }
        })
        .then(r => {
          if (r.status == 200 && r.data.status == 'ok') {
            this.$notify({ type: 'success', message: '发布成功!' });
            setTimeout(() => {
              this.$router.go(-1)
            }, 1500);
          }
        })
        .catch(err => {
          console.error(err)
        })
        .finally(() => {
          loading.clear()
        })
    },
    afterSelect(files) {
      l(files)
    }
  },
  created() {
    this.userInfo = { ...this.$store.state.userInfo }
  }
}
</script>

<style lang="scss" scoped>
main {
  overflow: hidden;
  background: white;
  height: 94vh;
  .text-input {
    // border: 1px solid red;//
    min-height: 2rem;
    padding: 0.5rem .6rem 0 .6rem;
    font-size: 0.3rem;
  }
  .img-box {
    // border: 1px solid blue;//
    margin-top: 0.5rem;
    padding: 0.5rem;
  }
}
</style>