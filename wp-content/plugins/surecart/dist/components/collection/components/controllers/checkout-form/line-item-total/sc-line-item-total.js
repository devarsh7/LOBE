import{Fragment,h}from"@stencil/core";import{__}from"@wordpress/i18n";import{formBusy}from"@store/form/getters";import{state as checkoutState}from"@store/checkout";export class ScLineItemTotal{constructor(){this.order_key={total:"total_amount",subtotal:"subtotal_amount",amount_due:"amount_due"},this.total="total",this.size=void 0,this.checkout=void 0}hasInstallmentPlan(t){return(null==t?void 0:t.full_amount)!==(null==t?void 0:t.subtotal_amount)}hasSubscription(t){var e;return((null===(e=null==t?void 0:t.line_items)||void 0===e?void 0:e.data)||[]).some((t=>{var e,l,i;return"month"===(null===(e=null==t?void 0:t.price)||void 0===e?void 0:e.recurring_interval)&&!!(null===(l=null==t?void 0:t.price)||void 0===l?void 0:l.recurring_interval)&&!(null===(i=null==t?void 0:t.price)||void 0===i?void 0:i.recurring_period_count)}))}renderLineItemTitle(t){return"total"===this.total&&this.hasInstallmentPlan(t)?h("span",{slot:"title"},h("slot",{name:"first-payment-total-description"},__("Subtotal","surecart"))):h("span",{slot:"title"},h("slot",{name:"title"}))}renderLineItemDescription(t){return"subtotal"===this.total&&this.hasInstallmentPlan(t)?h("span",{slot:"description"},h("slot",{name:"first-payment-subtotal-description"},__("Initial Payment","surecart"))):h("span",{slot:"description"},h("slot",{name:"description"}))}render(){var t;const e=this.checkout||(null==checkoutState?void 0:checkoutState.checkout);return formBusy()&&!(null==e?void 0:e[null===(t=null==this?void 0:this.order_key)||void 0===t?void 0:t[null==this?void 0:this.total]])?h("sc-line-item",null,h("sc-skeleton",{slot:"title",style:{width:"120px",display:"inline-block"}}),h("sc-skeleton",{slot:"price",style:{width:"70px",display:"inline-block",height:"large"===this.size?"40px":"","--border-radius":"6px"}})):(null==e?void 0:e.currency)?"total"===this.total&&(null==e?void 0:e.total_amount)!==(null==e?void 0:e.amount_due)?h("div",{class:"line-item-total__group"},h("sc-line-item",null,h("span",{slot:"description"},this.hasInstallmentPlan(e)?this.renderLineItemTitle(e):h(Fragment,null,h("slot",{name:"title"}),h("slot",{name:"description"}))),h("span",{slot:"price"},h("sc-total",{order:e,total:this.total}))),!!e.trial_amount&&h("sc-line-item",null,h("span",{slot:"description"},h("slot",{name:"free-trial-description"},__("Free Trial","surecart"))),h("span",{slot:"price"},h("sc-format-number",{type:"currency",value:e.trial_amount,currency:e.currency}))),h("sc-line-item",{style:{"--price-size":"var(--sc-font-size-x-large)"}},this.hasSubscription(e)?h("span",{slot:"title"},h("slot",{name:"subscription-title"},__("Total Due Today","surecart"))):h("span",{slot:"title"},h("slot",{name:"due-amount-description"},__("Amount Due","surecart"))),h("span",{slot:"price"},h("sc-format-number",{type:"currency",currency:null==e?void 0:e.currency,value:null==e?void 0:e.amount_due})))):h(Fragment,null,"subtotal"===this.total&&this.hasInstallmentPlan(e)&&h("sc-line-item",{style:"large"===this.size?{"--price-size":"var(--sc-font-size-x-large)"}:{}},h("span",{slot:"description"},h("slot",{name:"total-payments-description"},__("Total Installment Payments","surecart"))),h("span",{slot:"price"},h("sc-format-number",{type:"currency",value:null==e?void 0:e.full_amount,currency:(null==e?void 0:e.currency)||"usd"}))),h("sc-line-item",{style:"large"===this.size?{"--price-size":"var(--sc-font-size-x-large)"}:{}},this.renderLineItemTitle(e),this.renderLineItemDescription(e),h("span",{slot:"price"},!!(null==e?void 0:e.total_savings_amount)&&"total"===this.total&&h("sc-format-number",{class:"scratch-price",type:"currency",value:-(null==e?void 0:e.total_savings_amount)+(null==e?void 0:e.total_amount),currency:(null==e?void 0:e.currency)||"usd"}),h("sc-total",{class:"total-price",order:e,total:this.total})))):void 0}static get is(){return"sc-line-item-total"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-line-item-total.scss"]}}static get styleUrls(){return{$:["sc-line-item-total.css"]}}static get properties(){return{total:{type:"string",mutable:!1,complexType:{original:"'total' | 'subtotal'",resolved:'"subtotal" | "total"',references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"total",reflect:!1,defaultValue:"'total'"},size:{type:"string",mutable:!1,complexType:{original:"'large' | 'medium'",resolved:'"large" | "medium"',references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"size",reflect:!1},checkout:{type:"unknown",mutable:!1,complexType:{original:"Checkout",resolved:"Checkout",references:{Checkout:{location:"import",path:"../../../../types"}}},required:!1,optional:!1,docs:{tags:[],text:""}}}}}