

import * as types from './home-mutations-types'
// import { GET_ITEM_DATA } from './home-mutations-types';

export default {
    namespaced: true,
    state: {
        isAbout: false,
        itemData: []
    },
    mutations: {
        isShowAbout(state) {
            state.isAbout = !state.isAbout;
        },
        [types.GET_ITEM_DATA](state, data) {
            state.itemData = data;
        }
    },
    getters: {
        itemData: state => state.itemData
    },
    actions: {
        getItemData({ commit }, data) {
            commit(types.GET_ITEM_DATA, data)
        }
    }
}