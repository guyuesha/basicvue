import http from '@/common/http.js'
export const getDetail = (params = {}) => {
    return http.get('/api/detail', { params: params })
        .then(function(response) {
            console.log('get res', response);
            return response;
        });
}
export const getList = (params = {}) => {
    return http.post('/api/list', params)
        .then(function(response) {
            return response;
        })
}