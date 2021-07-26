<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <p>
      <a href="https://vitejs.dev/guide/features.html" target="_blank">
        Vite Documentation
      </a>
      |
      <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
    </p>

    <button @click="state.count++">count is: {{ state.count }}</button>
    <div @click="state.form.num++">
      state.form.num
      <span class="form-num">{{ state.form.num }}</span>
    </div>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>

  </div>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String
})



const state = reactive({ count: 0,form: {
  num: 1
} })
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
