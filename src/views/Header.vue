<template>
  <div class="Header">
    <div class="header">
      <div class="centerMain">
        <div class="search">
          <el-input
            clearable
            style="width: 400px"
            v-model="searchValue"
            placeholder="请输入内容"
          >
            <i
              slot="prefix"
              @click="searchBtn"
              class="el-input__icon el-icon-search"
            ></i
          ></el-input>
          <el-button
            class="highLevel"
            @click="highSearchVisible = true"
            type="text"
            size="medium"
            >高级检索</el-button
          >
        </div>
        <div class="headerLittle2">
          <el-menu
            style="width: 60%"
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="rgb(77, 67, 152)"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="1">首页</el-menu-item>
            <el-submenu index="2">
              <template slot="title">数据库导航</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
              <!-- <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu> -->
            </el-submenu>
            <el-menu-item index="3">案例教学</el-menu-item>
            <el-menu-item index="4"><a href="#">案例写作</a></el-menu-item>
            <el-menu-item index="5">联系我们</el-menu-item>
            <!-- target="_blank" -->
          </el-menu>
          <div style="line-height: 61px">
            <span v-if="loginSuccessful" class="loginSuccess">欢迎您：</span>
            <el-popover
              v-if="loginSuccessful"
              title=""
              width="120"
              trigger="click"
              content=""
            >
              <el-button size="small" type="primary" @click="userChangeBtn"
                >用户修改</el-button
              >
              <el-button size="small" type="warning" @click="cancellation"
                >注销</el-button
              >
              <el-button
                style="color: #fff; font-size: 16px; margin-right: 20px"
                type="text"
                slot="reference"
                >{{ userName }}</el-button
              >
            </el-popover>
            <el-button
              v-if="!loginSuccessful"
              size="medium"
              type="text"
              style="color: #fff; margin: 0 20px"
              icon="el-icon-user"
              @click="loginHandle"
              >登录</el-button
            >
            <el-button size="medium" @click="registerHandle" plain
              >注册</el-button
            >
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      center
      title="欢迎登录"
      width="30%"
      :visible.sync="dialogLoginVisible"
    >
      <el-form
        :model="loginForm"
        size="small"
        :rules="loginRules"
        ref="loginForm"
      >
        <el-form-item
          label="用户名"
          prop="userName"
          :label-width="formLabelWidth"
        >
          <el-input
            clearable
            v-model="loginForm.userName"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="password"
          :label-width="formLabelWidth"
        >
          <el-input
            show-password
            clearable
            v-model="loginForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button size="small" @click="cancelClick">取 消</el-button>
        <el-button size="small" type="primary" @click="sureClick('loginForm')"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <el-dialog
      center
      title="欢迎注册"
      width="30%"
      :visible.sync="dialogRegisterVisible"
    >
      <el-tabs v-model="activeName" @tab-click="tabClick">
        <el-tab-pane label="学生注册" name="student">
          <el-form
            :rules="rules"
            :model="registerStudentForm"
            :label-width="formLabelWidth"
            size="small"
            ref="ruleForm"
          >
            <el-form-item label="用户名" prop="userName">
              <el-input
                clearable
                v-model="registerStudentForm.userName"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input
                :show-password="true"
                maxlength="18"
                type="password"
                v-model="registerStudentForm.pass"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input
                :show-password="true"
                maxlength="18"
                type="password"
                v-model="registerStudentForm.checkPass"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button size="small" @click="studentResetForm('ruleForm')"
                >重 置</el-button
              >
              <el-button
                size="small"
                type="primary"
                @click="studentSubmitForm('ruleForm')"
                >提 交</el-button
              >
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="教师注册" name="teacher">
          <el-form
            :rules="rules1"
            :model="registerTeacherForm"
            :label-width="formLabelWidth"
            size="small"
            ref="ruleForm1"
          >
            <el-form-item label="用户名" prop="userName">
              <el-input
                clearable
                v-model="registerTeacherForm.userName"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input
                :show-password="true"
                maxlength="18"
                type="password"
                v-model="registerTeacherForm.pass"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input
                :show-password="true"
                maxlength="18"
                type="password"
                v-model="registerTeacherForm.checkPass"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button size="small" @click="teacherResetForm('ruleForm1')"
                >重 置</el-button
              >
              <el-button
                size="small"
                type="primary"
                @click="teacherSubmitForm('ruleForm1')"
                >提 交</el-button
              >
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </el-dialog>

    <el-dialog
      width="30%"
      title="输入检索条件："
      :visible.sync="highSearchVisible"
    >
      <el-form :model="highSearchForm" size="small">
        <el-form-item label="标题" :label-width="formLabelWidth">
          <el-input
            v-model="highSearchForm.title"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="作者" :label-width="formLabelWidth">
          <el-input
            v-model="highSearchForm.author"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="关键字" :label-width="formLabelWidth">
          <el-input
            v-model="highSearchForm.keyWords"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="日期" :label-width="formLabelWidth">
          <el-date-picker
            v-model="highSearchForm.date"
            type="daterange"
            value-format="yyyyMMdd"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button
          size="small"
          icon="el-icon-search"
          type="primary"
          @click="highSearchHandle"
          >搜 索</el-button
        >
        <el-button size="small" type="primary" @click="resetHighSearchForm"
          >重 置</el-button
        >
      </div>
    </el-dialog>
    <el-dialog
      center
      title="用户修改"
      width="30%"
      :visible.sync="userChangeDialogVisible"
    >
      <el-form :model="changeUserForm" size="small">
        <el-form-item label="旧密码" :label-width="formLabelWidth">
          <el-input
            clearable
            show-password
            v-model="changeUserForm.oldPass"
            autocomplete="off"
            @change="isOriginalPass"
          ></el-input>
        </el-form-item>
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input
            :disabled="true"
            clearable
            v-model="changeUserForm.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="新密码" :label-width="formLabelWidth">
          <el-input
            clearable
            show-password
            v-model="changeUserForm.newPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="small" @click="userChangeDialogVisible = false"
          >取 消</el-button
        >
        <el-button size="small" type="primary" @click="userChangeHandle"
          >确定修改</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Header",
  mounted() {},
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.registerStudentForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerStudentForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var validatePass4 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.registerTeacherForm.checkPass !== "") {
          this.$refs.ruleForm1.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass6 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerTeacherForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      userName: "", // 登录成功右侧的用户名
      authtype: "",
      loginSuccessful: false,

      userChangeDialogVisible: false,
      changeUserForm: {
        username: "",
        oldPass: "",
        newPass: "",
      },

      searchValue: "",
      activeIndex: "1",
      dialogLoginVisible: false,
      dialogRegisterVisible: false,
      formLabelWidth: "80px",
      loginForm: {
        userName: "",
        password: "",
      },
      registerStudentForm: {
        userName: "",
        pass: "",
        checkPass: "",
      },
      registerTeacherForm: {
        userName: "",
        pass: "",
        checkPass: "",
      },
      activeName: "student",
      highSearchVisible: false,
      highSearchForm: {
        title: "",
        author: "",
        keyWords: "",
        date: "",
      },
      rules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        pass: [{ required: true, validator: validatePass, trigger: "blur" }],
        checkPass: [
          { required: true, validator: validatePass2, trigger: "blur" },
        ],
      },
      rules1: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        pass: [{ required: true, validator: validatePass4, trigger: "blur" }],
        checkPass: [
          { required: true, validator: validatePass6, trigger: "blur" },
        ],
      },
      loginRules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    userChangeBtn() {
      this.userChangeDialogVisible = true;
      this.changeUserForm.username = this.userName;
    },
    isOriginalPass() {
      axios({
        method: "post",
        url: "/user/check",
        data: {
          username: this.userName,
          password: this.changeUserForm.oldPass,
        },
      })
        .then((res) => {
          console.log(res);
          if (res.data == false) {
            this.$message({
              showClose: true,
              message: "请输入原始密码",
              type: "error",
            });
            this.changeUserForm.oldPass = "";
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    userChangeHandle() {
      console.log("确认修改，去掉接口");
      if (!(this.changeUserForm.oldPass == "")) {
        axios({
          method: "post",
          url: "/user/update",
          data: {
            username: this.userName,
            password: this.changeUserForm.newPass,
          },
        })
          .then((res) => {
            console.log(res);
            if (res.data == 1) {
              this.$message({
                showClose: true,
                message: "恭喜您修改成功",
                type: "success",
              });
              this.userChangeDialogVisible = false;
            } else {
              this.$message({
                showClose: true,
                message: "信息修改失败，请重新输入密码",
                type: "error",
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        this.$message({
          showClose: true,
          message: "您只有输入正确原始密码，才可以修改",
          type: "error",
        });
      }
    },
    highSearchHandle() {
      console.log(this.highSearchForm);
    },
    cancellation() {
      this.loginSuccessful = false;
      this.authtype = "";
    },
    resetHighSearchForm() {
      this.highSearchForm.title = "";
      this.highSearchForm.author = "";
      this.highSearchForm.keyWords = "";
      this.highSearchForm.date = "";
    },
    loginHandle() {
      this.loginForm.userName = "";
      this.loginForm.password = "";
      this.dialogLoginVisible = true;
      if (this.$refs["loginForm"]) {
        this.$refs["loginForm"].resetFields();
      }
    },
    registerHandle() {
      this.registerStudentForm.userName = "";
      this.registerStudentForm.pass = "";
      this.registerStudentForm.checkPass = "";
      this.registerTeacherForm.userName = "";
      this.registerTeacherForm.pass = "";
      this.registerTeacherForm.checkPass = "";

      if (this.$refs["ruleForm"]) {
        this.$refs["ruleForm"].resetFields();
      }
      if (this.$refs["ruleForm1"]) {
        this.$refs["ruleForm1"].resetFields();
      }

      this.dialogRegisterVisible = true;
      this.activeName = "student";
    },
    searchBtn() {
      console.log(this.searchValue);
    },
    sureClick(formName) {
      console.log(this.loginForm.userName);
      console.log(this.loginForm.password);
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // console.log( this.loginForm.userName);
          // console.log( this.loginForm.password);
          axios({
            method: "post",
            url: "/user/login",
            data: {
              username: this.loginForm.userName,
              password: this.loginForm.password,
            },
          })
            .then((res) => {
              console.log(res);
              if (res.data.status == 0) {
                this.$message({
                  showClose: true,
                  message: "恭喜您登录成功",
                  type: "success",
                });
                this.dialogLoginVisible = false;
                this.loginSuccessful = true;
                this.userName = this.loginForm.userName;
                this.authtype = res.data.obj[0].authtype;
                console.log(this.authtype);
              } else {
                this.$message({
                  showClose: true,
                  message: "登录失败",
                  type: "error",
                });
              }
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      if (key == "3") {
        this.$router.push("/test");
      }
      if (key == "1") {
        this.$router.push("/");
      }
      if (key == "5") {
        this.$router.push("/contactUs");
      }
    },
    tabClick(tab, event) {
      console.log(tab, event);
      this.registerStudentForm.userName = "";
      this.registerStudentForm.pass = "";
      this.registerStudentForm.checkPass = "";
      this.registerTeacherForm.userName = "";
      this.registerTeacherForm.userName = "";
      this.registerTeacherForm.userName = "";
    },
    studentSubmitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 发送 POST 请求
          console.log(this.registerStudentForm.userName);
          console.log(this.registerStudentForm.pass);
          axios({
            method: "post",
            url: "/user/regist",
            data: {
              username: this.registerStudentForm.userName,
              password: this.registerStudentForm.pass,
              authtype: "0",
            },
          })
            .then((res) => {
              // console.log('res',res);
              if (res.status == 200) {
                if ((res.data == 1)) {
                  this.$message({
                    showClose: true,
                    message: "恭喜您注册成功",
                    type: "success",
                  });
                  this.dialogRegisterVisible = false;
                } else if ((res.data == 0)) {
                  this.$message({
                    showClose: true,
                    message: "该用户名重复，注册失败，请重新输入用户名",
                    type: "error",
                  });
                }
              } else {
                this.$message({
                  showClose: true,
                  message: "接口调用失败",
                  type: "error",
                });
              }
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    teacherSubmitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios({
            method: "post",
            url: "/user/regist",
            data: {
              username: this.registerTeacherForm.userName,
              password: this.registerTeacherForm.pass,
              authtype: "1",
            },
          })
            .then((res) => {
              if (res.status == 200) {
                if ((res.data == 1)) {
                  this.$message({
                    showClose: true,
                    message: "恭喜您注册成功",
                    type: "success",
                  });
                  this.dialogRegisterVisible = false;
                } else if ((res.data == 0)) {
                  this.$message({
                    showClose: true,
                    message: "该用户名重复，注册失败，请重新输入用户名",
                    type: "error",
                  });
                }
              } else {
                this.$message({
                  showClose: true,
                  message: "接口调用失败",
                  type: "error",
                });
              }
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    studentResetForm(formName) {
      this.registerStudentForm.userName = "";
      this.registerStudentForm.pass = "";
      this.registerStudentForm.checkPass = "";
      this.$refs[formName].resetFields();
    },
    teacherResetForm(formName) {
      this.registerTeacherForm.userName = "";
      this.registerTeacherForm.pass = "";
      this.registerTeacherForm.checkPass = "";
      this.$refs[formName].resetFields();
    },
    cancelClick() {
      this.dialogLoginVisible = false;
      this.loginForm.userName = "";
      this.loginForm.password = "";
    },
    switchUserHandle() {
      console.log("切换用户");
    },
  },
};
</script>
<style scoped>
.header {
  width: 100%;
  height: 130px;
  background-color: rgb(77, 67, 152);
  padding-top: 30px;
}
.centerMain {
  width: 1200px;
  margin: 0 auto;
}
.search {
  display: flex;
  justify-content: center;
}
.section {
  width: 100%;
}
.bgCover {
  width: 100%;
  height: 150px;
  background-image: url("../assets/images/bgPic1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
a {
  text-decoration: none;
  color: #337ab7;
}
.footer {
  width: 100%;
  height: 270px;
  background-image: url("../assets/images/botterBgPic.png");
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 10px;
}
.highLevel {
  color: #fff;
  margin-left: 40px;
}
.headerLittle2 {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}
.block img {
  width: 100%;
  height: 100%;
}
.littleImg {
  width: 320px;
  height: 186px;
  padding: 0px 40px;
}
.littleImg img {
  width: 100%;
  height: 100%;
}
.littleTitle {
  font-weight: 600;
  text-align: center;
  font-size: 16px;
}
.lineDesc {
  width: 26%;
  border-bottom: 4px solid rgb(103, 31, 163);
  margin-bottom: 10px;
}
.anliDesc {
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.bottomSay {
  font-size: 12px;
  font-weight: 100;
  color: #fff;
  padding-top: 3px;
}
.bottomTitle {
  font-size: 12px;
  font-weight: 600;
  color: #fff;
}

>>> .el-date-editor.el-range-editor.el-input__inner.el-date-editor--daterange.el-range-editor--small {
  width: 100%;
}
.loginSuccess {
  /* margin-right: 20px; */
  font-size: 16px;
  color: #fff;
  user-select: none;
}
</style>