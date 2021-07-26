<!--
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-07-23 14:33:18
 * @FilePath: /ucenter-messageflat-web-view/src/pages/layout/index.vue
-->

<template>
  <div class="layout hmax flex flex-column">
    <NavBar />
    <div class="content wmax flex">
      <SideBar @collapse="collapse"/>
      <div class="container f0-bg flex-item hmax flex flex-column">
        <MenuTag />
        <div class="scroll-box pt12 pl15 pr15 pb12 flex-item" v-cloak>
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from './components/SideBar';
import NavBar from './components/NavBar';
import MenuTag from './components/MenuTag';

export default {
  name: 'layout',
  components: { NavBar, SideBar, MenuTag },
  props: {
    msg: String,
  },
  data() {
    return {
      width: '',
      isMainPageShow: true,
      select: true,
      elButton: [
        { id: '1', cls: 'activ', text: '近 七 天', selected: false },
        { id: '2', cls: 'activ', text: '近 十 五', selected: false },
        { id: '3', cls: 'activ', text: '近 30 天', selected: false },
      ],
    };
  },
  computed: {},
  watch: {
    '$store.getters.isMainPage': {
      handler(n, o) {
        if (n == this.isMainPageShow) {
          return;
        }
        this.isMainPageShow = n;
      },
      immediate: true,
    },
  },
  methods: {
    collapse(v) {
      this.width = v;
    },
    elBtgnClick(item) {
      this.elButton.forEach((item) => {
        item.selected = false;
      });
      item.selected = true;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$white: #fff;

.content {
  height: calc(100% - 66px) !important;
  .side-box {
    height: 100% !important;
  }
  .scroll-box {
    overflow: auto;
    & > div {
      height: 100%;
    }
  }
  .container {
    height: 100%;
    overflow: auto;
  }
}

.layout {
  .el-header {
    // @include background_color("background_color1");
  }
  .yl_min {
    // position: absolute;

    .el-aside {
      // position: relative;
      // @include background_color("background_color4");
      overflow: auto;
      .el-menu {
        border: none;
      }
    }
  }
}
</style>
