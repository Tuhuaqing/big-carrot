
//封装操作localstorage本地存储的方法

const localStorage = {

    //存储
    set(key, value) {
        if (key) {
            switch (typeof value) {
                case 'string':
                    window.localStorage.setItem(key, value)
                    break
                case 'object':
                    window.localStorage.setItem(key, JSON.stringify(value))
            }
        }else{
            console.error('存入localStorage时,没有k')
        }
    },
    //取出数据
    get(key) {
        let str = window.localStorage[key]
        if (str) {
            return JSON.parse(window.localStorage[key])
        } else {
            return null
        }

    },
    // 删除数据
    remove(key) {
        window.localStorage.removeItem(key)
    }

}
const sessionStorage = {
    //存储
    set(key, value) {
        window.sessionStorage.setItem(key, JSON.stringify(value))
    },
    //取出数据
    get(key) {
        return JSON.parse(window.sessionStorage.getItem(key))
    },
    // 删除数据
    remove(key) {
        window.sessionStorage.removeItem(key)
    }
}

export {
    localStorage,
    sessionStorage
}