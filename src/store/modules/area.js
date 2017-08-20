import * as types from '../mutation-types';

// initial state
const state = {
    id: 0,

};

// mutations
const mutations = {
    [types.SET_AREA_ID](state, id) {
        state.id = id;
    },
};

export default {
    state,
    mutations
};