<template>
  <div>
    <nav class="top-tool me-tool">
      <span>我的</span>
      <span class="set" @click="$router.push({name:'meSetting'})">设置</span>
    </nav>
    <div class="page">
      <!-- 用户信息box -->
      <div class="user-box">
        <!-- 头像 -->
        <div class="avatar" @click="$refs.fileTool.clickInput()">
          <img
            v-if="userInfo.gender==1"
            class="img"
            src="@/assets/img/dft-avatar-boy.png"
            alt="用户头像"
          />
          <img v-else class="img" src="@/assets/img/dft-avatar-girl.png" alt="用户头像" />
        </div>
        <!-- 信息 -->
        <div class="info">
          <div class="inner">
            <div class="name">{{userInfo.nickName}}</div>
            <div class="phone">{{userInfo.phone.substr(0,3)}}******{{userInfo.phone.substr(-2)}}</div>
          </div>
        </div>
        <i class="arrowRight"></i>
      </div>
      <!-- 主要内容 -->
      <main>
        <!-- 卡片组1 -->
        <van-cell-group>
          <van-cell title="微社交会员" is-link icon="shop-o" @click="queryTel">
            <van-icon
              class="van-cell__left-icon"
              slot="icon"
              name="diamond"
              :color="dodgerblue"
              :size="iconSize"
            />
          </van-cell>
          <van-cell title="商家服务" is-link @click="queryDs">
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
          <van-cell title="余额宝" is-link>
            <van-icon
              class="van-cell__left-icon"
              slot="icon"
              name="bill"
              color="#FF5722"
              :size="iconSize"
            />
          </van-cell>
          <van-cell title="花呗" is-link>
            <van-icon
              class="van-cell__left-icon"
              slot="icon"
              name="goods-collect"
              :color="dodgerblue"
              :size="iconSize"
            />
          </van-cell>
          <van-cell title="余利宝" is-link>
            <van-icon
              class="van-cell__left-icon"
              slot="icon"
              name="medel"
              :color="green"
              :size="iconSize"
            />
          </van-cell>
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
          <van-cell title="蚂蚁信用" is-link>
            <van-icon
              class="van-cell__left-icon"
              slot="icon"
              name="youzan-shield"
              :color="green"
              :size="iconSize"
            />
          </van-cell>
          <van-cell title="蚂蚁保险" is-link>
            <van-icon
              class="van-cell__left-icon"
              slot="icon"
              name="umbrella-circle"
              :color="dodgerblue"
              :size="iconSize"
            />
          </van-cell>
          <van-cell title="借呗" is-link>
            <van-icon
              class="van-cell__left-icon"
              slot="icon"
              name="cluster"
              :color="dodgerblue"
              :size="iconSize"
            />
          </van-cell>
          <van-cell title="网商银行" is-link>
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
    <!-- 文件tool -->
    <file-tool ref="fileTool" @selected="modifyAvatar"></file-tool>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    msg: 'hello',
    pullLoading: false,
    userInfo: null
  }),
  methods: {
    // 下拉刷新
    onRefresh() {
      setTimeout(() => {
        this.pullLoading = false
      }, 1000)
    },
    // 点击微社交会员
    queryTel() {
      this.$api.taobao
        .queryTel(13412365478)
        .then(r => {
          console.log(r)
        })
        .catch(err => {
          this.$notify('服务端未开放')
        })
    },
    // 点击商家服务
    queryDs() {
      // 电商接口
      this.$api.taobao
        .queryDs('大衣')
        .then(r => {
          console.log(r)
        })
        .catch(err => {
          // console.log(err)
          this.$notify('服务端未开放')
        })
    },
    modifyAvatar(files) {
      if (!files.length) return

      let formData = new FormData()
      formData.append('file',files[0])

      this.$api.myserver
        .uploadAny(formData)
        .then(r => {
          if (r.status == 200 && r.data.status == 'ok') {
            let result = r.data.data
            console.log(result)
          }
        })
        .catch(err => {
          console.error(err)
        })
    }
  },
  computed: {
    ...mapState(['iconSize', 'golden', 'dodgerblue', 'green'])
  },
  created() {
    this.userInfo = this.$store.state.userInfo
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