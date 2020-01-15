import axios from 'axios'

export default {
    // 查询手机号信息
    testQueryUsers() {
        return axios.get('/myserver/getUsers')
    },


    // 上传文件换取url
    uploadAny(params) {
        return axios.post('/newserver/users/upload-any', params,{
            headers:{
                'Content-Type':'multipart/form-data;charset=utf-8'
            }
        })
    },
}