import{r as s,h as i,F as t}from"./p-cc7ce8c7.js";import{a as e}from"./p-b3738db2.js";import{a as r}from"./p-1ccea758.js";import{s as o}from"./p-d93fa5d8.js";import{s as a}from"./p-24f06282.js";import{o as n}from"./p-2f9b1dd9.js";import{f as d}from"./p-a27e9b70.js";import"./p-e64f9fcd.js";import"./p-c06b2e12.js";import"./p-25433d0f.js";import"./p-f70181c4.js";import"./p-4d73f82a.js";import"./p-1c2e2695.js";import"./p-830ab1a3.js";import"./p-a3a138d6.js";import"./p-7ef0f71c.js";import"./p-50da3ba3.js";import"./p-c27fae79.js";const l=(s=[],i,t)=>{var e;return((e=(s||[]).find((s=>(s===null||s===void 0?void 0:s.processor_type)===i&&(s===null||s===void 0?void 0:s.live_mode)===!!(t==="live"))))===null||e===void 0?void 0:e.processor_data)||{}};const c="sc-order-submit{display:block;width:auto;display:grid;gap:var(--sc-form-row-spacing)}.sc-secure-notice{display:flex;justify-content:center}";const p=class{constructor(i){s(this,i);this.loading=undefined;this.paying=undefined;this.type="primary";this.size="medium";this.full=true;this.icon=undefined;this.showTotal=undefined;this.processors=undefined;this.order=undefined;this.currencyCode="usd";this.processor=undefined;this.secureNoticeText=undefined;this.secureNotice=true}cannotShipToLocation(){var s,i;return((s=a===null||a===void 0?void 0:a.checkout)===null||s===void 0?void 0:s.selected_shipping_choice_required)&&!((i=a.checkout)===null||i===void 0?void 0:i.selected_shipping_choice)}renderPayPalButton(s){const{client_id:t,account_id:o,merchant_initiated_enabled:n}=l(r(),"paypal",a.mode);if(!t&&!o)return null;return i("sc-paypal-buttons",{buttons:s,busy:d()||e(),mode:a.mode,order:a.checkout,merchantInitiated:n,"currency-code":a.currencyCode,"client-id":t,"merchant-id":o,label:"checkout",color:"blue"})}render(){if(this.cannotShipToLocation()||e("OUT_OF_STOCK")){return i("sc-button",{type:this.type,size:this.size,full:this.full,loading:this.loading||this.paying,disabled:true},!!this.icon&&i("sc-icon",{name:this.icon,slot:"prefix","aria-hidden":"true"}),i("slot",null,wp.i18n.__("Purchase","surecart")),this.showTotal&&i("span",null," ",i("sc-total",null)),i("sc-visually-hidden",null," ",wp.i18n.__("Press enter to purchase","surecart")))}return i(t,null,o.id==="paypal"&&!(o===null||o===void 0?void 0:o.method)&&this.renderPayPalButton(["paypal"]),o.id==="paypal"&&(o===null||o===void 0?void 0:o.method)==="card"&&this.renderPayPalButton(["card"]),i("sc-button",{hidden:["paypal","paypal-card"].includes(o.id),submit:true,type:this.type,size:this.size,full:this.full,loading:this.loading||this.paying,disabled:this.loading||this.paying||d()||e()||this.cannotShipToLocation()},!!this.icon&&i("sc-icon",{name:this.icon,slot:"prefix","aria-hidden":"true"}),i("slot",null,wp.i18n.__("Purchase","surecart")),this.showTotal&&i("span",null," ",i("sc-total",null)),i("sc-visually-hidden",null," ",wp.i18n.__("Press enter to purchase","surecart"))),this.secureNotice&&location.protocol==="https:"&&i("div",{class:"sc-secure-notice"},i("sc-secure-notice",null,this.secureNoticeText||wp.i18n.__("This is a secure, encrypted payment.","surecart"))))}};n(p,["loading","paying","processors","processor","currencyCode","order"],false);p.style=c;export{p as sc_order_submit};
//# sourceMappingURL=p-52a42a3a.entry.js.map