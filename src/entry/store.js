import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
import { menu, store } from './../module.config'
import {
    GET_SELECT_MENU
} from './mutation-types'
console.log( store )
Vue.use( Vuex )
const state = {
    menu_open: [],
    menu_active: '',
    paths: [],
    path: '',
    // 当前选择的菜单
    selectMenu: []
}
const actions = {
    getSelectMenu ( { commit, state }, to ) {
        commit( GET_SELECT_MENU, to )
    }
}
const getters = {
    getAppPath: state => {
        return state.path
    }
}

const mutations = {
    // 获取当前选中的菜单
    [GET_SELECT_MENU] ( state, path ) {
        _.forEach( menu, function ( value, index ) {
            if ( value.url.split( '/' )[1] === path.path.split( '/' )[1] ) {
                state.selectMenu = value
            }
        } )
    }
}
export default new Vuex.Store( {
    modules: store,
    state,
    actions,
    getters,
    mutations
} )
