import{h,Host}from"@stencil/core";let id=0;export class ScTabPanel{constructor(){this.componentId="tab-panel-"+ ++id,this.name="",this.active=!1}render(){return this.el.id=this.el.id||this.componentId,h(Host,{style:{display:this.active?"block":"none"}},h("div",{part:"base",class:"tab-panel",role:"tabpanel","aria-hidden":this.active?"false":"true"},h("slot",null)))}static get is(){return"sc-tab-panel"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-tab-panel.scss"]}}static get styleUrls(){return{$:["sc-tab-panel.css"]}}static get properties(){return{name:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The tab panel's name."},attribute:"name",reflect:!0,defaultValue:"''"},active:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"When true, the tab panel will be shown."},attribute:"active",reflect:!0,defaultValue:"false"}}}static get elementRef(){return"el"}}