import http from '@/common/http.js';
import axios from 'axios'
export const getDetail = (params = {}) => {
    return http.get('/api/detail', { params: params, baseURL: 'http://localhost:8001' })
        .then(function(response) {
            // console.log('get res', response);
            return response;
        });
}
export const getList = (params = {}) => {
    return http.post('/api/list', params, { baseURL: 'http://localhost:8001' })
        .then(function(response) {
            return response;
        })
}

export const getAll = function() {
    return axios.all([getDetail(), getList()])
        .then(axios.spread(function(acct, perms) {
            //两个请求现已完成
            console.log('tt ', acct, perms);
        }));
}