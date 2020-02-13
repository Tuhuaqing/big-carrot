<template>
  <div class="page">
    <nav class="top-tool me-tool">
      <span>动态广场</span>
      <span class="set" @click="addPost">
        <van-icon name="plus" />
      </span>
    </nav>
    <main>
      <header>
        <van-search v-model="searchValue" placeholder="请输入搜索关键词" input-align="center" />
      </header>
      <transition name="van-slide-up">
        <div class="posts" v-if="!loading">
          <div class="item van-hairline--bottom">
            <div class="left">
              <img src="@/assets/img/dft-avatar-girl.png" alt class="avatar" />
            </div>
            <div class="right">
              <div class="right-top">
                <span class="nickname">路三岁呀</span>
              </div>
              <div class="right-middle">
                <div class="text-field">代码其实是写出来给人看的, 顺带能在机器上运行, 哈哈哈.</div>
                <div class="img-field">
                  <img class="illustration" src="@/assets/img/avatar.jpg" alt="配图" />
                  <img class="illustration" src="@/assets/img/avatar.jpg" alt="配图" />
                  <img class="illustration" src="@/assets/img/avatar.jpg" alt="配图" />
                  <img class="illustration" src="@/assets/img/avatar.jpg" alt="配图" />
                  <img class="illustration" src="@/assets/img/avatar.jpg" alt="配图" />
                  <img class="illustration" src="@/assets/img/avatar.jpg" alt="配图" />
                  <img class="illustration" src="@/assets/img/avatar.jpg" alt="配图" />
                  <img class="illustration" src="@/assets/img/avatar.jpg" alt="配图" />
                  <img class="illustration" src="@/assets/img/avatar.jpg" alt="配图" />
                </div>
              </div>
              <div class="right-bottom">
                <div class="time-box">
                  <span class="time">1小时以前</span>
                </div>
              </div>
            </div>
          </div>
          <div class="item van-hairline--bottom">
            <div class="left">
              <img src="@/assets/img/dft-avatar-boy.png" alt class="avatar" />
            </div>
            <div class="right">
              <div class="right-top">
                <span class="nickname">路遥知马力</span>
              </div>
              <div class="right-middle">
                <div class="text-field">代码其实是写出来给人看的, 顺带能在机器上运行, 我很赞同楼上的话.</div>
                <div class="img-field">
                  <img class="illustration" src="@/assets/img/avatar2.jpg" alt="配图" />
                  <img class="illustration" src="@/assets/img/avatar.jpg" alt="配图" />
                  <img class="illustration" src="@/assets/img/avatar2.jpg" alt="配图" />
                  <img class="illustration" src="@/assets/img/avatar.jpg" alt="配图" />
                  <img class="illustration" src="@/assets/img/avatar.jpg" alt="配图" />
                </div>
              </div>
              <div class="right-bottom">
                <div class="time-box">
                  <span class="time">2小时以前</span>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="left">
              <img src="@/assets/img/dft-avatar-boy.png" alt class="avatar" />
            </div>
            <div class="right">
              <div class="right-top">
                <span class="nickname">路遥知马力</span>
              </div>
              <div class="right-middle">
                <div class="text-field">想起那年夕阳下的奔跑, 那是我逝去的青春...</div>
                <div v-if="false" class="img-field"></div>
              </div>
              <div class="right-bottom">
                <div class="time-box">
                  <span class="time">3小时以前</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
      <section v-if="loading">
        <van-skeleton :key="index" v-for="(item,index) in 10" title avatar :row="3" />
      </section>
    </main>
  </div>
</template>

<script>
import avatar_boy from '@/assets/img/dft-avatar-boy.png'
import avatar_girl from '@/assets/img/dft-avatar-girl.png'

export default {
  data: () => ({
    searchValue: '',
    loading: true
  }),
  methods: {
    addPost() {
      this.$dialog.alert({
        message: '发帖功能正在拼命开发中...'
      })
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 1000);
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

main {
  background: white;

  .posts {
    .item {
      display: flex;
      padding: 0.5rem;
      // border: 1px solid red;
      justify-content: space-between;

      .left {
        width: 1.1rem;
        // border: 1px solid blue;
        .avatar {
          width: 100%;
          height: 1.065rem;
        }
      }
      // right区域
      .right {
        width: 7.5rem;
        // border: 1px solid green;
        // right昵称box
        .right-top {
          padding-bottom: 0.125rem;
          .nickname {
            color: rgb(58, 130, 212);
            font-size: 0.4rem;
            font-weight: bold;
            font-family: '微软雅黑';
          }
        }
        // right内容box
        .right-middle {
          padding-bottom: 0.125rem;
          .text-field {
            font-size: 0.35rem;
            font-family: '微软雅黑';
          }
          .img-field {
            padding-top: 0.25rem;
            .illustration {
              width: 2.35rem;
              height: 2.35rem;
              margin-right: 0.1rem;
            }
          }
        }
        // right底部box
        .right-bottom {
          display: flex;
          justify-content: space-between;
          .time-box {
            .time {
              font-size: 0.25rem;
              color: gray;
            }
          }
          .operation-box {
            // border: 1px solid red;
          }
        }
      }
    }
  }
}
</style>