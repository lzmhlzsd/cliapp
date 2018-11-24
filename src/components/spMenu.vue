<template>
    <div class="sider">
        <!-- <Menu theme="dark" :menuitemClasses="menuitemClasses" :accordion="true" :active-name="menu_active" width="auto" :open-names="menu_open">
            <Submenu :name="index" v-for="(item, index) in menus" :key="index">
                <template slot="title">
                    <Icon type="ios-navigate"></Icon>
                    {{item.name}}
                </template>
                <router-link :to=" subitem.url" v-for="(subitem, sindex) in item.sub" :key="sindex">
                    <MenuItem :name="index + '-' + sindex">{{subitem.name}}</MenuItem>
                </router-link>
            </Submenu>
        </Menu> -->
        <div class="sider-menu" :name="index" v-for="(item, index) in menus" :key="index">
            <router-link :to="item.url" class="sider-menu-item" :class="{'hover' : hoverItem == item.name}" @mouseover.native="selectStyle(item)" @mouseout.native="outStyle(item)">
                <i class="iconfont" :class="[item.icon]"></i>
                <span class="sider-menu-item-label">{{item.name}}</span>
            </router-link>
        </div>
    </div>
</template>

<script>
import { menu } from './../module.config'
import { mapState } from 'vuex'
console.log( menu )
export default {
    props: {
        menuitemClasses: String
    },
    data () {
        return {
            menus: menu,
            hoverItem: ''
        }
    },
    components: {},
    computed: {
        ...mapState( {
            menu_open: state => state.menu_open,
            menu_active: state => state.menu_active
        } )
    },
    methods: {
        selectStyle ( item ) {
            this.hoverItem = item.name
        },
        outStyle ( item ) {
            this.hoverItem = ''
        }
    },
    created () {
        console.log( this.menus )
    }
}
</script>

<style lang="less" scoped>
@import "./../css/common/theme.less";
.sider {
    &-menu {
        // display: flex;
        // justify-content: center;
        // align-items: center;
        width: 56px;
        height: 56px;
        i {
            font-size: 20px;
            // color: #7786AB;
            color: @layout-sider-text;
        }
        &-item {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            &-label {
                position: absolute;
                top: 16px;
                left: 52px;
                display: none;
                z-index: 999;
                border-radius: 5px;
                padding: 3px 8px;
                font-size: 12px;
                color: #fff;
                background: rgba(0, 0, 0, 0.6);
                white-space: nowrap;
            }
            &-label::before {
                content: "";
                position: absolute;
                top: 6px;
                left: -12px;
                display: inline-block;
                z-index: 999;
                border-color: transparent rgba(0, 0, 0, 0.6) transparent
                    transparent;
                border-width: 6px;
                border-style: solid;
            }
        }
        &-item.hover {
            .sider-menu-item-label {
                display: inline-block;
            }
        }
    }
}
</style>
