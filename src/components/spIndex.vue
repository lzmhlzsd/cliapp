<template>
        <Layout>
            <Sider>
                <sub-menu></sub-menu>
            </Sider>
            <keep-alive>
                <router-view class="content-view"></router-view>
            </keep-alive>
        </Layout>
</template>

<script>
import subMenu from './spSubMenu'
export default {
    data () {
        return {

        }
    },
    components: {
        'sub-menu': subMenu
    },
    created () {

    }
}
</script>

<style lang="less" scoped>

</style>
