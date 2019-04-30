<template>
  <div class="all-project">
    <div>
      <el-row>
        <el-col :span="5" style="margin: 15px" v-for="(item, index) in projectList" :key="index">
          <el-card :body-style="{ padding: '0px' }">
            <img
                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                class="image"
                @click="navToDetail(item)">
            <div style="padding: 14px;">
              <span class="title">项目名称：{{item.projectName}}</span>
              <div class="bottom clearfix">
                <time class="time">更新时间：{{ item.updatedTime }}</time>
                <el-button type="text" class="button" @click="navToDetail(item)">查看</el-button>
                <el-button type="text" class="button" @click="deleteItem(item)">删除</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { httpService } from '@/service/http-service';
  import { dateFormat } from '@/utils/utils';
  import { Project } from '@/types/Project';
  import { Mutation } from 'vuex-class';
  import { ProjectMutation } from '@/store/types';

  @Component
  export default class AppProject extends Vue {

    currentDate = new Date();
    projectList: Project[] = [];

    @Mutation('SET_PROJECT') projectMutation: ProjectMutation;

    deleteItem(data: any) {
      // httpService.post('/project/' + data._id).then((res: any) => {
      //
      // });
    }

    navToDetail(data: any) {
      localStorage.setItem('project', JSON.stringify(data));
      this.projectMutation(new Project(data));
      this.$router.push({
        path: '/home/detail',
        query: {
          id: data._id
        }
      });
    }

    created() {
      this.getProjects();
    }

    private getProjects() {
      httpService.get('/project/list').then((res: any) => {
        res.projectList.forEach((el: any) => {
          el.createdTime = dateFormat(new Date(el.createdTime));
          el.updatedTime = dateFormat(new Date(el.updatedTime));
        });
        this.projectList = res.projectList;
      });
    }
  }
</script>

<style scoped lang="scss">
  .time {
    font-size: 13px;
    color: #999;
  }

  .title {
    font-size: 16px;
    font-weight: bold;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
    margin: 0 5px;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
