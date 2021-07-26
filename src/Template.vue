<!--
 * @Description: 
 * @Author: 李继玄（15201002062@163.com）
 * @Date: 2021-05-30 20:47:45
 * @FilePath: /ucenter-messageflat-web-view/src/Template.vue
-->

<template>
  <div class=""></div>
</template>

<script >
import { defineProps, reactive, ref } from 'vue';
// import  from '';

export default {
  name: 'app',
  components: {},
  data() {
    return {
      sendmsg: {
        path: '/sendMsg',
      },
    };
  },
  // 不变的
  provide() {
    return {
      foo: this.blogTitle,
    };
  },
  inject: {
    xxxxxxxxxx: {
      // from: 'bar',
      default: 'foo',
    },
  },
  setup() {
    const age = ref(18);
    function plusOne() {
      age.value++; //想改变值或获取值 必须.value
    }
    return {
      //必须返回 模板中才能使用
      age,
      plusOne,
    };
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
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
    },
  },
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
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
