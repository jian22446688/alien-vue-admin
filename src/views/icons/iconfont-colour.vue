<!--
 * @Description: 文件及简介
 * @Author: Cary
 * @Date: 2019-12-12 11:15:37
 * @FilePath: f:\vue-project\alien-vue-admin\src\views\icons\element-ui-icon.vue
 -->
<template>
  <div class="app-container">
    <el-card>
      <div>
        使用的是 iconfont 批量导入项目中的所有图标. 图标数量: {{ iconList.length }}
      </div>
    </el-card>
    <el-card class="cc-mar-t-10">
      <div class="c-icon-grid">
        <div v-for="icon in iconList" :key="icon.id" class="c-icon-item">
          <svg-icon class="c-icon-tip" :icon-class="icon.icon" />
          <p class="cc-mar-2 cc-f-s14 c-text-subheading65">{{ icon.icon }}</p>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>

const icons = [
  { id: 'icon_font_01', icon: 'pokeball' },
  { id: 'icon_font_11', icon: 'lotteryticket' },
  { id: 'icon_font_21', icon: 'gamecartridge' },
  { id: 'icon_font_31', icon: 'playstation' },
  { id: 'icon_font_41', icon: 'pokemontrainer' },
  { id: 'icon_font_51', icon: 'pokemongo' },
  { id: 'icon_font_61', icon: 'pokemonegg' },
  { id: 'icon_font_71', icon: 'axblood' },
  { id: 'icon_font_81', icon: 'flag3' },
  { id: 'icon_font_91', icon: 'devil' },
  { id: 'icon_font_101', icon: 'crown' },
  { id: 'icon_font_111', icon: 'mummy' },
  { id: 'icon_font_121', icon: 'magicstaff' },
  { id: 'icon_font_131', icon: 'leprechaun' },
  { id: 'icon_font_141', icon: 'rainbow' },
  { id: 'icon_font_151', icon: 'witch' },
  { id: 'icon_font_161', icon: 'wizard' },
  { id: 'icon_font_171', icon: 'potleprechaun' },
  { id: 'icon_font_181', icon: 'cablebreak' },
  { id: 'icon_font_191', icon: 'bin' },
  { id: 'icon_font_201', icon: 'dumpster' },
  { id: 'icon_font_211', icon: 'latexgloves' },
  { id: 'icon_font_221', icon: 'electrician' },
  { id: 'icon_font_231', icon: 'dumpster1' },
  { id: 'icon_font_241', icon: 'cleaningbrush' },
  { id: 'icon_font_251', icon: 'laundry1' },
  { id: 'icon_font_261', icon: 'lighting' },
  { id: 'icon_font_271', icon: 'soap' },
  { id: 'icon_font_281', icon: 'pipe' },
  { id: 'icon_font_291', icon: 'electricwelding' },
  { id: 'icon_font_301', icon: 'maid' },
  { id: 'icon_font_311', icon: 'powersocket' },
  { id: 'icon_font_321', icon: 'toolbox' },
  { id: 'icon_font_331', icon: 'colander' },
  { id: 'icon_font_341', icon: 'cook' },
  { id: 'icon_font_351', icon: 'cutlery' },
  { id: 'icon_font_361', icon: 'ketchup' },
  { id: 'icon_font_371', icon: 'potholder' },
  { id: 'icon_font_381', icon: 'pancakes' },
  { id: 'icon_font_391', icon: 'saltpepper' },
  { id: 'icon_font_401', icon: 'taco' },
  { id: 'icon_font_411', icon: 'sandwich' },
  { id: 'icon_font_421', icon: 'soup' },
  { id: 'icon_font_431', icon: 'butterflyknife' },
  { id: 'icon_font_441', icon: 'biblehand' },
  { id: 'icon_font_451', icon: 'corpse' },
  { id: 'icon_font_461', icon: 'hemp' },
  { id: 'icon_font_471', icon: 'hourglass' },
  { id: 'icon_font_481', icon: 'policecap' },
  { id: 'icon_font_491', icon: 'policebadge' },
  { id: 'icon_font_501', icon: 'policegun' },
  { id: 'icon_font_511', icon: 'bow' },
  { id: 'icon_font_521', icon: 'calendar2' },
  { id: 'icon_font_531', icon: 'gender' },
  { id: 'icon_font_541', icon: 'heartsight' },
  { id: 'icon_font_551', icon: 'girlfriend' },
  { id: 'icon_font_561', icon: 'heartcard' },
  { id: 'icon_font_571', icon: 'weddingcake' },
  { id: 'icon_font_581', icon: 'music' },
  { id: 'icon_font_591', icon: 'weddingcontact' },
  { id: 'icon_font_601', icon: 'teddybear' },
  { id: 'icon_font_611', icon: 'eye' },
  { id: 'icon_font_621', icon: 'injury' },
  { id: 'icon_font_631', icon: 'headdress1' },
  { id: 'icon_font_641', icon: 'lungs' },
  { id: 'icon_font_651', icon: 'nasaldrops' },
  { id: 'icon_font_661', icon: 'mixture' },
  { id: 'icon_font_671', icon: 'mixture1' },
  { id: 'icon_font_681', icon: 'smile1' },
  { id: 'icon_font_691', icon: 'symbol3' },
  { id: 'icon_font_701', icon: 'ultrasonography' },
  { id: 'icon_font_711', icon: 'x-ray1' },
  { id: 'icon_font_721', icon: 'contrabass' },
  { id: 'icon_font_731', icon: 'drum' },
  { id: 'icon_font_741', icon: 'accordion' },
  { id: 'icon_font_751', icon: 'emo' },
  { id: 'icon_font_761', icon: 'frenchhorn' },
  { id: 'icon_font_771', icon: 'gong' },
  { id: 'icon_font_781', icon: 'musician' },
  { id: 'icon_font_791', icon: 'musicrecording' },
  { id: 'icon_font_801', icon: 'violin' },
  { id: 'icon_font_811', icon: 'tambourine' },
  { id: 'icon_font_821', icon: 'canofbeer' },
  { id: 'icon_font_831', icon: 'garland' },
  { id: 'icon_font_841', icon: 'discoball' },
  { id: 'icon_font_851', icon: 'margarita' },
  { id: 'icon_font_861', icon: 'dj' },
  { id: 'icon_font_871', icon: 'invitation' },
  { id: 'icon_font_881', icon: 'martini' },
  { id: 'icon_font_891', icon: 'sparkler' },
  { id: 'icon_font_901', icon: 'vipinvitation' },
  { id: 'icon_font_911', icon: 'bear' },
  { id: 'icon_font_921', icon: 'butterfly' },
  { id: 'icon_font_931', icon: 'dogleash' },
  { id: 'icon_font_941', icon: 'dog' },
  { id: 'icon_font_951', icon: 'horse' },
  { id: 'icon_font_961', icon: 'nopets' },
  { id: 'icon_font_971', icon: 'hamster' },
  { id: 'icon_font_981', icon: 'petdiploma' },
  { id: 'icon_font_991', icon: 'goldfish' },
  { id: 'icon_font_1001', icon: 'petcanned' },
  { id: 'icon_font_1011', icon: 'petpackage' },
  { id: 'icon_font_1021', icon: 'litterbox' },
  { id: 'icon_font_1031', icon: 'squirrel' },
  { id: 'icon_font_1041', icon: 'petdryfood' },
  { id: 'icon_font_1051', icon: 'petbag' },
  { id: 'icon_font_1061', icon: 'yarnball' },
  { id: 'icon_font_1071', icon: 'spider' },
  { id: 'icon_font_1081', icon: 'babybottle' },
  { id: 'icon_font_1091', icon: 'bib' },
  { id: 'icon_font_1101', icon: 'books' },
  { id: 'icon_font_1111', icon: 'childchair' },
  { id: 'icon_font_1121', icon: 'book' },
  { id: 'icon_font_1131', icon: 'drawingpalette' },
  { id: 'icon_font_1141', icon: 'crib' },
  { id: 'icon_font_1151', icon: 'onlinetraining' },
  { id: 'icon_font_1161', icon: 'pencilsharpenerclip' },
  { id: 'icon_font_1171', icon: 'schoolbell' },
  { id: 'icon_font_1181', icon: 'schoolbenches' },
  { id: 'icon_font_1191', icon: 'tricycle' },
  { id: 'icon_font_1201', icon: 'bugfix' },
  { id: 'icon_font_1211', icon: 'certificate1' },
  { id: 'icon_font_1221', icon: 'businessplan' },
  { id: 'icon_font_1231', icon: 'deadline' },
  { id: 'icon_font_1241', icon: 'pagespeed' },
  { id: 'icon_font_1251', icon: 'responsivewebdesign' },
  { id: 'icon_font_1261', icon: 'copywriting' },
  { id: 'icon_font_1271', icon: 'targeting' },
  { id: 'icon_font_1281', icon: 'partnership' },
  { id: 'icon_font_1291', icon: 'socialnetworks' },
  { id: 'icon_font_1301', icon: 'leads' },
  { id: 'icon_font_1311', icon: 'timeismoney' },
  { id: 'icon_font_1321', icon: 'callcenter' },
  { id: 'icon_font_1331', icon: 'delivery' },
  { id: 'icon_font_1341', icon: 'cut1' },
  { id: 'icon_font_1351', icon: 'delivery2' },
  { id: 'icon_font_1361', icon: 'hanger' },
  { id: 'icon_font_1371', icon: 'guarantee' },
  { id: 'icon_font_1381', icon: 'purchasesreturn' },
  { id: 'icon_font_1391', icon: 'payperclick' },
  { id: 'icon_font_1401', icon: 'purse' },
  { id: 'icon_font_1411', icon: 'onlineshop' },
  { id: 'icon_font_1421', icon: 'shipping' },
  { id: 'icon_font_1431', icon: 'shopsearch' },
  { id: 'icon_font_1441', icon: 'shoplocation' },
  { id: 'icon_font_1451', icon: 'time' },
  { id: 'icon_font_1461', icon: 'shop' },
  { id: 'icon_font_1471', icon: 'earth_' },
  { id: 'icon_font_1481', icon: 'extraterrestrial_' },
  { id: 'icon_font_1491', icon: 'comet' },
  { id: 'icon_font_1501', icon: 'magnet' },
  { id: 'icon_font_1511', icon: 'moon_flag_' },
  { id: 'icon_font_1521', icon: 'neptune_' },
  { id: 'icon_font_1531', icon: 'satellite_1' },
  { id: 'icon_font_1541', icon: 'test-tube_' },
  { id: 'icon_font_1551', icon: 'vesta' },
  { id: 'icon_font_1561', icon: 'basketball' },
  { id: 'icon_font_1571', icon: 'curling' },
  { id: 'icon_font_1581', icon: 'boxinghelmet' },
  { id: 'icon_font_1591', icon: 'flyboard' },
  { id: 'icon_font_1601', icon: 'volleyball' },
  { id: 'icon_font_1611', icon: 'punchingbag' },
  { id: 'icon_font_1621', icon: 'motorcyclehelmet' },
  { id: 'icon_font_1631', icon: 'gymnastics' },
  { id: 'icon_font_1641', icon: 'rugby' },
  { id: 'icon_font_1651', icon: 'bottleofwater' },
  { id: 'icon_font_1661', icon: 'olympicflame' },
  { id: 'icon_font_1671', icon: 'treadmill' },
  { id: 'icon_font_1681', icon: 'stopwatch' },
  { id: 'icon_font_1691', icon: 'stadium' },
  { id: 'icon_font_1701', icon: 'yogamat' },
  { id: 'icon_font_1711', icon: 'evacuator' },
  { id: 'icon_font_1721', icon: 'formulacar' },
  { id: 'icon_font_1731', icon: 'motorship' },
  { id: 'icon_font_1741', icon: 'balloon1' },
  { id: 'icon_font_1751', icon: 'truck' },
  { id: 'icon_font_1761', icon: 'trailerhouse' },
  { id: 'icon_font_1771', icon: 'battlehammer' },
  { id: 'icon_font_1781', icon: 'grenade' },
  { id: 'icon_font_1791', icon: 'nuclearbomb' },
  { id: 'icon_font_1801', icon: 'tridents' },
  { id: 'icon_font_1811', icon: 'soldierbadge' },
  { id: 'icon_font_1821', icon: 'uzigun' },
  { id: 'icon_font_1831', icon: 'nuclearexplosion' },
  { id: 'icon_font_1841', icon: 'am' },
  { id: 'icon_font_1851', icon: 'earthquake' },
  { id: 'icon_font_1861', icon: 'houseinsurance' },
  { id: 'icon_font_1871', icon: 'landslide' },
  { id: 'icon_font_1881', icon: 'rain' },
  { id: 'icon_font_1891', icon: 'shengdanjie-shoutao' },
  { id: 'icon_font_1901', icon: 'shengdanjie-liwu' },
  { id: 'icon_font_1911', icon: 'shengdanjie-huahuan' },
  { id: 'icon_font_1921', icon: 'shengdanjie-jiangbingren' },
  { id: 'icon_font_1931', icon: 'shengdanjie-xuehua' },
  { id: 'icon_font_1941', icon: 'shengdanjie-caideng' },
  { id: 'icon_font_1951', icon: 'shengdanjie-bangbangtang' },
  { id: 'icon_font_1961', icon: 'shengdanjie-milu' },
  { id: 'icon_font_1971', icon: 'shengdanjie-shengdanshu' },
  { id: 'icon_font_1981', icon: 'shengdanjie-tangguo' },
  { id: 'icon_font_1991', icon: 'shengdanjie-boliqiu' },
  { id: 'icon_font_2001', icon: 'shengdanjie-qiqiu' },
  { id: 'icon_font_2011', icon: 'shengdanjie-shengdanmao' },
  { id: 'icon_font_2021', icon: 'shengdanjie-xueren' },
  { id: 'icon_font_2031', icon: 'shengdanjie-xingxing' },
  { id: 'icon_font_2041', icon: 'shengdanjie-shouzhang' }
]

export default {
  components: {},
  data() {
    return {
      iconList: icons
    }
  },
  computed: {},
  mounted() {},
  methods: {}
}

</script>
<style lang='scss' scoped>
.c-icon-grid {
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  text-align: center;
  .c-icon-item {
    height: 80px;
    margin: 10px;
    cursor: pointer;
    color: #909399;
    font-size: 36px;
  }
  .c-icon-tip {
    transition: all 0.3s ease-in-out;
  }
  .c-icon-tip:hover {
    transform: scale(1.3);
  }
}
</style>
