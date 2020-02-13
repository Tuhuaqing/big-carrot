<template>
  <div>
    <nav class="top-tool me-tool">
      <span>我的</span>
      <span class="set" @click="$router.push({name:'meSetting'})">设置</span>
    </nav>
    <div class="page">
      <!-- 用户信息box -->
      <div class="user-box" @click="$router.push({name:'meDetail'})">
        <!-- 头像 -->
        <div class="avatar">
          <img class="img" :src="avatar" alt="用户头像" />
          <img v-if="userInfo.membership=='1'" class="v" src="@/assets/img/v.png" alt="V图标" />
        </div>
        <!-- 信息 -->
        <div class="info">
          <div class="inner">
            <div class="name">{{userInfo.nickname}}</div>
            <div class="phone">{{$common.turnMembership(userInfo.membership)}}</div>
          </div>
        </div>
        <i class="arrowRight"></i>
      </div>
      <!-- 主要内容 -->
      <main>
        <!-- 卡片组1 -->
        <van-cell-group>
          <van-cell title="微社交会员" is-link icon="shop-o">
            <van-icon
              class="van-cell__left-icon"
              slot="icon"
              name="diamond"
              :color="dodgerblue"
              :size="iconSize"
            />
          </van-cell>
          <van-cell title="商家服务" is-link>
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
        <!-- 卡片组2 -->
        <van-cell-group>
          <van-cell title="账单" is-link icon="shop-o">
            <van-icon
              class="van-cell__left-icon"
              slot="icon"
              name="balance-list"
              :color="golden"
              :size="iconSize"
            />
          </van-cell>
          <van-cell title="总资产" value="账户安全保障中" :value-class="['green']" is-link>
            <van-icon
              class="van-cell__left-icon"
              slot="icon"
              name="wechat"
              :color="dodgerblue"
              :size="iconSize"
            />
          </van-cell>
          <van-cell title="余额" value="1865214.15元" :to="{name:'meBalance'}" is-link>
            <van-icon
              class="van-cell__left-icon"
              slot="icon"
              name="gold-coin"
              :color="dodgerblue"
              :size="iconSize"
            />
          </van-cell>
          <!-- <van-cell title="余额宝" is-link>
            <van-icon
              class="van-cell__left-icon"
              slot="icon"
              name="bill"
              color="#FF5722"
              :size="iconSize"
            />
          </van-cell>-->
          <van-cell title="花呗代还" is-link>
            <van-icon
              class="van-cell__left-icon"
              slot="icon"
              name="goods-collect"
              :color="dodgerblue"
              :size="iconSize"
            />
          </van-cell>
          <!-- <van-cell title="余利宝" is-link>
            <van-icon
              class="van-cell__left-icon"
              slot="icon"
              name="medel"
              :color="green"
              :size="iconSize"
            />
          </van-cell>-->
          <van-cell title="银行卡" is-link>
            <van-icon
              class="van-cell__left-icon"
              slot="icon"
              name="card"
              :color="golden"
              :size="iconSize"
            />
          </van-cell>
        </van-cell-group>
        <div class="interval"></div>
        <!-- 卡片组3 -->
        <van-cell-group>
          <van-cell title="微信用" is-link>
            <van-icon
              class="van-cell__left-icon"
              slot="icon"
              name="youzan-shield"
              :color="green"
              :size="iconSize"
            />
          </van-cell>
          <van-cell title="微保险" is-link>
            <van-icon
              class="van-cell__left-icon"
              slot="icon"
              name="umbrella-circle"
              :color="dodgerblue"
              :size="iconSize"
            />
          </van-cell>
          <van-cell title="微借贷" is-link>
            <van-icon
              class="van-cell__left-icon"
              slot="icon"
              name="cluster"
              :color="dodgerblue"
              :size="iconSize"
            />
          </van-cell>
          <van-cell title="我的卡包" is-link>
            <van-icon
              class="van-cell__left-icon"
              slot="icon"
              name="vip-card"
              :color="green"
              :size="iconSize"
            />
          </van-cell>
        </van-cell-group>
        <div class="interval"></div>
        <!-- 卡片组4 -->
        <van-cell-group>
          <van-cell title="微社交公益" is-link>
            <van-icon
              class="van-cell__left-icon"
              slot="icon"
              name="youzan-shield"
              :color="green"
              :size="iconSize"
            />
          </van-cell>
          <van-cell title="微社交客服" is-link>
            <van-icon
              class="van-cell__left-icon"
              slot="icon"
              name="smile-comment"
              :color="dodgerblue"
              :size="iconSize"
            />
          </van-cell>
        </van-cell-group>
        <div class="interval"></div>
        <van-cell-group>
          <van-cell
            title="提供经济支持"
            is-link
            @click="$dialog.alert({message: '请添加作者QQ:2438974094,感激万分!'})"
          >
            <van-icon
              class="van-cell__left-icon"
              slot="icon"
              name="youzan-shield"
              :color="green"
              :size="iconSize"
            />
          </van-cell>
        </van-cell-group>
      </main>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import avatar_boy from '@/assets/img/dft-avatar-boy.png'
import avatar_girl from '@/assets/img/dft-avatar-girl.png'

export default {
  data: () => ({
    msg: 'hello',
    pullLoading: false,
    userInfo: null,
    avatar: ''
  }),
  methods: {
    // 下拉刷新
    onRefresh() {
      setTimeout(() => {
        this.pullLoading = false
      }, 1000)
    },
    // 刷新用户信息
    refreshUserInfo(id) {
      let loading = this.$toast.loading({
        message: '加载中'
      })
      // 重新再刷新一遍用户信息
      this.$api.myserver.getUserInfo(id)
        .then(r => {
          if (r.status == 200 && r.data.status == 'ok') {
            this.userInfo = r.data.data
          }
        }).catch(err => {
          console.error(err)
        }).finally(() => {
          loading.clear()
        })
    }
  },
  computed: {
    ...mapState(['iconSize', 'golden', 'dodgerblue', 'green'])
  },
  created() {
    this.userInfo = this.$store.state.userInfo
    // 重新再刷新一遍用户信息
    this.refreshUserInfo(this.userInfo._id)


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
      position: relative;
      border: 3px solid rgba($color: white, $alpha: 0.3);

      .img {
        width: 100%;
        height: 100%;
      }

      .v {
        position: absolute;
        width: 0.6rem;
        height: 0.6rem;
        right: -0.15rem;
        bottom: -0.15rem;
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
          font-size: 0.315rem;
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