<!--
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-06-09 11:09:36
 * @FilePath: /ucenter-messageflat-web-view/src/pages/test/nextTickApi.vue
-->

<template>
  <div class="">
    nextTick --------- 在 Vue 3 中，必须显式导入：
    <div ref="divBox"></div>
  </div>
</template>

<script>
//例如：import 《组件名称》 from '《组件路径》';
import { nextTick } from "Vue";

export default {
  name: 'NextTickApi', // Pascal命名
  mixins: [],
  components: {},
  props: {},
  //import引入的组件需要注入到对象中才能使用
  //这里存放数据
  data() {
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    // 对象写法
    // temObj: {
    //   handler(newVal, oldVal) {
    //   },
    //   deep: true, // 深度
    //   immediate: true, // 立即执行
    // },
    // temStr(val) {
    // },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  beforeCreate() {}, //生命周期 - 创建之前
  created() {
    
    nextTick(() => {
      // console.log(this.$refs.divBox);
    })
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  beforeMount() {}, //生命周期 - 挂载之前
  mounted() {},
  //方法集合
  methods: {},
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>