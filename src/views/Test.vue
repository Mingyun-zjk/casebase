<template>
  <div class="test wrapper">
    <el-upload
      class="upload-demo"
      action="/file/upload"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      multiple
      :show-file-list='false'
      list-type="text"
      :limit="3"
      :on-exceed="handleExceed"
      :on-success='successUpload'
      :file-list="fileList"
      accept='.doc,.docx,.pdf,.jpg,.png,.ppt,.pptx'
      :before-upload="beforeAvatarUpload"
    >
      <el-button size="small" type="primary">上传案例</el-button>
      <div slot="tip" class="el-upload__tip">
        可以上传jpg/png/doc/docx/ppt/pptx/pdf文件，且不超过50M
      </div>
    </el-upload>
    <el-table :data="tableData" style="width: 100%; margin-top: 20px">
      <el-table-column label="日期">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="标题" width="380" prop="name"> </el-table-column>
      <el-table-column label="文件类型" prop="name"> </el-table-column>
      <el-table-column label="文件上传人" prop="name"> </el-table-column>
      <el-table-column label="下载量" prop="name"> </el-table-column>
      <el-table-column label="操作" width="220">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            style="margin-right: 10px"
            @click="handleEdit(scope.$index, scope.row)"
            >下载</el-button
          >
          <el-popconfirm
            title="确定删除此案例吗?"
            @confirm="handleDelete(scope.$index, scope.row)"
          >
            <el-button slot="reference" size="mini" type="danger"
              >删除</el-button
            >
          </el-popconfirm>
          <el-button
            size="mini"
            type="primary"
            style="margin-left: 10px"
            @click="comment(scope.$index, scope.row)"
            >评论</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      style="float: right"
      class="pager"
      @current-change="handleCurrentChange"
      :current-page.sync="page"
      :page-size="size"
      layout="total, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
    <!-- https://jsonplaceholder.typicode.com/posts/ -->
    
  </div>
</template>
<script>
// import axios from 'axios'
export default {
  name: "test",
  mounted() {},
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      page: 1,
      size: 15,
      total: 0,
      fileList: [],
    };
  },
  methods: {
    successUpload(response, file, fileList) {
      console.log(response);
      console.log(file);
      console.log(fileList);
      console.log('上传成功');
      this.$message({
                  showClose: true,
                  message: "上传成功",
                  type: "success",
                });
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleCurrentChange(val) {
      this.page = val;
      this.search();
    },

    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    beforeRemove(file, fileList) {
      console.log(file, fileList);
      return this.$confirm(`确定移除 ${file.name}？`);
    },

    beforeAvatarUpload(file) {
      var testmsg = file.name.substring(file.name.lastIndexOf(".") + 1);
      const extension =
        testmsg === "doc" ||
        testmsg === "docx" ||
        testmsg === "png" ||
        testmsg === "jpg" ||
        testmsg === "ppt" ||
        testmsg === "pptx" ||
        testmsg === "pdf" ;
      const isLt50M = file.size / 1024 / 1024 < 50;
      if (!extension) {
        this.$message({
          message: "上传图片只能是docx / doc / pdf格式!",
          type: "error"
        });
        return false; //必须加上return false; 才能阻止
      }
      // console.log(file);
      if (!isLt50M) {
        this.$message({
          message: "上传文件大小不能超过 50MB!",
          type: "error"
        });
        return false;
      }
      return extension || isLt50M;
    }
  },
};
</script>
<style scoped>
.wrapper {
  min-height: 600px;
  width: 1200px;
  margin: 0 auto;
}
.pager {
  font: 1em sans-serif;
}
.upload-demo{
  margin-top: 20px;
}
</style>