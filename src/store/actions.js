import * as types from './mutation-types';

export const getTime10 = ({ commit, state }, params) => {
    setTimeout(function() {
        console.log('hihihi ', state.area.id, 'papa ', params);
        commit(types.SET_AREA_ID, '');
    }, 5000)
};