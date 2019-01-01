import axios from 'axios';

const baseURL = 'http://www.wslifestyle.com/'
function Axios(url, method, params = null, data = null) {
    return new Promise((resolve, reject) => {
        // console.log(method)
        axios({
            url: url,
            method: method, // default
            baseURL: baseURL,
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
            params: params ? params : '',
            data: data ? data : null,
            timeout: 10000,
            // should be made using credentials
            withCredentials: false, // default
            auth: {
                username: 'ws',
                password: 'ws123456'
            },
        })
        .then((res)=>{
            resolve(res)
        })
    })
}


export default {
    get(url, params = null) {
        return Axios(url, 'get', params, null);
    },
    post(url, data = null) {
        return Axios(url, 'post', null, data);
    },
    put(url, data = null) {
        return Axios(url, 'put', null, data);
    },
    delete(url, params = null) {
        return Axios(url, 'delete', params, null);
    }
}
