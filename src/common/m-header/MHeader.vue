<template>
  <div class="m-header">
    <div class="m-header-left">
      <h1>fix-bug</h1>
    </div>
    <div class="m-header-right">
      <el-button type="primary" @click="doOut">退出登录</el-button>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { userService } from '@/service/user-service';

  @Component
  export default class MHeader extends Vue {

    doOut() {
      userService.logout();
      this.$router.push({
        path: '/login'
      });
    }

  }
</script>

<style scoped lang="scss">
  .m-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100%;
    align-items: center;
  }
</style>
