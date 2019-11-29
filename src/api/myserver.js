import axios from 'axios'

export default {
    // 查询手机号信息
    testQueryUsers() {
        return axios.get('/myserver/getUsers')
    },

    // 上传头像
    uploadAvatar(params) {
        return axios.post('/uploadAvatar', params, {
            withCredentials: true,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}