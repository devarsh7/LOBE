import{proxyCustomElement,HTMLElement,h}from"@stencil/core/internal/client";import{d as defineCustomElement$2}from"./sc-tag2.js";const scOrderFulfillmentBadgeCss=":host{display:inline-block}",status={unfulfilled:wp.i18n.__("Unfulfilled","surecart"),fulfilled:wp.i18n.__("Fulfilled","surecart"),on_hold:wp.i18n.__("On Hold","surecart"),scheduled:wp.i18n.__("Scheduled","surecart"),partially_fulfilled:wp.i18n.__("Partially Fulfilled","surecart")},type={unfulfilled:"warning",fulfilled:"success",on_hold:"warning",scheduled:"default",partially_fulfilled:"warning"},ScOrderFulFillmentBadge=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.status=void 0,this.size="medium",this.pill=!1,this.clearable=!1}render(){return h("sc-tag",{type:null==type?void 0:type[null==this?void 0:this.status],pill:this.pill},(null==status?void 0:status[this.status])||this.status)}static get style(){return scOrderFulfillmentBadgeCss}},[1,"sc-order-fulfillment-badge",{status:[1],size:[513],pill:[516],clearable:[4]}]);function defineCustomElement$1(){"undefined"!=typeof customElements&&["sc-order-fulfillment-badge","sc-tag"].forEach((e=>{switch(e){case"sc-order-fulfillment-badge":customElements.get(e)||customElements.define(e,ScOrderFulFillmentBadge);break;case"sc-tag":customElements.get(e)||defineCustomElement$2()}}))}const ScOrderFulfillmentBadge=ScOrderFulFillmentBadge,defineCustomElement=defineCustomElement$1;export{ScOrderFulfillmentBadge,defineCustomElement};