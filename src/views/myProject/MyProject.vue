<template>
  <div class="myProject">
    <ul>
      <li v-for="project in myProjectList" :key="project._id">{{project.projectName}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { userService } from '../../service/user-service';

@Component
export default class MyProject extends Vue {
  ruleForm = {
    username: '',
    password: ''
  };
  myProject = 'myProject11'
  myProjectList = []

  created() {
    this.getProjectList()
  }

  getProjectList () {
    userService.getProjectList()
      .then((res: any) => {
        console.log(res)
        this.myProjectList = res.projectList
      });
  }
  submitForm() {
    if (
      this.ruleForm.username.length > 4 &&
      this.ruleForm.password.length > 4
    ) {
      console.log(this.ruleForm);
      userService
        .login(this.ruleForm.username, this.ruleForm.password)
        .then((res: any) => {
          console.log(res);
          this.$router.push('/home')
        });
    }
  }
  resetForm() {}
}
</script>

<style lang="scss" scoped>
.myProject {
  width: 100%;
  height: 100%;
}
</style>
