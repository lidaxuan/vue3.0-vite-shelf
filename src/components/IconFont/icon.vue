<!--
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-07-26 09:23:16
 * @FilePath: /ucenter-messageflat-web-view/src/components/IconFont/icon.vue
-->

<template>
  <i class="icon-font colorf7" :class="type" :font="size" @click="onClick">
    <template v-if="type">
      <!-- <i v-html="type"></i> -->
      <svg aria-hidden="true" :fill="fill" :data-fill="fill" class="svg" v-html="html"></svg>
    </template>
  </i>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
    },
    size: {
      type: Number,
      default() {
        return 26;
      },
    },
    fill: {
      type: String,
      default() {
        return '#fff'
      }
    }
  },
  computed: {
    html() {
      return `<use xlink:href="#${this.type}"></use>`;
    },
  },
  methods: {
    onClick($event) {
      this.$emit('click', $event);
    },
  },
};
</script>

<style lang="scss" scoped>
.icon-font {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  & > svg {
    width: 1em;
    height: 1em;
    margin: 0;
    padding: 0;
  }
  svg:last-of-type {
    fill: attr(data-fill);
  }
}
</style>
