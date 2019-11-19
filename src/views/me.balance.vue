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
          <span>289671.78</span>
        </div>
      </div>
      <!-- 卡片组1 -->
      <van-cell-group>
        <van-cell title="充值" is-link icon="shop-o">
          <van-icon
            class="van-cell__left-icon"
            slot="icon"
            name="diamond"
            :color="dodgerblue"
            :size="iconSize"
          />
        </van-cell>
        <van-cell title="提现" is-link>
          <van-icon
            class="van-cell__left-icon"
            slot="icon"
            name="shop-collect"
            :color="dodgerblue"
            :size="iconSize"
          />
        </van-cell>
      </van-cell-group>
      <div class="interval"></div>
    </main>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed:{
        ...mapState(['iconSize','golden','dodgerblue','green'])
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
</style>