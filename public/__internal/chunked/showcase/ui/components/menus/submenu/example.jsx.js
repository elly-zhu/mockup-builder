var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/menus/submenu/example.jsx.js"]=webpackJsonpSLDS___internal_chunked_showcase([54,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149],{0:function(e,t){e.exports=React},119:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}Object.defineProperty(t,"__esModule",{value:!0}),t.Submenu=t.Context=t.MenuItemHasSubmenu=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s=n(a(0)),r=(n(a(3)),a(6)),m=n(a(2)),d=n(a(1)),i=s.default.createElement(m.default,{className:"slds-icon slds-icon_x-small slds-icon-text-default slds-m-left_small slds-shrink-none",sprite:"utility",symbol:"right"}),c=function(e){var t=e.ariaExpanded,a=e.className,n=(e.children,e.iconRight),m=e.itemName,i=e.tabIndex,c=e.title,o=e.submenuClassnames,f=l(e,["ariaExpanded","className","children","iconRight","itemName","tabIndex","title","submenuClassnames"]);return s.default.createElement("li",u({},f,{className:(0,d.default)("slds-dropdown__item slds-has-submenu",a),role:"presentation"}),s.default.createElement("a",{role:"menuitem",href:"javascript:void(0);","aria-haspopup":"true","aria-expanded":t,tabIndex:i||"-1"},s.default.createElement("span",{className:"slds-truncate",title:c||m},e.itemName),n||null),s.default.createElement(r.Menu,{className:(0,d.default)("slds-dropdown_submenu",o)},s.default.createElement(r.MenuList,{ariaLabel:m},s.default.createElement(r.MenuItem,{tabIndex:"0"},"Submenu Item One"),s.default.createElement(r.MenuItem,null,"Submenu Item Two"),s.default.createElement(r.MenuItem,null,"Submenu Item Three"),s.default.createElement("li",{className:"slds-has-divider_top-space",role:"separator"}),s.default.createElement(r.MenuItem,null,"Submenu Item Four"))))};t.MenuItemHasSubmenu=c;t.Context=function(e){return s.default.createElement("div",{className:"demo-only",style:{height:"300px"}},e.children)};var o=t.Submenu=function(e){return s.default.createElement(r.Trigger,{className:"slds-is-open"},s.default.createElement(r.Menu,{className:"slds-dropdown_left"},s.default.createElement(r.MenuList,null,s.default.createElement(r.MenuItem,{tabIndex:"0"},"Menu Item One"),s.default.createElement(r.MenuItem,null,"Menu Item Two"),s.default.createElement(c,{ariaExpanded:e.ariaExpanded,iconRight:i,itemName:"Menu Item Three",submenuClassnames:e.submenuClassnames||"slds-dropdown_submenu-right"}))))};t.default=s.default.createElement(o,{ariaExpanded:!0})}},[119]);