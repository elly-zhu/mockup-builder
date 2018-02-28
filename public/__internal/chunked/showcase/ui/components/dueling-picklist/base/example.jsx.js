var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/dueling-picklist/base/example.jsx.js"]=webpackJsonpSLDS___internal_chunked_showcase([2,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149],{0:function(e,t){e.exports=React},44:function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.MoveToSnapShot=t.DroppedSnapShot=t.MovedInSnapShot=t.GrabbedSnapShot=t.MultiSelectedSnapShot=t.SelectedSnapShot=t.LockedSnapShot=t.DisabledSnapShot=t.DefaultSnapShot=t.MultiSelect=void 0;var l=a(i(0)),s=a(i(2)),d=a(i(1)),n=a(i(4)),o=(t.MultiSelect=function(e){return l.default.createElement("div",{className:"slds-dueling-list"},l.default.createElement("div",{className:"slds-assistive-text",id:"drag-live-region","aria-live":"assertive"},e.dataSet.liveRegionText),l.default.createElement("div",{className:"slds-assistive-text",id:"option-drag-label"},e.dataSet.optionDragLabel),l.default.createElement(b,{disabled:e.disabled,group:e.dataSet.selectionGroups[0]}),l.default.createElement(o,{direction:"horizontal",targetA:e.dataSet.selectionGroups[0].label,targetB:e.dataSet.selectionGroups[1].label,disabled:e.disabled}),l.default.createElement(b,{disabled:e.disabled,group:e.dataSet.selectionGroups[1]}),l.default.createElement(o,{disabled:e.disabled,direction:"vertical"}))},function(e){var t="Move Selection "+("vertical"===e.direction?"Up":"to "+e.targetB),i="Move Selection "+("vertical"===e.direction?"Down":"to "+e.targetA);return l.default.createElement("div",{className:"slds-dueling-list__column"},l.default.createElement("button",{className:"slds-button slds-button_icon slds-button_icon-container",title:t,disabled:e.disabled},l.default.createElement(s.default,{className:"slds-button__icon",sprite:"utility",symbol:"vertical"===e.direction?"up":"right"}),l.default.createElement("span",{className:"slds-assistive-text"},t)),l.default.createElement("button",{className:"slds-button slds-button_icon slds-button_icon-container",title:i,disabled:e.disabled},l.default.createElement(s.default,{className:"slds-button__icon",sprite:"utility",symbol:"vertical"===e.direction?"down":"left"}),l.default.createElement("span",{className:"slds-assistive-text"},i)))}),b=function(e){var t=n.default.uniqueId("label-");return l.default.createElement("div",{className:"slds-dueling-list__column"},l.default.createElement("span",{className:"slds-form-element__label",id:t},e.group.label),l.default.createElement(r,{disabled:e.disabled,options:e.group.options,ariaLabelledby:t,listboxLabel:e.group.label}))},r=function(e){return l.default.createElement("div",{className:(0,d.default)("slds-dueling-list__options",{"slds-is-disabled":e.disabled}),role:"application"},l.default.createElement("ul",{"aria-describedby":"option-drag-label","aria-disabled":e.disabled,"aria-labelledby":e.ariaLabelledby,"aria-multiselectable":"true",className:"slds-listbox slds-listbox_vertical",role:"listbox"},e.options.map(function(t){return l.default.createElement(c,{key:n.default.uniqueId("cell-resize-handle-"),option:t,listboxLabel:e.listboxLabel})})))},c=function(e){return l.default.createElement("li",{role:"presentation",className:"slds-listbox__item"},l.default.createElement("div",{className:(0,d.default)("slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline",{"slds-is-grabbed":e.option.isGrabbed,"slds-is-selected":e.option.isSelected}),"aria-selected":e.option.isSelected,draggable:"true",role:"option",tabIndex:e.option.tabIndex},l.default.createElement("span",{className:"slds-media__body"},l.default.createElement("span",{className:"slds-truncate",title:e.option.text},e.option.text)),e.option.locked&&l.default.createElement("span",{className:"slds-media__figure slds-media__figure_reverse"},l.default.createElement("span",{className:"slds-icon_container",title:"Locked item"},l.default.createElement(s.default,{className:"slds-icon slds-icon_x-small slds-icon-text-default",sprite:"utility",symbol:"lock"}),l.default.createElement("span",{className:"slds-assistive-text"}," ",": item cannot be removed from ",e.listboxLabel)))))};t.DefaultSnapShot={liveRegionText:"",optionDragLabel:"Press space bar when on an item, to move it within the list. CMD plus left and right arrow keys, to move items between lists.",selectionGroups:[{label:"First Category",options:[{text:"Option 1",tabIndex:0,isSelected:!1,isGrabbed:!1},{text:"Option 2",tabIndex:-1,isSelected:!1,isGrabbed:!1},{text:"Option 3",tabIndex:-1,isSelected:!1,isGrabbed:!1},{text:"Option 6",tabIndex:-1,isSelected:!1,isGrabbed:!1}]},{label:"Second Category",options:[{text:"Option 4",tabIndex:0,isSelected:!1,isGrabbed:!1},{text:"Option 5",tabIndex:-1,isSelected:!1,isGrabbed:!1}]}]},t.DisabledSnapShot={liveRegionText:"",optionDragLabel:"Press space bar when on an item, to move it within the list. CMD plus left and right arrow keys, to move items between lists.",selectionGroups:[{label:"First Category",options:[{text:"Option 1",tabIndex:-1,isSelected:!1,isGrabbed:!1},{text:"Option 2",tabIndex:-1,isSelected:!1,isGrabbed:!1},{text:"Option 3",tabIndex:-1,isSelected:!1,isGrabbed:!1},{text:"Option 6",tabIndex:-1,isSelected:!1,isGrabbed:!1}]},{label:"Second Category",options:[{text:"Option 4",tabIndex:-1,isSelected:!1,isGrabbed:!1},{text:"Option 5",tabIndex:-1,isSelected:!1,isGrabbed:!1}]}]},t.LockedSnapShot={liveRegionText:"",optionDragLabel:"Press space bar when on an item, to move it within the list. CMD plus left and right arrow keys, to move items between lists. Required items must remain in the second category.",selectionGroups:[{label:"First Category",options:[{text:"Option 1",tabIndex:0,isSelected:!1,isGrabbed:!1},{text:"Option 2",tabIndex:-1,isSelected:!1,isGrabbed:!1},{text:"Option 3",tabIndex:-1,isSelected:!1,isGrabbed:!1},{text:"Option 6",tabIndex:-1,isSelected:!1,isGrabbed:!1}]},{label:"Second Category",options:[{text:"Option 4",tabIndex:0,isSelected:!1,isGrabbed:!1,locked:!0},{text:"Option 5",tabIndex:-1,isSelected:!1,isGrabbed:!1}]}]},t.SelectedSnapShot={liveRegionText:"",optionDragLabel:"Press space bar when on an item, to move it within the list. CMD plus left and right arrow keys, to move items between lists.",selectionGroups:[{label:"First Category",options:[{text:"Option 1",tabIndex:0,isSelected:!0,isGrabbed:!1},{text:"Option 2",tabIndex:-1,isSelected:!1,isGrabbed:!1},{text:"Option 3",tabIndex:-1,isSelected:!1,isGrabbed:!1},{text:"Option 6",tabIndex:-1,isSelected:!1,isGrabbed:!1}]},{label:"Second Category",options:[{text:"Option 4",tabIndex:0,isSelected:!1,isGrabbed:!1},{text:"Option 5",tabIndex:-1,isSelected:!1,isGrabbed:!1}]}]},t.MultiSelectedSnapShot={liveRegionText:"",optionDragLabel:"Press space bar when on an item, to move it within the list. CMD plus left and right arrow keys, to move items between lists.",selectionGroups:[{label:"First Category",options:[{text:"Option 1",tabIndex:-1,isSelected:!0,isGrabbed:!1},{text:"Option 2",tabIndex:-1,isSelected:!1,isGrabbed:!1},{text:"Option 3",tabIndex:0,isSelected:!0,isGrabbed:!1},{text:"Option 6",tabIndex:-1,isSelected:!1,isGrabbed:!1}]},{label:"Second Category",options:[{text:"Option 4",tabIndex:0,isSelected:!1,isGrabbed:!1},{text:"Option 5",tabIndex:-1,isSelected:!1,isGrabbed:!1}]}]},t.GrabbedSnapShot={liveRegionText:"Option 3: current position 3 of 4. Press up or down arrows to move within list.",optionDragLabel:"",selectionGroups:[{label:"First Category",options:[{text:"Option 1",tabIndex:-1,isSelected:!1,isGrabbed:!1},{text:"Option 2",tabIndex:-1,isSelected:!1,isGrabbed:!1},{text:"Option 3",tabIndex:0,isSelected:!0,isGrabbed:!0},{text:"Option 6",tabIndex:-1,isSelected:!1,isGrabbed:!1}]},{label:"Second Category",options:[{text:"Option 4",tabIndex:0,isSelected:!1,isGrabbed:!1},{text:"Option 5",tabIndex:-1,isSelected:!1,isGrabbed:!1}]}]},t.MovedInSnapShot={liveRegionText:"Option 3: current position 2 of 4.",optionDragLabel:"",selectionGroups:[{label:"First Category",options:[{text:"Option 1",tabIndex:-1,isSelected:!1,isGrabbed:!1},{text:"Option 3",tabIndex:0,isSelected:!0,isGrabbed:!0},{text:"Option 2",tabIndex:-1,isSelected:!1,isGrabbed:!1},{text:"Option 6",tabIndex:-1,isSelected:!1,isGrabbed:!1}]},{label:"Second Category",options:[{text:"Option 4",tabIndex:0,isSelected:!1,isGrabbed:!1},{text:"Option 5",tabIndex:-1,isSelected:!1,isGrabbed:!1}]}]},t.DroppedSnapShot={liveRegionText:"Option 3: final position 2 of 4.",optionDragLabel:"Press space bar when on an item, to move it within the list. CMD plus left and right arrow keys, to move items between lists.",selectionGroups:[{label:"First Category",options:[{text:"Option 1",tabIndex:-1,isSelected:!1,isGrabbed:!1},{text:"Option 3",tabIndex:0,isSelected:!0,isGrabbed:!1},{text:"Option 2",tabIndex:-1,isSelected:!1,isGrabbed:!1},{text:"Option 6",tabIndex:-1,isSelected:!1,isGrabbed:!1}]},{label:"Second Category",options:[{text:"Option 4",tabIndex:0,isSelected:!1,isGrabbed:!1},{text:"Option 5",tabIndex:-1,isSelected:!1,isGrabbed:!1}]}]},t.MoveToSnapShot={liveRegionText:"Option 3: Moved to Second Category.",optionDragLabel:"Press space bar when on an item, to move it within the list. CMD plus left and right arrow keys, to move items between lists.",selectionGroups:[{label:"First Category",options:[{text:"Option 1",tabIndex:-1,isSelected:!1,isGrabbed:!1},{text:"Option 2",tabIndex:-1,isSelected:!1,isGrabbed:!1},{text:"Option 6",tabIndex:-1,isSelected:!1,isGrabbed:!1}]},{label:"Second Category",options:[{text:"Option 4",tabIndex:0,isSelected:!1,isGrabbed:!1},{text:"Option 5",tabIndex:-1,isSelected:!1,isGrabbed:!1},{text:"Option 3",tabIndex:0,isSelected:!0,isGrabbed:!1}]}]}},94:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.states=void 0;var a=function(e){return e&&e.__esModule?e:{default:e}}(i(0)),l=i(44);t.default=a.default.createElement(l.MultiSelect,{dataSet:l.DefaultSnapShot});t.states=[{id:"required-dueling-picklist",label:"Locked",element:a.default.createElement(l.MultiSelect,{dataSet:l.LockedSnapShot})},{id:"disabled-dueling-picklist",label:"Disabled",element:a.default.createElement(l.MultiSelect,{dataSet:l.DisabledSnapShot,disabled:!0})},{id:"multi-select-selected-item",label:"Selected Item",element:a.default.createElement(l.MultiSelect,{dataSet:l.SelectedSnapShot})},{id:"multi-select-multi-selected-items",label:"Multiple Selected Items",element:a.default.createElement(l.MultiSelect,{dataSet:l.MultiSelectedSnapShot})},{id:"multi-select-grabbed",label:"Grabbed",element:a.default.createElement(l.MultiSelect,{dataSet:l.GrabbedSnapShot})},{id:"multi-select-moved-in",label:"Moved in list",element:a.default.createElement(l.MultiSelect,{dataSet:l.MovedInSnapShot})},{id:"multi-select-dropped",label:"Dropped",element:a.default.createElement(l.MultiSelect,{dataSet:l.DroppedSnapShot})},{id:"multi-select-moved-to",label:"Moved to list",element:a.default.createElement(l.MultiSelect,{dataSet:l.MoveToSnapShot})}]}},[94]);