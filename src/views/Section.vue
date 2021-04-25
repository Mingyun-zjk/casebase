<template>
  <div class="Section">
    
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
   
    
  </div>
</template>
<script>
export default {
  name: "Section",
  mounted() {},
  data() {
    
    return {
      
    };
  },
  methods: {
    
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