(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{"3lbk":function(a,e,t){"use strict";var n={props:["tabs","state"]},c=(t("dVin"),t("KHd+")),s=Object(c.a)(n,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("section",{staticClass:"panel-tabs"},a._l(a.tabs,(function(e){return t("figure",{staticClass:"tab-name",class:{active:e.state===a.state},on:{click:function(t){return a.$emit("selected",e.state)}}},[a._v(a._s(e.name))])})),0)}),[],!1,null,"f9b84e78",null);e.a=s.exports},"4HXs":function(a,e,t){(a.exports=t("JPst")(!1)).push([a.i,".panel-tabs[data-v-f9b84e78]{display:flex;flex-direction:row;align-items:center;justify-content:center;padding:0 0 20px;margin:0 20px;border-bottom:1px solid #dfe0e1}.panel-tabs .tab-name[data-v-f9b84e78]{cursor:pointer;font-size:16px;font-weight:bold;font-family:'Poppins', sans-serif;line-height:68px;color:#0799ff;transition:all 0.1s ease;width:100%;text-align:center;border-bottom:1px solid tranparent;margin-bottom:-21px}.panel-tabs .tab-name[data-v-f9b84e78]:hover,.panel-tabs .tab-name.active[data-v-f9b84e78]{color:black;border-bottom:1px solid #0799ff}\n",""])},QIy7:function(a,e,t){var n=t("4HXs");"string"==typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);(0,t("SZ7m").default)("bbbacdd6",n,!0,{})},Yf4u:function(a,e,t){"use strict";var n=t("iLWS");t.n(n).a},d759:function(a,e,t){"use strict";t.r(e);var n=t("L2JU"),c=t("qjwK"),s=t("3lbk"),o=t("diYo"),i=t.n(o),r=t("KLk5"),u=t.n(r),l=t("TmN8"),p=t.n(l),d=t("IMve"),f=t.n(d),m=t("rt1w"),h=t("5t91"),x=t("IfgB"),b=t("Gbp+"),g={components:{TokenList:h.a,TokenGraph:m.a,PanelTabs:s.a},data:()=>({filteredBalances:null,actionsMenu:!1}),computed:{...Object(n.d)(["resources","balances"]),...Object(n.c)(["accounts","displayCurrency"]),tabs(){return[{name:this.account.sendable(),state:this.account.sendable()}]},account(){return this.accounts.find(a=>a.unique()===this.$route.params.unique)},usesResources(){return i.a.usesResources(this.account)},accountResources(){const a=this.resources[this.account.identifiable()];return a||null},accountActions(){const a=f.a.plugin(this.account.blockchain());return a.hasAccountActions()?a.accountActions(this.account):null}},mounted(){window.addEventListener("click",this.handleClick),setTimeout(()=>{i.a.cacheResourceFor(this.account),u.a.loadBalancesFor(this.account)},250)},destroyed(){window.removeEventListener("click",this.handleClick)},methods:{handleClick(a){const e=a.path.map(a=>a.className);!this.actionsMenu||e.includes("action-menu")||e.includes("button fas fa-caret-square-down")||(this.actionsMenu=null)},fiatSymbol:p.a.fiatSymbol,async moderateResource(a){new Promise(async e=>{const{name:t}=a,n=a=>e(a);["CPU","NET"].includes(t)&&x.a.push(b.a.eosModerateCpuNet(this.account,n)),"RAM"===t&&x.a.push(b.a.eosModerateRam(this.account,n)),"Refund"===t&&f.a.plugin(this.account.blockchain()).refund(this.account).then(a=>n(a)).catch(a=>{console.error(a),n(null)})}).then(async a=>{a&&(x.a.push(b.a.transactionSuccess(this.account.blockchain(),a)),this[c.ADD_RESOURCES]({acc:this.account.identifiable(),res:await i.a.getResourcesFor(this.account)}),await u.a.loadBalancesFor(this.account))})},copyAuthKey(a){this.copyText(a.publicKey)},actionText(a){switch(a.type){case"unlink_account":return"Unlink Account";case"change_permissions":return"Change Permissions";case"proxy_vote":return"Proxy Vote";case"create_account":return"Create Account"}},actionIcon(a){switch(a.type){case"unlink_account":return"icon-trash";case"change_permissions":return"icon-key";case"proxy_vote":return"icon-heart-1";case"create_account":return"icon-user-add"}},async commitAction(a){const e=f.a.plugin(this.account.blockchain());switch(a.type){case"unlink_account":return x.a.push(b.a.unlinkAccount(this.account,a=>{a&&this.$router.back()}));case"change_permissions":return x.a.push(b.a.verifyPassword(a=>{if(!a)return!1;x.a.push(b.a.eosChangePermissions(this.account,async a=>{await e.changePermissions(this.account,a)}))}));case"proxy_vote":return x.a.push(b.a.eosProxyVotes(this.account,()=>{}));case"create_account":return x.a.push(b.a.eosCreateAccount(this.account,()=>{}));default:return""}},...Object(n.b)([c.ADD_RESOURCES])}},w=(t("Yf4u"),t("KHd+")),v=Object(w.a)(g,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("section",[a.account?t("section",{staticClass:"account"},[t("section",{staticClass:"manage"},[t("div",{staticClass:"wrapper"},[t("section",{staticClass:"details"},[t("figure",{staticClass:"blockchain",class:"token-"+a.account.blockchain()+"-"+a.account.blockchain()}),a._v(" "),t("figure",{staticClass:"name selectable"},[a._v(a._s(a.account.sendable()))]),a._v(" "),t("figure",{staticClass:"network"},[a._v(a._s(a.account.network().name))]),a._v(" "),t("figure",{staticClass:"permissions"},a._l(a.account.authorities(),(function(e){return t("figure",{staticClass:"permission",class:{red:"owner"===e.authority},on:{click:function(t){return a.copyAuthKey(e)}}},[a._v("\n                            "+a._s(e.authority)+" permission\n                        ")])})),0)]),a._v(" "),t("figure",{staticClass:"actions account-actions"},[t("figure",{staticClass:"button fas fa-caret-square-down",on:{click:function(e){a.actionsMenu=!a.actionsMenu}}}),a._v(" "),t("section",{staticClass:"action-menu",class:{hidden:!a.actionsMenu}},a._l(a.accountActions,(function(e){return t("section",{key:e.id,staticClass:"item",on:{click:function(t){return a.commitAction(e)}}},[t("i",{class:a.actionIcon(e)}),a._v("\n                            "+a._s(a.actionText(e))+"\n                        ")])})),0)])]),a._v(" "),t("div",{staticClass:"flex-wrapper"},[a.usesResources?t("section",{staticClass:"resources"},[a.accountResources?a._e():t("section",{staticClass:"loading"},[t("figure",{staticClass:"spinner icon-spin4 animate-spin"})]),a._v(" "),a._l(a.accountResources,(function(e){return t("section",{staticClass:"resource"},[t("figure",{staticClass:"type"},[a._v(a._s(e.name))]),a._v(" "),t("i",{class:{"fad fa-check":e.percentage<=50,"fas fa-exclamation-triangle red":e.percentage>50}}),a._v(" "),t("figure",{staticClass:"percentage"},[a._v(a._s(e.text?e.text:parseFloat(e.percentage).toFixed(2)+"%"))]),a._v(" "),t("figure",{staticClass:"action"},[t("Button",{attrs:{white:"1",disabled:!e.actionable,text:e.actionText},nativeOn:{click:function(t){return a.moderateResource(e)}}})],1)])}))],2):a._e()])]),a._v(" "),t("section",{staticClass:"assets"},[t("section",{staticClass:"fiat-title"},[t("h5",[a._v("Total Fiat Balance")]),a._v(" "),t("h3",[a._v(a._s(a.fiatSymbol(a.displayCurrency))+a._s(a.formatNumber(a.account.totalFiatBalance(),!0)))])]),a._v(" "),t("TokenGraph",{attrs:{balances:a.filteredBalances||a.account.tokens()}}),a._v(" "),t("TokenList",{attrs:{balances:a.account.tokens()},on:{balances:function(e){return a.filteredBalances=e}}})],1)]):a._e()])}),[],!1,null,"20a8be67",null);e.default=v.exports},dVin:function(a,e,t){"use strict";var n=t("QIy7");t.n(n).a},hCJR:function(a,e,t){(a.exports=t("JPst")(!1)).push([a.i,".account[data-v-20a8be67]{height:calc(100vh - 60px - 80px);display:flex;flex-direction:column;overflow-y:auto}.account .manage[data-v-20a8be67]{padding:0;height:calc(calc(100vh - 0px - 80px));position:relative;border-radius:0;margin:20px;margin-top:0;background:#0799ff}@media (max-width: 600px){.account .manage[data-v-20a8be67]{border-radius:0 0 0 0;margin:0 0 20px}}.account .manage .account-actions[data-v-20a8be67]{width:44px;height:44px;background:rgba(255,255,255,0.12);display:block;position:absolute;top:20px;right:20px;cursor:pointer;padding-right:0}.account .manage .account-actions .button[data-v-20a8be67]{width:44px;height:44px;color:white;line-height:44px;text-align:center}.account .manage .account-actions .action-menu[data-v-20a8be67]{color:#333}.account .manage .wrapper .details[data-v-20a8be67]{padding:20px 0;display:flex;align-items:center;justify-content:center;flex-direction:column}.account .manage .wrapper .details .blockchain[data-v-20a8be67]{font-size:80px;color:white}.account .manage .wrapper .details .name[data-v-20a8be67]{font-size:24px;font-family:'Poppins', sans-serif;font-weight:bold;text-align:center;max-width:80%;color:white}.account .manage .wrapper .details .network[data-v-20a8be67]{font-size:13px;margin-top:5px;color:white}.account .manage .wrapper .details .permissions[data-v-20a8be67]{display:flex;margin-top:15px}.account .manage .wrapper .details .permissions .permission[data-v-20a8be67]{cursor:pointer;padding:6px 12px;background:black;color:#fff;font-size:12px;font-weight:bold}.account .manage .wrapper .details .permissions .permission.red[data-v-20a8be67]{background:#ff0707}.account .manage .flex-wrapper[data-v-20a8be67]{display:flex;flex-direction:row}.account .manage .flex-wrapper .resources[data-v-20a8be67]{padding:0 20px 40px 20px;display:flex;justify-content:center;width:100%}@media (max-width: 600px){.account .manage .flex-wrapper .resources[data-v-20a8be67]{flex-direction:column}}.account .manage .flex-wrapper .resources .loading[data-v-20a8be67]{font-size:36px;color:white;display:flex;align-items:center;justify-content:center;width:100%}.account .manage .flex-wrapper .resources .resource[data-v-20a8be67]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 20px}@media (max-width: 600px){.account .manage .flex-wrapper .resources .resource[data-v-20a8be67]{flex-direction:row;flex-grow:1;align-items:center;justify-content:space-evenly;padding:10px 0}}.account .manage .flex-wrapper .resources .resource i[data-v-20a8be67]{display:flex;justify-content:center;align-items:center;width:44px;height:44px;color:#0799ff;font-size:22px;background:white;border-radius:50%}@media (max-width: 600px){.account .manage .flex-wrapper .resources .resource i[data-v-20a8be67]{width:28px;height:28px;font-size:18px}}.account .manage .flex-wrapper .resources .resource i.red[data-v-20a8be67]{color:#ff0707;border-color:#ff0707;font-size:20px;margin-top:-2px}@media (max-width: 600px){.account .manage .flex-wrapper .resources .resource i.red[data-v-20a8be67]{font-size:16px;margin-top:-4px}}.account .manage .flex-wrapper .resources .resource .type[data-v-20a8be67]{margin-bottom:10px;color:white;font-size:18px;font-family:'Poppins', sans-serif;font-weight:bold}@media (max-width: 600px){.account .manage .flex-wrapper .resources .resource .type[data-v-20a8be67]{margin:0;font-size:13px}}.account .manage .flex-wrapper .resources .resource .percentage[data-v-20a8be67]{font-size:13px;margin-top:10px;font-family:'Poppins', sans-serif;font-weight:bold;color:white}@media (max-width: 600px){.account .manage .flex-wrapper .resources .resource .percentage[data-v-20a8be67]{margin:0}}.account .manage .flex-wrapper .resources .resource .action[data-v-20a8be67]{margin-top:10px;color:#0799ff}@media (max-width: 600px){.account .manage .flex-wrapper .resources .resource .action[data-v-20a8be67]{margin:0}}.account .manage .flex-wrapper .actions[data-v-20a8be67]{padding:30px;height:calc(calc(100vh - 0px - 80px) - 360px);overflow-y:auto;width:100%}.account .manage .flex-wrapper .actions .action[data-v-20a8be67]{display:flex;margin-bottom:10px;align-items:center}.account .manage .flex-wrapper .actions .action .icon[data-v-20a8be67]{height:35px;width:35px;border-radius:50%;background:#0799ff;color:#fff;display:flex;justify-content:center;align-items:center}.account .manage .flex-wrapper .actions .action .icon.red[data-v-20a8be67]{background:#ff0707}.account .manage .flex-wrapper .actions .action .name[data-v-20a8be67]{padding:0 10px;flex:1;font-size:10px;font-weight:bold}.account .manage .flex-wrapper .actions .action button[data-v-20a8be67]{min-width:80px}.account .assets[data-v-20a8be67]{flex:1;position:relative}.account .assets .fiat-title[data-v-20a8be67]{position:absolute;left:20px;top:0;z-index:1}.account .assets .token-list .tokens[data-v-20a8be67]{height:auto}\n",""])},iLWS:function(a,e,t){var n=t("hCJR");"string"==typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);(0,t("SZ7m").default)("046cfd8c",n,!0,{})}}]);