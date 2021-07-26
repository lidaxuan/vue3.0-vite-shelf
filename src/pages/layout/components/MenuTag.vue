<!--
 * @Author: web.王佳豪
 * @Date: 2020-12-23 21:05:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-05-26 15:06:25
 * @Description: file content
-->
<template>
  <div class="menuTag">
    <el-breadcrumb v-if="levelList.length" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="(item,index) in levelList" :key="index">
        <a @click.prevent="handleLink(item)" :class="index == levelList.length-1 ? 'c666' : 'color999'" font="14">{{ item.name ? item.name : '' }}</a>
        <!-- <span v-if="item.redirect==='noRedirect'||index==levelList.length-1" class="no-redirect">{{ item.meta.title }}</span>
        <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a> -->
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
import * as pathToRegexp from 'path-to-regexp';
import breadConfig from '@/router/breadConfig';
import _ from 'lodash';

export default {
  name: "MenuTag",
  data(){
    return {
      levelList: []
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  },
  created() {
    this.getBreadcrumb();
  },
  methods: {
    getBreadcrumb() {
      this.levelList = [];
      let path = this.$route.path;
      let pathArr = _.compact(path.split('/'));
      pathArr.forEach(item => {
        if (breadConfig[item]) {
          this.levelList.push(breadConfig[item]);
        }
      });
    },
    isIndex(route) {
      const name = route && route.name;
      if (!name) {
        return false;
      }
      return name === '首页';
    },
    handleLink(item) {
      const { path } = item;
      if (path) {
        this.$router.push(path);
        return;
      }
      this.$router.push(this.pathCompile(path));
    },
    pathCompile(path) {
      const { params } = this.$route;
      let toPath = pathToRegexp.compile(path);
      return toPath(params);
    },
  },
};
</script>
<style>
.el-breadcrumb__inner.is-link {
  font-weight: normal;
  color: #999;
}
</style>
<style lang="scss" scoped>
.menuTag {
  box-shadow: 0 0px 4px 0 rgba(35, 51, 83, 0.2);
  background: #fff;
  top: 61px;

  .el-breadcrumb {
    padding: 21px 20px 20px 8px;
  }

  a {
    font-weight: normal;
  }
  
}
</style>
