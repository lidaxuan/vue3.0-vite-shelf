<!--
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-05-21 19:01:33
 * @FilePath: /ucenter-messageflat-web-view/src/pages/layout/components/NavBar.vue
-->
<template>
  <div class="header flex bg-theme flex-ccb">
    <div class="flex">
      <div class="header-logo w200 flex pl20 flex-aic">
        <!-- <span class="logo"></span> -->
        <img class="logo" src="@/assets/images/logo.png" alt="" />
      </div>
      <!-- background-color="#3d60e0" -->
      <el-menu
        text-color="#fff"
        :router="true"
        active-text-color="#fff"
        :default-active="defaultActive"
        mode="horizontal"
        align="center"
        @select="handleSelect"
      >
        <el-menu-item v-for="menu in menuList" :index="menu.path" :key="menu.id" :disabled="menu.disabled">
          <!-- {{menu}} -->
          <div class="flex flex-aic">
            <IconFont :type="menu.icon"></IconFont>
            {{ menu.name }}
          </div>
        </el-menu-item>
      </el-menu>
    </div>

    <div class="flex flex-aic pr25">
      <div class="name mr10 flex flex-aic flex-ccc">{{ getUserName() }}</div>
      <!-- 用户名下拉菜单 -->
      <el-dropdown class="header-user-name" trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          {{ userName }}
          <i class="el-icon-caret-bottom"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="loginout">
              <div>
                <!-- style="background: pink" -->
                <!-- <IconFont type="icon-xiangmujichu_tuichudenglu" :size="18"></IconFont> -->
                <span>退出登录</span>
              </div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <!-- 全屏显示 -->
      <!-- <div class="header-fullscreen pointer" @click="handleFullScreen">
        <el-tooltip effect="dark" :content="fullscreen ? `取消全屏` : `全屏`" placement="bottom">
          <i :class="[fullscreen ? 'el-icon-platform-eleme' : 'el-icon-eleme']" />
        </el-tooltip>
      </div> -->
    </div>
  </div>
</template>

<script>
// import { getLoginUserData } from "@/model/admin";
import _ from 'lodash';
import fullScreen from '../mixins/fullScreen';
import { mapGetters } from 'vuex';
import envOption from '@/env';
import { mapState, mapActions } from 'vuex';
import Template from '../../../Template.vue';

export default {
  name: 'NavBar',
  mixins: [fullScreen],
  data() {
    return {
      fullscreen: false,
      userName: '李大玄',
      defaultActive: '',
    };
  },
  created() {},
  watch: {
    $route: {
      handler(locat) {
        let path = locat.path || '';
        path = path.replace('#', '');
        let arr = path.split('/');
        let newArr = [arr[0], arr[1]];
        let str = newArr.join('/');
        const menuList = this.menuList || [];
        console.log(menuList);
        for (let i = 0; i < menuList.length; i++) {
          if (menuList[i].path.search(str) != -1) {
            this.defaultActive = menuList[i].path;
            break;
          }
        }
        this.handleSelect(this.defaultActive);
      },
      deep: true, // 深度
      immediate: true, // 立即执行
    },
  },
  computed: {
    ...mapState({
      menuList: (state) => {
        const menuList = _.compact(Array.from(state.navMenu.menuList).map(item => {
          if (!item.visible) {
            return _.assign({}, item);
          }
        }));
        return [].concat(menuList || []);
      },
    }),
  },
  components: {Template},
  methods: {
    // 点击菜单
    handleSelect(key) {
      this.$store.dispatch('navMenu/setActiveIndex', key);
      this.$store.dispatch('navMenu/setMenu', { key });
    },
    handleCommand(command) {
      if (command == 'loginout') {
        localStorage.clear();
        if (envOption.env.VITE_APP_CURRENTMODE == 'local') {
          let redirectUrl = window.location.origin + '/#/';
          let url = `http://dev-app.easyliao.com/auth-sso/oauth/web/login/view?redirectUri=${redirectUrl}&welcomeMessage=欢迎来到易聊短信&pageTitle=易聊短信&appId=40001`;
          window.location.href = url;
          return;
        }
        window.location.href = envOption.env.VUE_APP_LOGIN_URL;
      }
    },
    getUserName() {
      if (/^[\u4e00-\u9fa5]+$/i.test(this.userName)) {
       return this.userName.substr(-1, 1);
      }
      return this.userName.substr(0, 1);
    },
  },
};
</script>
<style lang="scss" scoped>
.header {
  position: relative;
  box-sizing: border-box;
  height: 66px;
  font-size: 22px;
  color: #fff;
  .name {
    width: 32px;
    height: 32px;
    background: #409eff;
    border-radius: 50%;
  }
  .el-menu-item {
    height: 66px;
    line-height: 66px;
    &.is-active {
      // @include border_color("border_color1");
      // @include font_color("font_color3");
      background: rgba(255, 255, 255, 0.15) !important;
    }
  }

  &-logo {
    text-align: center;
    .logo {
      width: 118px;
      height: 37px;
    }
  }

  /*菜单*/
  .el-menu {
    background: $color;
    &-item {
      min-width: 100px;

      &.is-active {
        border: none !important;
        &::before {
          content: '';
          display: inline-block;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: $color-befor;
        }
      }
      &:hover {
        @extend .is-active;
      }
    }
    &.el-menu--horizontal {
      border-bottom: none;
    }
  }

  &-fullscreen {
    cursor: pointer;
    font-size: 24px;
  }

  &-user-name {
    margin-left: 10px;
    display: flex;
    height: 60px;
    align-items: center;
    span {
      // @include font_color("font_color1");
    }
    .el-dropdown-link {
      color: #fff;
      cursor: pointer;
    }
    .el-dropdown-menu__item {
      text-align: center;
    }
  }
}
</style>
