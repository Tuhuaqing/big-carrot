import axios from 'axios'

export default {
    // 查询手机号信息
    queryTel(par){
        return axios.get('/taobao/cc/json/mobile_tel_segment.htm?tel='+par)
    },

    // 查询电商信息
    queryDs(par,callback){


        return axios.get(`https://suggest.taobao.com/sug?code=utf-8&q=${par}`)

        
    }
}