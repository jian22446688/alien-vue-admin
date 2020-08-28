<!--
 * @Description: 文件及简介
 * @Author: Cary
 * @Date: 2019-12-13 09:42:18
 * @FilePath: \alien-docsf:\vue-project\alien-vue-admin\src\views\aline-commponent\c-super-tool-v2.vue
 -->
<template>
  <div class="app-container">
    <el-card class="cc-mar-b-10">
      <div>
        工具栏: 封装的工具栏可以配合表格组件使用
        <el-link
          type="primary"
          target="_blank"
          href="http://cccary.gitee.io/alien-docs/alien-commponent/CSuperTool.html">
          组件文档
        </el-link>
      </div>
    </el-card>
    <el-card class="cc-mar-b-10">
      <el-button type="primary" @click="handleShow">显示</el-button>
      <el-button type="danger" @click="handleHide">隐藏</el-button>
    </el-card>
    <el-card class="cc-mar-b-10" header="可显示隐藏">
      <c-super-tool-v2 ref="supertool1" :options="btnOptions">
        <div slot="superTest">
          <el-card />
        </div>
      </c-super-tool-v2>
    </el-card>
    <el-card class="cc-mar-b-10" header="是否显示输入框">
      <div class="cc-clearfix">
        <c-super-tool-v2 ref="supertool" class="cc-f--right" :options="btnOptions1">
          <div slot="superTest">
            <el-card />
          </div>
        </c-super-tool-v2>
        <c-super-tool-v2 ref="supertool" class="cc-f--left" :options="btnOptions2">
          <div slot="superTest">
            <el-card />
          </div>
        </c-super-tool-v2>
      </div>
    </el-card>
    <el-card class="cc-mar-b-10" header="可控制按钮数量">
      <div class="cc-clearfix">
        <c-super-tool-v2 ref="supertool" class="cc-f--left" :btn-count="6" :options="btnOptions3">
          <div slot="superTest">
            <el-card />
          </div>
        </c-super-tool-v2>
        <c-super-tool-v2 ref="supertool" class="cc-f--right" :btn-count="6" :options="btnOptions4">
          <div slot="superTest">
            <el-card />
          </div>
        </c-super-tool-v2>
      </div>
    </el-card>
    <el-card class="cc-mar-b-10" header="带筛选的">
      <c-super-tool-v2 ref="supertool" :options="btnOptions5">
        <div slot="superTest">
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
              <el-col :span="11">
                <el-date-picker v-model="form.date1" type="date" placeholder="选择日期" style="width: 100%;" />
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-time-picker v-model="form.date2" placeholder="选择时间" style="width: 100%;" />
              </el-col>
            </el-form-item>
            <el-form-item label="即时配送">
              <el-switch v-model="form.delivery" />
            </el-form-item>
            <el-form-item label="活动性质">
              <el-checkbox-group v-model="form.type">
                <el-checkbox label="美食/餐厅线上活动" name="type" />
                <el-checkbox label="地推活动" name="type" />
                <el-checkbox label="线下主题活动" name="type" />
                <el-checkbox label="单纯品牌曝光" name="type" />
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="特殊资源">
              <el-radio-group v-model="form.resource">
                <el-radio label="线上品牌商赞助" />
                <el-radio label="线下场地免费" />
              </el-radio-group>
            </el-form-item>
            <el-form-item label="活动形式">
              <el-input v-model="form.desc" type="textarea" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
        </div>
      </c-super-tool-v2>
    </el-card>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      tbtn: null,
      btnOptions: {
        input: {
          placeholder: '请输入手机号'
        },
        btns: [
          {
            name: 'btn_1',
            tip: '删除一条数据',
            eicon: 'el-icon-delete',
            callback: () => {},
            delete: {
              title: '是否删除!'
            }
          },
          {
            name: 'btn_2',
            tip: '设置为可选',
            icon: 'el-icon-s-tools',
            eicon: 'el-icon-s-tools',
            component: 'superTest',
            callback: btn => {
              this.$refs.supertool.setBtnActive(btn)
            }
          },
          {
            name: 'btn_4',
            tip: '编辑一条数据',
            eicon: 'el-icon-edit',
            callback: () => {}
          },
          {
            name: 'btn_5',
            title: '操作一',
            tip: '操作一提示',
            eicon: 'el-icon-star-off',
            callback: () => {}
          },
          {
            name: 'btn_6',
            title: '操作二',
            tip: '操作二提示',
            eicon: 'el-icon-star-off',
            callback: () => {}
          },
          {
            name: 'btn_7',
            title: '操作三',
            tip: '操作三提示',
            eicon: 'el-icon-star-off',
            callback: () => {}
          },
          {
            name: 'btn_8',
            title: '操作四',
            tip: '操作四提示',
            eicon: 'el-icon-star-off',
            callback: () => {}
          },
          {
            name: 'btn_9',
            title: '操作五',
            tip: '操作五提示',
            eicon: 'el-icon-star-off',
            callback: () => {}
          }
        ]
      },
      btnOptions1: {
        input: {
          placeholder: '请输入手机号'
        },
        btns: [
          {
            name: 'btn_1_1',
            tip: '删除一条数据',
            eicon: 'el-icon-delete',
            callback: () => {},
            delete: {
              title: '是否删除!'
            }
          },
          {
            name: 'btn_2_1',
            tip: '设置为可选',
            icon: 'el-icon-s-tools',
            eicon: 'el-icon-s-tools',
            component: 'superTest',
            callback: btn => {
              this.$refs.supertool.setBtnActive(btn)
            }
          },
          {
            name: 'btn_4_1',
            tip: '编辑一条数据',
            eicon: 'el-icon-edit',
            callback: () => {}
          },
          {
            name: 'btn_5_1',
            title: '操作一',
            tip: '操作一提示',
            eicon: 'el-icon-star-off',
            callback: () => {}
          },
          {
            name: 'btn_6_1',
            title: '操作二',
            tip: '操作二提示',
            eicon: 'el-icon-star-off',
            callback: () => {}
          },
          {
            name: 'btn_7_1',
            title: '操作三',
            tip: '操作三提示',
            eicon: 'el-icon-star-off',
            callback: () => {}
          },
          {
            name: 'btn_8_1',
            title: '操作四',
            tip: '操作四提示',
            eicon: 'el-icon-star-off',
            callback: () => {}
          },
          {
            name: 'btn_9_1',
            title: '操作五',
            tip: '操作五提示',
            eicon: 'el-icon-star-off',
            callback: () => {}
          }
        ]
      },
      btnOptions2: {
        input: {
          hidden: true,
          placeholder: '请输入手机号'
        },
        btns: [
          {
            name: 'btn_1_2',
            tip: '删除一条数据',
            eicon: 'el-icon-delete',
            callback: () => {},
            delete: {
              title: '是否删除!'
            }
          },
          {
            name: 'btn_2_2',
            tip: '设置为可选',
            icon: 'el-icon-s-tools',
            eicon: 'el-icon-s-tools',
            component: 'superTest',
            callback: btn => {
              this.$refs.supertool.setBtnActive(btn)
            }
          },
          {
            name: 'btn_4_2',
            tip: '编辑一条数据',
            eicon: 'el-icon-edit',
            callback: () => {}
          },
          {
            name: 'btn_5_2',
            title: '操作一',
            tip: '操作一提示',
            eicon: 'el-icon-star-off',
            callback: () => {}
          },
          {
            name: 'btn_6_2',
            title: '操作二',
            tip: '操作二提示',
            eicon: 'el-icon-star-off',
            callback: () => {}
          },
          {
            name: 'btn_7_2',
            title: '操作三',
            tip: '操作三提示',
            eicon: 'el-icon-star-off',
            callback: () => {}
          },
          {
            name: 'btn_8_2',
            title: '操作四',
            tip: '操作四提示',
            eicon: 'el-icon-star-off',
            callback: () => {}
          },
          {
            name: 'btn_9_2',
            title: '操作五',
            tip: '操作五提示',
            eicon: 'el-icon-star-off',
            callback: () => {}
          }
        ]
      },
      btnOptions3: {
        input: {
          placeholder: '请输入手机号'
        },
        btns: [
          {
            name: 'btn_1_3',
            tip: '删除一条数据',
            eicon: 'el-icon-delete',
            callback: () => {},
            delete: {
              title: '是否删除!'
            }
          },
          {
            name: 'btn_2_3',
            tip: '设置为可选',
            icon: 'el-icon-s-tools',
            eicon: 'el-icon-s-tools',
            component: 'superTest',
            callback: btn => {
              this.$refs.supertool.setBtnActive(btn)
            }
          },
          {
            name: 'btn_4_3',
            type: 'success',
            tip: '编辑一条数据',
            eicon: 'el-icon-edit',
            callback: () => {}
          },
          {
            name: 'btn_5_3',
            title: '操作一',
            type: 'info',
            tip: '操作一提示',
            eicon: 'el-icon-star-off',
            callback: () => {}
          },
          {
            name: 'btn_6_3',
            type: 'warning',
            title: '操作二',
            tip: '操作二提示',
            eicon: 'el-icon-star-off',
            callback: () => {}
          },
          {
            name: 'btn_7_3',
            type: 'danger',
            title: '操作三',
            tip: '操作三提示',
            eicon: 'el-icon-star-off',
            callback: () => {}
          },
          {
            name: 'btn_8_3',
            title: '操作四',
            tip: '操作四提示',
            eicon: 'el-icon-star-off',
            callback: () => {}
          },
          {
            name: 'btn_9_3',
            title: '操作五',
            tip: '操作五提示',
            eicon: 'el-icon-star-off',
            callback: () => {}
          },
          {
            name: 'btn_10_3',
            title: '操作六',
            tip: '操作六提示',
            eicon: 'el-icon-star-off',
            callback: () => {}
          },
          {
            name: 'btn_11_3',
            title: '操作七',
            tip: '操作七提示',
            eicon: 'el-icon-star-off',
            callback: () => {}
          }
        ]
      },
      btnOptions4: {
        input: {
          hidden: true,
          placeholder: '请输入手机号'
        },
        btns: [
          {
            name: 'btn_1_3',
            tip: '删除一条数据',
            eicon: 'el-icon-delete',
            callback: () => {},
            delete: {
              title: '是否删除!'
            }
          },
          {
            name: 'btn_2_3',
            tip: '设置为可选',
            icon: 'el-icon-s-tools',
            eicon: 'el-icon-s-tools',
            component: 'superTest',
            callback: btn => {
              this.$refs.supertool.setBtnActive(btn)
            }
          },
          {
            name: 'btn_4_3',
            type: 'success',
            tip: '编辑一条数据',
            eicon: 'el-icon-edit',
            callback: () => {}
          },
          {
            name: 'btn_5_3',
            title: '操作一',
            type: 'info',
            tip: '操作一提示',
            eicon: 'el-icon-star-off',
            callback: () => {}
          },
          {
            name: 'btn_6_3',
            type: 'warning',
            title: '操作二',
            tip: '操作二提示',
            eicon: 'el-icon-star-off',
            callback: () => {}
          },
          {
            name: 'btn_7_3',
            type: 'danger',
            title: '操作三',
            tip: '操作三提示',
            eicon: 'el-icon-star-off',
            callback: () => {}
          },
          {
            name: 'btn_8_3',
            title: '操作四',
            tip: '操作四提示',
            eicon: 'el-icon-star-off',
            callback: () => {}
          },
          {
            name: 'btn_9_3',
            title: '操作五',
            tip: '操作五提示',
            eicon: 'el-icon-star-off',
            callback: () => {}
          },
          {
            name: 'btn_10_3',
            title: '操作六',
            tip: '操作六提示',
            eicon: 'el-icon-star-off',
            callback: () => {}
          },
          {
            name: 'btn_11_3',
            title: '操作七',
            tip: '操作七提示',
            eicon: 'el-icon-star-off',
            callback: () => {}
          }
        ]
      },
      btnOptions5: {
        input: {
          placeholder: '请输入手机号'
        },
        btns: [
          {
            name: 'btn_1_3',
            tip: '删除一条数据',
            eicon: 'el-icon-delete',
            callback: () => {},
            delete: {
              title: '是否删除!'
            }
          },
          {
            name: 'btn_2_3',
            tip: '设置为可选',
            icon: 'el-icon-s-tools',
            type: 'primary',
            eicon: 'el-icon-s-tools',
            component: 'superTest',
            callback: btn => {
              this.tbtn = btn
              this.$refs.supertool.setBtnActive(btn)
            }
          },
          {
            name: 'btn_4_3',
            tip: '编辑一条数据',
            eicon: 'el-icon-edit',
            callback: () => {}
          },
          {
            name: 'btn_5_3',
            title: '操作一',
            tip: '操作一提示',
            eicon: 'el-icon-star-off',
            callback: () => {}
          },
          {
            name: 'btn_6_3',
            title: '操作二',
            tip: '操作二提示',
            eicon: 'el-icon-star-off',
            callback: () => {}
          },
          {
            name: 'btn_7_3',
            type: 'danger',
            title: '操作三',
            tip: '操作三提示',
            eicon: 'el-icon-star-off',
            callback: () => {}
          },
          {
            name: 'btn_8_3',
            title: '操作四',
            tip: '操作四提示',
            eicon: 'el-icon-star-off',
            callback: () => {}
          },
          {
            name: 'btn_9_3',
            title: '操作五',
            tip: '操作五提示',
            eicon: 'el-icon-star-off',
            callback: () => {}
          },
          {
            name: 'btn_10_3',
            title: '操作六',
            tip: '操作六提示',
            eicon: 'el-icon-star-off',
            callback: () => {}
          },
          {
            name: 'btn_11_3',
            title: '操作七',
            tip: '操作七提示',
            eicon: 'el-icon-star-off',
            callback: () => {}
          }
        ]
      },
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      btnHide: true
    }
  },
  computed: {},
  mounted() {},
  methods: {
    onSubmit() {
      if (this.tbtn) {
        this.$refs.supertool.hidePopover(this.tbtn)
      }
    },
    handleShow() {
      this.$refs['supertool1'].setBtnValue('btn_1', 'hidden', false)
    },
    handleHide() {
      this.$refs['supertool1'].setBtnValue('btn_1', 'hidden', true)
    }
  },
  destroyed() {

  }
}

</script>
<style lang='scss' scoped>

</style>
