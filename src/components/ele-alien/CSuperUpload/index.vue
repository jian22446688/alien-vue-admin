<!--
 * @Description: 超强文件上传
 * @Author: Cary
 * @Date: 2019-10-17 16:45:59
 -->
<template>
  <div>
    <el-dialog
      :title="title"
      :visible.sync="dialogVisible"
      width="800px"
      :destroy-on-close="true"
      :before-close="handleDialogBeforeClose"
      :close-on-click-modal="false"
      custom-class="cc-my-uploaddialog"
      @close="handleDialogClose">
      <div class="cc-my-upload">
        <el-upload
          ref="myUpload"
          drag
          :action="option.action"
          list-type="picture"
          :headers="option.headers"
          :multiple="option.multiple"
          :data="option.data"
          :name="option.name"
          :disabled="option.disabled"
          :auto-upload="option.autoUpload"
          :with-credentials="option.withCredentials"
          :accept="option.accept"
          :limit="option.limit"
          :file-list="fileList"
          :on-change="handleFileChange"
          :on-preview="handleFilePreview"
          :on-remove="handleFileRemove"
          :on-progress="handleFileProgress"
          :on-success="handleFileSuccess"
          :on-error="handleFileError"
          :on-exceed="handleFileExceed"
          :before-upload="handleFileBeforeUpload">
          <div>
            <i class="el-icon-upload"/>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          </div>
        </el-upload>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button
          v-if="!option.autoUpload"
          type="success"
          @click="handleFileBtnUpload">上 传</el-button>
        <el-button
          @click="handleDialogCancel">取 消</el-button>
        <el-button
          type="primary"
          @click="handleDialogConfirm">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      :title="ptitle"
      :visible.sync="dialogVisiblea"
      width="1000px"
      :destroy-on-close="true"
      :modal="false"
      custom-class="cc-my-uploaddialog">
      <div class="cc-my-upload-preview">
        <img v-if="dialogVisiblea" :src="previewImage" alt="">
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisiblea = false">关 闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    value: { type: Boolean, default: false },
    title: { type: String, default: '上传文件' },
    ptitle: { type: String, default: '预览' },
    option: {
      type: Object,
      default: () => {
        return {
          name: 'file',
          action: '',
          withCredentials: false,
          multiple: true,
          autoUpload: true
        }
      }
    }
  },
  data() {
    return {
      dialogVisible: true,
      dialogVisiblea: false,
      previewImage: '',
      fileList: [
        // {
        //   name: 'foodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfood.jpeg',
        //   url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        // },
        // {
        //   name: 'food2.jpeg',
        //   url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        // }
      ]
    }
  },
  watch: {
    value(val) {
      this.fileList = []
      this.dialogVisible = val
    }
  },
  methods: {
    // dialog
    handleDialogBeforeClose(done) {
      this._confirmAlret('是否关闭?', () => {
        done()
      })
    },
    handleDialogClose() {
      this.$emit('input', this.dialogVisible)
    },
    // uploadfile
    handleFilePreview(file) {
      console.log(file)
      if (!this._check_is_img(file.name)) {
        this.$message.warning('只能预览图片!')
        return
      }
      this.dialogVisiblea = true
      this.previewImage = file.url
    },
    handleFileRemove(file, fileList) {
      this.fileList = fileList
    },
    handleFileProgress(event, file, fileList) {},
    handleFileSuccess(response, file, fileList) {
      this.fileList = fileList
    },
    handleFileChange(file, fileList) {
      let ulOver = this.$el.getElementsByClassName('el-upload-list')[0]
      this.$nextTick(() => {
        if (ulOver) ulOver.scrollTop = ulOver.scrollHeight
      })
    },
    handleFileError(err, file, fileList) {
      console.error(err)
      if (file && file.name) {
        this.$message.warning('上传 ' + file.name + ' 失败')
      }
    },
    handleFileBeforeUpload(event, file, fileList) {
      console.log('BeforeUpload', file)
    },
    handleFileExceed(file, filList) {},
    handleFileBtnUpload() {
      this.$refs.myUpload.submit()
    },
    handleDialogConfirm() {
      if (this.fileList && this.fileList.length < 1) {
        this._confirmAlret('文件列表为空, 是否确定?', () => {
          this.$emit('on-files', this.fileList)
          this.dialogVisible = false
        })
      } else {
        this.$emit('on-files', this.fileList)
        this.dialogVisible = false
      }
    },
    handleDialogCancel() {
      this._confirmAlret('是否关闭?', () => {
        this.dialogVisible = false
      })
    },
    _confirmAlret(title = '是否关闭?', callback = () => {}) {
      this.$confirm(title, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(callback).catch(() => {})
    },
    _check_is_img(url) {
      return (url.match(/\.(jpeg|jpg|gif|png)$/) !== null)
    }
  }
}

</script>
<style lang='scss'>
  .cc-my-uploaddialog {
    .el-dialog__body {
      padding: 10px 20px;
    }
  }
  .cc-my-upload-preview {
    text-align: center;
    max-height: 600px;
    img {
      height: 100%;
    }
  }
  .cc-my-upload {
    .el-upload {
      display: block;
    }
    .el-upload-dragger {
      width: 100%;
      height: 130px;
      .el-icon-upload {
        margin-top: 20px
      }
    }
    .el-upload-list {
      max-height: 300px;
      min-height: 160px;
      overflow-y: auto;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content:space-between;
      &__item-thumbnail {
        font-size: 70px;
        font-family: 'element-icons' !important;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        vertical-align: baseline;
        display: inline-block;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      &__item-thumbnail:before {
        content: "\e78b";
      }
      &__item {
        width: calc(50% - 5px);
        margin-right: 4px;
      }
    }
    .el-upload-list::-webkit-scrollbar {/*滚动条整体样式*/
      width: 7px;     /*高宽分别对应横竖滚动条的尺寸*/
      height: 7px;
    }
    .el-upload-list::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
      border-radius: 8px;
      background-color: rgba(144,147,153,.0);
    }
    .el-upload-list:hover::-webkit-scrollbar-thumb {/*滚动条整体样式*/
        background-color: rgba(144,147,153,.3);
      }
    .el-upload-list:hover::-webkit-scrollbar-thumb:hover {/*滚动条里面小方块*/
      border-radius: 10px;
      background-color: rgba(144,147,153,.5);
    }

  }
</style>
