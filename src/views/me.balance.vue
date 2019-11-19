<template>
  <div class="page">
    <nav class="top-tool top">
      <div @click="$router.back()">
        <van-icon name="arrow-left" />
        <span class="text-back">返回</span>
      </div>
      <div class="title">余额详情</div>
      <div></div>
    </nav>
    <main>
      <!-- 展示数字的盒子 -->
      <div class="balance-box">
        <div class="unit">
          <span>金额(元)</span>
        </div>
        <div class="number">
          <span>1865214.15</span>
        </div>
      </div>
      <!-- 卡片组1 -->
      <van-cell-group>
        <van-cell title="充值" is-link icon="shop-o">
          <van-icon
            class="van-cell__left-icon"
            slot="icon"
            name="balance-list"
            :color="dodgerblue"
            :size="iconSize"
          />
        </van-cell>
        <van-cell title="提现" is-link @click="withdraw">
          <van-icon
            class="van-cell__left-icon"
            slot="icon"
            name="printer"
            :color="golden"
            :size="iconSize"
          />
        </van-cell>
      </van-cell-group>
      <div class="interval"></div>
    </main>
    <!-- popup 提现信息填写 -->
    <van-popup
      v-model="showPopup"
      round
      position="bottom"
      :style="{height:'35vh',padding:'0.5rem','text-align':'center'}"
    >
      <div class="popup-toast">请输入支付宝账户(手机号)</div>
      <van-cell-group>
        <van-field v-model="phone" placeholder="请输入" class="border" />
      </van-cell-group>
      <div class="cente">
        <van-button
          color="linear-gradient(to right, #4bb0ff, #6149f6)"
          style="display:inline-block;margin-top:.7rem;width:4rem;"
          @click="confirmMoney"
          round
          block
        >确认提现</van-button>
      </div>
    </van-popup>
    <!-- popup 二维码 -->
    <van-popup v-model="showQrcode" @click-overlay="showQrcode=true" round>
      <img :src="qrcode" class="qrcode-img" alt="微信二维码" />
      <div class="center msg">
        提现账户: {{phone}}
        <br />长按二维码扫描或保存, 请在15分钟内支付手续费0.1元, 即可完成操作哦 ^ _ ^
      </div>
    </van-popup>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import qrcode from '@/assets/img/moneyQrcode.jpg'
export default {
  data: () => ({
    showPopup: false,
    phone: '',
    showQrcode: false,
    qrcode
  }),
  computed: {
    ...mapState(['iconSize', 'golden', 'dodgerblue', 'green', 'phoneReg'])
  },
  methods: {
    // 点击提现cell
    withdraw() {
      if (this.phoneReg.test(this.phone)) {
        this.showQrcode = true
      } else {
        this.showPopup = true
      }
    },
    // 确认提现
    confirmMoney() {
      if (!this.phoneReg.test(this.phone)) {
        this.$toast('请输入正确的手机号')
        return
      }

      this.showPopup = false
      this.showQrcode = true
    }
  }
}
</script>

<style lang="scss" scoped>
.top {
  padding: 0 0.3rem;
  display: -webkit-flex;
  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    flex: 1;
  }

  > .title {
    justify-content: center;
  }
  .text-back {
    font-size: 0.35rem;
  }
}

main {
  .balance-box {
    height: 3rem;
    background: rgb(58, 130, 212);
    padding: 0 0.5rem;
    color: white;

    .unit {
      height: 0.7rem;
      font-size: 0.35rem;
      line-height: 0.7rem;
    }
    .number {
      height: 2.3rem;
      font-size: 1rem;
      line-height: 2.3rem;
    }
  }
}

.border {
  border: 1px solid lightgray;
}
.popup-toast {
  font-size: 0.37rem;
  margin-top: 0.5rem;
  margin-bottom: 0.7rem;
}
// 弹出的二维码
.qrcode-img {
  width: 8rem;
  height: 9rem;
}
// 迷你字体
.msg {
  font-size: 0.35rem;
  font-family: '幼圆';
  padding: 0 0.2rem 0.3rem 0.2rem;
  color: black;
}
</style>