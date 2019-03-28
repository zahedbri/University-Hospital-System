AUI.add("aui-form-builder-base",function(br){var bk=br.Lang,aA=bk.isArray,aC=bk.isBoolean,bh=bk.isString,bP=bk.isObject,ac=bk.isValue,bM=br.Array,bR=br.AvailableField.getAvailableFieldById,e=function(A){return(A instanceof br.AvailableField);},aY=function(A){return(A instanceof br.Node);},aH=function(A){return(A instanceof br.NodeList);},bQ=function(A){return(A instanceof br.FormBuilder);},bg=function(A){return(A instanceof br.FormBuilderField);},a0=br.DD.DDM,d="acceptChildren",bm="active",aX="allowRemoveRequiredFields",H="add",bJ="append",o="autoSelectFields",bv="availableField",bO="availableFields",X="base",ax="boundingBox",bz="builder",bE="button",z="buttons",s="buttonsNode",i="children",bj="click",al="cloneNode",az="component",at="container",ar="content",bL="contentBox",aZ="data",ad="dblclick",Y="dd",bD="default",ag="defaultMessage",B="defaultMessageNode",aB="delete",j="diagram",bb=".",aL="drag",am="dragContainer",r="dragContainerNode",bn="dragNodesList",bc="draggable",n="dragging",ai="drop",aR="dropContainer",aU="dropContainerNode",bu="dropNode",aF="dropZoneNode",ao="duplicate",C="edit",bG="editing",bd="emptySelection",a6="",bt="enableEditing",aV="field",c="fields",D="fieldsNestedListConfig",aj="first",m="firstChild",P="focused",k="form",aO="formBuilder",Q="form-layout",h="helper",aa="hidden",bs="hiddenAttributes",l="icon",bB="id",bK="inactive",by="index",aE="input",b="items",bS="key",R="label",bp="labelNode",av="last",aI="lastChild",af="list",aJ="localizationMap",aW="message",be="mouseenter",w="mouseleave",ak="name",a3="nestedList",bT="node",N="options",aK="over",ah="parent",G="parentNode",S="placeAfter",y="placeBefore",bq="placeholder",au="predefinedValue",aN="prepend",bw="readOnlyAttributes",a8="records",bA="recordset",T="region",bN="remove",t="render",ay="rendered",W="required",ba="save",aP="selected",aD="settings",aT="settingsButtonsNode",Z="settingsFormNode",I="showLabel",J=" ",aQ="srcNode",a5="state",bl="strings",aM="tabs",U="tabsContentNode",a2="tabsListNode",a="tabsNode",bF="tabview",p="target",M="templateNode",a7="text",q="tip",K="type",an="unique",f="value",E="values",aS="widget",a1="width",bi="zone",g=",",bI="-",ab=".",x="",bo="#",aG="_",v=br.getClassName,bf=bO+aG+aV+aG,bx=c+aG+aV+aG,O=v(Y,n),bH=v(j,bz,ai,at),bC=v(j,bz,aV,bc),V=v(k,bz,ai,bi),a9=v(k,bz,aV),aq=v(k,bz,aV,bG),u=v(k,bz,bq),a4=v(k,bz,an),ap=[bB,ak],ae='<div class="'+u+'"></div>';var F=br.Component.create({NAME:bv,ATTRS:{hiddenAttributes:{value:[],validator:aA},name:{value:x},options:{validator:bP},predefinedValue:{value:x},readOnlyAttributes:{value:[],validator:aA},required:{validator:aC,value:false},showLabel:{validator:aC,value:true},tip:{validator:bh,value:x},unique:{value:false,validator:aC},width:{}},EXTENDS:br.AvailableField});br.FormBuilderAvailableField=F;var aw=br.Component.create({NAME:aO,ATTRS:{allowRemoveRequiredFields:{validator:aC,value:false},autoSelectFields:{value:false},enableEditing:{value:true},fieldsNestedListConfig:{setter:"_setFieldsNestedListConfig",validator:bP,value:null},strings:{value:{addNode:"Add field",cancel:"Cancel",propertyName:"Property Name",save:"Save",settings:"Settings",value:"Value"}}},UI_ATTRS:[aX],EXTENDS:br.DiagramBuilderBase,FIELDS_TAB:0,SETTINGS_TAB:1,prototype:{uniqueFields:new br.DataSet(),initializer:function(){var A=this;A.on({cancel:A._onCancel,"drag:end":A._onDragEnd,"drag:start":A._onDragStart,"drag:mouseDown":A._onDragMouseDown,save:A._onSave});A.uniqueFields.after(H,br.bind(A._afterUniqueFieldsAdd,A));A.uniqueFields.after(bN,br.bind(A._afterUniqueFieldsRemove,A));A.dropContainer.delegate(bj,br.bind(A._onClickField,A),ab+a9);A.dropContainer.delegate(ad,br.bind(A._onDblClickField,A),ab+a9);},syncUI:function(){var A=this;A._setupAvailableFieldsNestedList();A._setupFieldsNestedList();},closeEditProperties:function(){var A=this;var L=A.editingField;A.tabView.selectTab(br.FormBuilder.FIELDS_TAB);if(L&&L.get(ay)){L.get(ax).removeClass(aq);}A.editingField=null;},createField:function(L){var A=this;if(!bg(L)){L=new (A.getFieldClass(L.type||aV))(L);}L.set(bz,A);L.set(ah,A);return L;},duplicateField:function(bU){var A=this;var L=A._getFieldNodeIndex(bU.get(ax));var bV=A._cloneField(bU,true);A.insertField(bV,++L,bU.get(ah));},editField:function(L){var A=this;if(bg(L)){A.closeEditProperties();A.tabView.selectTab(br.FormBuilder.SETTINGS_TAB);A.propertyList.set(bA,[{}]);A.propertyList.set(bA,A.getFieldProperties(L));L.get(ax).addClass(aq);A.editingField=A.selectedField=L;}},getFieldClass:function(bU){var A=this;var L=br.FormBuilder.types[bU];if(L){return L;}else{br.log("The field type: ["+bU+"] couldn't be found.");return null;}},getFieldProperties:function(L){var A=this;return L.getProperties();},insertField:function(bV,L,bU){var A=this;bU=bU||A;bV.get(ah).removeField(bV);bU.addField(bV,L);},plotField:function(bV,L){var A=this;var bU=bV.get(ax);if(!bV.get(ay)){bV.render(L);}else{L.append(bU);}A._syncUniqueField(bV);A.fieldsNestedList.add(bU);},plotFields:function(L,bU){var A=this;bU=bU||A.dropContainer;L=L||A.get(c);bU.setContent(a6);br.each(L,function(bV){A.plotField(bV,bU);});},select:function(L){var A=this;A.unselectFields();A.selectedField=L.set(aP,true).focus();},unselectFields:function(){var A=this;var L=A.selectedField;if(L){L.set(aP,false);}A.selectedField=null;},_afterUniqueFieldsAdd:function(bU){var A=this;var bV=bU.attrName;if(e(bV)){var L=bV.get(bT);bV.set(bc,false);L.unselectable();}},_afterUniqueFieldsRemove:function(bU){var A=this;var bV=bU.attrName;if(e(bV)){var L=bV.get(bT);bV.set(bc,true);L.selectable();}},_cloneField:function(bV,L){var A=this;var bU={};bM.each(A.getFieldProperties(bV),function(bX){var bW=bX.attributeName;if(bM.indexOf(ap,bW)===-1){bU[bW]=bX.value;}});if(L){bU[c]=[];br.each(bV.get(c),function(bX,bW){if(!bX.get(an)){bU[c][bW]=A._cloneField(bX,L);}});}return A.createField(bU);},_dropField:function(bX){var L=this;var bZ=bX.getData(bv);var bY=br.Widget.getByNode(bX);var A=bX.get(G);if(e(bZ)){var bV={hiddenAttributes:bZ.get(bs),label:bZ.get(R),localizationMap:bZ.get(aJ),options:bZ.get(N),predefinedValue:bZ.get(au),readOnlyAttributes:bZ.get(bw),required:bZ.get(W),showLabel:bZ.get(I),tip:bZ.get(q),type:bZ.get(K),unique:bZ.get(an),width:bZ.get(a1)};
if(bV.unique){bV.id=L._getFieldId(bZ);bV.name=bZ.get(ak);}bY=L.createField(bV);}if(bg(bY)){var bW=br.Widget.getByNode(A);if(!bg(bW)){bW=L;}var bU=L._getFieldNodeIndex(bX);L.insertField(bY,bU,bW);L.select(bY);}},_getFieldId:function(bU){var A=this;var bV=bU.get(bB);var L;if(e(bU)){L=bf;}else{L=bx;}return bV.replace(L,x);},_getFieldNodeIndex:function(L){var A=this;return L.get(G).all("> *:not("+ab+u+")").indexOf(L);},_onClickField:function(L){var A=this;var bU=br.Widget.getByNode(L.currentTarget);A.select(bU);L.stopPropagation();},_onDblClickField:function(L){var A=this;if(!L.target.ancestor(ab+a9,true)){return;}var bU=br.Widget.getByNode(L.currentTarget);if(bU){A.editField(bU);}L.stopPropagation();},_onDragEnd:function(bU){var A=this;var L=bU.target;var bV=L.get(bT);A._dropField(bV);if(!bg(br.Widget.getByNode(bV))){bV.remove();L.set(bT,A._originalDragNode);}},_onDragMouseDown:function(L){var A=this;var bU=L.target.get(bT);var bV=br.AvailableField.getAvailableFieldByNode(bU);if(e(bV)&&!bV.get(bc)){L.halt();}},_onDragStart:function(bV){var A=this;var bU=bV.target;var bX=bU.get(bT);if(bg(br.Widget.getByNode(bX))){return;}A._originalDragNode=bX;var bW=bX.clone();bX.placeBefore(bW);bU.set(bT,bW);var L=bX.getData(bv);bW.setData(bv,L);bW.attr(bB,a6);bW.hide();bX.removeClass(O);bX.show();A.fieldsNestedList.add(bW);},_onSave:function(bU){var A=this;var L=A.editingField;if(L){var bV=A.propertyList.get(bA);bM.each(bV.get(a8),function(bW){var bX=bW.get(aZ);L.set(bX.attributeName,bX.value);});A._syncUniqueField(L);}},_setAvailableFields:function(bU){var L=this;var A=[];bM.each(bU,function(bW,bV){A.push(e(bW)?bW:new br.FormBuilderAvailableField(bW));});return A;},_setFieldsNestedListConfig:function(bU){var A=this;var L=A.dropContainer;return br.merge({bubbleTargets:A,dd:{groups:[bO],plugins:[{cfg:{horizontal:false,scrollDelay:150},fn:br.Plugin.DDWinScroll}]},dropCondition:function(bW){var bV=bW.drop.get(bT);var bX=br.Widget.getByNode(bV);if(bg(bX)){return true;}return false;},placeholder:br.Node.create(ae),dropOn:ab+V,sortCondition:function(bW){var bV=bW.drop.get(bT);return(bV!==A.dropContainer&&L.contains(bV));}},bU||{});},_setupAvailableFieldsNestedList:function(){var A=this;if(!A.availableFieldsNestedList){var L=A.fieldsContainer.all(ab+bC);A.availableFieldsNestedList=new br.NestedList(br.merge(A.get(D),{nodes:L}));}},_setupFieldsNestedList:function(){var A=this;if(!A.fieldsNestedList){A.fieldsNestedList=new br.NestedList(A.get(D));}},_syncUniqueField:function(bU){var A=this;var L=A.uniqueFields;var bV=bR(A._getFieldId(bU));if(e(bV)){if(bV.get(an)||bU.get(an)){L.add(bV,bU);}}},_uiSetAllowRemoveRequiredFields:function(L){var A=this;A.get(c).each(function(bU){bU._uiSetRequired(bU.get(W));});}}});br.FormBuilder=aw;br.FormBuilder.types={};},"@VERSION@",{skinnable:true,requires:["aui-base","aui-button-item","aui-data-set","aui-diagram-builder-base","aui-nested-list","aui-tabs"]});AUI.add("aui-form-builder-field",function(cn){var cd=cn.Lang,a9=cd.isArray,cQ=cd.isObject,b9=cd.isString,cO=cn.Array,g="acceptChildren",bK="allowRemoveRequiredFields",aM="availableFieldId",d="bodyContent",a7="boolean",a0="boundingBox",cx="builder",cG="button",Q="buttons",C="buttonsNode",cS="cancel",aR="checkbox",R="checked",r="children",cC="clearfix",a3="close",a5="component",aV="container",cN="contentBox",cJ="controls",b1="controlsToolbar",cR="dataType",cD="default",be="delete",h="deleteEvent",br="deleteFieldsMessage",b2="deleteMessage",F="description",bV="disabled",b3=".",bq="drag",aL="dragContainer",B="dragContainerNode",cg="dragNodesList",aH="drop",cq="dropNode",bG="dropZone",bj="dropZoneNode",aP="duplicate",D="duplicateEvent",bD="duplicateMessage",Y="edit",p="editEvent",ba="editMessage",bW="",bE="field",f="fields",b0="for",u="form",bt="formBuilder",aQ="form-builder-field",b6="gear",w="help",q="helper",aA="hidden",co="hiddenAttributes",v="icon",cB="id",ap="label",cj="labelNode",bS="lightbulb",bv="metadata",aK="name",j="newwin",bc="no",cT="node",a="panel",aG="parent",ci="pencil",bo="portalLayout",aY="predefinedValue",bH="proxy",cf="readOnly",cw="readOnlyAttributes",a4="rendered",av="required",bm="requiredFlagNode",bC="select",bu="selected",bg="settings",ay="settingsFormNode",ac="showLabel",aC="size",ad=" ",bU="state",b7="string",ce="strings",aj="templateNode",bY="text",ax="textarea",y="tip",bL="tipIconNode",ae="type",aO="unique",bz="widget",cy="yes",ca="zone",o=",",cL="-",aB=".",P="",ch="#",bk="_",K=cn.getClassName,bB=K(a5),bw=K(u,cx,cG),aw=K(u,cx,cG,be),X=K(u,cx,cG,aP),aN=K(u,cx,cG,Y),n=K(u,cx,cG,cJ),az=K(u,cx,aH,cT),H=K(u,cx,aH,ca),cv=K(u,cx,bE),aq=K(u,cx,bE,Q),bd=K(u,cx,bE,bu),cb=K(u,cx,v),ak=K(u,cx,v,be),bx=K(u,cx,v,aP),Z=K(u,cx,v,Y),bF=K(u,cx,v,y),a1=K(u,cx,av),I=K(u,cx,aO),c=K(bE),aU=K(bE,ap),bI=K(bE,bY),t=K(q,cC),al=K(q,aA),b4=K(bU,cD),N=K(bz),cl='<div class="'+[N,bB,cv].join(ad)+'"></div>',ah='<div class="'+H+'"></div>',bl='<label class="'+aU+'" for="{id}">{label}</label>',aF='<span class="'+a1+'">*</span>',bA='<a href="javascript:;" class="'+bF+'"></a>';var am=cn.Component.create({NAME:aQ,AUGMENTS:[cn.FieldSupport]});var x=cn.Component.create({NAME:aQ,ATTRS:{acceptChildren:{value:true},controlsToolbar:{validator:cQ,valueFn:"_valueControlsToolbar"},dataType:{value:b7},disabled:{value:false},hiddenAttributes:{validator:a9,value:[]},id:{setter:"_setId"},label:{value:bW},localizationMap:{value:{}},name:{valueFn:function(){var A=this;var L=A.get(ae);return cn.FormBuilderField.buildFieldName(L);}},parent:{value:null},predefinedValue:{value:bW},readOnly:{validator:bf,value:false},readOnlyAttributes:{validator:a9,value:[]},required:{setter:cn.DataType.Boolean.parse,value:false},selected:{setter:cn.DataType.Boolean.parse,value:false},showLabel:{setter:cn.DataType.Boolean.parse,value:true},strings:{value:{button:"Button",buttonType:"Button Type",deleteFieldsMessage:"Are you sure you want to delete the selected field(s)?",duplicateMessage:"Duplicate",editMessage:"Edit",label:"Label",large:"Large",medium:"Medium",multiple:"Multiple",name:"Name",no:"No",options:"Options",predefinedValue:"Predefined Value",readOnly:"Read Only",required:"Required",reset:"Reset",showLabel:"Show Label",small:"Small",submit:"Submit",tip:"Tip",type:"Type",width:"Width",yes:"Yes"}},tabIndex:{value:1},template:{value:bW},tip:{value:bW},type:{value:bW},unique:{setter:cn.DataType.Boolean.parse,value:false},zIndex:{value:100},dropZoneNode:{valueFn:function(){return cn.Node.create(ah);
}},labelNode:{valueFn:function(){var A=this;return cn.Node.create(cd.sub(bl,{id:A.get(cB),label:A.get(ap)}));}},requiredFlagNode:{valueFn:function(){return cn.Node.create(aF);}},templateNode:{valueFn:"getNode"},tipIconNode:{valueFn:function(){return cn.Node.create(bA);}}},UI_ATTRS:[g,bV,f,ap,aK,aY,av,bu,ac,y,aO],EXTENDS:am,buildFieldId:function(A){return f+bk+bE+bk+A;},buildFieldName:function(A){return A+(++cn.Env._uidx);},HTML_PARSER:{dropZoneNode:b3+H,labelNode:ap+b3+aU,requiredFlagNode:b3+a1,tipIconNode:b3+bF},prototype:{BOUNDING_TEMPLATE:cl,CONTROLS_TEMPLATE:'<div class="'+n+'"></div>',initializer:function(){var A=this;A.toolTip=new cn.Tooltip({trigger:A.get(bL),hideDelay:100});},renderUI:function(){var A=this;var L=A.get(cN);var cW=A.get(cj);var cY=A.get(bm);var cX=A.get(aj);var cV=A.get(bL);L.addClass(t);L.append(cW);L.append(cY);L.append(cV);L.append(cX);A.toolTip.render();},destructor:function(){var A=this;A.get(f).each(function(cV){cV.destroy();});var L=A.get(cx);if(L.editingField===A){delete L.editingField;L.closeEditProperties();}if(L.selectedField===A){delete L.selectedField;}if(A.controlsToolbar){A.controlsToolbar.destroy();}A.get(a0).dd.destroy();A.toolTip.destroy();A.get(aG).removeField(A);L.uniqueFields.remove(A);},createField:function(cV){var A=this;var L=A.get(cx);cV=L.createField(cV);cV.set(aG,A);return cV;},getHTML:function(){return bW;},getNode:function(){var A=this;return cn.Node.create(A.getHTML());},getProperties:function(){var A=this;var cX=A.getPropertyModel();var cW=A.get(co);var L=A.get(cw);var cV=[];cO.each(cX,function(c1){var cZ=c1.attributeName;if(cO.indexOf(cW,cZ)>-1){return;}var c0=A.get(cZ),cY=cd.type(c0);if(cY===a7){c0=String(c0);}c1.value=c0;if(cO.indexOf(L,cZ)>-1){c1.editor=false;}cV.push(c1);});return cV;},getPropertyModel:function(){var L=this;var A=L.getStrings();return[{attributeName:ae,editor:false,name:A[ae]},{attributeName:ap,editor:new cn.TextCellEditor(),name:A[ap]},{attributeName:ac,editor:new cn.RadioCellEditor({options:{"true":A[cy],"false":A[bc]}}),formatter:cn.bind(L._booleanFormatter,L),name:A[ac]},{attributeName:cf,editor:new cn.RadioCellEditor({options:{"true":A[cy],"false":A[bc]}}),formatter:cn.bind(L._booleanFormatter,L),name:A[cf]},{attributeName:av,editor:new cn.RadioCellEditor({options:{"true":A[cy],"false":A[bc]}}),formatter:cn.bind(L._booleanFormatter,L),name:A[av]},{attributeName:aK,editor:new cn.TextCellEditor({validator:{rules:{value:{required:true}}}}),name:A[aK]},{attributeName:aY,editor:new cn.TextCellEditor(),name:A[aY]},{attributeName:y,editor:new cn.TextAreaCellEditor(),name:A[y]}];},_booleanFormatter:function(cW){var L=this;var A=L.getStrings();var cV=cn.DataType.Boolean.parse(cW.record.get(bM).value);return cV?A[cy]:A[bc];},_renderControlsToolbar:function(){var L=this;var cV=L.get(a0);if(!L.controlsNode){L.controlsNode=cn.Node.create(L.CONTROLS_TEMPLATE);L.controlsNode.appendTo(cV);}var A=L.controlsToolbar=new cn.Toolbar(L.get(b1)).render(L.controlsNode);A.get(a0).hide();L._uiSetRequired(L.get(av));},_setId:function(A){return cn.FormBuilderField.buildFieldId(A);},_uiSetAcceptChildren:function(cX){var A=this;var L=A.get(a0);var cW=A.get(bj);var cV=L.one(b3+H);if(cX&&!cV){L.append(cW);}else{if(!cX&&cV){cV.remove();}else{if(cX&&cV){A.set(bj,cV);}}}},_uiSetDisabled:function(cV){var A=this;var L=A.get(aj);if(cV){L.setAttribute(bV,cV);}else{L.removeAttribute(bV);}},_handleDuplicateEvent:function(L){var A=this;if(!A.get(aO)){A.get(cx).duplicateField(A);}},_handleEditEvent:function(L){var A=this;A.get(cx).editField(A);},_handleDeleteEvent:function(cV){var L=this;var A=L.getStrings();if(confirm(A[br])){L.destroy();}},_uiSetFields:function(cV){var A=this;var L=A.get(cx);L.plotFields(cV,A.get(bj));},_uiSetLabel:function(cV){var A=this;var L=A.get(cj);L.setContent(cV);},_uiSetName:function(cV){var A=this;var L=A.get(aj);L.set(aK,cV);},_uiSetPredefinedValue:function(cV){var A=this;var L=A.get(aj);L.val(cV);},_uiSetRequired:function(cX){var cV=this;var cW=cV.get(cx);var L=cV.controlsToolbar;var A=cV.getStrings();if(L){if(cX&&!cW.get(bK)){L.remove(h);}else{L.add({handler:cn.bind(cV._handleDeleteEvent,cV),icon:a3,id:h,title:A[b2]});}}cV.get(bm).toggleClass(al,!cX);},_uiSetSelected:function(cV){var L=this;L.get(a0).toggleClass(bd,cV);if(!L.controlsToolbar){L._renderControlsToolbar();}var A=L.controlsToolbar.get(a0);if(cV){A.show();}else{A.hide();}},_uiSetShowLabel:function(cV){var A=this;var L=A.get(cj);L.toggleClass(al,!cV);},_uiSetTip:function(cV){var A=this;var L=A.get(bL);L.toggleClass(al,!cV);A.toolTip.set(d,cV);},_uiSetUnique:function(cX){var cV=this;var cW=cV.get(a0);var L=cV.controlsToolbar;var A=cV.getStrings();cW.toggleClass(I,cX);if(L){if(cX){L.remove(D);}else{L.add({handler:cn.bind(cV._handleDuplicateEvent,cV),icon:j,id:D,title:A[bD]});}}},_valueControlsToolbar:function(){var L=this;var A=L.getStrings();return{activeState:false,children:[{handler:cn.bind(L._handleEditEvent,L),icon:b6,id:p,title:A[ba]},{handler:cn.bind(L._handleDuplicateEvent,L),icon:j,id:D,title:A[bD]},{handler:cn.bind(L._handleDeleteEvent,L),icon:a3,id:h,title:A[b2]}]};}}});cn.FormBuilderField=x;cn.FormBuilder.types["field"]=cn.FormBuilderField;var cd=cn.Lang,a9=cd.isArray,aJ=cd.isNumber,b9=cd.isString,bn=cn.cached(function(A){return A.substring(0,1).toUpperCase()+A.substring(1);}),cG="button",cE="buttonType",b3=".",bW="",bE="field",f="fields",aQ="form-builder-field",b8="form-builder-button-field",bh="input",ap="label",aK="name",cT="node",aa="option",ai="options",aY="predefinedValue",bH="proxy",b5="reset",bu="selected",aE="submit",ad=" ",ce="strings",aS="template",aj="templateNode",bY="text",ae="type",m="value",K=cn.getClassName,bJ=K(bE,bh),W=K(bE,bh,bY),bZ=K(aQ),cs=K(aQ,cT),b4=K(bU,cD),bX='<input id="{id}" class="'+[cs,bJ].join(ad)+'" name="{name}" type="{type}" value="{value}" />',cU=[aE,b5,cG];var cr=cn.Component.create({NAME:b8,ATTRS:{acceptChildren:{value:false,readOnly:true},buttonType:{value:aE,validator:function(A){return cn.Array(cU).indexOf(A.toLowerCase())>-1;
}},predefinedValue:{value:bn(aE)},showLabel:{value:false},template:{valueFn:function(){return bX;}}},UI_ATTRS:cn.FormBuilderField.UI_ATTRS.concat([cE]),CSS_PREFIX:bZ,EXTENDS:cn.FormBuilderField,prototype:{getHTML:function(){var A=this;return cd.sub(A.get(aS),{id:A.get(cB),label:A.get(ap),name:A.get(aK),type:A.get(cE),value:A.get(aY)});},getPropertyModel:function(){var L=this;var A=L.getStrings();var cV=cn.FormBuilderButtonField.superclass.getPropertyModel.apply(L,arguments);cV.push({attributeName:cE,editor:new cn.RadioCellEditor({options:{"button":A[cG],"reset":A[b5],"submit":A[aE]}}),name:A[cE]});return cV;},_uiSetButtonType:function(cV){var A=this;var L=A.get(aj);L.setAttribute(ae,cV);}}});cn.FormBuilderButtonField=cr;cn.FormBuilder.types["button"]=cn.FormBuilderButtonField;var cd=cn.Lang,a9=cd.isArray,bf=cd.isBoolean,aJ=cd.isNumber,b9=cd.isString,a7="boolean",aR="checkbox",R="checked",b3=".",bW="",bE="field",cI="form-builder-checkbox-field",aQ="form-builder-field",ap="label",b="labels",aK="name",cT="node",aY="predefinedValue",ad=" ",aS="template",aj="templateNode",m="value",K=cn.getClassName,c=K(bE),au=K(bE,aR),ck=K(bE,aD),bZ=K(aQ),cK=K(aQ,aR),cs=K(aQ,cT),a6='<input id="{id}" class="'+[cs,c,au,ck].join(ad)+'" name="{name}" type="checkbox" value="{value}" {checked} />';var ag=cn.Component.create({NAME:cI,ATTRS:{dataType:{value:a7},predefinedValue:{setter:cn.DataType.Boolean.parse,value:false},template:{valueFn:function(){return a6;}}},CSS_PREFIX:bZ,EXTENDS:cn.FormBuilderField,prototype:{renderUI:function(){var A=this;var cV=A.get(aj);var L=A.get(cj);cn.FormBuilderCheckBoxField.superclass.renderUI.apply(A,arguments);L.insert(cV,L,"before");},getPropertyModel:function(){var L=this;var A=L.getStrings();var cV=cn.FormBuilderCheckBoxField.superclass.getPropertyModel.apply(L,arguments);cO.each(cV,function(cX,cW,cY){if(cX.attributeName===aY){cY[cW]={attributeName:aY,editor:new cn.RadioCellEditor({options:{"true":A[cy],"false":A[bc]}}),formatter:cn.bind(L._booleanFormatter,L),name:A[aY]};}});return cV;},getHTML:function(){var A=this;var L=A.get(R);return cd.sub(A.get(aS),{checked:L?'checked="checked"':bW,id:A.get(cB),label:A.get(ap),name:A.get(aK),value:A.get(aY)});},_uiSetPredefinedValue:function(cV){var A=this;var L=A.get(aj);if(cV){L.setAttribute(R,cV);}else{L.removeAttribute(R);}}}});cn.FormBuilderCheckBoxField=ag;cn.FormBuilder.types.checkbox=cn.FormBuilderCheckBoxField;var cd=cn.Lang,a0="boundingBox",cN="contentBox",aV="container",cR="dataType",b3=".",aH="drop",bW="",ac="showLabel",bE="field",f="fields",bj="dropZoneNode",aQ="form-builder-field",M="form-builder-fieldset-field",cB="id",v="icon",ap="label",aK="name",cT="node",aY="predefinedValue",ad=" ",ce="strings",aS="template",aj="templateNode",bY="text",ae="type",m="value",ca="zone",K=cn.getClassName,bZ=K(aQ),cs=K(aQ,cT),at=K(u,cx,aH,ca),aX='<fieldset id="{id}" class="'+[cs].join(ad)+'"></fieldset>',k='<legend class="'+aU+'"></legend>';var E=cn.Component.create({NAME:M,ATTRS:{acceptChildren:{value:true,readOnly:true},dataType:{value:undefined},labelNode:{valueFn:function(){return cn.Node.create(k);}},template:{valueFn:function(){return aX;}}},UI_ATTRS:[g,ap,ac],CSS_PREFIX:bZ,EXTENDS:cn.FormBuilderField,prototype:{CONTENT_TEMPLATE:aX,getHTML:function(){var A=this;return cd.sub(A.get(aS),{id:A.get(cB)});},getPropertyModel:function(){var L=this;var A=L.getStrings();return[{attributeName:ae,editor:false,name:A[ae]},{attributeName:ap,editor:new cn.TextCellEditor(),name:A[ap]},{attributeName:ac,editor:new cn.RadioCellEditor({options:{"true":A[cy],"false":A[bc]}}),formatter:cn.bind(L._booleanFormatter,L),name:A[ac]}];},_uiSetAcceptChildren:function(cX){var A=this;var L=A.get(cN);var cW=A.get(bj);var cV=L.one(b3+at);if(cX&&!cV){L.append(cW);}else{if(!cX&&cV){cV.remove();}else{if(cX&&cV){A.set(bj,cV);}}}A.get(aj).hide();}}});cn.FormBuilderFieldsetField=E;cn.FormBuilder.types["fieldset"]=cn.FormBuilderFieldsetField;var cd=cn.Lang,b3=".",bW="",bE="field",f="fields",aQ="form-builder-field",cM="form-builder-file-upload-field",v="icon",cB="id",ap="label",aK="name",cT="node",aY="predefinedValue",ad=" ",ce="strings",aS="template",aj="templateNode",bY="text",ae="type",m="value",K=cn.getClassName,bZ=K(aQ),cs=K(aQ,cT),b4=K(bU,cD),bR='<input id="{id}" class="'+[cs].join(ad)+'" name="{name}" type="file" value="{value}" />';var S=cn.Component.create({NAME:cM,ATTRS:{template:{valueFn:function(){return bR;}}},CSS_PREFIX:bZ,EXTENDS:cn.FormBuilderField,prototype:{getHTML:function(){var A=this;return cd.sub(A.get(aS),{id:A.get(cB),label:A.get(ap),name:A.get(aK),value:A.get(aY)});}}});cn.FormBuilderFileUploadField=S;cn.FormBuilder.types["fileupload"]=cn.FormBuilderFileUploadField;var cA=cn.Lang,cO=cn.Array,b9=cA.isString,J="addOption",bM="data",bq="drag",aH="drop",l="editOptions",bb="editable",s="editor",bE="field",f="fields",bt="form-builder",T="form-builder-multiple-choice-field",V="form-builder-options-editor",aA="hidden",v="icon",cB="id",bh="input",ao="item",ap="label",cF="multiple",aK="name",cT="node",aa="option",bP="optionTemplate",ai="options",aY="predefinedValue",G="render",ad=" ",aS="template",aj="templateNode",bY="text",ae="type",m="value",o=",",P="",bQ=" ",K=cn.getClassName,z=function(L){var A={};cO.each(L,function(cW,cV,cX){A[cW.value]=cW.label;});return A;},bJ=K(bE,bh),W=K(bE,bh,bY),bZ=K(bt,bE),cs=K(aQ,cT),cz=K(bt,ai,s,aA);var bs=cn.Component.create({NAME:V,ATTRS:{editable:{setter:function(){return false;}}},EXTENDS:cn.RadioCellEditor,prototype:{ELEMENT_TEMPLATE:'<div class="'+cz+'"></div>',initializer:function(){var A=this;A.after(G,function(){A._onEditEvent();});},_onSubmit:function(L){var A=this;A.saveOptions();bs.superclass._onSubmit.apply(this,arguments);}}});var e=cn.Component.create({NAME:T,ATTRS:{acceptChildren:{value:false,readOnly:true},options:{value:[{label:"option 1",value:"value 1"},{label:"option 2",value:"value 2"},{label:"option 3",value:"value 3"}]},optionTemplate:{value:'<option value="{value}">{label}</option>'},predefinedValue:{setter:cO}},UI_ATTRS:[g,ap,aK,ai,aY,ac],CSS_PREFIX:bZ,EXTENDS:cn.FormBuilderField,prototype:{initializer:function(){var A=this;
var L=A.get(ai);A.predefinedValueEditor=new cn.DropDownCellEditor({options:z(L)});},getPropertyModel:function(){var L=this;var cW=L.get(ai);var A=L.getStrings();var cV=cn.FormBuilderMultipleChoiceField.superclass.getPropertyModel.apply(L,arguments);cO.each(cV,function(cY,cX,cZ){if(cY.attributeName===aY){cZ[cX]=cn.merge(cY,{editor:L.predefinedValueEditor,formatter:function(c1){var c3=L.predefinedValueEditor.get(ai);var c0=cO(c1.record.get(bM).value);var c2=cn.Array.map(c0,function(c4){return c3[c4];});return c2.join(o+bQ);}});}});cV.push({attributeName:ai,editor:new bs({editable:true,on:{optionsChange:function(cX){L.predefinedValueEditor.set(ai,cX.newVal);}},options:z(cW),inputFormatter:function(){var cX=[];cn.each(this.get(ai),function(c0,cY,c1){var cZ={label:c0,value:cY};cO.each(cW,function(c2){if(c2.value===cY){cZ=cn.merge(c2,cZ);}});cX.push(cZ);});return cX;}}),formatter:function(cY){var cX=[];cn.each(cY.record.get(bM).value,function(c0,cZ,c1){cX.push(c0.label);});return cX.join(o+bQ);},name:A[ai]});return cV;},_uiSetOptions:function(cV){var A=this;var L=[];cn.each(cV,function(cX,cW,cY){L.push(cA.sub(A.get(bP),{label:cX.label,value:cX.value}));});A.optionNodes=cn.NodeList.create(L.join(P));A.get(aj).setContent(A.optionNodes);A._uiSetPredefinedValue(A.get(aY));},_uiSetPredefinedValue:function(cV){var A=this;var L=A.optionNodes;if(!L){return;}L.set(bu,false);cO.each(cV,function(cW){L.filter('[value="'+cW+'"]').set(bu,true);});}}});cn.FormBuilderMultipleChoiceField=e;cn.FormBuilder.types["multiple-choice"]=cn.FormBuilderMultipleChoiceField;var cd=cn.Lang,R="checked",aD="choice",aV="container",cN="contentBox",b3=".",bW="",bE="field",f="fields",aQ="form-builder-field",bp="form-builder-radio-field",v="icon",cB="id",by="inline",ap="label",b="labels",a2="left",aK="name",cT="node",O="optionsContainerNode",aY="predefinedValue",ab="radio",ad=" ",aS="template",aj="templateNode",m="value",K=cn.getClassName,c=K(bE),ck=K(bE,aD),aI=K(bE,ab),bZ=K(aQ),cs=K(aQ,cT),cu=K(aQ,ai,aV),aZ=K(aQ,ab),b4=K(bU,cD),af='<div class="'+cu+'"></div>',a8='<div><input id="{id}" class="'+[c,ck,aI,cs].join(ad)+'" name="{name}" type="radio" value="{value}" {checked} {disabled} /><label class="aui-field-label" for="{id}">{label}</label></div>';var i=cn.Component.create({NAME:bp,ATTRS:{name:{value:ab},template:{valueFn:function(){return a8;}}},CSS_PREFIX:bZ,EXTENDS:cn.FormBuilderMultipleChoiceField,prototype:{getHTML:function(){return af;},_uiSetDisabled:function(cV){var A=this;var L=A.get(aj);L.all(bh).each(function(cW){if(cV){cW.setAttribute(bV,cV);}else{cW.removeAttribute(bV);}});},_uiSetOptions:function(cW){var A=this;var L=0;var cV=A.get(aj);cV.setContent(bW);cn.each(cW,function(cY,cX,cZ){cV.append(cn.Node.create(cd.sub(a8,{checked:cY.value===A.get(aY)?'checked="checked"':bW,disabled:A.get(bV)?'disabled="disabled"':bW,id:A.get(cB)+L++,label:cY.label,name:A.get(aK),value:cY.value})));});}}});cn.FormBuilderRadioField=i;cn.FormBuilder.types.radio=cn.FormBuilderRadioField;var cd=cn.Lang,a9=cd.isArray,aJ=cd.isNumber,b9=cd.isString,cG="button",b3=".",bW="",bE="field",f="fields",aQ="form-builder-field",cm="form-builder-select-field",v="icon",cB="id",bh="input",ap="label",cF="multiple",aK="name",cT="node",aa="option",ai="options",aY="predefinedValue",bu="selected",cc="selectedIndex",ad=" ",aS="template",aj="templateNode",bY="text",ae="type",m="value",K=cn.getClassName,bJ=K(bE,bh),W=K(bE,bh,bY),bZ=K(aQ),cs=K(aQ,cT),b4=K(bU,cD),bT='<select id="{id}" class="'+[cs].join(ad)+'" name="{name}" value="{value}"></select>';var an=cn.Component.create({NAME:cm,ATTRS:{multiple:{setter:cn.DataType.Boolean.parse,value:false},template:{valueFn:function(){return bT;}}},UI_ATTRS:cn.FormBuilderField.UI_ATTRS.concat([cF,aY]),CSS_PREFIX:bZ,EXTENDS:cn.FormBuilderMultipleChoiceField,prototype:{getHTML:function(){var A=this;return cd.sub(A.get(aS),{id:A.get(cB),label:A.get(ap),name:A.get(aK),value:A.get(aY)});},getPropertyModel:function(){var L=this;var A=L.getStrings();var cV=cn.FormBuilderSelectField.superclass.getPropertyModel.apply(L,arguments);cV.push({attributeName:cF,editor:new cn.RadioCellEditor({options:{"true":A[cy],"false":A[bc]}}),formatter:cn.bind(L._booleanFormatter,L),name:A[cF]});return cV;},_uiSetMultiple:function(cV){var A=this;var L=A.get(aj);if(cV){L.setAttribute(cF,cF);}else{L.removeAttribute(cF);}A.predefinedValueEditor.set(cF,cV);}}});cn.FormBuilderSelectField=an;cn.FormBuilder.types.select=cn.FormBuilderSelectField;var cd=cn.Lang,a0="boundingBox",aV="container",cN="contentBox",b3=".",bW="",bE="field",f="fields",aQ="form-builder-field",bi="form-builder-text-field",v="icon",cB="id",bh="input",ap="label",cP="large",ct="medium",aK="name",cT="node",bo="portalLayout",aY="predefinedValue",cp="small",ad=" ",aS="template",aj="templateNode",bY="text",m="value",bO="width",K=cn.getClassName,bJ=K(bE,bh),W=K(bE,bh,bY),bZ=K(aQ),cs=K(aQ,cT),bX='<input id="{id}" class="'+[cs,bJ,W].join(ad)+'" name="{name}" type="text" value="{value}" />',aT={25:"small",50:"medium",100:"large"};var bN=cn.Component.create({NAME:bi,ATTRS:{template:{valueFn:function(){return bX;}},width:{setter:cn.DataType.String.evaluate,value:25}},CSS_PREFIX:bZ,EXTENDS:cn.FormBuilderField,prototype:{getHTML:function(){var A=this;return cd.sub(A.get(aS),{id:A.get(cB),label:A.get(ap),name:A.get(aK),value:A.get(aY),width:A.get(bO)});},getPropertyModel:function(){var L=this;var A=L.getStrings();var cV=cn.FormBuilderTextField.superclass.getPropertyModel.apply(L,arguments);cV.push({attributeName:bO,editor:new cn.RadioCellEditor({options:{25:A[cp],50:A[ct],100:A[cP]}}),formatter:function(cX){var cW=cX.record.get(bM).value;return A[aT[cW]];},name:A[bO]});return cV;},_uiSetWidth:function(cV){var A=this;var L=A.get(aj);L.addClass(K("w"+cV));L.removeClass(K("w"+A.prevWidth));A.prevWidth=cV;}}});cn.FormBuilderTextField=bN;cn.FormBuilder.types["text"]=cn.FormBuilderTextField;var cd=cn.Lang,a9=cd.isArray,aJ=cd.isNumber,b9=cd.isString,b3=".",cH="form-builder-textarea-field",K=cn.getClassName,c=K(bE),bI=K(bE,bY),U=K(bE,ax),bZ=K(aQ),cs=K(aQ,cT),ar='<textarea id="{id}" class="'+[cs,c,bI,U].join(ad)+'" name="{name}">{value}</textarea>';
var aW=cn.Component.create({NAME:cH,ATTRS:{template:{valueFn:function(){return ar;}}},CSS_PREFIX:bZ,EXTENDS:cn.FormBuilderTextField,prototype:{getPropertyModel:function(){var A=this;var cV=A.get(ai);var L=cn.FormBuilderTextAreaField.superclass.getPropertyModel.apply(A,arguments);cO.each(L,function(cX,cW,cY){if(cX.attributeName===aY){cY[cW].editor=new cn.TextAreaCellEditor();}});return L;}}});cn.FormBuilderTextAreaField=aW;cn.FormBuilder.types["textarea"]=cn.FormBuilderTextAreaField;},"@VERSION@",{skinnable:true,requires:["aui-datatype","aui-panel","aui-tooltip"]});AUI.add("aui-form-builder",function(a){},"@VERSION@",{skinnable:true,use:["aui-form-builder-base","aui-form-builder-field"]});