import Vue from 'vue'
// 封装请求方法
function request(api, postData) {
    return (postData ? Vue.http.post(api, postData) : Vue.http.get(api)).then(response => {
        let body = response.body
        if (!body || body.size === 0) {
            // 返回数据解析失败，这里调用触发全局通知
            alert("通信数据解析失败")
            return Promise.reject(response)
        } else if (body.status == 'ok') {
            if(body.msg){
                alert(body.msg)
            }
            return Promise.resolve(body.data, body.status, response)
        } else {
            // 业务逻辑错误，由调用者自己处理
            return Promise.reject(body.message, body.code, response)
        }
    },  response => {
        if (!response.ok) {
            // 通信失败等无返回状态，这里调用触发全局通知
            alert("通信错误:" + response.status + '#' + response.statusText)
        } else {
            // 服务端程序非业务错误（status != 200)，这里调用触发全局通知
            alert("服务端内部错误:" + response.status + '#' + response.statusText)
        }
        // 继续抛出异常
        return Promise.reject(response)
    })
}

export default {

}
