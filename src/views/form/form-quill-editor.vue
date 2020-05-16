<!--
 * @Description: 可复制网页内容
 * @Author: Cary
 * @Date: 2019-12-09 11:01:24
 * @FilePath: \alien-docsf:\vue-project\alien-vue-admin\src\views\form\form-quill-editor.vue
 -->
<template>
  <div class="app-container">
    <el-card>
      <h3 class="cc-mar-t-2">可复制网页内容</h3>
      <div>可复制网页内容</div>
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
            style="height: 300px; border: 1px solid #DCDFE6"
            @blur="onEditorBlur"
            @focus="onEditorFocus"
            @ready="onEditorReady"/>
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
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme
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
        theme: 'bubble',
        placeholder: '可以复制,网页中内容到这里',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'font': [] }],
            [{ 'align': [] }],
            ['link', 'image'],
            ['clean']
          ]
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
