<!--
 * @Description: 
 * @Author: 李继玄（15201002062@163.com）
 * @Date: 2021-05-30 20:47:45
 * @FilePath: /my-vue-app/src/pages/test/sendMsg.vue
-->
<!--
 * @Description: 
 * @Author: 李继玄（15201002062@163.com）
 * @Date: 2021-05-29 20:05:11
 * @FilePath: /my-vue-app/src/pages/home/home.vue
-->
<template>
  <div class="hello">
    
    <router-link :to="sendmsg">字符组件传值</router-link>

    <h1>{{ msg }}</h1>
    name {{ name }}

    <button @click="countPush">count is: {{ count }}</button>

    <div @click="form.num++">
      form.num
      <span class="form-num">{{ form.num }}</span>
    </div>
    子组件传出的值:::::: {{compEmitText}}
    <hr>

    <button @click="compShowClick">按钮切换 子组件显示 {{compShow}}</button>
    <Num @my-close="compClose"  :isShow="compShow" :blogTitle="blogTitle"></Num>
  </div>
</template>

<script >
import { defineProps, reactive, ref, nextTick } from 'vue';
import Num from '../../components/num.vue';

export default {
  name: 'app',
  components: { Num },
  data() {
    return {
      sendmsg: {
        path: '/sendMsg'
      },
      name: '北京',
      count: 0,
      form: {
        num: 1
      },
      msg: 'vue3.0 这是啥呀',
      compShow: false,
      compEmitText: '',
      blogTitle: '我叫李大玄'
    };
  },
  // 不变的
  provide()  {  // 发送
    return {
      // foo: 'lidaxuan', // 发送名
    }
  },
  // inject: { // 接收
  //   foo: { // 接收名
  //     default: 'foo' // 默认值
  //   }
  // },
  inject: {
    'xxxxxxxxxx': {
      // from: 'bar',
      default: 'foo'
    }
  },
  setup() {
    const age = ref(18);
    function plusOne() {
      age.value++; //想改变值或获取值 必须.value
    }
    return { //必须返回 模板中才能使用
      age,
      plusOne,
    };
  },
  methods: {
    compClose(val) {
      this.compEmitText = val;
    },
    compShowClick() {
      this.compShow = !this.compShow;
    },
    countPush() {
      this.count++; //想改变值或获取值 必须.value

      this.blogTitle = `${this.blogTitle}+${this.count}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.hello {
  a {
    color: #42b983;
  }
  .form-num {
    color: #42b983;
    font-size: 40px;
  }
}
</style>
