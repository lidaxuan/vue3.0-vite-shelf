<!--
 * @Description: 
 * @Author: 李继玄（15201002062@163.com）
 * @Date: 2021-06-01 17:32:18
 * @FilePath: /ucenter-messageflat-web-view/src/pages/test/filters.vue
-->

<template>
  <div class="mixins">
    全局的方法
    <br />
    {{ $filters.currencyUSD(name) }}
  </div>
</template>

<script>
import { defineProps, reactive, ref } from 'vue';
// import  from '';
import mixins from '../../mixins/testmixins';
export default {
  name: 'app',
  components: {},
  mixins: [mixins],
  data() {
    return {
      sendmsg: {
        path: '/sendMsg',
      },
      name: '111',
      form: {
        a: 1,
        b: 2,
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
  created() {
    // console.log(this.$data);
  },
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
