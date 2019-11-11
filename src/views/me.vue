<template>
  <div>
    <nav class="top-tool me-tool">
      <span>我的</span>
      <span class="set">设置</span>
    </nav>
    <div class="page">
      <div class="user-box">
        <div class="avatar">
          <img class="img" src="@/assets/img/avatar.jpg" alt />
        </div>
        <div class="info">
          <div class="inner">
            <div class="name">Hello World</div>
            <div class="phone">134******82</div>
          </div>
        </div>
        <i class="arrowRight"></i>
      </div>
      <main>
        <van-cell-group>
          <van-cell title="支付宝会员" is-link icon="shop-o">
            <van-icon
              class="van-cell__left-icon"
              slot="icon"
              name="diamond"
              color="dodgerblue"
              size="0.7rem"
            />
          </van-cell>
          <van-cell title="商家服务" is-link>
            <van-icon
              class="van-cell__left-icon"
              slot="icon"
              name="shop-collect"
              color="dodgerblue"
              size="0.7rem"
            />
          </van-cell>
        </van-cell-group>
        <div class="interval"></div>
        <van-cell-group>
          <van-cell title="账单" is-link icon="shop-o" >
            <van-icon
              class="van-cell__left-icon"
              slot="icon"
              name="balance-list"
              color="rgb(225,159,76)"
              size="0.7rem"
            />
          </van-cell>
          <van-cell title="总资产" value="账户安全保障中" :value-class="['green']" is-link icon="shop-o" />
          <van-cell title="余额" value="******元" is-link icon="shop-o" />
          <van-cell title="余额宝" is-link icon="shop-o" />
          <van-cell title="花呗" is-link icon="shop-o" />
          <van-cell title="余利宝" is-link icon="shop-o" />
        </van-cell-group>
        <div class="interval"></div>
        <van-cell-group>
          <van-cell title="支付宝会员" is-link icon="shop-o" />
          <van-cell title="商家服务" is-link icon="shop-o" />
        </van-cell-group>
      </main>
      <van-skeleton title avatar :row="50" />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    msg: 'hello',
    pullLoading: false
  }),
  methods: {
    onRefresh() {
      console.log('加载中')
      setTimeout(() => {
        this.pullLoading = false
      }, 1000)
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

.page {
  .user-box {
    height: 3rem;
    background: rgb(58, 130, 212);
    padding: 0 0.5rem;
    // border: 1px solid red;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    position: relative;

    .avatar {
      width: 2rem;
      height: 2rem;
      border: 3px solid rgba($color: white, $alpha: 0.3);

      .img {
        width: 100%;
        height: 100%;
      }
    }

    .info {
      margin-left: 0.6rem;
      height: 2rem;
      display: table;

      font-size: 0.5rem;
      // border: 1px solid red;
      padding: 0 !important;

      .inner {
        display: table-cell;
        vertical-align: middle;

        .name {
          font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
            'Lucida Sans', Arial, sans-serif;
          color: white;
        }

        .phone {
          border: 1px solid rgba($color: white, $alpha: 0.3);
          padding: 2px 0.2rem;
          color: white;
          text-align: center;
          font-size: 0.35rem;
          margin-top: 0.2rem;
          border-radius: 25px;
        }
      }
    }
  }
}

.arrowRight {
  $degree: 45deg;
  display: block;
  position: absolute;
  top: 50%;
  right: 0.5rem;
  width: 0.3rem;
  height: 0.3rem;
  border-top: 1px solid white;
  border-right: 1px solid white;
  transform: rotate($degree) translateY(-50%);
  -webkit-transform: rotate($degree);
  // border: 1px solid red;
}
</style>