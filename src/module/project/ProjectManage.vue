<template>
  <div class="project-manage">
    <div class="inline-page">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="所有项目" name="first">
          <all-project v-if="activeName === 'first'"></all-project>
        </el-tab-pane>
        <el-tab-pane label="新增项目" name="second">
          <add-project v-if="activeName === 'second'"></add-project>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import AllProject from '@/module/project/AllProject.vue';
  import AddProject from '@/module/project/AddProject.vue';

  @Component({
    components: {
      AllProject,
      AddProject
    }
  })
  export default class ProjectManage extends Vue {

    activeName = 'first';

    handleClick() {
      console.log(this.activeName);
    }

  }
</script>

<style scoped lang="scss">
  .project-manage {
    height: 100%;

    .inline-page {
      height: 100%;
    }
  }
</style>
