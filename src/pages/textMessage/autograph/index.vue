<!--
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-07-26 16:14:50
 * @FilePath: /ucenter-messageflat-web-view/src/pages/textMessage/autograph/index.vue
-->
<template>
  <div class="">1</div>
</template>

<script>
//例如：import 《组件名称》 from '《组件路径》';
import { getConfigInfo } from '@/model/autoCreateGroup';
import { defineProps, reactive, ref, nextTick } from 'vue';
export default {
  name: '', // Pascal命名
  mixins: [],
  props: {},
  //import引入的组件需要注入到对象中才能使用
  components: {},
  //监控data中的数据变化
  watch: {
  // 对象写法
  // temObj: {
  //   handler(newVal, oldVal) {
  //   },
  //   deep: true, // 深度
  //   immediate: true, // 立即执行
  // },
  },
  //监听属性 类似于data概念
  computed: {},
  //这里存放数据
  data() {
    return {
      
    };
  },
  provide()  {  // 发送
    return {
      foo: 'lidaxuan', // 发送名
    }
  },
  inject: { // 接收
    foo: { // 接收名
      default: 'Mr.li' // 默认值
    }
  },
 setup(props, context) {
   const age = ref(18);
   function plusOne() {
     // todo 想改变值或获取值 必须.value
     age.value++;
   }
  const btnclose = () => {
    context.emit('my-close', '往外传 lidaxuan');
  };
   return { // 必须返回 模板中才能使用 template
     age,
     plusOne,
     btnclose,
   };
  },
  emits: {
    'my-close': null,
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  beforeCreate() {}, //生命周期 - 创建之前
  created() {
    // this.getdata();
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  beforeMount() {}, //生命周期 - 挂载之前
  mounted() {},
  //方法集合
  methods: {
    async getdata() {
      const res = await getConfigInfo();
    },
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeUnmount() {}, //生命周期 - 销毁之前 beforeDestroy
  unmounted() {}, //生命周期 - 已卸载 destroyed
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类

</style>