import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import area from './modules/area';
// import promise from 'es6-promise';

// promise.polyfill();
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    actions,
    getters,
    modules: {
        area,
    },
    strict: debug,
    // plugins: debug ? [createLogger()] : []
});