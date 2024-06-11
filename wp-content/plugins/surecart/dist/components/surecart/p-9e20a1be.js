import{a as o}from"./p-18e45a13.js";import{s as i}from"./p-a1feb3df.js";import{s as e}from"./p-fc86253d.js";import{r as l,c as d}from"./p-8266bbed.js";import{a as t}from"./p-1c2e2695.js";const u=()=>{var e;return o({path:`surecart/v1/checkouts/${i.checkout_id}/offer_upsell/${null===(e=i.upsell)||void 0===e?void 0:e.id}`,method:"POST",keepalive:!0})},r=async()=>{try{if(!i.checkout_id||"busy"===i.loading)return;i.loading="busy",l();const{checkout:e,...o}=await v({preview:!0});i.checkout=e,i.line_item=o}catch(e){if(console.error(e),((null==e?void 0:e.additional_errors)||[]).find((i=>{var e,o,l;return null===(l=null===(o=null===(e=null==i?void 0:i.data)||void 0===e?void 0:e.options)||void 0===o?void 0:o.purchasable_statuses)||void 0===l?void 0:l.includes("out_of_stock")})))return d({code:"out_of_stock",message:wp.i18n.__("Apologies, this is currently out of stock.","surecart")});if(((null==e?void 0:e.additional_errors)||[]).find((i=>"line_item.upsell.expired"===(null==i?void 0:i.code))))return i.loading="idle",d({code:"expired",message:wp.i18n.__("This offer has expired.","surecart")}),c();d(e)}finally{i.loading="idle"}},s=async()=>{try{if(!i.checkout_id||"busy"===i.loading)return;i.loading="busy",l();const{checkout:e}=await v({preview:!1});n(e)}catch(e){i.loading="idle",d(e)}},c=async()=>{var u,r,c,s,a,v;try{if(!i.checkout_id||"busy"===i.loading)return;i.loading="busy",l();const d=await o({path:t(`surecart/v1/checkouts/${i.checkout_id}/decline_upsell/${null===(u=i.upsell)||void 0===u?void 0:u.id}`,{expand:["checkout","checkout.current_upsell","fees"]}),method:"POST",data:{...null===(c=e[null===(r=i.product)||void 0===r?void 0:r.id])||void 0===c?void 0:c.line_item,price_id:null===(a=null===(s=i.upsell)||void 0===s?void 0:s.price)||void 0===a?void 0:a.id,upsell:null===(v=i.upsell)||void 0===v?void 0:v.id,checkout:i.checkout_id}});n(d)}catch(e){i.loading="idle",d(e)}},v=l=>{var d,u,r,c,n;return o({path:t("surecart/v1/line_items/upsell",{...l,expand:["checkout","checkout.current_upsell","fees","line_item","line_item.price"]}),method:"POST",data:{...null===(u=e[null===(d=i.product)||void 0===d?void 0:d.id])||void 0===u?void 0:u.line_item,price_id:null===(c=null===(r=i.upsell)||void 0===r?void 0:r.price)||void 0===c?void 0:c.id,upsell:null===(n=i.upsell)||void 0===n?void 0:n.id,checkout:i.checkout_id}})},n=e=>{var o,l,d,u,r;if(!(null===(o=e.current_upsell)||void 0===o?void 0:o.permalink)||(null===(l=null==e?void 0:e.current_upsell)||void 0===l?void 0:l.permalink)===(null===(d=i.upsell)||void 0===d?void 0:d.permalink))return i.loading="complete";i.loading="redirecting",window.location.assign(t(null===(u=e.current_upsell)||void 0===u?void 0:u.permalink,{sc_checkout_id:null===(r=i.checkout)||void 0===r?void 0:r.id,sc_form_id:i.form_id}))};export{s as a,c as d,r as p,u as t};