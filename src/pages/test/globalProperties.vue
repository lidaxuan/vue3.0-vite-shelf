<!--
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-06-08 20:51:20
 * @FilePath: /my-vue-app/src/pages/test/globalProperties.vue
-->
<template>
  <div class="">
    globalProperties
    控制台
    <br>
    {{ipt2}}
    <input type="text">
    <input type="text" v-model="ipt2">
  </div>
</template>

<script>
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: '', // Pascal命名
  mixins: [],
  components: {
    
  },
  props: {},
  //import引入的组件需要注入到对象中才能使用
  //这里存放数据
  data() {
    return {
      ipt2: ''
    };
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
    this.$http(1);
    this.$http(15);
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