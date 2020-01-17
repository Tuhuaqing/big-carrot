<template>
  <div class="page">
    <div class="center title">微社交</div>
    <div class="small-msg">一个没有团队运营的社交平台</div>
    <div>
      <!-- 用户名 -->
      <van-field
        v-model.trim="username"
        clearable
        class="mb05r translucence"
        label="用户名"
        left-icon="contact"
        placeholder="请输入用户名(user)"
        :error="userNameErr"
        @focus="userNameErr=false"
        @blur="userNameErr=username?false:true"
      />
      <!-- 密码 -->
      <van-field
        v-model.trim="password"
        class="translucence"
        type="password"
        label="密码"
        placeholder="请输入密码(123456)"
        left-icon="closed-eye"
        :error="passwordErr"
        @focus="passwordErr=false"
        @blur="passwordErr=password?false:true"
      />
    </div>
    <!-- 按钮 -->
    <div class="btns">
      <van-button
        class="translucence"
        icon="https://img.yzcdn.cn/vant/logo.png"
        type="info"
        style="width:3rem;height:1rem;line-height:1rem;"
        plain
        @click="login"
      >登录</van-button>
      <van-button
        class="translucence"
        icon="https://img.yzcdn.cn/vant/logo.png"
        type="primary"
        style="width:3rem;height:1rem;line-height:1rem;"
        plain
        @click="$toast('暂不支持注册,请使用公共账号')"
      >注册</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',

      userNameErr: false,
      passwordErr: false
    }
  },
  methods: {
    login() {
      if (!this.username || !this.password) {
        this.$toast('请填写用户名或密码')
        return
      }
      let loading = this.$toast.loading('正在登录...')
      this.$api.myserver
        .login({ username: this.username, password:this.password })
        .then(r => {
          loading.clear()
          if (r.status == 200 && r.data.status == 'ok') {
            this.$toast('登录成功!')
            this.$lcStg.set('wsj_userInfo', r.data.data)
            this.$store.state.userInfo = r.data.data
            this.$router.push('/me').catch(err => {})
          }else{
            this.$toast(r.data.message,{duration:3000})
          }
        })
        .catch(err => {
          console.error(err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  padding-top: 0;
  background: url(../assets/img/qc.jpg) no-repeat;
  background-size: 100% 100%;
}
.title {
  font-size: 1rem;
  text-shadow: dodgerblue 0 0 10px;
  color: white;
  padding-top: 1rem;
  //   font-family: 'Arial', 'Microsoft YaHei', '黑体', '宋体', sans-serif;
  font-family: Tahoma;
  font-weight: bold;
  letter-spacing: 8px;
}
.btns {
  margin-top: 1rem;
  display: -webkit-flex;
  display: flex;
  justify-content: space-around;
}
.small-msg {
  font-size: 0.35rem;
  color: white;
  text-shadow: none;
  display: block;
  margin-top: 0.2rem;
  margin-bottom: 1rem;
  text-align: center;
  font-style: italic;
}

// 半透明
.translucence {
  background: rgba($color: white, $alpha: 0.3);
}
</style>

