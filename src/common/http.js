import axios from 'axios'
let http = axios.create({
    baseURL: 'http://localhost:8001',
    // params: {
    //     pid: 12345
    // },
    data: {
        postdata: 'post'
    }
});
// Add a request interceptor 
http.interceptors.request.use(function(config) {
    // Do something before request is sent 
    if (config.method === 'get') {
        let params = {
            getdata: 'get',
        };
        config.params = Object.assign(config.params || {}, params);
    }
    return config;
}, function(error) {
    // Do something with request error 
    return Promise.reject(error);
});
// Add a response interceptor 
http.interceptors.response.use(function(response) {
    // Do something with response data 
    let data = response.data || {};
    if (data.code !== 100) {
        return Promise.reject(response);
    } else {
        return response;
    }
}, function(error) {
    // Do something with response error 
    return Promise.reject(error);
});
export default http;