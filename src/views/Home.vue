<template>
  <div class="Home">
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
          <el-button class="highLevel" type="text" size="medium"
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
            <el-menu-item index="4"
              ><a href="#" target="_blank">案例写作</a></el-menu-item
            >
          </el-menu>
          <div style="line-height: 61px">
            <el-button
              size="medium"
              type="text"
              style="color: #fff; margin: 0 20px"
              icon="el-icon-user"
              @click="loginHandle"
              >登录</el-button
            >
            <el-button size="medium" @click="registerHandle" plain>注册</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="block">
        <el-carousel height="392px"
          ><!-- height="150px" -->
          <el-carousel-item>
            <img src="../assets/images/banner1.jpg" alt="" />
          </el-carousel-item>
          <el-carousel-item>
            <img src="../assets/images/banner2.png" alt="" />
          </el-carousel-item>
          <el-carousel-item>
            <img src="../assets/images/banner3.png" alt="" />
          </el-carousel-item>
          <el-carousel-item>
            <img src="../assets/images/banner4.jpg" alt="" />
          </el-carousel-item>
          <el-carousel-item>
            <img src="../assets/images/banner5.png" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="bgCover">
        <div
          class="centerMain"
          style="padding:15px;0;display:flex;justify-content:space-around;"
        >
          <div class="littleImg">
            <a href="#"><img src="../assets/images/bottomPic1.png" alt="" /></a>
          </div>
          <div class="littleImg">
            <a href="#"><img src="../assets/images/bottomPic2.png" alt="" /></a>
          </div>
          <div class="littleImg">
            <a href="#"><img src="../assets/images/bottomPic3.png" alt="" /></a>
          </div>
        </div>
      </div>
      <div
        class="centerMain"
        style="display: flex; justify-content: space-between; margin-top: 80px"
      >
        <div style="width: 370px; height: 192px">
          <div style="width: 26%">
            <span class="littleTitle">最新案例</span>
          </div>
          <div style="height: 3px"></div>
          <div class="lineDesc"></div>
          <div class="content" style="line-height: 30px">
            <div
              style="font-size: 16px; display: flex"
              v-for="item in 5"
              :key="item"
            >
              <div style="width: 19%">公共管理</div>
              <div style="width: 81%">
                <a href="#" class="anliDesc"
                  >“方便”如何能方便？——以甘肃省武威市凉州区农村“厕所革命”为例
                </a>
              </div>
            </div>
          </div>
        </div>
        <div style="width: 370px; height: 192px">
          <div style="width: 26%">
            <span class="littleTitle">最新案例</span>
          </div>
          <div style="height: 3px"></div>
          <div class="lineDesc"></div>
          <div class="content" style="line-height: 30px">
            <div
              style="font-size: 16px; display: flex"
              v-for="item in 5"
              :key="item"
            >
              <div style="width: 19%">公共管理</div>
              <div style="width: 81%">
                <a href="#" class="anliDesc"
                  >“方便”如何能方便？——以甘肃省武威市凉州区农村“厕所革命”为例
                </a>
              </div>
            </div>
          </div>
        </div>
        <div style="width: 370px; height: 192px">
          <div style="width: 26%">
            <span class="littleTitle">最新案例</span>
          </div>
          <div style="height: 3px"></div>
          <div class="lineDesc"></div>
          <div class="content" style="line-height: 30px">
            <div
              style="font-size: 16px; display: flex"
              v-for="item in 5"
              :key="item"
            >
              <div style="width: 19%">公共管理</div>
              <div style="width: 81%">
                <a href="#" class="anliDesc"
                  >“方便”如何能方便？——以甘肃省武威市凉州区农村“厕所革命”为例
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div
        class="centerMain"
        style="padding-top: 50px; display: flex; justify-content: space-around"
      >
        <div style="width: 490px; display: flex">
          <div style="width: 33%">
            <a href="#" class="bottomTitle">关于我们</a>
          </div>
          <div style="width: 33%">
            <a href="#" class="bottomTitle">系统介绍</a>
          </div>
          <div style="width: 33%">
            <a href="#" class="bottomTitle">免费申明</a>
          </div>
        </div>
        <div style="width: 280px">
          <div class="bottomTitle">联系我们</div>
          <div class="bottomSay">北京华图新天科技有限公司</div>
          <div class="bottomSay">电话：010-85583080/85583081</div>
          <div class="bottomSay">邮箱：service@htxt.com.cn</div>
          <div class="bottomSay">地址：北京市通州区西集镇国防路43号A座257</div>
        </div>
      </div>
      <div
        class="centerMain"
        style="border-bottom: 3px solid #fff; margin-top: 30px"
      ></div>
    </div>
    <el-dialog center title="欢迎登录" width="30%" :visible.sync="dialogLoginVisible">

  <el-form :model="loginForm" size="small" :rules="loginRules" ref="loginForm">
    <el-form-item label="用户名" prop="userName"  :label-width="formLabelWidth">
      <el-input clearable v-model="loginForm.userName" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password" :label-width="formLabelWidth">
      <el-input clearable v-model="loginForm.password" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>

  <div slot="footer"  class="dialog-footer">
    <el-button size="small" @click="cancelClick">取 消</el-button>
    <el-button size="small" type="primary" @click="sureClick('loginForm')">确 定</el-button>
  </div>
</el-dialog>
<el-dialog center title="欢迎注册" width="30%" :visible.sync="dialogRegisterVisible">
  <el-tabs v-model="activeName"  @tab-click="tabClick">
    <el-tab-pane label="学生注册" name="student">

      <el-form :rules="rules" :model="registerStudentForm" :label-width="formLabelWidth" size="small" ref="ruleForm">
        <el-form-item label="用户名" prop="userName" >
          <el-input clearable v-model="registerStudentForm.userName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass" >
          <el-input  :show-password="true" maxlength="18" type="password" v-model="registerStudentForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass" >
          <el-input  :show-password="true" maxlength="18" type="password"  v-model="registerStudentForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
         <el-form-item >
    <el-button size="small" @click="studentResetForm('ruleForm')">重 置</el-button>
    <el-button size="small" type="primary" @click="studentSubmitForm('ruleForm')" >提 交</el-button>
  </el-form-item>
      </el-form>
     
    </el-tab-pane>
    <el-tab-pane label="教师注册" name="teacher">

        <el-form :rules="rules1" :model="registerTeacherForm" :label-width="formLabelWidth" size="small" ref="ruleForm1">
        <el-form-item label="用户名" prop="userName" >
          <el-input clearable v-model="registerTeacherForm.userName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass" >
          <el-input  :show-password="true" maxlength="18" type="password" v-model="registerTeacherForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass" >
          <el-input  :show-password="true" maxlength="18" type="password"  v-model="registerTeacherForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item  >
    <el-button size="small" @click="teacherResetForm('ruleForm1')">重 置</el-button>
    <el-button size="small" type="primary" @click="teacherSubmitForm('ruleForm1')" >提 交</el-button>
  </el-form-item>
      </el-form>

    </el-tab-pane>
    
  </el-tabs>
  
</el-dialog>
  </div>
</template>
<script>
export default {
  name: "Home",
  mounted() {},
  data() {
    var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.registerStudentForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.registerStudentForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
var validatePass4 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.registerTeacherForm.checkPass !== '') {
            this.$refs.ruleForm1.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass6 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.registerTeacherForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
      searchValue: "",
      activeIndex: "1",
      dialogLoginVisible: false,
      dialogRegisterVisible: false,
      formLabelWidth: '80px',
      loginForm: {
        userName: "",
        password: ""
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
      activeName: 'student',
      
      rules: {
        userName: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          pass: [
            {required: true, validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { required: true,validator: validatePass2, trigger: 'blur' }
          ]
        },
         rules1: {
        userName: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          pass: [
            {required: true, validator: validatePass4, trigger: 'blur' }
          ],
          checkPass: [
            { required: true,validator: validatePass6, trigger: 'blur' }
          ]
        },
        loginRules: {
          userName: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur' }
          ],
        }
    };
  },
  methods: {
    loginHandle() {
      this.loginForm.userName = ''
      this.loginForm.password = ''
      this.dialogLoginVisible = true;
    },
    registerHandle() {
      this.dialogRegisterVisible = true;
      this.registerStudentForm.userName = ''
        this.registerStudentForm.pass = ''
        this.registerStudentForm.checkPass = ''
        this.registerTeacherForm.userName = ''
        this.registerTeacherForm.pass = ''
        this.registerTeacherForm.checkPass = ''
    },
    searchBtn() {
      console.log(this.searchValue);
    },
    sureClick(formName) {
      console.log(this.loginForm.userName);
      console.log(this.loginForm.password);
      this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    tabClick(tab, event) {
        console.log(tab,event);
        this.registerStudentForm.userName = ''
        this.registerStudentForm.pass = ''
        this.registerStudentForm.checkPass = ''
        this.registerTeacherForm.userName = ''
        this.registerTeacherForm.userName = ''
        this.registerTeacherForm.userName = ''
      },
    studentSubmitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    teacherSubmitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    studentResetForm() {
        this.registerStudentForm.userName = ''
        this.registerStudentForm.pass = ''
        this.registerStudentForm.checkPass = ''
        
    } ,
    teacherResetForm() {
      this.registerTeacherForm.userName = ''
        this.registerTeacherForm.pass = ''
        this.registerTeacherForm.checkPass = ''
    } ,
    cancelClick() {
      this.dialogLoginVisible = false
      this.loginForm.userName = ''
      this.loginForm.password = ''
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
</style>