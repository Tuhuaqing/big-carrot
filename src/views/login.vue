<template>
  <div class="page">
    <div class="center title">登录微社交</div>
    <div>
      <!-- 用户名 -->
      <van-field
        v-model.trim="userName"
        clearable
        class="mb05r"
        label="用户名"
        left-icon="contact"
        placeholder="请输入用户名(user)"
        :error="userNameErr"
        @focus="userNameErr=false"
        @blur="userNameErr=userName?false:true"
      />
      <!-- 密码 -->
      <van-field
        v-model.trim="password"
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
        icon="https://img.yzcdn.cn/vant/logo.png"
        type="info"
        style="width:3rem;height:1rem;line-height:1rem;"
        plain
        @click="login"
      >登录</van-button>
      <van-button
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
      userName: 'user',
      password: '123456',

      userNameErr: false,
      passwordErr: false
    }
  },
  methods: {
    login() {
      if (!this.userName || !this.password) {
        this.$toast('请填写用户名或密码')
        return
      }
      if (this.userName != 'user' || this.password != '123456') {
        this.$toast('账号或密码错误')
        return
      }
      let user = {
        userName: this.userName,
        password: this.password
      }
      this.$store.commit('login', user)
        this.$router
          .push('/me')
          .then(a => {
            l(a)
          })
          .catch(err => {
            l(err)
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
  padding: 2rem 0;
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
</style>