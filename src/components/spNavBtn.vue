<template>
    <div class="nav-btn">
        <div class="nav-btn__item" :class="{ 'active' : value.type == item.type }" v-for="(item, index) in list" :key="index" @click="select(item)">
            {{item.name}}
        </div>
    </div>
</template>

<script>
import _ from "lodash";
export default {
    props: {
        list: {
            type: Array,
            default: []
        },
        value: {
            type: Object,
            default: {}
        }
    },
    data() {
        console.log(this.value)
        return {
            currentValue: this.value
        };
    },
    components: {},
    computed: {},
    created() {},
    methods: {
        select(item) {
            // this.currentValue = item;
            this.$emit('on-change', JSON.stringify(item));
        }
    }
};
</script>

<style lang="less" scoped>
@import "./../css/theme/crm-theme.less";
.nav {
    &-btn {
        display: flex;
        background: #fff;
        &__item {
            position: relative;
            height: 56px;
            margin: 0 18px;
            line-height: 56px;
            color: @darken-color; 
            cursor: pointer;
            &.active::after {
                content: '';
                position: absolute;
                top: 54px;
                left: 0;
                display: inline-block;
                width: 100%;
                height: 2px;
                background: @primary-color;
            }
        }
    }
}
</style>
