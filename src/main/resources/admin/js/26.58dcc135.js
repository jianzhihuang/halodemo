"use strict";(self["webpackChunkhalo_admin"]=self["webpackChunkhalo_admin"]||[]).push([[26],{13026:function(e,o,r){r.r(o),r.d(o,{default:function(){return n}});var s=function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("div",{staticClass:"container-wrapper animated fadeIn"},[e._m(0),r("div",[r("a-form-model",{ref:"sendCodeForm",attrs:{model:e.form.model,rules:e.form.sendCodeRules,layout:"vertical"}},[r("a-form-model-item",{attrs:{prop:"username"}},[r("a-input",{attrs:{placeholder:"用户名"},model:{value:e.form.model.username,callback:function(o){e.$set(e.form.model,"username",o)},expression:"form.model.username"}},[r("a-icon",{staticStyle:{color:"rgba(0, 0, 0, 0.25)"},attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),r("a-form-model-item",{attrs:{prop:"email"}},[r("a-input",{attrs:{placeholder:"邮箱"},model:{value:e.form.model.email,callback:function(o){e.$set(e.form.model,"email",o)},expression:"form.model.email"}},[r("a-icon",{staticStyle:{color:"rgba(0, 0, 0, 0.25)"},attrs:{slot:"prefix",type:"mail"},slot:"prefix"})],1)],1)],1),r("a-form-model",{ref:"passwordForm",attrs:{model:e.form.model,rules:e.form.rules,layout:"vertical"}},[r("a-form-model-item",{attrs:{prop:"code"}},[r("a-input",{attrs:{placeholder:"验证码",type:"password"},scopedSlots:e._u([{key:"addonAfter",fn:function(){return[r("a-button",{staticClass:"!p-0 !h-auto",attrs:{type:"link"},on:{click:e.handleSendCode}},[e._v("获取")])]},proxy:!0}]),model:{value:e.form.model.code,callback:function(o){e.$set(e.form.model,"code",o)},expression:"form.model.code"}},[r("a-icon",{staticStyle:{color:"rgba(0, 0, 0, 0.25)"},attrs:{slot:"prefix",type:"safety-certificate"},slot:"prefix"})],1)],1),r("a-form-model-item",{attrs:{prop:"password"}},[r("a-input",{attrs:{autocomplete:"new-password",placeholder:"新密码",type:"password"},model:{value:e.form.model.password,callback:function(o){e.$set(e.form.model,"password",o)},expression:"form.model.password"}},[r("a-icon",{staticStyle:{color:"rgba(0, 0, 0, 0.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1),r("a-form-model-item",{attrs:{prop:"confirmPassword"}},[r("a-input",{attrs:{autocomplete:"new-password",placeholder:"确认密码",type:"password"},model:{value:e.form.model.confirmPassword,callback:function(o){e.$set(e.form.model,"confirmPassword",o)},expression:"form.model.confirmPassword"}},[r("a-icon",{staticStyle:{color:"rgba(0, 0, 0, 0.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1),r("a-form-model-item",[r("a-button",{attrs:{block:!0,type:"primary"},on:{click:e.handleResetPassword}},[e._v("重置密码")])],1)],1),r("router-link",{staticClass:"tip",attrs:{to:{name:"Login"}}},[e._v(" 返回登录")])],1)])},a=[function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("div",{staticClass:"halo-logo"},[r("img",{attrs:{alt:"Halo Logo",src:"/images/logo.svg"}}),r("span",[e._v("重置密码")])])}],t=(r(87591),r(1540)),l={data(){const e=(e,o,r)=>{o&&this.form.model.password!==o?r(new Error("确认密码与新密码不一致")):r()};return{form:{model:{},sendCodeRules:{username:[{required:!0,message:"* 用户名不能为空",trigger:["change"]}],email:[{required:!0,message:"* 电子邮箱地址不能为空",trigger:["change"]}]},rules:{code:[{required:!0,message:"* 验证码不能为空",trigger:["change"]}],password:[{required:!0,message:"* 新密码不能为空",trigger:["change"]},{max:100,min:8,message:"* 密码的字符长度必须在 8 - 100 之间",trigger:["change"]}],confirmPassword:[{required:!0,message:"* 确认密码不能为空",trigger:["change"]},{validator:e,trigger:["change"]}]}}}},methods:{handleSendCode(){this.$refs.sendCodeForm.validate((async e=>{if(e){const e=this.$message.loading("发送中...",0);try{await t.Z.sendResetPasswordCode(this.form.model),this.$message.success("邮件发送成功，五分钟内有效")}catch(o){this.$log.error("Failed send code: ",o)}finally{e()}}}))},handleResetPassword(){this.$refs.sendCodeForm.validate((e=>{e&&this.$refs.passwordForm.validate((async e=>{if(e)try{await t.Z.resetPassword(this.form.model),await this.$router.push({name:"Login"}),this.$message.success("密码重置成功！")}catch(o){this.$log.error("Failed reset password: ",o)}}))}))}}},i=l,m=r(18156),d=(0,m.Z)(i,s,a,!1,null,null,null),n=d.exports}}]);