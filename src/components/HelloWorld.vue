<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button type="primary" @click="testString(num)">button</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Provide } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  @Provide() public num: number = 10;

  testString(s: string) {
    console.log(s);
  }

  created() {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
