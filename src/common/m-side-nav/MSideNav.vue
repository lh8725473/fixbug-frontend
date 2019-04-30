<template>
  <div class="side-nav">
    <el-row>
      <el-col :span="24">
        <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            default-active="2"
            text-color="#fff"
        >
          <el-menu-item index="1" @click="navTo('/home/project')">
            <i class="el-icon-menu"></i>
            <span slot="title">项目管理</span>
          </el-menu-item>
          <el-menu-item index="2" @click="navTo('/home/bugs')">
            <i class="el-icon-s-marketing"></i>
            <span slot="title">Bug管理</span>
          </el-menu-item>
          <el-menu-item index="4" @click="navTo('/home/userinfo')">
            <i class="el-icon-s-custom"></i>
            <span slot="title">个人资料</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class MSideNav extends Vue {
    navTo(p: string) {
      this.$router.push({
        path: p
      });
    }
  }
</script>

<style lang="scss" scoped>
  .side-nav {
    width: 100%;
    height: 100%;
  }
</style>
