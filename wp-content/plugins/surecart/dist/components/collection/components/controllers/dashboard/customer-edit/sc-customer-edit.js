import{h}from"@stencil/core";import{__}from"@wordpress/i18n";import apiFetch from"../../../../functions/fetch";import{addQueryArgs}from"@wordpress/url";export class ScCustomerEdit{constructor(){this.heading=void 0,this.customer=void 0,this.successUrl=void 0,this.loading=void 0,this.error=void 0}async handleSubmit(i){var e;this.loading=!0;try{const{email:s,first_name:t,last_name:n,phone:r,billing_different_from_shipping:l,shipping_name:o,shipping_city:a,"tax_identifier.number_type":c,"tax_identifier.number":d,shipping_country:u,shipping_line_1:h,shipping_postal_code:p,shipping_state:_,billing_name:m,billing_city:g,billing_country:v,billing_line_1:b,billing_postal_code:y,billing_state:f}=await i.target.getFormJson();this.customer.billing_address={name:m,city:g,country:v,line_1:b,postal_code:y,state:f},this.customer.shipping_address={name:o,city:a,country:u,line_1:h,postal_code:p,state:_},await apiFetch({path:addQueryArgs(`surecart/v1/customers/${null===(e=this.customer)||void 0===e?void 0:e.id}`,{expand:["tax_identifier"]}),method:"PATCH",data:{email:s,first_name:t,last_name:n,phone:r,billing_matches_shipping:"on"!==l,shipping_address:this.customer.shipping_address,billing_address:this.customer.billing_address,...d&&c?{tax_identifier:{number:d,number_type:c}}:{}}}),this.successUrl?window.location.assign(this.successUrl):this.loading=!1}catch(i){this.error=(null==i?void 0:i.message)||__("Something went wrong","surecart"),this.loading=!1}}render(){var i,e,s,t,n,r,l,o,a,c,d,u;return h("sc-dashboard-module",{class:"customer-edit",error:this.error},h("span",{slot:"heading"},this.heading||__("Update Billing Details","surecart")," ",!(null===(i=null==this?void 0:this.customer)||void 0===i?void 0:i.live_mode)&&h("sc-tag",{type:"warning",size:"small"},__("Test","surecart"))),h("sc-card",null,h("sc-form",{onScFormSubmit:i=>this.handleSubmit(i)},h("sc-columns",{style:{"--sc-column-spacing":"var(--sc-spacing-medium)"}},h("sc-column",null,h("sc-input",{label:__("First Name","surecart"),name:"first_name",value:null===(e=this.customer)||void 0===e?void 0:e.first_name})),h("sc-column",null,h("sc-input",{label:__("Last Name","surecart"),name:"last_name",value:null===(s=this.customer)||void 0===s?void 0:s.last_name}))),h("sc-column",null,h("sc-phone-input",{label:__("Phone","surecart"),name:"phone",value:null===(t=this.customer)||void 0===t?void 0:t.phone})),h("div",null,h("sc-address",{label:__("Shipping Address","surecart"),showName:!0,address:{...null===(n=this.customer)||void 0===n?void 0:n.shipping_address},required:!1,names:{name:"shipping_name",country:"shipping_country",line_1:"shipping_line_1",line_2:"shipping_line_2",city:"shipping_city",postal_code:"shipping_postal_code",state:"shipping_state"}})),h("div",null,h("sc-switch",{name:"billing_different_from_shipping",checked:!(null===(r=this.customer)||void 0===r?void 0:r.billing_matches_shipping),onScChange:i=>{this.customer={...this.customer,billing_matches_shipping:!i.target.checked}},value:"on"},__("Billing address is different from shipping","surecart"))),h("div",{style:{display:(null===(l=this.customer)||void 0===l?void 0:l.billing_matches_shipping)?"none":"block"}},h("sc-address",{label:__("Billing Address","surecart"),showName:!0,address:{...null===(o=this.customer)||void 0===o?void 0:o.billing_address},names:{name:"billing_name",country:"billing_country",line_1:"billing_line_1",line_2:"billing_line_2",city:"billing_city",postal_code:"billing_postal_code",state:"billing_state"},required:!0})),h("sc-tax-id-input",{show:!0,number:null===(c=null===(a=this.customer)||void 0===a?void 0:a.tax_identifier)||void 0===c?void 0:c.number,type:null===(u=null===(d=this.customer)||void 0===d?void 0:d.tax_identifier)||void 0===u?void 0:u.number_type}),h("div",null,h("sc-button",{type:"primary",full:!0,submit:!0},__("Save","surecart"))))),this.loading&&h("sc-block-ui",{spinner:!0}))}static get is(){return"sc-customer-edit"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-customer-edit.scss"]}}static get styleUrls(){return{$:["sc-customer-edit.css"]}}static get properties(){return{heading:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"heading",reflect:!1},customer:{type:"unknown",mutable:!0,complexType:{original:"Customer",resolved:"Customer",references:{Customer:{location:"import",path:"../../../../types"}}},required:!1,optional:!1,docs:{tags:[],text:""}},successUrl:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"success-url",reflect:!1}}}static get states(){return{loading:{},error:{}}}}