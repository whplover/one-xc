

import * as types from './home-mutations-types'
// import { GET_ITEM_DATA } from './home-mutations-types';


const state = {
    isAbout: false,
    itemData: [],
    isLogin: false,
    isShowMeau: false,
    loginData: {
        avatar_url: '',
        id: '',
        loginname: '',
        accesstoken: ''
    }
};
// console.log(localStorage.getItem('isLogin'))
if (JSON.parse(localStorage.getItem('isLogin'))) {
    state.isLogin = true;
    let data = JSON.parse(localStorage.getItem('loginData'));
    Object.keys(data).forEach(item => {
        state.loginData[item] = data[item];
    })
}
const mutations = {
    isShowAbout(state) {
        state.isAbout = !state.isAbout;
    },
    changeLogin(state) {
        state.isLogin = true;
    },
    [types.GET_ITEM_DATA](state, data) {
        state.itemData = data;
    },
    [types.GET_LOGIN_DATA](state, data) {
        state.isLogin = true;
        localStorage.setItem('isLogin', true);
        state.loginData = data;
        localStorage.setItem('loginData', JSON.stringify(data));
    },
    changeShowMeau(state) {
        state.isShowMeau = !state.isShowMeau;
    },
    loginOut(state) {
        localStorage.removeItem("loginData");
        localStorage.setItem('isLogin', false);
        state.isLogin = false;
        state.isShowMeau = false;
    }
}

const getters = {
    itemData: state => state.itemData,
    loginData: state => state.loginData,
    isLogin: state => state.isLogin,
    isShowMeau: state => state.isShowMeau,
}

const actions = {
    getItemData({ commit }, data) {
        commit(types.GET_ITEM_DATA, data)
    },
    getLoginData({ commit }, data) {
        commit(types.GET_LOGIN_DATA, data)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}