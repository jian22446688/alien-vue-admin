<!--
 * @Description: 富文本编辑
 * @Author: Cary
 * @Date: 2019-12-09 11:01:24
 * @FilePath: \alien-docsf:\vue-project\alien-vue-admin\src\views\form\form-quill-editor-conent.vue
 -->
<template>
  <div class="app-container">
    <el-card>
      <h3 class="cc-mar-t-2">富文本编辑</h3>
      <div>富文本编辑</div>
    </el-card>
    <el-card class="cc-mar-t-10">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="活动名称">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai" />
            <el-option label="区域二" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间">
          <quill-editor
            ref="myQuillEditor"
            v-model="form.content"
            :options="editorOption"
            style="height: 300px; margin-bottom: 50px"
            @blur="onEditorBlur"
            @focus="onEditorFocus"
            @ready="onEditorReady">
            <!-- 自定义toolar -->
            <div id="toolbar" slot="toolbar">
              <!-- Add a bold button -->
              <button class="ql-bold" title="加粗">Bold</button>
              <button class="ql-italic" title="斜体">Italic</button>
              <button class="ql-underline" title="下划线">underline</button>
              <button class="ql-strike" title="删除线">strike</button>
              <button class="ql-blockquote" title="引用"/>
              <button class="ql-code-block" title="代码"/>
              <button class="ql-header" value="1" title="标题1"/>
              <button class="ql-header" value="2" title="标题2"/>
              <!--Add list -->
              <button class="ql-list" value="ordered" title="有序列表"/>
              <button class="ql-list" value="bullet" title="无序列表"/>
              <!-- Add font size dropdown -->
              <select class="ql-header" title="段落格式">
                <option selected>段落</option>
                <option value="1">标题1</option>
                <option value="2">标题2</option>
                <option value="3">标题3</option>
                <option value="4">标题4</option>
                <option value="5">标题5</option>
                <option value="6">标题6</option>
              </select>
              <select class="ql-size" title="字体大小">
                <option value="10px">10px</option>
                <option value="12px">12px</option>
                <option value="14px">14px</option>
                <option value="16px" selected>16px</option>
                <option value="18px">18px</option>
                <option value="20px">20px</option>
              </select>
              <select class="ql-font" title="字体">
                <option value="SimSun">宋体</option>
                <option value="SimHei">黑体</option>
                <option value="Microsoft-YaHei">微软雅黑</option>
                <option value="KaiTi">楷体</option>
                <option value="FangSong">仿宋</option>
                <option value="Arial">Arial</option>
              </select>
              <!-- Add subscript and superscript buttons -->
              <select class="ql-color" value="color" title="字体颜色"/>
              <select class="ql-background" value="background" title="背景颜色"/>
              <select class="ql-align" value="align" title="对齐"/>
              <button class="ql-clean" title="还原"/>
              <!-- You can also add your own -->
            </div>
          </quill-editor>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
// Git 地址
// https://github.com/surmon-china/vue-quill-editor#readme
import { quillEditor, Quill } from 'vue-quill-editor'
import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme
// 引入font.css
import '@/assets/css/quill-editor-font.css'
// 自定义字体大小
let Size = Quill.import('attributors/style/size')
Size.whitelist = ['10px', '12px', '14px', '16px', '18px', '20px']
Quill.register(Size, true)
// 自定义字体类型
var fonts = ['SimSun', 'SimHei', 'Microsoft-YaHei', 'KaiTi', 'FangSong', 'Arial', 'Times-New-Roman', 'sans-serif',
  '宋体', '黑体'
]
var Font = Quill.import('formats/font')
Font.whitelist = fonts
Quill.register(Font, true)
export default {
  name: 'QuillEditor',
  components: {
    quillEditor
  },
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        content: ''
      },
      editorOption: {
        placeholder: '请输入',
        theme: 'snow', // or 'bubble'
        modules: {
          toolbar: {
            container: '#toolbar'
          }
        }
      }
    }
  },
  computed: {},
  mounted() {},
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    onEditorBlur(quill) {
      console.log('editor blur!', quill)
    },
    onEditorFocus(quill) {
      console.log('editor focus!', quill)
    },
    onEditorReady(quill) {
      console.log('editor ready!', quill)
    },
    onEditorChange({ quill, html, text }) {
      console.log('editor change!', quill, html, text)
      this.content = html
    }
  }
}

</script>
<style lang='scss' scoped>
// .c-form-base-container {
//   width: 650px;
//   margin: 0 auto;
// }
.c-quilleditor {
  height: 500px;
  border: 1px solid #DCDFE6;
  border-radius: 2px;
}
</style>
