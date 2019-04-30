<template>
  <div class="myProject">
    <ul>
      <li v-for="project in myProjectList" :key="project._id">{{project.projectName}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class MyProject extends Vue {
    ruleForm = {
      username: '',
      password: ''
    };
    myProject = 'myProject11';
    myProjectList = [];

    created() {
      // this.getProjectList();
    }

    // getProjectList () {
    //   userService.getProjectList()
    //     .then((res: any) => {
    //       console.log(res);
    //       this.myProjectList = res.projectList;
    //     });
    // }
    resetForm() {
    }
  }
</script>

<style lang="scss" scoped>
  .myProject {
    width: 100%;
    height: 100%;
  }
</style>
