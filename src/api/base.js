import fetch from '../utils/fetch';

export function getList(query){
    return fetch({
        url: 'https://cnodejs.org/api/v1/topics',
        method: 'get',
        params: query
    });
}