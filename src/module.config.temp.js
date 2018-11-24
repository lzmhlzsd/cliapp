/*
    模块注册： 注册路由、菜单、vuex、iconfont
*/
import { router as module1Router, menu as module1Menu, store as module1Store } from './modules/module1/module.export'
import { router as module2Router, menu as module2Menu, store as module2Store } from './modules/module2/module.export'

const rotuer = [].concat( module1Router, module2Router )
const menu = [].concat( module1Menu, module2Menu )
const store = Object.assign( {}, module1Store, module2Store )
export { rotuer, menu, store }
