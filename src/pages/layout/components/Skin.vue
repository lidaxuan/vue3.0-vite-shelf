<!--
 * @Author: web.王佳豪
 * @Date: 2020-12-25 17:39:43
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-06-17 14:08:56
 * @Description: file content
-->
<template>
  <el-dialog title="换肤" width="450px" :visible.sync="isShow">
    <div class="dialog-mine">
      <ul>
        <li v-for="(item,key,index) in skin" :class="{active:item.ifAdd==skinIndex}" @click="addClassFun(item.ifAdd)" :key="index">
          <img :src="item.img" alt="" srcset="" /><br /><span>{{
            item.name
          }}</span>
        </li>
      </ul>
    </div>
    <div class="dialog-footer">
      <el-button @click="cancel()">取消</el-button>
      <el-button type="primary" @click="saveSkin()">保存</el-button>
    </div>
  </el-dialog>
</template>

<script>
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: "skin",
  props: ["visible"],
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      skinIndex: "black",
      skin: [
        {
          img: require("../../assets/images/public/bg-black.png"),
          name: "月夜黑",
          ifAdd: "black"
        },
        {
          img: require("../../assets/images/public/bg-blue.png"),
          name: "极光蓝",
          ifAdd: "blue" 
        },
        {
          img: require("../../assets/images/public/bg-white.png"),
          name: "零度白",
          ifAdd: "white"
        },
      ],
    };
  },
  //监听属性 类似于data概念
  computed: {
    isShow: {
      get() {
        return this.visible;
      },
      set() {
        this.$emit("update:visible", false);
      },
    },
    
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    addClassFun: function (index) {
      this.skinIndex = index;
    },
    saveSkin: function(){
      window.localStorage.setItem("skin",this.skinIndex);
      window.document.documentElement.setAttribute( "data-theme", localStorage.getItem('skin'));
      this.$store.dispatch("setSkin", this.skinIndex);
      this.isShow = false;
    },
    cancel: function(){
      this.isShow = false;
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    let getSkin = window.localStorage.getItem("skin");
    this.skinIndex = getSkin != undefined ? getSkin : "black";
    // console.log(this.skinIndex);
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
.el-dialog__body {
  padding: 0 !important;
}
.dialog-mine {
  padding: 30px 29px;
  ul {
    overflow: auto;
    li {
      float: left;
      margin-right: 23px;
      height: 100px;
      text-align: center;
      color: #666666;
      font-size: 12px;
      cursor: pointer;
      span {
        margin-top: 6px;
        display: inline-block;
      }
    }
    .active {
      position: relative;
      img{
        border: 3px solid #279AF2;
      }
    }
    li:last-child {
      margin: 0;
    }
  }
}
.dialog-footer {
  text-align: center;
  background: #f3f9ff;
  padding: 14px 0;
}
</style>