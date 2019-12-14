<!--
 * @Description: 文件及简介
 * @Author: Cary
 * @Date: 2019-12-13 11:15:18
 * @FilePath: f:\vue-project\alien-vue-admin\src\views\form\form-info.vue
 -->
<template>
  <div class="app-container">
    <el-card class="cc-mar-b-10">
      表单详情
    </el-card>
    <el-card class="cc-mar-b-10">
      <el-row :gutter="10">
        <el-col :span="8">
          <el-form label-position="left">
            <el-form-item label="商品名称">
              <span>{{ forminfo.name }}</span>
            </el-form-item>
            <el-form-item label="所属店铺">
              <span>{{ forminfo.shop }}</span>
            </el-form-item>
            <el-form-item label="商品 ID">
              <span>{{ forminfo.id }}</span>
            </el-form-item>
            <el-form-item label="店铺 ID">
              <span>{{ forminfo.shopId }}</span>
            </el-form-item>
            <el-form-item label="商品分类">
              <span>{{ forminfo.category }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ forminfo.address }}</span>
            </el-form-item>
            <el-form-item label="商品描述">
              <span>{{ forminfo.desc }}</span>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="8">
          <el-form label-position="left">
            <el-form-item label="商品名称">
              <span>{{ forminfo.name }}</span>
            </el-form-item>
            <el-form-item label="所属店铺">
              <span>{{ forminfo.shop }}</span>
            </el-form-item>
            <el-form-item label="商品 ID">
              <span>{{ forminfo.id }}</span>
            </el-form-item>
            <el-form-item label="店铺 ID">
              <span>{{ forminfo.shopId }}</span>
            </el-form-item>
            <el-form-item label="商品分类">
              <span>{{ forminfo.category }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ forminfo.address }}</span>
            </el-form-item>
            <el-form-item label="商品描述">
              <span>{{ forminfo.desc }}</span>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="8">
          <el-form label-position="left">
            <el-form-item label="商品名称">
              <span>{{ forminfo.name }}</span>
            </el-form-item>
            <el-form-item label="所属店铺">
              <span>{{ forminfo.shop }}</span>
            </el-form-item>
            <el-form-item label="商品 ID">
              <span>{{ forminfo.id }}</span>
            </el-form-item>
            <el-form-item label="店铺 ID">
              <span>{{ forminfo.shopId }}</span>
            </el-form-item>
            <el-form-item label="商品分类">
              <span>{{ forminfo.category }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ forminfo.address }}</span>
            </el-form-item>
            <el-form-item label="商品描述">
              <span>{{ forminfo.desc }}</span>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="cc-mar-b-10">
      组合表单
    </el-card>
    <el-card class="cc-mar-b-10">
      <el-card class="cc-mar-b-10" shadow="never">
        <div slot="header">
          <span>基本信息</span>
        </div>
        <div>
          <el-row>
            <el-col :span="8">
              <el-form label-position="right" label-width="100px" inline>
                <el-form-item label="姓名">
                  <span>{{ forminfo.name }}</span>
                </el-form-item>
                <el-form-item label="生日">
                  <span>1992-06-00</span>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="8">
              <el-form label-position="right" label-width="100px" inline>
                <el-form-item label="性别">
                  <span>{{ forminfo.name }}</span>
                </el-form-item>
                <el-form-item label="邮箱">
                  <span>798171920@qq.com</span>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="8">
              <el-form label-position="right" label-width="100px" inline>
                <el-form-item label="城市">
                  <span>河南省洛阳市</span>
                </el-form-item>
                <el-form-item label="地址">
                  <span>河南省洛阳市洛宁县</span>
                </el-form-item>
              </el-form>
            </el-col>
          </el-row>
        </div>
      </el-card>
      <el-card class="cc-mar-b-10" shadow="never">
        <div slot="header">
          <span>商品信息</span>
        </div>
        <div>
          <el-row>
            <el-col :span="8">
              <el-form label-position="right" label-width="100px" inline>
                <el-form-item label="商品名称">
                  <span>好滋好味鸡蛋仔</span>
                </el-form-item>
                <el-form-item label="所属店铺">
                  <span>王小虎夫妻店</span>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="8">
              <el-form label-position="right" label-width="100px" inline>
                <el-form-item label="商品 ">
                  <span>ID12987125</span>
                </el-form-item>
                <el-form-item label="店铺">
                  <span>ID10333</span>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="8">
              <el-form label-position="right" label-width="100px" inline>
                <el-form-item label="商品分类">
                  <span>江浙小吃、小吃零食</span>
                </el-form-item>
                <el-form-item label="商品描述">
                  <span>荷兰优质淡奶，奶香浓而不腻</span>
                </el-form-item>
              </el-form>
            </el-col>
          </el-row>
        </div>
      </el-card>
    </el-card>

  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      forminfo: {
        id: '12987122',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333'
      }
    }
  },
  computed: {},
  mounted() {},
  methods: {}
}

</script>
<style lang='scss' scoped>

</style>
