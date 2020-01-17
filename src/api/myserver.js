import axios from 'axios'

export default {

    // 上传文件换取url
    uploadAny(params) {
        return axios.post('/newserver/file/upload', params,{
            headers:{
                'Content-Type':'multipart/form-data;charset=utf-8'
            }
        })
    },

    // 登录
    login(params){
        return axios.post('/newserver/user/login',params)
    } ,

    // 注册用户
    register(params){
        return axios.post('/newserver/user/register',params)
    },

    // 获取用户信息by id
    getUserInfo(id){
        return axios.get(`/newserver/user/userinfo/${id}`)
    },

    // 更改头像接口
    changeAvatarUrl(userid,url){
        return axios.get(`/newserver/user/change-avatar/${userid}?avatar_url=${url}`)
    }
    
}