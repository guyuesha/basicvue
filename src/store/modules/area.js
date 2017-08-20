import * as types from '../mutation-types';

// initial state
const state = {
    id: '',

};

// mutations
const mutations = {
    [types.SET_AREA_ID](state, nid) {
        state.id = nid;
    },
};

export default {
    state,
    mutations
};