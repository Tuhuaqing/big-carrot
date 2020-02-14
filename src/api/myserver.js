import axios from 'axios'

export default {

    // 登录
    login(params) {
        return axios.post('/newserver/user/login', params)
    },

    // 注册用户
    register(params) {
        return axios.post('/newserver/user/register', params)
    },

    // 获取用户信息by id
    getUserInfo(id) {
        return axios.get(`/newserver/user/userinfo/${id}`)
    },

    // 更改头像接口
    changeAvatarUrl(userid, url) {
        return axios.get(`/newserver/user/change-avatar/${userid}?avatar_url=${url}`)
    },

    // 更改性别接口
    changeGender(userid, gender) {
        return axios.get(`/newserver/user/change-gender/${userid}?gender=${gender}`)
    },

    // 更改性别接口
    changeNickname(userid, nickname) {
        return axios.get(`/newserver/user/change-nickname/${userid}?nickname=${nickname}`)
    },

    // 查询帖子
    getPosts(userid = ''){
        return axios.get(`/newserver/post?userId=${userid}`)
    },

    // 发布帖子
    releasePost(params){
        return axios.post('/newserver/post/release',params)
    }
}