<template>
  <div class="Footer">
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
  </div>
</template>
<script>
export default {
  name: "Footer",
  mounted() {},
  data() {
    return {};
  },
  methods: {},
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