var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/data-tables/inline-edit/example.jsx.js"]=webpackJsonpSLDS___internal_chunked_showcase([79,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149],{0:function(e,t){e.exports=React},87:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.states=t.InlineEditTable=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},d=n(l(0)),o=n(l(4)),c=l(22),r=["Name","Account Name","Close Date","Stage","Confidence","Amount","Contact"],i=[{recordName:"Acme - 1,200 Widgets",accountName:"Acme",closeDate:"4/10/15",stage:"Value Proposition",confidence:"30%",amount:"$25,000,000",contact:"jrogers@acme.com"},{recordName:"Acme - 200 Widgets",accountName:"Acme",closeDate:"1/31/15",stage:"Prospecting",confidence:"60%",amount:"$5,000,000",contact:"bob@acme.com"},{recordName:"salesforce.com - 1,000 Widgets",accountName:"salesforce.com",closeDate:"1/31/15 3:45PM",stage:"Id. Decision Makers",confidence:"70%",amount:"$25,000",contact:"nathan@salesforce.com"}];t.InlineEditTable=function(){return d.default.createElement(c.InlineEditTableContainer,null,d.default.createElement(c.AdvancedDataTable,{isEditable:!0,style:{width:"66.75rem"}},d.default.createElement(c.Thead,{columns:r,hasErrorColumn:!0,mainColumnWidth:"8.75rem",actionableMode:!0}),d.default.createElement("tbody",null,o.default.times(i.length,function(e){return d.default.createElement(c.InlineEditTr,a({key:e,index:e+1},i[e],{focusableCell:"recordName",focusedCell:"recordName",actionableMode:!0}))}))))};t.default=d.default.createElement(c.InlineEditTableContainer,null,d.default.createElement(c.AdvancedDataTable,{className:"slds-no-cell-focus",isEditable:!0,style:{width:"66.75rem"}},d.default.createElement(c.Thead,{columns:r,hasErrorColumn:!0,mainColumnWidth:"8.75rem"}),d.default.createElement("tbody",null,o.default.times(i.length,function(e){return d.default.createElement(c.InlineEditTr,a({key:e,index:e+1},i[e],{focusableCell:"recordName"}))}))));t.states=[{id:"with-link",label:"Cell focused - Link (Actionable mode)",element:d.default.createElement(c.InlineEditTableContainer,null,d.default.createElement(c.AdvancedDataTable,{isEditable:!0,style:{width:"66.75rem"}},d.default.createElement(c.Thead,{columns:r,hasErrorColumn:!0,mainColumnWidth:"8.75rem",actionableMode:!0}),d.default.createElement("tbody",null,o.default.times(i.length,function(e){return d.default.createElement(c.InlineEditTr,a({key:e,index:e+1},i[e],{focusableCell:"recordName",focusedCell:"recordName",actionableMode:!0}))})))),script:"\n      document.getElementById('link-01').focus()\n    "},{id:"checkbox",label:"Cell focused - Checkbox (Actionable mode)",element:d.default.createElement(c.InlineEditTableContainer,null,d.default.createElement(c.AdvancedDataTable,{isEditable:!0,style:{width:"66.75rem"}},d.default.createElement(c.Thead,{columns:r,hasErrorColumn:!0,mainColumnWidth:"8.75rem",actionableMode:!0}),d.default.createElement("tbody",null,o.default.times(i.length,function(e){return d.default.createElement(c.InlineEditTr,a({key:e,index:e+1},i[e],{focusableCell:"selectRow",focusedCell:"selectRow",actionableMode:!0}))})))),script:"\n      document.getElementById('checkbox-01').focus()\n    "},{id:"focused",label:"Cell focused (Navigation mode)",element:d.default.createElement(c.InlineEditTableContainer,null,d.default.createElement(c.AdvancedDataTable,{isEditable:!0,style:{width:"66.75rem"}},d.default.createElement(c.Thead,{columns:r,hasErrorColumn:!0,mainColumnWidth:"8.75rem"}),d.default.createElement("tbody",null,o.default.times(i.length,function(e){return d.default.createElement(c.InlineEditTr,a({key:e,index:e+1},i[e],{focusableCell:"accountName",focusedCell:"accountName"}))}))))},{id:"edit",label:"Cell edit (Actionable mode)",element:d.default.createElement(c.InlineEditTableContainer,null,d.default.createElement(c.AdvancedDataTable,{isEditable:!0,style:{width:"66.75rem"}},d.default.createElement(c.Thead,{columns:r,hasErrorColumn:!0,mainColumnWidth:"8.75rem",actionableMode:!0}),d.default.createElement("tbody",null,o.default.times(i.length,function(e){return d.default.createElement(c.InlineEditTr,a({key:e,index:e+1},i[e],{actionableMode:!0,showEdit:!0}))})))),script:"\n      document.getElementById('company-01').focus()\n      document.getElementById('company-01').select()\n    "},{id:"required",label:"Cell edit — Required (Actionable mode)",element:d.default.createElement(c.InlineEditTableContainer,null,d.default.createElement(c.AdvancedDataTable,{isEditable:!0,style:{width:"66.75rem"}},d.default.createElement(c.Thead,{actionableMode:!0,columns:r,hasErrorColumn:!0,mainColumnWidth:"8.75rem"}),d.default.createElement("tbody",null,o.default.times(i.length,function(e){return d.default.createElement(c.InlineEditTr,a({key:e,index:e+1},i[e],{actionableMode:!0,showEdit:!0,showEditRequired:!0}))})))),script:"\n      document.getElementById('company-01').focus()\n      document.getElementById('company-01').select()\n    "},{id:"error",label:"Cell edit — Error (Actionable mode)",element:d.default.createElement(c.InlineEditTableContainer,null,d.default.createElement(c.AdvancedDataTable,{isEditable:!0,style:{width:"66.75rem"}},d.default.createElement(c.Thead,{actionableMode:!0,columns:r,hasErrorColumn:!0,mainColumnWidth:"8.75rem"}),d.default.createElement("tbody",null,o.default.times(i.length,function(e){return d.default.createElement(c.InlineEditTr,a({key:e,index:e+1},i[e],{actionableMode:!0,showEdit:!0,showEditRequired:!0,showEditError:!0}))})))),script:"\n      document.getElementById('company-01').focus()\n      document.getElementById('company-01').select()\n    "},{id:"edited",label:"Cell edited (Actionable mode)",element:d.default.createElement(c.InlineEditTableContainer,null,d.default.createElement(c.AdvancedDataTable,{isEditable:!0,style:{width:"66.75rem"}},d.default.createElement(c.Thead,{actionableMode:!0,columns:r,hasErrorColumn:!0,mainColumnWidth:"8.75rem"}),d.default.createElement("tbody",null,o.default.times(i.length,function(e){return d.default.createElement(c.InlineEditTr,a({key:e,index:e+1},i[e],{actionableMode:!0,showEditedCell:!0}))}))))},{id:"row-error",label:"Error - Row level on save (Actionable mode)",element:d.default.createElement(c.InlineEditTableContainer,null,d.default.createElement(c.AdvancedDataTable,{isEditable:!0,style:{width:"66.75rem"}},d.default.createElement(c.Thead,{actionableMode:!0,columns:r,hasErrorColumn:!0,mainColumnWidth:"8.75rem"}),d.default.createElement("tbody",null,o.default.times(i.length,function(e){return d.default.createElement(c.InlineEditTr,a({key:e,index:e+1},i[e],{actionableMode:!0,focusableCell:"accountName",focusedCell:"accountName",showCellError:!0,showRowError:!0}))})))),script:"\n      document.getElementById('button-01').focus()\n    "},{id:"row-error-focused",label:"Error indicator - Focused (Actionable mode)",element:d.default.createElement(c.InlineEditTableContainer,null,d.default.createElement(c.AdvancedDataTable,{isEditable:!0,style:{width:"66.75rem"}},d.default.createElement(c.Thead,{actionableMode:!0,columns:r,hasErrorColumn:!0,mainColumnWidth:"8.75rem"}),d.default.createElement("tbody",null,o.default.times(i.length,function(e){return d.default.createElement(c.InlineEditTr,a({key:e,index:e+1},i[e],{actionableMode:!0,focusableCell:"error",focusedCell:"error",showCellError:!0,showRowError:!0,showRowErrorTooltip:!0}))}))),d.default.createElement(c.ErrorTooltip,null)),script:"\n      document.getElementById('error-01').focus()\n    "},{id:"header-cell-focused",label:"Header cell focused (Navigation mode)",element:d.default.createElement(c.InlineEditTableContainer,null,d.default.createElement(c.AdvancedDataTable,{isEditable:!0,style:{width:"66.75rem"}},d.default.createElement(c.Thead,{columns:r,hasErrorColumn:!0,hasFocus:!0,mainColumnWidth:"8.75rem"}),d.default.createElement("tbody",null,o.default.times(i.length,function(e){return d.default.createElement(c.InlineEditTr,{key:e,index:e+1,recordName:i[e].recordName,accountName:i[e].accountName,closeDate:i[e].closeDate,stage:i[e].stage,confidence:i[e].confidence,amount:i[e].amount,contact:i[e].contact})}))))},{id:"header-cell-marked",label:"Header cell marked (Navigation mode)",element:d.default.createElement(c.InlineEditTableContainer,null,d.default.createElement(c.AdvancedDataTable,{className:"slds-no-cell-focus",isEditable:!0,style:{width:"66.75rem"}},d.default.createElement(c.Thead,{columns:r,hasErrorColumn:!0,hasFocus:!0,mainColumnWidth:"8.75rem"}),d.default.createElement("tbody",null,o.default.times(i.length,function(e){return d.default.createElement(c.InlineEditTr,{key:e,index:e+1,recordName:i[e].recordName,accountName:i[e].accountName,closeDate:i[e].closeDate,stage:i[e].stage,confidence:i[e].confidence,amount:i[e].amount,contact:i[e].contact})}))))}]}},[87]);