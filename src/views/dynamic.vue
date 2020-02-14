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
        <van-search v-model="searchValue" placeholder="请输入搜索关键词" input-align="left" />
      </header>
      <transition name="van-slide-up">
        <div class="posts" v-if="!loading">
          <div class="item van-hairline--bottom" v-for="item in posts" :key="item._id">
            <!-- Left -->
            <div class="left">
              <img :src="item.userAvatarUrl" alt class="avatar" />
            </div>
            <!-- Right -->
            <div class="right">
              <!-- 昵称区域 -->
              <div class="right-top">
                <span class="nickname" :class="{'vip-text':true}">{{item.nickname}}</span>
                <van-tag
                  :key="index"
                  v-for="(tag,index) in item.tags"
                  class="tag"
                  type="danger"
                >{{tag}}</van-tag>
              </div>
              <!-- 内容区域 -->
              <div class="right-middle">
                <div class="text-field">{{item.text}}</div>
                <div class="img-field" v-if="item.imgs.length">
                  <img
                    class="illustration"
                    :src="img"
                    alt="配图"
                    :key="index"
                    v-for="(img,index) in item.imgs"
                  />
                </div>
              </div>
              <!-- 操作区域 -->
              <div class="right-bottom">
                <div class="time-box">
                  <span class="time">{{$moment(item.dateTime,'YYYY-MM-DD HH:mm:ss').fromNow()}}</span>
                </div>
                <div class="operation-box">
                  <span class="like">
                    <van-icon class="like" name="like-o" size="0.5rem" />
                    <span class="text">{{item.likeNumber | turnLikeNum}}</span>
                  </span>
                  <span class="comment" @click="showComment=true">
                    <van-icon class="comment" name="chat-o" size="0.5rem" />
                    <span class="text">{{item.commentNumber | turnCommentNum}}</span>
                  </span>
                </div>
              </div>
              <!-- 评论区域 -->
              <div class="right-comment-box" v-if="item.comments.length">
                <div class="comment-item" :key="index" v-for="(cmt,index) in item.comments">
                  <span class="commentator">{{cmt.nickname}}</span>
                  <span class="colon">:</span>
                  <span class="content">{{cmt.content}}</span>
                </div>
                <!-- <div class="comment-item">
                  <span class="commentator">Sunshine</span>
                  <span class="colon">:</span>
                  <span class="content">秀儿, 敢去用那啥啥洗手液洗手吗,蒂花之秀!</span>
                </div>-->
              </div>
            </div>
          </div>
        </div>
      </transition>
      <section v-if="loading">
        <van-skeleton :key="index" v-for="(item,index) in 10" title avatar :row="3" />
      </section>
    </main>
    <!-- 弹出层 -->
    <van-popup v-model="showComment" position="bottom" @closed="commentValue=''">
      <van-field v-model="commentValue" maxlength="100" placeholder="说点好听的">
        <van-button ref="comment_input" slot="button" size="small" type="info">评论</van-button>
      </van-field>
    </van-popup>
  </div>
</template>

<script>
import avatar_boy from '@/assets/img/dft-avatar-boy.png'
import avatar_girl from '@/assets/img/dft-avatar-girl.png'

export default {
  data: () => ({
    searchValue: '',
    loading: true,
    posts: [],
    showComment: false,
    commentValue: ''
  }),
  methods: {
    addPost() {
      this.$router.push({ name: 'dynamicRelease' }).catch(err => { })
    },
    // 刷新帖子
    getPosts() {
      this.$api.myserver.getPosts()
        .then(r => {
          if (r.status == 200 && r.data.status == 'ok') {
            this.posts = r.data.data
            this.loading = false
          }
        })
    }
  },
  filters: {
    turnLikeNum(likeNumber) {
      let likeNum = Number.parseInt(likeNumber)
      if (likeNum <= 0) {
        return '赞'
      } else if (likeNum >= 999) {
        return '999+'
      } else {
        return likeNum
      }
    },
    turnCommentNum(commentNumber) {
      let commentNum = Number.parseInt(commentNumber)
      if (commentNum <= 0) {
        return '评论'
      } else if (commentNum >= 999) {
        return '999+'
      } else {
        return commentNum
      }
    }
  },
  watch: {
    showComment(newv, oldv) {
      if (newv && this.$refs.comment_input) {
        this.$refs.comment_input.focus()
      }
    }
  },
  mounted() {
    this.getPosts()
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
      // border: 1px solid red;//
      justify-content: center;

      .left {
        width: 1.3rem;
        // border: 1px solid blue;
        .avatar {
          width: 1rem;
          height: 1rem;
        }
      }
      // right区域
      .right {
        width: 7.5rem;
        // border: 1px solid green;//
        // right昵称box
        .right-top {
          padding-bottom: 0.125rem;
          vertical-align: middle;
          .nickname {
            color: rgb(58, 130, 212);
            font-size: 0.4rem;
            font-weight: bold;
            font-family: '微软雅黑';
          }
          .vip-text {
            color: #ffb800;
          }
          .tag {
            margin-left: 0.2rem;
          }
        }
        // right内容box
        .right-middle {
          padding-bottom: 0.125rem;
          .text-field {
            font-size: 0.4rem;
            font-family: '微软雅黑';
          }
          .img-field {
            // border: 1px solid gray;//
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
            margin-right: 0.2rem;
            .like,
            .comment {
              vertical-align: middle;
              .text {
                padding: 0.1rem;
                display: inline-block;
                min-width: 1rem;
                max-width: 1rem;
              }
            }
          }
        }
        // right评论box
        .right-comment-box {
          margin-top: 0.15rem;
          background: rgb(247, 247, 247);
          padding: 0.1rem 0.2rem;
          .comment-item {
            font-size: 0.33rem;
            font-family: '微软雅黑';
            .commentator {
              color: rgb(58, 130, 212);
            }
            .colon {
              padding: 0 0.1rem 0 0.05rem;
            }
          }
          .comment-item:not(:first-child) {
            margin-top: 0.1rem;
          }
        }
      }
    }
  }
}
</style>