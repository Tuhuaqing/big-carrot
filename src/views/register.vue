<template>
  <div class="page">
    <div class="center title">微社交*注册</div>
    <br />
    <br />
    <div>
      <!-- 用户名 -->
      <van-field
        v-model="userName"
        clearable
        class="mb05r translucence"
        label="用户名"
        left-icon="contact"
        placeholder="请输入用户名"
        :error="userNameErr"
        @focus="userNameErr=false"
        @blur="userNameErr=userName?false:true"
      />
      <!-- 密码 -->
      <van-field
        v-model.trim="password"
        class="translucence"
        type="password"
        label="密码"
        placeholder="请输入密码"
        left-icon="closed-eye"
        :error="passwordErr"
        @focus="passwordErr=false"
        @blur="passwordErr=password?false:true"
      />
      <!-- 邮箱 -->
      <van-field
        v-model.trim="email"
        clearable
        class="mb05r translucence"
        label="邮箱"
        left-icon="contact"
        placeholder="请输入邮箱"
        :error="userNameErr"
        @focus="userNameErr=false"
        @blur="userNameErr=userName?false:true"
      />
      <!-- 生日 -->
      <van-datetime-picker v-model="birth" type="date" :min-date="new Date(1950,1,1)" :max-date="new Date()" />
      <!-- 性别 -->
      <van-radio-group v-model="gender">
        <van-radio name="1">男</van-radio>
        <van-radio name="0">女</van-radio>
      </van-radio-group>
    </div>
    <!-- 按钮 -->
    <div class="btns">
      <van-button
        class="translucence"
        icon="https://img.yzcdn.cn/vant/logo.png"
        type="primary"
        style="width:3rem;height:1rem;line-height:1rem;"
        plain
        @click="register()"
      >注册</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: '',
      password: '',
      email: '',
      gender: 1,
      birth: '',

      userNameErr: false,
      passwordErr: false
    }
  },
  methods: {
    register() {
      if (!this.userName || !this.password) {
        this.$toast('请填写用户名或密码')
        return
      }
      let user = {
        nickName: '微社交001',
        phone: '15811234566',
        gender: '0',
        userName: this.userName,
        password: this.password
      }
      this.$store.commit('login', user)
      this.$router.push('/me').catch(err => {})
      // this.$api.myserver
      //   .testQueryUsers()
      //   .then(r => {
      //     console.log(r)
      //   })
      //   .catch(err => {
      //     console.error(err)
      //   })
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

