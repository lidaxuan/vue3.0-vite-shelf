<template>
    <div>
        <el-button v-for="(item, index) in elButton" :key="index" type="text" class="el-btn-sty"  :class="{actived:item.selected}"
                   @click="elBtgnClick(item)">{{item.text}}</el-button>

    </div>
</template>

<script>
    export default {
      name: "radio-select-button",
      props:{
        elButton:Array
      },
      methods: {
        elBtgnClick(item){
          this.$emit("elBtgnClick",item);
          // this.elButton.forEach((item)=>{
          //     item.selected=false
          // })
          // item.selected=true

        }
      }
    };
</script>

<style lang="scss" scoped>
    .el-btn-sty{
        color:#000;
    }
    .actived{
        color: white;
        background: #279af2;
        border-radius: 3px;
        padding: 5px;
    }

</style>