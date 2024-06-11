"use strict";(self.webpackChunk_surecart_surecart=self.webpackChunk_surecart_surecart||[]).push([[6717],{1494:function(e,i,t){t.d(i,{o:function(){return o}});var n=t(8860),o=function(e,i,t){void 0===t&&(t=!0);var o="Function"===e.constructor.name?e.prototype:e,s=o.componentWillLoad;o.componentWillLoad=function(){var e,o=this,l=(0,n.a)(this),u={promise:new Promise((function(i){e=i})),resolve:e},c=new CustomEvent("openWormhole",{bubbles:!0,composed:!0,detail:{consumer:this,fields:i,updater:function(e,i){(e in l?l:o)[e]=i},onOpen:u}});l.dispatchEvent(c);var a=function(){if(s)return s.call(o)};return t?u.promise.then((function(){return a()})):a()}}},6717:function(e,i,t){t.r(i),t.d(i,{sc_donation_choices:function(){return r}});var n=t(5861),o=t(5671),s=t(3144),l=t(1284),u=t.n(l),c=t(8860),a=t(1494),r=function(){function e(i){(0,o.Z)(this,e),(0,c.r)(this,i),this.scRemoveLineItem=(0,c.c)(this,"scRemoveLineItem",7),this.scUpdateLineItem=(0,c.c)(this,"scUpdateLineItem",7),this.scAddLineItem=(0,c.c)(this,"scAddLineItem",7),this.priceId=void 0,this.defaultAmount=void 0,this.currencyCode="usd",this.lineItems=[],this.loading=void 0,this.busy=void 0,this.removeInvalid=!0,this.label=void 0,this.lineItem=void 0,this.error=void 0,this.showCustomAmount=void 0}var i;return(0,s.Z)(e,[{key:"reportValidity",value:(i=(0,n.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.input){e.next=2;break}return e.abrupt("return",!0);case 2:return e.abrupt("return",this.input.shadowRoot.querySelector("sc-input").reportValidity());case 3:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})},{key:"handleChange",value:function(){var e=Array.from(this.getChoices()).find((function(e){return e.checked}));this.showCustomAmount="ad_hoc"===e.value,isNaN(parseInt(e.value))||this.scUpdateLineItem.emit({price_id:this.priceId,quantity:1,ad_hoc_amount:parseInt(e.value)})}},{key:"handleCustomAmountToggle",value:function(e){var i=this;e&&setTimeout((function(){var e,t;null===(t=null===(e=i.input)||void 0===e?void 0:e.triggerFocus)||void 0===t||t.call(e)}),50)}},{key:"handleLineItemsChange",value:function(){var e,i=this;(null===(e=this.lineItems)||void 0===e?void 0:e.length)&&(this.lineItem=(this.lineItems||[]).find((function(e){return e.price.id===i.priceId})))}},{key:"handleLineItemChange",value:function(e){this.removeInvalid&&this.removeInvalidPrices();var i=this.getChoices(),t=!1;i.forEach((function(i){isNaN(parseInt(i.value))||i.disabled||(parseInt(i.value)===(null==e?void 0:e.ad_hoc_amount)?(i.checked=!0,t=!0):i.checked=!1)})),this.showCustomAmount=!t,t||(this.el.querySelector('sc-choice[value="ad_hoc"]').checked=!0)}},{key:"componentWillLoad",value:function(){this.handleLineItemsChange()}},{key:"selectDefaultChoice",value:function(){var e=this.getChoices();e.length&&(e[0].checked=!0)}},{key:"getChoices",value:function(){return this.el.querySelectorAll("sc-choice")||[]}},{key:"removeInvalidPrices",value:function(){var e=this;this.lineItem&&this.getChoices().forEach((function(i){var t,n,o,s,l,u,c,a;return(null===(n=null===(t=e.lineItem)||void 0===t?void 0:t.price)||void 0===n?void 0:n.ad_hoc_max_amount)&&parseInt(i.value)>(null===(s=null===(o=e.lineItem)||void 0===o?void 0:o.price)||void 0===s?void 0:s.ad_hoc_max_amount)||(null===(u=null===(l=e.lineItem)||void 0===l?void 0:l.price)||void 0===u?void 0:u.ad_hoc_min_amount)&&parseInt(i.value)<(null===(a=null===(c=e.lineItem)||void 0===c?void 0:c.price)||void 0===a?void 0:a.ad_hoc_min_amount)?(i.style.display="none",void(i.disabled=!0)):(i.style.display="flex",void(i.disabled=!1))}))}},{key:"updateCustomAmount",value:function(){var e,i,t;this.input.value!==(null===(t=null===(i=null===(e=this.lineItem)||void 0===e?void 0:e.ad_hoc_amount)||void 0===i?void 0:i.toString)||void 0===t?void 0:t.call(i))&&(this.input.value?this.scUpdateLineItem.emit({price_id:this.priceId,quantity:1,ad_hoc_amount:parseInt(this.input.value)}):this.scRemoveLineItem.emit({price_id:this.priceId,quantity:1}))}},{key:"render",value:function(){var e,i,t,n=this;return this.loading?(0,c.h)("div",{class:"sc-donation-choices"},(0,c.h)("sc-skeleton",{style:{width:"20%",display:"inline-block"}}),(0,c.h)("sc-skeleton",{style:{width:"60%",display:"inline-block"}}),(0,c.h)("sc-skeleton",{style:{width:"40%",display:"inline-block"}})):(0,c.h)("div",{class:"sc-donation-choices"},(0,c.h)("sc-choices",{label:this.label,"auto-width":!0},(0,c.h)("slot",null)),this.showCustomAmount&&(0,c.h)("div",{class:"sc-donation-choices__form"},(0,c.h)("sc-price-input",{ref:function(e){return n.input=e},required:!0,currencyCode:this.currencyCode,label:"Enter an amount",value:null===(t=null===(i=null===(e=this.lineItem)||void 0===e?void 0:e.ad_hoc_amount)||void 0===i?void 0:i.toString)||void 0===t?void 0:t.call(i)}),(0,c.h)("sc-button",{type:"primary",onClick:function(){return n.updateCustomAmount()},full:!0,busy:this.busy},wp.i18n.__("Update","surecart"))),this.busy&&(0,c.h)("sc-block-ui",{style:{zIndex:"9"}}))}},{key:"el",get:function(){return(0,c.a)(this)}}],[{key:"watchers",get:function(){return{showCustomAmount:["handleCustomAmountToggle"],lineItems:["handleLineItemsChange"],lineItem:["handleLineItemChange"]}}}]),e}();(0,a.o)(r,["lineItems","loading","busy","currencyCode"],!1),r.style=":host{display:block}.sc-donation-choices{display:grid;gap:var(--sc-spacing-small);position:relative}.sc-donation-choices__form{display:grid;gap:var(--sc-spacing-small)}"}}]);