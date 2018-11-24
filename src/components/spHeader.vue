<template>
  <div class="header">
    <Row>
      <i-col span="12">
        <div class="company-logo">
          <img style="margin-top: 15px;" src="./../img/logo.png" alt="shopex-logo" width="127" />
        </div>
      </i-col>
      <i-col span="12">
        <Dropdown style="float: right;">
          <a href="javascript:void(0)" style="color: #fff;">
            zhangxuehui
            <i class="iconfont icon-arrow-down" style="position: relative;top: 2px;"></i>
          </a>
          <Dropdown-menu slot="list">
            <Dropdown-item>个人中心</Dropdown-item>
            <Dropdown-item>安全退出</Dropdown-item>
            <Dropdown-item>
              <router-link to="/user" class="sider-sub-link" >
                用户管理
              </router-link>
            </Dropdown-item>
          </Dropdown-menu>
        </Dropdown>
      </i-col>
    </Row>

  </div>
</template>

<script>
export default {
    data () {
        return {}
    },
    components: {}
}
</script>

<style lang="less" scoped>
@import './../css/common/theme.less';


.header {
    color: #fff;
    .company-logo {
      font-size: 20px;
      color: #fff;
    }
}
.sider-sub-link{
    display: block;
    color: @lighten-color;
}
</style>
