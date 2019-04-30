<template>
  <div class="login">
    <div class="warp">
      <el-row :type="'flex'" :justify="'center'">
        <el-col :span="10">
          <el-form
            :model="ruleForm"
            status-icon
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="账号" prop="pass">
              <el-input
                type="text"
                v-model="ruleForm.username"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="checkPass">
              <el-input
                type="password"
                v-model="ruleForm.password"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm">提交</el-button>
              <el-button @click="resetForm">重置</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { userService } from '../../service/user-service';

@Component
export default class Home extends Vue {
  public ruleForm = {
    username: '',
    password: '',
  };
  public submitForm() {
    if (
      this.ruleForm.username.length > 4 &&
      this.ruleForm.password.length > 4
    ) {
      console.log(this.ruleForm);
      userService
        .login(this.ruleForm.username, this.ruleForm.password)
        .then((res: any) => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.$router.push('/home');
        });
    }
  }
  public resetForm() {}
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  .warp {
    width: 100%;
  }
}
</style>
