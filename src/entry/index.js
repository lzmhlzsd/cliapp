import Vue from 'vue'
import VueRouter from 'vue-router'
// import routes from './../../router/index'
import routes from './router'
import store from './store'
import App from './App.vue'

import iView from 'iview/dist/iview.min.js'
// import 'iview/dist/styles/iview.css'
import './../css/common/base.less'
import './../css/common/style.less'

Vue.use( VueRouter )
Vue.use( iView )

const router = new VueRouter( {
    mode: 'history',
    routes
} )

router.beforeEach( ( to, from, next ) => {
    store.dispatch( 'getSelectMenu', to )
    next()
} )

iView.LoadingBar.config( {
    color: '#b3c8f3',
    failedColor: '#f0ad4e',
    height: 3
} )

new Vue( {
    router,
    store,
    render: h => h( App )
} ).$mount( '#app' )
