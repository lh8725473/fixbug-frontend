<template>
  <div class="">
    MHeader
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue, Watch } from 'vue-property-decorator';
import { Mutation, State } from 'vuex-class';

@Component
export default class MHeader extends Vue {

  @State('author') public stateAuthor: string;

  @Mutation('SET_AUTHOR') public mutationAuthor: any;

  @Watch('data')
  public onDataChanged(val: string, oldVal: string) {
  }

  @Emit('reset')
  public onReset(n: number) {
  }

  public created() {

  }

  public mounted() {

  }

}
</script>

<style scoped>

</style>
