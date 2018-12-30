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

            // `adapter` allows custom handling of requests which makes testing easier.
            // Return a promise and supply a valid response (see lib/adapters/README.md).
            // adapter: function (config) {
            //     /* ... */
            // },

            // `auth` indicates that HTTP Basic auth should be used, and supplies credentials.
            // This will set an `Authorization` header, overwriting any existing
            // `Authorization` custom headers you have set using `headers`.
            auth: {
                username: 'ws',
                password: 'ws123456'
            },

            // `responseType` indicates the type of data that the server will respond with
            // options are 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
            // responseType: 'json', // default

            // `xsrfCookieName` is the name of the cookie to use as a value for xsrf token
            // xsrfCookieName: 'XSRF-TOKEN', // default

            // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
            // xsrfHeaderName: 'X-XSRF-TOKEN', // default

            // `onUploadProgress` allows handling of progress events for uploads
            // onUploadProgress: function (progressEvent) {
            //     // Do whatever you want with the native progress event
            // },

            // `onDownloadProgress` allows handling of progress events for downloads
            // onDownloadProgress: function (progressEvent) {
            //     // Do whatever you want with the native progress event
            // },

            // `maxContentLength` defines the max size of the http response content allowed
            // maxContentLength: 2000,

            // `validateStatus` defines whether to resolve or reject the promise for a given
            // HTTP response status code. If `validateStatus` returns `true` (or is set to `null`
            // or `undefined`), the promise will be resolved; otherwise, the promise will be
            // rejected.
            // validateStatus: function (status) {
            //     return status >= 200 && status < 300; // default
            // },

            // `maxRedirects` defines the maximum number of redirects to follow in node.js.
            // If set to 0, no redirects will be followed.
            // maxRedirects: 5, // default

            // `socketPath` defines a UNIX Socket to be used in node.js.
            // e.g. '/var/run/docker.sock' to send requests to the docker daemon.
            // Only either `socketPath` or `proxy` can be specified.
            // If both are specified, `socketPath` is used.
            // socketPath: null, // default

            // `httpAgent` and `httpsAgent` define a custom agent to be used when performing http
            // and https requests, respectively, in node.js. This allows options to be added like
            // `keepAlive` that are not enabled by default.
            // httpAgent: new http.Agent({ keepAlive: true }),
            // httpsAgent: new https.Agent({ keepAlive: true }),

            // 'proxy' defines the hostname and port of the proxy server
            // Use `false` to disable proxies, ignoring environment variables.
            // `auth` indicates that HTTP Basic auth should be used to connect to the proxy, and
            // supplies credentials.
            // This will set an `Proxy-Authorization` header, overwriting any existing
            // `Proxy-Authorization` custom headers you have set using `headers`.
            // proxy: {
            //     host: '127.0.0.1',
            //     port: 9000,
            //     auth: {
            //         username: 'mikeymike',
            //         password: 'rapunz3l'
            //     }
            // },

            // `cancelToken` specifies a cancel token that can be used to cancel the request
            // (see Cancellation section below for details)
            // cancelToken: new CancelToken(function (cancel) {
            // })
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
