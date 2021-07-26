<!--
 * @Description: 
 * @Author: 李继玄（15201002062@163.com）
 * @Date: 2021-05-29 20:05:11
 * @FilePath: /ucenter-messageflat-web-view/src/pages/home/home.vue
-->

<template>
  <div class="home hello flex flex-aic flex-column">
    <!-- <ProductList /> -->
    <hr />
    <!-- <ShoppingCart /> -->
    --- --- --- ---
    {{ userInfo }}
    <el-button type="primary">anniu </el-button>
    <el-radio v-model="radio" label="1">备选项</el-radio>
    <el-radio v-model="radio" label="2">备选项</el-radio>
    <div class="dasdas">
      asdad
    </div>
    <div>foo <Foo></Foo></div>
    <div>bar <Bar></Bar></div>
    <router-link :to="sendmsg">子父组件传值</router-link>
    <br />
    <router-link :to="mixins">mixins</router-link>
    <br />
    <router-link :to="filters">filters</router-link>
    <br />
    <router-link :to="globalProperties">globalProperties</router-link>
    <br />
    <router-link :to="{ path: '/inject' }">inject</router-link>
    <br />
    <router-link :to="{ path: '/nextTickApi' }">nextTickApi</router-link>
    <br />
    <router-link :to="{ path: '/attribute' }">Attribute</router-link>
    <br />
    <router-link :to="{ path: '/key' }">key</router-link>
    <br />
    <router-link :to="{ path: '/temp' }">temp</router-link>
    <br />
  </div>
</template>

<script >
import { defineProps, reactive, ref } from 'vue';
import Num from '../../components/num.vue';
import Foo from '../test/foo.vue';
import Bar from '../test/bar.vue';
import DB from '@lijixuan/dblist';
import ProductList from './ProductList.vue';
import ShoppingCart from './ShoppingCart.vue';
import { mapState, mapActions } from 'vuex';
import env from '@/env';
import { getConfigInfo } from '@/model/autoCreateGroup';

export default {
  name: 'app',
  components: { ProductList, ShoppingCart, Foo, Bar },
  data() {
    return {
      sendmsg: {
        path: '/sendMsg',
      },
      mixins: {
        path: '/mixins',
      },
      filters: {
        path: '/filters',
      },
      globalProperties: {
        path: '/globalProperties',
      },
      radio: '1',
    };
  },
  // 不变的
  provide() {
    return {
      foo: this.blogTitle,
    };
  },

  setup() {},
  created() {
    this.$store.dispatch('user/setSex', '男');
    setTimeout(() => {
      this.setSex('女');
    }, 3000);
    // this.getdata();
  },
  computed: mapState({
    userInfo: (state) => {
      return state.user.userInfo;
    },
  }),
  methods: {
    ...mapActions('user', ['setSex']),

    async getdata() {
      const res = await getConfigInfo();
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  margin: 0 auto;
  text-align: center;
  .dasdas {
    background: $color-ddd;
  }
}
</style>
