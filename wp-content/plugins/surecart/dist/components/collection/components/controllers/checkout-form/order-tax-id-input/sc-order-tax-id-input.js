import{h}from"@stencil/core";import{state as checkoutState}from"@store/checkout";import{createOrUpdateCheckout}from"../../../../services/session";import{formBusy}from"@store/form/getters";import{createErrorNotice}from"@store/notices/mutations";import{updateFormState}from"@store/form/mutations";export class ScOrderTaxIdInput{constructor(){this.show=!1,this.otherLabel=void 0,this.caGstLabel=void 0,this.auAbnLabel=void 0,this.gbVatLabel=void 0,this.euVatLabel=void 0,this.helpText=void 0,this.taxIdTypes=void 0,this.taxIdTypesData=[]}handleTaxIdTypesChange(){this.taxIdTypesData="string"==typeof this.taxIdTypes?JSON.parse(this.taxIdTypes):this.taxIdTypes}async reportValidity(){return this.input.reportValidity()}getStatus(){var e,t,r,a,i;return"eu_vat"!==(null===(t=null===(e=checkoutState.checkout)||void 0===e?void 0:e.tax_identifier)||void 0===t?void 0:t.number_type)||"apply_reverse_charge"===(null===(r=checkoutState.taxProtocol)||void 0===r?void 0:r.eu_vat_unverified_behavior)?"unknown":(null===(i=null===(a=checkoutState.checkout)||void 0===a?void 0:a.tax_identifier)||void 0===i?void 0:i.eu_vat_verified)?"valid":"invalid"}async updateOrder(e){try{updateFormState("FETCH"),checkoutState.checkout=await createOrUpdateCheckout({id:checkoutState.checkout.id,data:{tax_identifier:e}}),updateFormState("RESOLVE")}catch(e){console.error(e),createErrorNotice(e),updateFormState("REJECT")}}componentWillLoad(){this.handleTaxIdTypesChange()}required(){var e,t,r;return(null===(e=checkoutState.taxProtocol)||void 0===e?void 0:e.eu_vat_required)&&"eu_vat"===(null===(r=null===(t=checkoutState.checkout)||void 0===t?void 0:t.tax_identifier)||void 0===r?void 0:r.number_type)}render(){var e,t,r,a,i,o,s;return h("sc-tax-id-input",{ref:e=>this.input=e,show:this.show,number:null===(t=null===(e=checkoutState.checkout)||void 0===e?void 0:e.tax_identifier)||void 0===t?void 0:t.number,type:(null===(a=null===(r=checkoutState.checkout)||void 0===r?void 0:r.tax_identifier)||void 0===a?void 0:a.number_type)||(null===(i=this.taxIdTypesData)||void 0===i?void 0:i[0])||"eu_vat",country:null===(s=null===(o=checkoutState.checkout)||void 0===o?void 0:o.shipping_address)||void 0===s?void 0:s.country,status:this.getStatus(),loading:formBusy(),onScChange:e=>{e.stopImmediatePropagation(),this.updateOrder(e.detail)},otherLabel:this.otherLabel,caGstLabel:this.caGstLabel,auAbnLabel:this.auAbnLabel,gbVatLabel:this.gbVatLabel,euVatLabel:this.euVatLabel,help:this.helpText,taxIdTypes:this.taxIdTypesData,required:this.required()})}static get is(){return"sc-order-tax-id-input"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-order-tax-id-input.css"]}}static get styleUrls(){return{$:["sc-order-tax-id-input.css"]}}static get properties(){return{show:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Force show the field."},attribute:"show",reflect:!1,defaultValue:"false"},otherLabel:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Other zones label"},attribute:"other-label",reflect:!1},caGstLabel:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"GST zone label"},attribute:"ca-gst-label",reflect:!1},auAbnLabel:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"AU zone label"},attribute:"au-abn-label",reflect:!1},gbVatLabel:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"UK zone label"},attribute:"gb-vat-label",reflect:!1},euVatLabel:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"EU zone label"},attribute:"eu-vat-label",reflect:!1},helpText:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Help text"},attribute:"help-text",reflect:!1},taxIdTypes:{type:"string",mutable:!1,complexType:{original:"string | string[]",resolved:"string | string[]",references:{}},required:!1,optional:!1,docs:{tags:[],text:'Tax ID Types which will be shown Eg: \'["eu_vat", "gb_vat"]\''},attribute:"tax-id-types",reflect:!1}}}static get states(){return{taxIdTypesData:{}}}static get methods(){return{reportValidity:{complexType:{signature:"() => Promise<boolean>",parameters:[],references:{Promise:{location:"global"}},return:"Promise<boolean>"},docs:{text:"",tags:[]}}}}static get watchers(){return[{propName:"taxIdTypes",methodName:"handleTaxIdTypesChange"}]}}