(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0efd2c"],{"9a6d":function(t,a,r){"use strict";r.r(a);var s=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"app-container"},[r("el-card",{staticClass:"cc-mar-b-10"},[t._v("\n    使用图表需要安装: v-charts echarts\n    "),r("el-link",{attrs:{href:"https://v-charts.js.org/#/",type:"primary"}},[t._v("v-charts 文档")])],1),t._v(" "),r("el-row",{attrs:{gutter:10}},[r("el-col",{attrs:{sm:24,lg:12}},[r("el-card",{staticClass:"cc-mar-b-10"},[r("ve-ring",{attrs:{data:t.getChartData(7),colors:t.vchartColor}})],1)],1),t._v(" "),r("el-col",{attrs:{sm:24,lg:12}},[r("el-card",{staticClass:"cc-mar-b-10"},[r("ve-ring",{attrs:{data:t.getChartData(7),settings:t.chartSettings,colors:t.vchartColor}})],1)],1),t._v(" "),r("el-col",{attrs:{sm:24,lg:12}},[r("el-card",{staticClass:"cc-mar-b-10"},[r("ve-ring",{attrs:{data:t.getChartData(7),settings:t.chartlevelSettings,colors:t.vchartColor}})],1)],1),t._v(" "),r("el-col",{attrs:{sm:24,lg:12}},[r("el-card",{staticClass:"cc-mar-b-10"},[r("ve-ring",{attrs:{data:t.getChartData(7),settings:t.chartOffsetSettings,colors:t.vchartColor}})],1)],1)],1)],1)},e=[],c=r("ed08"),l={components:{},data:function(){return this.vchartColor=["#95a2ff","#fa8080","#ffc076","#fae768","#87e885","#3cb9fc","#73abf5","#cb9bff","#434348","#90ed7d","#f7a35c","#8085e9​​​​​​​"],this.chartSettings={roseType:"radius"},this.chartlevelSettings={level:[["1/1","1/2","1/3"],["1/4","1/5"]]},this.chartOffsetSettings={radius:[10,100],offsetY:300},{chartData:{columns:["日期","访问用户","下单用户","下单率"],rows:[{"日期":"1/1","访问用户":1393,"下单用户":1093,"下单率":.32},{"日期":"1/2","访问用户":3530,"下单用户":3230,"下单率":.26},{"日期":"1/3","访问用户":2923,"下单用户":2623,"下单率":.76},{"日期":"1/4","访问用户":1723,"下单用户":1423,"下单率":.49},{"日期":"1/5","访问用户":3792,"下单用户":3492,"下单率":.323},{"日期":"1/6","访问用户":4593,"下单用户":4293,"下单率":.78}]}}},computed:{},mounted:function(){},methods:{getChartData:function(t){for(var a=[],r=["日期","访问用户","下单用户","下单率"],s=0;s<t;s++)a.push({"日期":"1/"+(1+s),"访问用户":Object(c["f"])(1e3,6e3),"下单用户":Object(c["f"])(1e3,6e3),"下单率":Object(c["f"])(1,30)});return{rows:a,columns:r}}}},o=l,n=r("2877"),i=Object(n["a"])(o,s,e,!1,null,"9a9fbed0",null);a["default"]=i.exports}}]);