(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"+bW6":function(t,e,i){(t.exports=i("JPst")(!1)).push([t.i,".app .scroller[data-v-5fe12cf8]{position:relative;height:calc(100vh - 220px);overflow-y:auto}.app .scroller .padder[data-v-5fe12cf8]{padding:20px}.app .scroller .info[data-v-5fe12cf8]{margin-top:20px}.app .scroller .info .actions[data-v-5fe12cf8]{display:flex;justify-content:space-between}.app .scroller .info .category[data-v-5fe12cf8]{margin:20px 0 10px 0;font-size:10px;color:#7a7a7a}.app .scroller .info p[data-v-5fe12cf8]{font-size:12px}.permissions[data-v-5fe12cf8]{display:flex}.permissions .perms-list[data-v-5fe12cf8]{flex:0 0 auto;width:260px;padding:20px;border-right:1px solid #dfe0e1}.permissions .selected-permission[data-v-5fe12cf8]{flex:1;padding:30px}\n",""])},"3lbk":function(t,e,i){"use strict";var s={props:["tabs","state"]},a=(i("dVin"),i("KHd+")),n=Object(a.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"panel-tabs"},t._l(t.tabs,(function(e){return i("figure",{staticClass:"tab-name",class:{active:e.state===t.state},on:{click:function(i){return t.$emit("selected",e.state)}}},[t._v(t._s(e.name))])})),0)}),[],!1,null,"f9b84e78",null);e.a=n.exports},"4HXs":function(t,e,i){(t.exports=i("JPst")(!1)).push([t.i,".panel-tabs[data-v-f9b84e78]{display:flex;flex-direction:row;align-items:center;justify-content:center;padding:0 0 20px;margin:0 20px;border-bottom:1px solid #dfe0e1}.panel-tabs .tab-name[data-v-f9b84e78]{cursor:pointer;font-size:16px;font-weight:bold;font-family:'Poppins', sans-serif;line-height:68px;color:#0799ff;transition:all 0.1s ease;width:100%;text-align:center;border-bottom:1px solid tranparent;margin-bottom:-21px}.panel-tabs .tab-name[data-v-f9b84e78]:hover,.panel-tabs .tab-name.active[data-v-f9b84e78]{color:black;border-bottom:1px solid #0799ff}\n",""])},"8YTa":function(t,e,i){"use strict";var s=i("L2JU");let a;var n={props:["slides","noInfo"],data:()=>({left:0,slideWidth:0}),mounted(){this.$nextTick(()=>{this.setInterval(),this.calcBaseWidth(),window.addEventListener("resize",this.calcBaseWidth)})},destroyed(){clearInterval(a),window.removeEventListener("resize",this.calcBaseWidth)},computed:{...Object(s.d)(["sidebarLocked"]),maxLeft(){return-(this.slides.length-1)*this.slideWidth},slideIndex(){return Math.abs(this.left)/this.slideWidth}},methods:{calcBaseWidth(){this.$nextTick(()=>{this.$refs.base&&(this.slideWidth=this.$refs.base.clientWidth,this.left=0)})},slide(t){t>0?this.left+=this.slideWidth:this.left-=this.slideWidth,this.left<this.maxLeft&&(this.left=0),this.left>0&&(this.left=this.maxLeft),this.setInterval()},setInterval(){clearInterval(a),a=setInterval(()=>{this.slide(-1)},1e4)},goToApp(t){this.$router.push({name:this.RouteNames.APP,params:{applink:t.applink}})}},watch:{window(){this.calcBaseWidth()},sidebarLocked(){setTimeout(()=>{this.calcBaseWidth()},200)}}},o=(i("VG6g"),i("KHd+")),r=Object(o.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{ref:"base",staticClass:"carousel"},[t.slides.length>1?i("section",{staticClass:"go-right icon-right-open-big",on:{click:function(e){return t.slide(-1)}}}):t._e(),t._v(" "),t.slides.length>1?i("section",{staticClass:"go-left icon-left-open-big",on:{click:function(e){return t.slide(1)}}}):t._e(),t._v(" "),t.slides.length?i("section",{staticClass:"slider-container"},[i("section",{staticClass:"slider",style:{left:t.left+"px"}},t._l(t.slides,(function(e,s){return i("section",{staticClass:"slide",style:{left:s*t.slideWidth+"px",width:t.slideWidth+"px"}},[i("section",{staticClass:"image-container",class:{"full-height":t.noInfo}},[i("figure",{staticClass:"bg",style:"background-image:url("+e.img+");"}),t._v(" "),i("figure",{staticClass:"image",style:"background-image:url("+e.img+");"})]),t._v(" "),t.noInfo?t._e():i("section",{staticClass:"info"},[i("section",[i("figure",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),i("figure",{staticClass:"description"},[t._v(t._s(e.description))])]),t._v(" "),i("section",[i("Button",{attrs:{text:"View App",blue:1},nativeOn:{click:function(i){return t.goToApp(e)}}})],1)])])})),0)]):i("section",{staticClass:"slider-container"},[i("section",{staticClass:"slider dummy"},[i("section",{staticClass:"slide",style:{left:0,width:t.slideWidth+"px"}},[t._m(0),t._v(" "),i("section",{staticClass:"info"},[t._m(1),t._v(" "),i("section",[i("Button",{attrs:{blue:1}})],1)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"image-container"},[e("figure",{staticClass:"bg"}),this._v(" "),e("figure",{staticClass:"image"},[e("i",{staticClass:"icon-spin4 animate-spin"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("figure",{staticClass:"name animated-gradient"}),this._v(" "),e("figure",{staticClass:"description animated-gradient"})])}],!1,null,"4398fff8",null);e.a=r.exports},"9aXA":function(t,e,i){var s=i("+bW6");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,i("SZ7m").default)("1980833b",s,!0,{})},Gmfg:function(t,e,i){(t.exports=i("JPst")(!1)).push([t.i,".carousel[data-v-4398fff8]{position:relative;height:300px;width:100%;margin:0 auto;margin-top:1px;max-width:900px}@media (max-width: 920px){.carousel[data-v-4398fff8]{height:440px}}.carousel .go-right[data-v-4398fff8],.carousel .go-left[data-v-4398fff8]{cursor:pointer;position:absolute;color:white;font-size:20px;background:rgba(255,255,255,0.12);width:44px;height:44px;line-height:44px;text-align:center;z-index:3;transition:all 0.12s ease-in-out}.carousel .go-right[data-v-4398fff8]:hover,.carousel .go-left[data-v-4398fff8]:hover{width:40px;background:#fff;color:#0799ff}.carousel .go-left[data-v-4398fff8]{left:0px;top:60%;margin-top:-54px;border-top-right-radius:3px;border-bottom-right-radius:3px}.carousel .go-right[data-v-4398fff8]{right:0px;top:60%;margin-top:-54px;border-top-left-radius:3px;border-bottom-left-radius:3px}.carousel .slider-container[data-v-4398fff8]{position:relative;overflow:hidden;height:300px;width:100%;border-radius:0}@media (max-width: 920px){.carousel .slider-container[data-v-4398fff8]{height:440px}}.carousel .slider[data-v-4398fff8]{position:absolute;top:0;bottom:0;left:0;right:0;transition:all 0.6s ease;transition-property:left}.carousel .slider .slide[data-v-4398fff8]{position:absolute;top:0;height:100%}.carousel .slider .slide .image-container[data-v-4398fff8]{position:absolute;top:0;bottom:80px;left:0;right:0;z-index:1;overflow:hidden;background:#333}.carousel .slider .slide .image-container.full-height[data-v-4398fff8]{bottom:0}.carousel .slider .slide .image-container .bg[data-v-4398fff8]{position:absolute;top:-900px;bottom:-900px;left:-900px;right:-900px;background-size:200px;background-position:center;z-index:1;transform:rotateZ(20deg) scale(1.2);opacity:0.1;transition:1s transform ease}.carousel .slider .slide .image-container .image[data-v-4398fff8]{position:absolute;top:0;bottom:0;left:0;right:0;background-size:contain;background-position:center;background-repeat:no-repeat;margin:20px;z-index:1;transition:1s transform ease}.carousel .slider .slide .image-container.full .bg[data-v-4398fff8]{display:none}.carousel .slider .slide .image-container.full .image[data-v-4398fff8]{margin:0;background-size:cover}.carousel .slider .slide .info[data-v-4398fff8]{position:absolute;bottom:0;left:0;right:0;display:flex;padding:20px;z-index:2;flex-direction:row;justify-content:space-between;align-content:center;border-radius:0;background-color:#0799ff;height:80px}@media (max-width: 920px){.carousel .slider .slide .info[data-v-4398fff8]{height:140px;flex-direction:column}}.carousel .slider .slide .info .name[data-v-4398fff8]{font-size:16px;font-family:'Poppins', sans-serif;font-weight:bold;color:white;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.carousel .slider .slide .info .description[data-v-4398fff8]{font-size:12px;font-weight:bold;color:white;opacity:0.6;font-size:12px;margin-bottom:10px}.carousel .slider:hover .slide .image-container .bg[data-v-4398fff8]{transition:8s transform ease;transform:rotateZ(50deg) scale(0.5)}.carousel .slider.dummy .slide .image-container[data-v-4398fff8]{background-color:#f3f6f7}.carousel .slider.dummy .slide .image-container .image[data-v-4398fff8]{display:flex;justify-content:center;align-items:center;font-size:48px;color:#dfe0e1}.carousel .slider.dummy .slide .info .name[data-v-4398fff8]{padding:5px 50px;margin-bottom:2px}.carousel .slider.dummy .slide .info .description[data-v-4398fff8]{padding:10px 150px}\n",""])},QIy7:function(t,e,i){var s=i("4HXs");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,i("SZ7m").default)("bbbacdd6",s,!0,{})},VG6g:function(t,e,i){"use strict";var s=i("eSad");i.n(s).a},dVin:function(t,e,i){"use strict";var s=i("QIy7");i.n(s).a},eSad:function(t,e,i){var s=i("Gmfg");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,i("SZ7m").default)("2bf51abc",s,!0,{})},gSr8:function(t,e,i){"use strict";var s=i("9aXA");i.n(s).a},kYyy:function(t,e,i){"use strict";i.r(e);var s=i("L2JU"),a=(i("qjwK"),i("3lbk")),n=(i("UYLU"),i("x0xh")),o=i.n(n),r=i("8YTa"),l=i("eOAV"),c=i.n(l),d={components:{Carousel:r.a,PanelTabs:a.a},data:()=>({state:null,selected:null}),computed:{...Object(s.d)(["scatter","dappLogos","dappData"]),...Object(s.c)(["permissions"]),applink(){return this.$route.params.applink},tabs(){return[{name:this.getAppData(this.applink).name,state:this.applink},this.perms.length?{name:"Permissions",state:"permissions"}:null].filter(t=>!!t)},perms(){return this.permissions.filter(t=>t.origin===this.applink)},identityPermission(){return this.perms.find(t=>t.isIdentity)},contractPermissions(){return this.perms.filter(t=>t.isContractAction)},identityRequirementPermissions(){return this.perms.filter(t=>t.isIdentityRequirements)},isIdentity(){return this.selected.isIdentity},isAction(){return this.selected.isContractAction},permissionsList(){return(this.identityPermission?[this.identityPermission]:[]).concat(this.contractPermissions).map(t=>({id:t?t.id:null,title:this.permissionTitle(t),description:this.permissionDescription(t),icon:this.permissionIcon(t)}))}},mounted(){this.state=this.applink,this.selected=this.identityPermission},methods:{getAppData:o.a.getAppData,tabSelected(t){this.state=t},selectPermission(t){this.selected=this.permissions.find(e=>e.id===t.id)},permissionTitle(t){if(t)return t.isIdentity?this.locale(this.langKeys.PERMISSIONS.LoginPermission):`${t.action}`},permissionDescription(t){if(t)return t.isContractAction?t.contract:""},permissionIcon(t){if(t)return t.isIdentity?"icon-user":"icon-flow-tree"},async removeSelected(){return 1===this.perms.length?this.removeAll():(await c.a.removePermission(this.selected),this.perms.length?void(this.selected=this.perms[0]):this.$router.back())},async removeAll(){await c.a.removeAllPermissionsFor(this.applink),this.$router.back()}}},f=(i("gSr8"),i("KHd+")),p=Object(f.a)(d,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"app"},[i("PanelTabs",{attrs:{tabs:t.tabs,state:t.state},on:{selected:t.tabSelected}}),t._v(" "),t.state===t.applink?i("section",{staticClass:"scroller"},[i("section",{staticClass:"padder"},[t.getAppData(t.applink).hasOwnProperty("img")?i("section",{staticClass:"featured"},[i("Carousel",{attrs:{"no-info":!0,slides:[t.getAppData(t.applink)]}})],1):t._e(),t._v(" "),i("section",{staticClass:"info"},[i("section",{staticClass:"actions"},[t.canOpenApp(t.applink)?i("section",[i("Button",{attrs:{text:"Open",blue:!0},nativeOn:{click:function(e){return t.openApp(t.applink)}}})],1):t._e(),t._v(" "),t.permissionsList.length?i("section",[i("Button",{attrs:{text:"Revoke access"},nativeOn:{click:function(e){return t.removeAll(e)}}})],1):t._e()]),t._v(" "),t.getAppData(t.applink).type?i("section",[i("figure",{staticClass:"category"},[t._v(t._s(t.getAppData(t.applink).type))]),t._v(" "),i("p",[t._v(t._s(t.getAppData(t.applink).description))])]):i("section",[i("figure",{staticClass:"category"},[t._v("No Data")]),t._v(" "),i("p",[t._v("This app doesn't have any registered data available.")])])])])]):t._e(),t._v(" "),"permissions"===t.state?i("section",{staticClass:"permissions scroller"},[i("section",{staticClass:"perms-list"},t._l(t.permissionsList,(function(e){return i("section",{staticClass:"badge-item hoverable",class:{active:t.selected.id===e.id},on:{click:function(i){return t.selectPermission(e)}}},[i("section",{staticClass:"details"},[i("figure",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),i("figure",{staticClass:"row",staticStyle:{"margin-top":"0"}},[i("figure",{staticClass:"secondary"},[t._v(t._s(e.description))])])])])})),0),t._v(" "),i("section",{staticClass:"selected-permission"},[t.isIdentity&&t.selected.accounts.length?i("section",{staticClass:"key-val"},[i("figure",[t._v(t._s(t.locale(t.langKeys.PERMISSIONS.AccountsLabel)))]),t._v(" "),i("figure",[t._v(t._s(t.selected.getAccounts().map((function(t){return t.formatted()})).join(", ")))]),t._v(" "),i("br"),t._v(" "),i("figure",[t._v(t._s(t.selected.asIdentityRequirements().personal.concat(t.selected.asIdentityRequirements().location).join(", ")))])]):t._e(),t._v(" "),t.selected.isIdentityRequirements?i("section",{staticClass:"key-val"},[i("figure",[t._v(t._s(t.locale(t.langKeys.PERMISSIONS.RequiredFieldsLabel)))]),t._v(" "),i("figure",[t._v(t._s(t.selected.identityRequirements.join(", ")))])]):t._e(),t._v(" "),t.isAction?i("section",{staticClass:"key-val"},[i("figure",[t._v(t._s(t.locale(t.langKeys.PERMISSIONS.MutableFieldsLabel)))]),t._v(" "),i("figure",[t._v(t._s(t.selected.mutableActionFields.join(", ")))])]):t._e(),t._v(" "),i("br"),t._v(" "),i("br"),t._v(" "),i("section",{staticClass:"action-box"},[i("section",{staticClass:"key-val"},[i("figure",[t._v(t._s(t.locale(t.langKeys.PERMISSIONS.RemoveLabel)))]),t._v(" "),t.isIdentity?i("p",[t._v(t._s(t.locale(t.langKeys.PERMISSIONS.RemoveIdentityText)))]):t._e(),t._v(" "),t.isAction?i("p",[t._v(t._s(t.locale(t.langKeys.PERMISSIONS.RemoveWhitelistLabel)))]):t._e(),t._v(" "),i("br"),t._v(" "),i("Button",{attrs:{text:t.locale(t.langKeys.GENERIC.Remove),red:"1"},nativeOn:{click:function(e){return t.removeSelected(e)}}})],1)])])]):t._e()],1)}),[],!1,null,"5fe12cf8",null);e.default=p.exports}}]);