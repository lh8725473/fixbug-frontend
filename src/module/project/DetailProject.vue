<template>
  <div class="detail-project">
    <div v-if="currentProject" class="inline">
      <el-row>
        <el-col :span="6">
          项目简介
          {{currentProject.projectName}}
        </el-col>
        <el-col :span="6">
          项目成员
          添加成员 + 删除成员
        </el-col>
        <el-col :span="6">
          项目文档
        </el-col>
        <el-col :span="6">
          BUG记录
          总条数 + 已修复 + 新增bug
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          bug列表
        </el-col>
        <el-col :span="18">
          bug详情
        </el-col>
      </el-row>
    </div>
    <div v-else class="inline">
      <h1>暂无数据</h1>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { Getter } from 'vuex-class';
  import { Project } from '@/types/Project';

  @Component
  export default class DetailProject extends Vue {
    @Getter('project') currentProject: Project;
    $route: any;

    created() {
      if (this.currentProject) {
        console.log(this.currentProject);
      } else {
        console.log(false);
      }
    }

    mounted() {

    }

    private changeDetail() {
      // httpService.get('/project/' + this.currentProject.id).then((res: any) => {
      //   console.log(res);
      // });
    }

  }
</script>

<style scoped lang="scss">
  .detail-project {
    height: 100%;
    width: 100%;
    display: flex;

    .inline {
      height: 100%;
      width: 100%;
    }
  }
</style>
