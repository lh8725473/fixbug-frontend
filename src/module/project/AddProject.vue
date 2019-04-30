<template>
  <div class="add-project">
    <el-row>
      <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="100px"
               class="demo-ruleForm">
        <el-form-item label="项目名称" prop="pass">
          <el-input type="text" v-model="ruleForm.projectName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="项目描述" prop="pass">
          <el-input type="text" v-model="ruleForm.projectDec" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">提交</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </el-row>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { httpService } from '@/service/http-service';

  @Component
  export default class AddProject extends Vue {

    ruleForm = {
      projectName: '',
      projectDec: ''
    };

    created() {

    }

    submitForm() {
      if (this.ruleForm.projectName.length > 1 && this.ruleForm.projectDec.length > 1) {
        this.addProject();
      } else {
        this.$message({
          type: 'error',
          message: '项目名称或描述不合法'
        });
      }
    }

    resetForm() {

    }

    private addProject() {
      httpService.post('/project/add', this.ruleForm).then((res: any) => {
        if (res.code === 1) {
          this.$message({
            type: 'success',
            message: '新增成功'
          });
        }
      });
    }

  }
</script>

<style scoped>

</style>
