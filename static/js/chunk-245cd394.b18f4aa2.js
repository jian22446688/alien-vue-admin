(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-245cd394"],{"373f":function(e,o,t){"use strict";var n=t("5de1"),l=t.n(n);l.a},"47b6":function(e,o,t){"use strict";t.r(o);var n=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"app-container"},[t("el-card",[t("h3",{staticClass:"cc-mar-t-2"},[e._v("可复制网页内容")]),e._v(" "),t("div",[e._v("可复制网页内容")])]),e._v(" "),t("el-card",{staticClass:"cc-mar-t-10"},[t("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"活动名称"}},[t("el-input",{model:{value:e.form.name,callback:function(o){e.$set(e.form,"name",o)},expression:"form.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"活动区域"}},[t("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.form.region,callback:function(o){e.$set(e.form,"region",o)},expression:"form.region"}},[t("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),t("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"活动时间"}},[t("quill-editor",{ref:"myQuillEditor",staticStyle:{height:"300px",border:"1px solid #DCDFE6"},attrs:{options:e.editorOption},on:{blur:e.onEditorBlur,focus:e.onEditorFocus,ready:e.onEditorReady},model:{value:e.form.content,callback:function(o){e.$set(e.form,"content",o)},expression:"form.content"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("立即创建")]),e._v(" "),t("el-button",[e._v("取消")])],1)],1)],1)],1)},l=[],r=t("953d"),i=(t("a7539"),t("8096"),t("14e1"),{name:"QuillEditor",components:{quillEditor:r["quillEditor"]},data:function(){return{form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:"",content:""},editorOption:{theme:"bubble",placeholder:"可以复制,网页中内容到这里",modules:{toolbar:[["bold","italic","underline","strike"],[{list:"ordered"},{list:"bullet"}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["link","image"],["clean"]]}}}},computed:{},mounted:function(){},methods:{onSubmit:function(){console.log("submit!")},onEditorBlur:function(e){console.log("editor blur!",e)},onEditorFocus:function(e){console.log("editor focus!",e)},onEditorReady:function(e){console.log("editor ready!",e)},onEditorChange:function(e){var o=e.quill,t=e.html,n=e.text;console.log("editor change!",o,t,n),this.content=t}}}),a=i,c=(t("373f"),t("2877")),s=Object(c["a"])(a,n,l,!1,null,"90d64c4a",null);o["default"]=s.exports},"5de1":function(e,o,t){}}]);