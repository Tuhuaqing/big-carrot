import axios from 'axios'

export default {
    // 查询手机号信息
    queryTel(par){
        return axios.get('/taobao/cc/json/mobile_tel_segment.htm?tel='+par)
    }
}