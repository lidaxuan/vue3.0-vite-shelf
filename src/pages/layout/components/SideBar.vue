<!--
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-04-14 09:59:49
 * @FilePath: /ucenter-messageflat-web-view/src/pages/layout/components/SideBar.vue
-->
<template>
  <div class="SideBar flex flex-column" :style="`width:${isCollapse ? '65px' : '200px !important;'};`">
    <el-menu
      :key="menuKey"
      class="wmax flex-item el-menu-vertical-demo"
      background-color="#282943"
      text-color="#fff"
      :router="true"
      :default-active="`${defaultActive}`"
      :collapse="isCollapse"
      :collapse-transition="false"
    >
      <template v-for="(menu, index) in menuChildren" :key="index">
        <!-- <div v-if="menu.readonly" :key="menu.id" class="readonly flex flex-aic ml25 pb15" :class="index == 0 ? 'pt30' : 'pt25'" font="12" style="color: #999">
          {{ menu.name }}
        </div> -->
        <el-menu-item v-if="!menu.readonly" :index="getMenuIndex(`${menu.path}`)" :disabled="menu.disabled">
          <i class="el-icon-menu ml20 mr5"></i>
          <el-tooltip v-if="sideBarConfig.tooltip" class="item" :effect="sideBarConfig.effect" :content="menu.name" placement="right">
            <span slot="title" class="menu-name ellipsis w150">{{ menu.name }}</span>
          </el-tooltip>
          <span v-else slot="title" class="menu-name ellipsis w150">{{ menu.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>

    <div class="coll-icon flex flex-aic flex-ccc pointer" @click="collapseChage">
      <IconFont :size="10" :type="isCollapse ? 'icon-zhankai' : 'icon-shouqi'"></IconFont>
    </div>
  </div>
</template>
<script>
import _ from 'lodash';
import uuid from 'uuid';
import { mapState, mapActions, useStore } from 'vuex';
export default {
  name: 'AsideNav',
  components: {},
  data() {
    return {
      isCollapse: false,
      defaultActive: '',
      menuKey: uuid(),
      // menuChildren: [],
    };
  },
  watch: {
    $route: {
      handler(locat) {
        this.menuKey = uuid();
        let path = locat.path || '';
        path = path.replace('#', '');
        let arr = path.split('/');
        if (arr.length >= 3) {
          path = [arr[0], arr[1], arr[2]].join('/');
        }
        this.defaultActive = this.getMenuIndex(path);
      },
      deep: true, // 深度
      immediate: true, // 立即执行
    },
  },
  inject: {
    sideBarConfig: {
      from: 'sideBarConfig',
    },
  },
  computed: {
    ...mapState({
      menuChildren: (state) => {
        return [].concat(state.navMenu.menuChildren || []);
      },
    }),
  },
  created() {},
  methods: {
    // 侧边栏折叠
    collapseChage() {
      this.isCollapse = Boolean(!this.isCollapse);
    },
    getMenuIndex(path) {
      return _.last(path.split('/'));
    },
  },
};
</script>

<style lang='scss' scoped>
.SideBar {
  position: relative;
  transition: all 0.5s;
  overflow: hidden;
  .el-menu {
    overflow: auto;
    height: 100%;
    background: #282943 !important;
    &-item {
      height: 56px;
      display: flex;
      align-items: center;
      padding-left: 0 !important;
      padding-right: 0 !important;
      &:hover {
        background: none;
      }
    }
    &-item.is-active {
      background: #3c3e5f !important;
      position: relative;
      color: #fff;
      &::before {
        content: '';
        display: inline-block;
        position: absolute;
        left: 0;
        top: 0;
        width: 3px;
        height: 100%;
        background: $color-befor;
      }
    }
    &-item:hover {
      @extend .is-active;
    }

    .readonly {
      cursor: default;
      color: rgb(75, 73, 73);
    }
    .is-disabled.bbb {
      cursor: not-allowed;
      color: #000;
      background: #000 !important;
    }
  }
  .coll-icon {
    position: absolute;
    right: 0;
    top: 50%;
    width: 14px;
    height: 68px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px 0px 0px 10px;
    transform: translate(0, -50%);
    transition: all 0.1s;
    & > i {
      position: absolute;
    }
  }
}
</style>