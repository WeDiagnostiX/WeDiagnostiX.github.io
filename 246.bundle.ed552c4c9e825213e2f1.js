"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[246],{27246:(o,e,t)=>{t.r(e),t.d(e,{default:()=>w});var i=t(47316),a=t(84793);const{windowLevelPresets:l}=a.defaults;function n(o,e,t){return{id:o.toString(),title:e,subtitle:t,commands:[{commandName:"setWindowLevel",commandOptions:{...l[o]},context:"CORNERSTONE"}]}}function r(o,e=["default","mpr"]){return e.map((e=>({commandName:"setToolActive",commandOptions:{toolGroupId:e,toolName:o},context:"CORNERSTONE"})))}const s=[{id:"MeasurementTools",uiType:"ohif.splitButton",props:{groupId:"MeasurementTools",evaluate:"evaluate.group.promoteToPrimaryIfCornerstoneToolNotActiveInTheList",primary:a.ToolbarService.createButton({id:"Length",icon:"tool-length",label:"Length",tooltip:"Length Tool",commands:r("Length"),evaluate:"evaluate.cornerstoneTool"}),secondary:{icon:"chevron-down",tooltip:"More Measure Tools"},items:[a.ToolbarService.createButton({id:"Bidirectional",icon:"tool-bidirectional",label:"Bidirectional",tooltip:"Bidirectional Tool",commands:r("Bidirectional"),evaluate:"evaluate.cornerstoneTool"}),a.ToolbarService.createButton({id:"EllipticalROI",icon:"tool-ellipse",label:"Ellipse",tooltip:"Ellipse ROI",commands:r("EllipticalROI"),evaluate:"evaluate.cornerstoneTool"}),a.ToolbarService.createButton({id:"CircleROI",icon:"tool-circle",label:"Circle",tooltip:"Circle Tool",commands:r("CircleROI"),evaluate:"evaluate.cornerstoneTool"})]}},{id:"Zoom",uiType:"ohif.radioGroup",props:{icon:"tool-zoom",label:"Zoom",commands:r("Zoom"),evaluate:"evaluate.cornerstoneTool"}},{id:"WindowLevel",uiType:"ohif.splitButton",props:{groupId:"WindowLevel",primary:a.ToolbarService.createButton({id:"WindowLevel",icon:"tool-window-level",label:"Window Level",tooltip:"Window Level",commands:r("WindowLevel"),evaluate:"evaluate.cornerstoneTool"}),secondary:{icon:"chevron-down",tooltip:"W/L Presets"},renderer:i.eJ,items:[n(1,"Soft tissue","400 / 40"),n(2,"Lung","1500 / -600"),n(3,"Liver","150 / 90"),n(4,"Bone","2500 / 480"),n(5,"Brain","80 / 40")]}},{id:"Pan",uiType:"ohif.radioGroup",props:{icon:"tool-move",label:"Pan",commands:r("Pan"),evaluate:"evaluate.cornerstoneTool"}},{id:"Capture",uiType:"ohif.radioGroup",props:{icon:"tool-capture",label:"Capture",commands:[{commandName:"showDownloadViewportModal",context:"CORNERSTONE"}],evaluate:"evaluate.action"}},{id:"Layout",uiType:"ohif.layoutSelector",props:{rows:3,columns:4,evaluate:"evaluate.action",commands:[{commandName:"setViewportGridLayout"}]}},{id:"MoreTools",uiType:"ohif.splitButton",props:{groupId:"MoreTools",evaluate:"evaluate.group.promoteToPrimaryIfCornerstoneToolNotActiveInTheList",primary:a.ToolbarService.createButton({id:"Reset",icon:"tool-reset",label:"Reset View",tooltip:"Reset View",commands:[{commandName:"resetViewport",context:"CORNERSTONE"}],evaluate:"evaluate.action"}),secondary:{icon:"chevron-down",tooltip:"More Tools"},items:[a.ToolbarService.createButton({id:"Reset",icon:"tool-reset",label:"Reset View",tooltip:"Reset View",commands:[{commandName:"resetViewport",context:"CORNERSTONE"}],evaluate:"evaluate.action"}),a.ToolbarService.createButton({id:"RotateRight",icon:"tool-rotate-right",label:"Rotate Right",tooltip:"Rotate Right +90",commands:[{commandName:"rotateViewportCW",context:"CORNERSTONE"}],evaluate:"evaluate.action"}),a.ToolbarService.createButton({id:"FlipHorizontal",icon:"tool-flip-horizontal",label:"Flip Horizontally",tooltip:"Flip Horizontally",commands:[{commandName:"flipViewportHorizontal",context:"CORNERSTONE"}],evaluate:"evaluate.action"}),a.ToolbarService.createButton({id:"StackScroll",icon:"tool-stack-scroll",label:"Stack Scroll",tooltip:"Stack Scroll",commands:r("StackScroll"),evaluate:"evaluate.cornerstoneTool"}),a.ToolbarService.createButton({id:"Invert",icon:"tool-invert",label:"Invert Colors",tooltip:"Invert Colors",commands:[{commandName:"invertViewport",context:"CORNERSTONE"}],evaluate:"evaluate.action"}),a.ToolbarService.createButton({id:"CalibrationLine",icon:"tool-calibration",label:"Calibration Line",tooltip:"Calibration Line",commands:r("CalibrationLine"),evaluate:"evaluate.cornerstoneTool"})]}}],c=JSON.parse('{"u2":"@ohif/mode-basic-dev-mode"}').u2;var d=t(73577);const u="@ohif/extension-default.layoutTemplateModule.viewerLayout",m="@ohif/extension-default.sopClassHandlerModule.stack",p="@ohif/extension-default.panelModule.measure",v="@ohif/extension-default.panelModule.seriesList",T="@ohif/extension-cornerstone.viewportModule.cornerstone",f="@ohif/extension-cornerstone-dicom-sr.sopClassHandlerModule.dicom-sr",h="@ohif/extension-dicom-video.sopClassHandlerModule.dicom-video",S="@ohif/extension-dicom-video.viewportModule.dicom-video",b="@ohif/extension-dicom-pdf.sopClassHandlerModule.dicom-pdf",N="@ohif/extension-dicom-pdf.viewportModule.dicom-pdf",y={"@ohif/extension-default":"^3.0.0","@ohif/extension-cornerstone":"^3.0.0","@ohif/extension-cornerstone-dicom-sr":"^3.0.0","@ohif/extension-dicom-pdf":"^3.0.1","@ohif/extension-dicom-video":"^3.0.1"};const w={id:c,modeFactory:function({modeConfiguration:o}){return{id:c,routeName:"dev",displayName:d.Z.t("Modes:Basic Dev Viewer"),onModeEnter:({servicesManager:o,extensionManager:e})=>{const{toolbarService:t,toolGroupService:i}=o.services,a=e.getModuleEntry("@ohif/extension-cornerstone.utilityModule.tools"),{toolNames:l,Enums:n}=a.exports,r={active:[{toolName:l.WindowLevel,bindings:[{mouseButton:n.MouseBindings.Primary}]},{toolName:l.Pan,bindings:[{mouseButton:n.MouseBindings.Auxiliary}]},{toolName:l.Zoom,bindings:[{mouseButton:n.MouseBindings.Secondary}]},{toolName:l.StackScrollMouseWheel,bindings:[]}],passive:[{toolName:l.Length},{toolName:l.Bidirectional},{toolName:l.Probe},{toolName:l.EllipticalROI},{toolName:l.CircleROI},{toolName:l.RectangleROI},{toolName:l.StackScroll},{toolName:l.CalibrationLine}],enabled:[{toolName:l.ImageOverlayViewer}]};i.createToolGroupAndAddTools("default",r),t.addButtons(s),t.createButtonSection("primary",["MeasurementTools","Zoom","WindowLevel","Pan","Layout","MoreTools"])},onModeExit:({servicesManager:o})=>{const{toolGroupService:e,measurementService:t,toolbarService:i,uiDialogService:a,uiModalService:l}=o.services;a.dismissAll(),l.hide(),e.destroy()},validationTags:{study:[],series:[]},isValidMode:({modalities:o})=>({valid:!o.split("\\").includes("SM"),description:"The mode does not support the following modalities: SM"}),routes:[{path:"viewer-cs3d",layoutTemplate:({location:o,servicesManager:e})=>({id:u,props:{leftPanels:[v],rightPanels:[p],viewports:[{namespace:T,displaySetsToDisplay:[m]},{namespace:S,displaySetsToDisplay:[h]},{namespace:N,displaySetsToDisplay:[b]}]}})}],extensions:y,hangingProtocol:"default",sopClassHandlers:[h,m,b,f],hotkeys:[...a.dD.defaults.hotkeyBindings]}},extensionDependencies:y}}}]);
//# sourceMappingURL=246.bundle.ed552c4c9e825213e2f1.js.map