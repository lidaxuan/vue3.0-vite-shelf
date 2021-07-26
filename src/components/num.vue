<!--
 * @Description: 
 * @Author: 李继玄（15201002062@163.com）
 * @Date: 2021-05-29 21:38:57
 * @FilePath: /my-vue-app/src/components/num.vue
-->
<template>
  <div class="num">
    这是子组件
    <div class="center" v-if="isShow">
      <h2><slot>my model</slot></h2>
      <button @click="btnclose">close</button>
      {{blogTitle}}
      <div blog-title="A Perfect Vue"></div>
    </div>

    <div class="inject">{{foo}}</div>
  </div>
</template>
 
<script>
import { defineComponent, h } from 'vue';

export default defineComponent({
  props: {
    isShow: Boolean,
    blogTitle: {
      type: String,
      required: true
    }
  },
  
  
  inject: { // 
    foo: {
      // from: 'bar',
      default: 'Mr.li'
    }
  },
  emits: {
    'my-close': null,
  },
  setup(props, context) {
    const btnclose = () => {
      context.emit('my-close', '这是子组件传出来的数据');
    };
    // watchEffect(() => {
    //   console.log(`name is: ` + props.isShow)
    // });
    return {
      btnclose,
    };
  },
});
</script>
 
<style lang="scss" scoped>
 .num {
   background-color: pink;
    .center {
      background-color: antiquewhite;
    }
    .inject {
      background-color: skyblue;
    }
 }
</style>