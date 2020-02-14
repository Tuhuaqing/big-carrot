<template>
  <!-- 个人信息详情页 -->
  <div class="page">
    <nav class="top-tool back-top">
      <div @click="$router.back()">
        <van-icon name="arrow-left" />
        <span class="text-back">返回</span>
      </div>
      <div class="title">个人信息</div>
      <div></div>
    </nav>
    <main>
      <div class="avatar-box">
        <p>
          <img :src="avatar" class="avatar" alt="用户头像" @click="$refs.fileTool.clickInput()" />
        </p>
        <p>
          <span class="nickname">{{userInfo.nickname}}</span>
        </p>
      </div>
      <div class="info">
        <van-cell-group>
          <van-field
            v-model="userInfo.nickname"
            label="修改昵称"
            placeholder="输入你的展示昵称"
            clearable
            input-align="right"
          >
            <van-button
              v-if="userInfo.nickname"
              slot="button"
              size="mini"
              type="info"
              @click="changeNickname(userInfo._id,userInfo.nickname)"
            >保存</van-button>
          </van-field>
          <van-cell title="用户名" :value="userInfo.username" />
          <van-cell title="修改密码" value="******" is-link />
          <van-cell
            title="修改性别"
            :value="userInfo.gender==1?'男':'女'"
            is-link
            @click="showGenderPicker=true"
          />
        </van-cell-group>
      </div>
    </main>
    <!-- 不可见性别选择弹框 -->
    <van-popup v-model="showGenderPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="genderColumns"
        :item-height="100"
        @cancel="showGenderPicker = false"
        @confirm="changeGender"
      />
    </van-popup>
    <!-- 文件tool -->
    <file-tool ref="fileTool" @selected="modifyAvatar"></file-tool>
  </div>
</template>

<script>
import avatar_boy from '@/assets/img/dft-avatar-boy.png'
import avatar_girl from '@/assets/img/dft-avatar-girl.png'
export default {
  data: () => ({
    userInfo: {},
    msg: '',
    avatar: avatar_girl,
    showGenderPicker: false,
    genderColumns: [{ text: '男', value: '1' }, { text: '女', value: '0' }]
  }),
  methods: {
    // 更改性别
    changeGender(item) {
      this.showGenderPicker = false

      let loading = this.$toast.loading({
        message: '更换中'
      })

      this.$api.myserver.changeGender(this.userInfo._id, item.value)
        .then(r => {
          if (r.status == 200 && r.data.status == 'ok') {
            this.$notify({ type: 'success', message: '性别更换成功!' })
            setTimeout(() => {
              this.$router.go(0)
            }, 500);
          }
        }).catch(err => {
          console.error(err)
        }).finally(() => {
          loading.clear()
        })
    },
    // 更改昵称
    changeNickname(id, nickname) {
      if (!id || !nickname) {
        this.$notify({ type: 'error', message: '未知错误' })
        return
      }
      let loading = this.$toast.loading({
        message: '修改中'
      })

      this.$api.myserver.changeNickname(id, nickname)
        .then(r => {
          if (r.status == 200 && r.data.status == 'ok') {
            this.$notify({ type: 'success', message: '昵称更换成功!' })
          }
        }).catch(err => {
          console.error(err)
        }).finally(() => {
          loading.clear()
        })
    },
    // 更改头像
    modifyAvatar(files) {
      if (!files.length) return

      let loading = this.$toast.loading({
        message: '更换中'
      })

      // 使用表单上传文件
      let formData = new FormData()
      formData.append('file', files[0])

      // 先上传文件到文件服务器,再和后台交互
      let avatar_url
      this.$api.file
        .uploadAny(formData)
        .then(r => {
          if (r.status == 200 && r.data.status == 'ok') {
            let result = r.data.data
            avatar_url = result.fileUrl
            return this.$api.myserver.changeAvatarUrl(
              this.userInfo._id,
              avatar_url
            )
          }
        })
        .then(r => {
          if (r.status == 200 && r.data.status == 'ok') {
            this.avatar = avatar_url
            this.$notify({ type: 'success', message: '头像更换成功!' });
          }
        })
        .catch(err => {
          console.error(err)
        })
        .finally(() => {
          loading.clear()
        })
    }
  },
  mounted() {
    this.userInfo = this.$store.state.userInfo
    // 更正头像
    if (!this.userInfo.avatar_url && this.userInfo.gender == 1) {
      this.avatar = avatar_boy
    } else if (!this.userInfo.avatar_url && this.userInfo.gender == 0) {
      this.avatar = avatar_girl
    } else {
      this.avatar = this.userInfo.avatar_url
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  .avatar-box {
    text-align: center;
    padding: 0.5rem 0;
    background: rgb(58, 130, 212);

    .avatar {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      border: 0.08rem solid rgba(255, 255, 255, 0.3);
    }
    .nickname {
      display: inline-block;
      height: 0.5rem;
      font-size: 0.5rem;
      color: white;
    }
  }
  .test {
    height: 1rem;
    background: gray;
  }
}
</style>