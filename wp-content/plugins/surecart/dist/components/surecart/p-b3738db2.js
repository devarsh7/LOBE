import{s as o,g as i}from"./p-24f06282.js";import{i as v}from"./p-e64f9fcd.js";const d=()=>i(o.formId,o.mode),l=(i="")=>{var d;return i?o.locks.some((o=>o===i)):!!(null===(d=o.locks)||void 0===d?void 0:d.length)},n=i=>{var d,e;return((null===(e=null===(d=o.checkout)||void 0===d?void 0:d.line_items)||void 0===e?void 0:e.data)||[]).find((o=>{var d,e;return(null===(e=null===(d=null==o?void 0:o.price)||void 0===d?void 0:d.product)||void 0===e?void 0:e.id)===i}))},r=()=>{var i,d;return(null===(i=o.checkout)||void 0===i?void 0:i.shipping_enabled)||(null===(d=null==o?void 0:o.checkout)||void 0===d?void 0:d.shipping_address_required)||(null==o?void 0:o.paymentMethodRequiresShipping)},s=()=>{var i,d,e,l;return"address_invalid"===(null===(i=o.checkout)||void 0===i?void 0:i.tax_status)||(null===(d=o.checkout)||void 0===d?void 0:d.shipping_enabled)||(null===(e=o.checkout)||void 0===e?void 0:e.shipping_address_required)||(null===(l=null==o?void 0:o.checkout)||void 0===l?void 0:l.tax_enabled)||(null==o?void 0:o.paymentMethodRequiresShipping)},u=(i="shipping")=>{var d,e;if(!v(null===(d=o.checkout)||void 0===d?void 0:d[`${i}_address`]))return;const{line_1:l,line_2:n,...u}=(null===(e=o.checkout)||void 0===e?void 0:e.shipping_address)||{};return{line1:l,line2:n,...u}};export{l as a,u as b,d as c,r as f,n as g,s};