<template>
  <div class="page">
    <div class="center title">注册微社交</div>
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
      />
      <!-- 密码 -->
      <van-field
        v-model.trim="password"
        class="mb05r translucence"
        type="password"
        label="密码"
        placeholder="请输入密码"
        left-icon="closed-eye"
      />
      <!-- 邮箱 -->
      <van-field
        v-model.trim="email"
        clearable
        class="mb05r translucence"
        label="邮箱"
        left-icon="contact"
        placeholder="请输入邮箱"
      />
      <!-- 生日 -->
      <van-datetime-picker
        :title="'生日:'+$common.dateToYmd(birth)"
        v-model="birth"
        type="date"
        :min-date="minDate"
        :max-date="maxDate"
        :item-height="100"
        :visible-item-count="4"
        cancel-button-text=" "
        confirm-button-text=" "
      />
      <!-- 性别 -->
      <p class="label">性别</p>
      <van-radio-group v-model="gender" icon-size="0.6rem" class="gender-box">
        <van-radio name="1">男</van-radio>
        <van-radio name="0">女</van-radio>
      </van-radio-group>
    </div>
    <!-- 按钮 -->
    <div class="btns">
      <van-button
        class="register-btn"
        icon="https://img.yzcdn.cn/vant/logo.png"
        style="width:3rem;height:1rem;line-height:1rem;"
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
      gender: '1',
      birth: new Date(2000, 5, 6),
      
      minDate: new Date(1950, 0, 1),
      maxDate: new Date()
    }
  },
  methods: {
    register() {
      if (
        !this.userName ||
        !this.password ||
        !this.email ||
        !this.gender ||
        !this.birth
      ) {
        this.$toast('有空未填')
        return
      }
      let loading = this.$toast.loading('注册中...')
      let user = {
        nickname: this.userName,
        username: this.userName,
        password: this.password,
        email: this.email,
        birth: this.$common.dateToYmd(this.birth),
        gender: this.gender
      }

      this.$api.myserver
        .register(user)
        .then(r => {
          if (r.status == 200 && r.data.status == 'ok') {
            console.log(r)
            this.$lcStg.set('wsj_userInfo', r.data.data)
            this.$store.state.userInfo = r.data.data
            this.$toast('恭喜你,注册成功!')
            this.$router.push({ name: 'me' }).catch(err => {})
          }
        })
        .catch(err => {
          console.error(err)
        })
        .finally(() => {
          loading.clear()
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

// 注册按钮
.register-btn {
  background: linear-gradient(to right, #4bb0ff, #6149f6);
  color: white;
  border: none;
}

.label {
  font-size: 0.37333rem;
  text-align: center;
}

// 性别选择框
.gender-box {
  background: white;
  padding: 0.3rem;
}
</style>

