(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d8ac44e"],{"133c":function(t,a,s){"use strict";var c=s("d785"),e=s.n(c);e.a},"321c":function(t,a,s){},"3cbc":function(t,a,s){"use strict";var c=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"pan-item",style:{zIndex:t.zIndex,height:t.height,width:t.width}},[s("div",{staticClass:"pan-info"},[s("div",{staticClass:"pan-info-roles-container"},[t._t("default")],2)]),t._v(" "),s("div",{staticClass:"pan-thumb",style:{backgroundImage:"url("+t.image+")"}})])},e=[],i=(s("c5f6"),{name:"PanThumb",props:{image:{type:String,required:!0},zIndex:{type:Number,default:1},width:{type:String,default:"150px"},height:{type:String,default:"150px"}}}),l=i,r=(s("133c"),s("2877")),n=Object(r["a"])(l,c,e,!1,null,"799537af",null);a["a"]=n.exports},"69c2":function(t,a,s){"use strict";var c=s("f9aa"),e=s.n(c);e.a},"72ff":function(t,a,s){"use strict";var c=s("f704"),e=s.n(c);e.a},9406:function(t,a,s){"use strict";s.r(a);var c=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"dashboard-container"},[s(t.currentRole,{tag:"component"})],1)},e=[],i=(s("6762"),s("2fdb"),s("db72")),l=s("2f62"),r=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"dashboard-editor-container"},[s("panel-group",{on:{handleSetLineChartData:t.handleSetLineChartData}}),t._v(" "),s("carousel-card"),t._v(" "),s("div",{staticClass:"cc-h-20"}),t._v(" "),s("div",{staticClass:"cc-h-20"}),t._v(" "),s("div",{staticClass:"cc-h-20"}),t._v(" "),s("div",{staticClass:"cc-h-20"}),t._v(" "),s("div",{staticClass:"cc-h-20"}),t._v(" "),s("div",{staticClass:"cc-h-20"}),t._v(" "),s("div",{staticClass:"cc-h-20"}),t._v(" "),s("div",{staticClass:"cc-h-20"}),t._v(" "),s("div",{staticClass:"cc-h-20"}),t._v(" "),s("div",{staticClass:"cc-h-20"}),t._v(" "),s("div",{staticClass:"cc-h-20"})],1)},n=[],o=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("el-row",{staticClass:"panel-group",attrs:{gutter:10}},[s("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[s("el-card",[s("div",{staticClass:"cc-clearfix"},[s("div",{staticClass:"cc-clearfix"},[s("div",{staticClass:"cc-f--left c-text-subheading cc-f-s12"},[t._v("总销售额")]),t._v(" "),s("div",{staticClass:"cc-f--right"},[s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"指标说明",placement:"top"}},[s("i",{staticClass:"el-icon-warning-outline"})])],1)]),t._v(" "),s("div",[s("span",{staticClass:"cc-f-s30"},[t._v("¥ 126,560")])]),t._v(" "),s("div",{staticClass:"cc-mar-t-30"},[s("span",{staticClass:"c-text-subheading65 cc-f-s14"},[t._v("周同比 11%")]),t._v(" "),s("span",{staticClass:"c-text-subheading65 cc-f-s14"},[t._v("日同比 12%")])]),t._v(" "),s("el-divider"),t._v(" "),s("div",[s("span",{staticClass:"c-text-subheading65 cc-f-s14"},[t._v("日销售额 ¥ 12,423")])])],1)])],1),t._v(" "),s("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[s("el-card",[s("div",{staticClass:"cc-clearfix"},[s("div",{staticClass:"cc-clearfix"},[s("div",{staticClass:"cc-f--left c-text-subheading cc-f-s12"},[t._v("访问总量")]),t._v(" "),s("div",{staticClass:"cc-f--right"},[s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"指标说明",placement:"top"}},[s("i",{staticClass:"el-icon-warning-outline"})])],1)]),t._v(" "),s("div",[s("span",{staticClass:"cc-f-s30"},[t._v("¥ 126,560")])]),t._v(" "),s("div",{},[s("ve-line",{attrs:{data:t.chartData,height:"48px",colors:t.vchartColor,settings:t.chartSettings,extend:t.chartOption}})],1),t._v(" "),s("el-divider"),t._v(" "),s("div",[s("span",{staticClass:"c-text-subheading65 cc-f-s14"},[t._v("日访问量 1,234")])])],1)])],1),t._v(" "),s("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[s("el-card",[s("div",{staticClass:"cc-clearfix"},[s("div",{staticClass:"cc-clearfix"},[s("div",{staticClass:"cc-f--left c-text-subheading cc-f-s12"},[t._v("支付笔数")]),t._v(" "),s("div",{staticClass:"cc-f--right"},[s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"指标说明",placement:"top"}},[s("i",{staticClass:"el-icon-warning-outline"})])],1)]),t._v(" "),s("div",[s("span",{staticClass:"cc-f-s30"},[t._v("¥ 126,560")])]),t._v(" "),s("div",{},[s("ve-histogram",{attrs:{data:t.chartData,height:"48px",colors:t.vchartColor,settings:t.chartSettings,extend:t.chartOption}})],1),t._v(" "),s("el-divider"),t._v(" "),s("div",[s("span",{staticClass:"c-text-subheading65 cc-f-s14"},[t._v("转化率 60%")])])],1)])],1),t._v(" "),s("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[s("el-card",[s("div",[s("div",{staticClass:"cc-clearfix"},[s("div",{staticClass:"cc-f--left c-text-subheading cc-f-s12"},[t._v("运营活动效果")]),t._v(" "),s("div",{staticClass:"cc-f--right"},[s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"指标说明",placement:"top"}},[s("i",{staticClass:"el-icon-warning-outline"})])],1)]),t._v(" "),s("div",[s("span",{staticClass:"cc-f-s30"},[t._v("78%")])]),t._v(" "),s("div",{staticClass:"cc-mar-t-22"},[s("el-progress",{attrs:{"text-inside":!0,"stroke-width":26,percentage:78}})],1),t._v(" "),s("el-divider"),t._v(" "),s("div",[s("span",{staticClass:"c-text-subheading65 cc-f-s14"},[t._v("周同比 12%")]),t._v(" "),s("span",{staticClass:"c-text-subheading65 cc-f-s14"},[t._v("日同比 11%")])])],1)])],1),t._v(" "),s("el-col",{attrs:{span:24}},[s("el-row",{attrs:{gutter:10}},[s("el-col",{attrs:{xs:12,sm:6,lg:3}},[s("el-card",{staticClass:"cc-mar-b-10 cc-ta--c"},[s("div",{staticClass:"cc-f-s26 cc-mar-b-10"},[s("svg-icon",{attrs:{"icon-class":"maid"}})],1),t._v(" "),s("div",{staticClass:"cc-f-s14"},[t._v("用户")])])],1),t._v(" "),s("el-col",{attrs:{xs:12,sm:6,lg:3}},[s("el-card",{staticClass:"cc-mar-b-10 cc-ta--c"},[s("div",{staticClass:"cc-f-s26 cc-mar-b-10"},[s("svg-icon",{attrs:{"icon-class":"pokemonegg"}})],1),t._v(" "),s("div",{staticClass:"cc-f-s14"},[t._v("设备")])])],1),t._v(" "),s("el-col",{attrs:{xs:12,sm:6,lg:3}},[s("el-card",{staticClass:"cc-mar-b-10 cc-ta--c"},[s("div",{staticClass:"cc-f-s26 cc-mar-b-10"},[s("svg-icon",{attrs:{"icon-class":"rainbow"}})],1),t._v(" "),s("div",{staticClass:"cc-f-s14"},[t._v("浏览")])])],1),t._v(" "),s("el-col",{attrs:{xs:12,sm:6,lg:3}},[s("el-card",{staticClass:"cc-mar-b-10 cc-ta--c"},[s("div",{staticClass:"cc-f-s26 cc-mar-b-10"},[s("svg-icon",{attrs:{"icon-class":"dumpster1"}})],1),t._v(" "),s("div",{staticClass:"cc-f-s14"},[t._v("仓库")])])],1),t._v(" "),s("el-col",{attrs:{xs:12,sm:6,lg:3}},[s("el-card",{staticClass:"cc-mar-b-10 cc-ta--c"},[s("div",{staticClass:"cc-f-s26 cc-mar-b-10"},[s("svg-icon",{attrs:{"icon-class":"taco"}})],1),t._v(" "),s("div",{staticClass:"cc-f-s14"},[t._v("收益")])])],1),t._v(" "),s("el-col",{attrs:{xs:12,sm:6,lg:3}},[s("el-card",{staticClass:"cc-mar-b-10 cc-ta--c"},[s("div",{staticClass:"cc-f-s26 cc-mar-b-10"},[s("svg-icon",{attrs:{"icon-class":"mixture"}})],1),t._v(" "),s("div",{staticClass:"cc-f-s14"},[t._v("安全")])])],1),t._v(" "),s("el-col",{attrs:{xs:12,sm:6,lg:3}},[s("el-card",{staticClass:"cc-mar-b-10 cc-ta--c"},[s("div",{staticClass:"cc-f-s26 cc-mar-b-10"},[s("svg-icon",{attrs:{"icon-class":"vipinvitation"}})],1),t._v(" "),s("div",{staticClass:"cc-f-s14"},[t._v("VIP")])])],1),t._v(" "),s("el-col",{attrs:{xs:12,sm:6,lg:3}},[s("el-card",{staticClass:"cc-mar-b-10 cc-ta--c"},[s("div",{staticClass:"cc-f-s26 cc-mar-b-10"},[s("svg-icon",{attrs:{"icon-class":"bin"}})],1),t._v(" "),s("div",{staticClass:"cc-f-s14"},[t._v("坏境")])])],1)],1)],1),t._v(" "),s("el-col",{staticClass:"cc-mar-b-10",attrs:{span:24}},[s("el-card",{staticClass:"c-panelgroup-card"},[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("el-tabs",{staticClass:"cc-f--left cc-h-20 cc-mar-t-4",on:{"tab-click":t.handleTabsClick},model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[s("el-tab-pane",{attrs:{label:"用户管理",name:"first"}}),t._v(" "),s("el-tab-pane",{attrs:{label:"配置管理",name:"second"}})],1),t._v(" "),s("div",{staticClass:"cc-f--right"},[t._l(t.tabBtns,(function(a){return s("el-button",{key:a.id,staticStyle:{padding:"3px 0"},style:{color:a.isActive?"":"#696969"},attrs:{type:"text"},on:{click:function(s){return t.handleCardTabsClick(a)}}},[t._v(t._s(a.label))])})),t._v(" "),s("span",{staticClass:"cc-mar-l-10"},[s("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.datePicker,callback:function(a){t.datePicker=a},expression:"datePicker"}})],1)],2)],1),t._v(" "),t.tabsChange?s("ve-histogram",{attrs:{data:t.chartLineData}}):s("ve-line",{attrs:{data:t.chartLineData,settings:t.chartLineSettings}})],1)],1),t._v(" "),s("el-col",{staticClass:"cc-mar-b-10",attrs:{xs:24,sm:24,lg:12}},[s("el-card",[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("span",[t._v("线上热门搜索")]),t._v(" "),s("el-dropdown",{staticClass:"cc-f--right"},[s("el-button",{staticClass:"cc-f--right",staticStyle:{padding:"3px 0"},attrs:{type:"text"}},[t._v("操作按钮")]),t._v(" "),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",[t._v("操作一")]),t._v(" "),s("el-dropdown-item",[t._v("操作二")])],1)],1)],1),t._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:12}},[s("div",{staticClass:"cc-clearfix"},[s("div",{staticClass:"cc-clearfix"},[s("div",{staticClass:"cc-f--left c-text-subheading cc-f-s12"},[t._v("搜索用户数")]),t._v(" "),s("div",{staticClass:"cc-f--right"},[s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"指标说明",placement:"top"}},[s("i",{staticClass:"el-icon-warning-outline"})])],1)]),t._v(" "),s("div",[s("span",{staticClass:"cc-f-s30"},[t._v("¥ 126,560")])]),t._v(" "),s("div",{},[s("ve-line",{attrs:{data:t.chartData,height:"48px",colors:t.vchartColor,settings:t.chartSettings,extend:t.chartOption}})],1)])]),t._v(" "),s("el-col",{attrs:{span:12}},[s("div",{staticClass:"cc-clearfix"},[s("div",{staticClass:"cc-clearfix"},[s("div",{staticClass:"cc-f--left c-text-subheading cc-f-s12"},[t._v("人均搜索次数")]),t._v(" "),s("div",{staticClass:"cc-f--right"},[s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"指标说明",placement:"top"}},[s("i",{staticClass:"el-icon-warning-outline"})])],1)]),t._v(" "),s("div",[s("span",{staticClass:"cc-f-s30"},[t._v("¥ 126,560")])]),t._v(" "),s("div",{},[s("ve-line",{attrs:{data:t.chartData,colors:t.vchartColor,settings:t.chartSettings,extend:t.chartOption,height:"48px"}})],1)])])],1),t._v(" "),s("div",{staticClass:"cc-mar-t-20"},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,height:"243",border:""}},[s("el-table-column",{attrs:{prop:"date",label:"日期",width:"120"}}),t._v(" "),s("el-table-column",{attrs:{prop:"name",label:"姓名",width:"120"}}),t._v(" "),s("el-table-column",{attrs:{prop:"address",label:"地址"}})],1),t._v(" "),s("div",{staticClass:"cc-clearfix"},[s("el-pagination",{staticClass:"cc-f--right cc-mar-t-10",attrs:{background:"",small:"",layout:"prev, pager, next",total:1e3}})],1)],1)],1)],1),t._v(" "),s("el-col",{staticClass:"cc-mar-b-10",attrs:{xs:24,sm:24,lg:12}},[s("el-card",[s("div",{attrs:{slot:"header"},slot:"header"},[s("span",[t._v("销售额类别占比")]),t._v(" "),s("div",{staticClass:"cc-f--right",staticStyle:{"margin-top":"-6px"}},[s("el-radio-group",{model:{value:t.radio1,callback:function(a){t.radio1=a},expression:"radio1"}},[s("el-radio-button",{attrs:{label:"上海"}}),t._v(" "),s("el-radio-button",{attrs:{label:"北京"}}),t._v(" "),s("el-radio-button",{attrs:{label:"广州"}}),t._v(" "),s("el-radio-button",{attrs:{label:"深圳"}})],1),t._v(" "),s("el-dropdown",{staticClass:"cc-f--right"},[s("el-button",{staticClass:"cc-mar-l-10",attrs:{type:"text",icon:"el-icon-more"}}),t._v(" "),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",[t._v("操作一")]),t._v(" "),s("el-dropdown-item",[t._v("操作二")])],1)],1)],1)]),t._v(" "),s("ve-pie",{attrs:{data:t.chartLineData,colors:t.vchartColor,settings:t.chartPieSettings}})],1)],1)],1)},d=[];s("7f7f");function v(t){var a=new Date,s=new Date(a.getFullYear(),a.getMonth(),1),c=new Date(a.getFullYear(),a.getMonth()+1,1),e=(c-s)/864e5;return e}var h={data:function(){return this.chartSettings={area:!0},this.chartLineSettings={axisSite:{right:["下单率"]},yAxisType:["KMB","percent"],yAxisName:["数值","比率"],grid:{top:"-0px",bottom:"-68px"}},this.chartPieSettings={legend:{type:"scroll",orient:"vertical",right:10,top:20,bottom:20,x:"left"},tooltip:{show:!0}},this.vchartColor=["#95a2ff","#fa8080","#ffc076","#fae768","#87e885","#3cb9fc","#73abf5","#cb9bff","#434348","#90ed7d","#f7a35c","#8085e9​​​​​​​"],this.chartOption={xAxis:{show:!1},yAxis:{show:!1},geo:{show:!1},legend:{show:!1},grid:{top:"-0px",left:"-66px",right:"-20px",bottom:"-18px"},tooltip:{trigger:"axis",axisPointer:{type:"none"}},series:{lineStyle:{opacity:0},itemStyle:{opacity:1}}},{radio1:"上海",activeName:"first",tabsChange:!1,chartData:{columns:["日期","访问用户"],rows:[{"日期":"1","访问用户":1393},{"日期":"2","访问用户":3530},{"日期":"2","访问用户":2923},{"日期":"3","访问用户":1723},{"日期":"4","访问用户":3792},{"日期":"5","访问用户":4593},{"日期":"6","访问用户":4793},{"日期":"7","访问用户":4292},{"日期":"8","访问用户":4122},{"日期":"9","访问用户":1422},{"日期":"10","访问用户":4593},{"日期":"11","访问用户":4793},{"日期":"12","访问用户":4292},{"日期":"13","访问用户":4122},{"日期":"14","访问用户":1422}]},chartLineData:{columns:["日期","访问用户","下单用户","下单率"],rows:[{"日期":"1/1","访问用户":1393,"下单用户":1093,"下单率":.32},{"日期":"1/2","访问用户":3530,"下单用户":3230,"下单率":.26},{"日期":"1/3","访问用户":2923,"下单用户":2623,"下单率":.76},{"日期":"1/4","访问用户":1723,"下单用户":1423,"下单率":.49},{"日期":"1/5","访问用户":3792,"下单用户":3492,"下单率":.323},{"日期":"1/6","访问用户":4593,"下单用户":4293,"下单率":.78}]},rows1:[{"日期":"1/1","访问用户":6393,"下单用户":4093,"下单率":.32},{"日期":"1/2","访问用户":3530,"下单用户":3230,"下单率":2.26},{"日期":"1/3","访问用户":2923,"下单用户":4623,"下单率":1.76},{"日期":"1/4","访问用户":3723,"下单用户":1423,"下单率":.49},{"日期":"1/5","访问用户":2792,"下单用户":2492,"下单率":3.323},{"日期":"1/6","访问用户":3593,"下单用户":1293,"下单率":1.78}],rows2:[{"日期":"1/1","访问用户":2393,"下单用户":2093,"下单率":.32},{"日期":"1/2","访问用户":4530,"下单用户":3230,"下单率":2.26},{"日期":"1/3","访问用户":5923,"下单用户":2623,"下单率":.76},{"日期":"1/4","访问用户":6723,"下单用户":1423,"下单率":1.49},{"日期":"1/5","访问用户":3792,"下单用户":2492,"下单率":2.323},{"日期":"1/6","访问用户":2593,"下单用户":1293,"下单率":1.78}],rows3:[{"日期":"1/1","访问用户":1393,"下单用户":1093,"下单率":.32},{"日期":"1/2","访问用户":3530,"下单用户":3230,"下单率":.26},{"日期":"1/3","访问用户":2923,"下单用户":2623,"下单率":.76},{"日期":"1/4","访问用户":1723,"下单用户":1423,"下单率":.49},{"日期":"1/5","访问用户":3792,"下单用户":3492,"下单率":.323},{"日期":"1/6","访问用户":4593,"下单用户":4293,"下单率":.78}],tabBtns:[{id:"btn_1",label:"今日",isActive:!0},{id:"btn_2",label:"本周",isActive:!1},{id:"btn_3",label:"本月",isActive:!1},{id:"btn_4",label:"全年",isActive:!1}],datePicker:[new Date,new Date],tableData:[{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-08",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-06",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-07",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"}]}},methods:{handleSetLineChartData:function(t){this.$emit("handleSetLineChartData",t)},handleTabsClick:function(t){"second"===t.name?this.tabsChange=!0:this.tabsChange=!1},handleCardTabsClick:function(t){if(this.tabBtns.map((function(t){t.isActive=!1})),t.isActive=!0,"btn_1"===t.id)this.datePicker=[new Date,new Date],this.chartLineData.rows=this.rows3;else if("btn_2"===t.id){var a=new Date,s=new Date(a.getFullYear(),a.getMonth(),a.getDate()-a.getDay()+1),c=new Date(a.getFullYear(),a.getMonth(),a.getDate()+(7-a.getDay()));this.datePicker=[s,c],this.chartLineData.rows=this.rows1}else if("btn_3"===t.id){var e=new Date,i=new Date(e.getFullYear(),e.getMonth(),1),l=new Date(e.getFullYear(),e.getMonth(),v(e.getMonth()));this.datePicker=[i,l],this.chartLineData.rows=this.rows2}else if("btn_4"===t.id){var r=new Date,n=new Date(r.getFullYear(),0,1),o=new Date(r.getFullYear(),r.getMonth(),v(11));this.datePicker=[n,o],this.chartLineData.rows=this.rows1}}}},p=h,f=(s("e75e"),s("2877")),u=Object(f["a"])(p,o,d,!1,null,"50b3d73f",null),C=u.exports,_=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("el-card",[s("el-carousel",{attrs:{height:"110px",autoplay:!1,loop:!1,"indicator-position":"none"}},[s("el-carousel-item",[s("div",{staticStyle:{display:"flex"}},t._l(7,(function(a){return s("el-row",{key:a,staticClass:"carouse-item "},[s("el-col",{attrs:{span:12}},[s("div",{staticClass:"cc-mar-b-20"},[t._v("商店 "+t._s(a))]),t._v(" "),s("span",{staticClass:"c-text-subheading65 cc-f-s14"},[t._v("转化率")]),t._v(" "),s("h3",{staticClass:"cc-mar-b-2 cc-mar-t-6 cc-f-s24 cc-cur--p",on:{click:t.handleStores}},[t._v(t._s(t.getStoresP())+"%")])]),t._v(" "),s("el-col",{attrs:{span:12}},[s("div",{staticClass:"cc-pad-t-36"},[s("el-progress",{attrs:{type:"circle",width:50,percentage:25}})],1)])],1)})),1)]),t._v(" "),s("el-carousel-item",[s("div",{staticStyle:{display:"flex"}},t._l(4,(function(a){return s("el-row",{key:a,staticClass:"carouse-item "},[s("el-col",{attrs:{span:12}},[s("div",{staticClass:"cc-mar-b-20"},[t._v("商店 "+t._s(a))]),t._v(" "),s("span",{staticClass:"c-text-subheading65 cc-f-s14"},[t._v("转化率")]),t._v(" "),s("h3",{staticClass:"cc-mar-b-2 cc-mar-t-6 cc-f-s24 cc-cur--p",on:{click:t.handleStores}},[t._v(t._s(t.getStoresP())+"%")])]),t._v(" "),s("el-col",{attrs:{span:12}},[s("div",{staticClass:"cc-pad-t-36"},[s("el-progress",{attrs:{type:"circle",width:50,percentage:25}})],1)])],1)})),1)])],1),t._v(" "),s("div",{staticClass:"cc-mar-t-20"},[s("ve-line",{attrs:{data:t.chartData,"data-zoom":t.dataZoom}})],1)],1)],1)},m=[],g={components:{},data:function(){return this.dataZoom=[{type:"slider",start:0,end:100}],{chartData:{columns:["日期","成本","利润","人力"],rows:[{"日期":"1月1日","成本":15,"利润":12,"人力":82},{"日期":"1月2日","成本":12,"利润":25,"人力":25},{"日期":"1月3日","成本":21,"利润":10,"人力":50},{"日期":"1月4日","成本":41,"利润":32,"人力":22},{"日期":"1月5日","成本":31,"利润":30,"人力":10},{"日期":"1月6日","成本":71,"利润":55,"人力":35}]},rows1:[{"日期":"1月1日","成本":35,"利润":32,"人力":12},{"日期":"1月2日","成本":22,"利润":85,"人力":25},{"日期":"1月3日","成本":51,"利润":40,"人力":10},{"日期":"1月4日","成本":21,"利润":32,"人力":32},{"日期":"1月5日","成本":91,"利润":30,"人力":30},{"日期":"1月6日","成本":71,"利润":55,"人力":35}],rows2:[{"日期":"1月1日","成本":25,"利润":32,"人力":12},{"日期":"1月2日","成本":32,"利润":85,"人力":25},{"日期":"1月3日","成本":21,"利润":60,"人力":10},{"日期":"1月4日","成本":21,"利润":32,"人力":22},{"日期":"1月5日","成本":91,"利润":40,"人力":30},{"日期":"1月6日","成本":71,"利润":55,"人力":55}],rows3:[{"日期":"1月1日","成本":25,"利润":32,"人力":12},{"日期":"1月2日","成本":52,"利润":75,"人力":25},{"日期":"1月3日","成本":21,"利润":20,"人力":20},{"日期":"1月4日","成本":21,"利润":32,"人力":32},{"日期":"1月5日","成本":41,"利润":40,"人力":30},{"日期":"1月6日","成本":61,"利润":55,"人力":45}]}},computed:{},mounted:function(){},methods:{getStoresP:function(){return(100*Math.random()).toFixed(0)},handleStores:function(){var t=Math.ceil(3*Math.random());this.chartData.rows=this["rows"+t]}}},b=g,x=(s("b1e2"),Object(f["a"])(b,_,m,!1,null,"3866ab70",null)),w=x.exports,D={newVisitis:{expectedData:[100,120,161,134,105,160,165],actualData:[120,82,91,154,162,140,145]},messages:{expectedData:[200,192,120,144,160,130,140],actualData:[180,160,151,106,145,150,130]},purchases:{expectedData:[80,100,121,104,105,90,100],actualData:[120,90,100,138,142,130,130]},shoppings:{expectedData:[130,140,141,142,145,150,160],actualData:[120,82,91,154,162,140,130]}},y={name:"DashboardAdmin",components:{PanelGroup:C,CarouselCard:w},data:function(){return{lineChartData:D.newVisitis}},methods:{handleSetLineChartData:function(t){}}},k=y,S=(s("72ff"),Object(f["a"])(k,r,n,!1,null,"587b80b2",null)),L=S.exports,P=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"dashboard-editor-container"},[s("div",{staticClass:" clearfix"},[s("pan-thumb",{staticStyle:{float:"left"},attrs:{image:t.avatar}},[t._v("\n      Your roles:\n      "),t._l(t.roles,(function(a){return s("span",{key:a,staticClass:"pan-info-roles"},[t._v(t._s(a))])}))],2),t._v(" "),s("github-corner",{staticStyle:{position:"absolute",top:"0px",border:"0",right:"0"}}),t._v(" "),s("div",{staticClass:"info-container"},[s("span",{staticClass:"display_name"},[t._v(t._s(t.name))]),t._v(" "),s("span",{staticStyle:{"font-size":"20px","padding-top":"20px",display:"inline-block"}},[t._v("Editor's Dashboard")])])],1),t._v(" "),s("div",[s("img",{staticClass:"emptyGif",attrs:{src:t.emptyGif}})])])},O=[],M=s("3cbc"),A=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{staticClass:"github-corner",attrs:{href:"https://github.com/PanJiaChen/vue-element-admin",target:"_blank","aria-label":"View source on Github"}},[s("svg",{staticStyle:{fill:"#40c9c6",color:"#fff"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[s("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),t._v(" "),s("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),t._v(" "),s("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])])},j=[],E=(s("96f2"),{}),F=Object(f["a"])(E,A,j,!1,null,"09fe1acc",null),Y=F.exports,$={name:"DashboardEditor",components:{PanThumb:M["a"],GithubCorner:Y},data:function(){return{emptyGif:"https://wpimg.wallstcn.com/0e03b7da-db9e-4819-ba10-9016ddfdaed3"}},computed:Object(i["a"])({},Object(l["b"])(["name","avatar","roles"]))},T=$,G=(s("69c2"),Object(f["a"])(T,P,O,!1,null,"e3426062",null)),N=G.exports,z={name:"Dashboard",components:{adminDashboard:L,editorDashboard:N},data:function(){return{currentRole:"adminDashboard"}},computed:Object(i["a"])({},Object(l["b"])(["roles"])),created:function(){this.roles.includes("admin")||(this.currentRole="editorDashboard")}},B=z,I=Object(f["a"])(B,c,e,!1,null,null,null);a["default"]=I.exports},"96f2":function(t,a,s){"use strict";var c=s("d990"),e=s.n(c);e.a},b1e2:function(t,a,s){"use strict";var c=s("c792"),e=s.n(c);e.a},c792:function(t,a,s){},d785:function(t,a,s){},d990:function(t,a,s){},e75e:function(t,a,s){"use strict";var c=s("321c"),e=s.n(c);e.a},f704:function(t,a,s){},f9aa:function(t,a,s){}}]);