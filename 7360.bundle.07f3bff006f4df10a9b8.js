"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7360],{97360:(e,n,t)=>{t.r(n),t.d(n,{createReferencedImageDisplaySet:()=>le.Z,default:()=>fe,hydrateStructuredReport:()=>ce.Z,srProtocol:()=>ee});var o=t(43001);const a=JSON.parse('{"u2":"@ohif/extension-cornerstone-dicom-sr"}').u2,s="dicom-sr",r=`${a}.sopClassHandlerModule.${s}`;var i=t(84793),c=t(72076),l=t(93725),d=t(62709),u=t(75449);const S="POINT",f="MULTIPOINT",g="POLYLINE",m="CIRCLE",p="ELLIPSE";class I extends l.AnnotationTool{constructor(e={},n={configuration:{}}){super(e,n),this.isPointNearTool=()=>null,this.getHandleNearImagePoint=()=>null,this.renderAnnotation=(e,n)=>{const{viewport:t}=e,{element:o}=t;let a=l.annotation.state.getAnnotations(this.getToolName(),o);if(!a?.length)return;if(a=this.filterInteractableAnnotationsForElement(o,a),!a?.length)return;const s=(0,u.yR)(o),{activeIndex:r,trackingUniqueIdentifiers:i}=s,c=i[r],d=a.filter((e=>i.includes(e.data?.TrackingUniqueIdentifier)));if(!t._actors?.size)return;const I={toolGroupId:this.toolGroupId,toolName:this.getToolName(),viewportId:e.viewport.id},{style:h}=l.annotation.config;for(let e=0;e<d.length;e++){const o=d[e],a=o.annotationUID,{renderableData:s,TrackingUniqueIdentifier:r}=o.data,{referencedImageId:i}=o.metadata;I.annotationUID=a;const u=h.getToolGroupToolStyles(this.toolGroupId)[this.getToolName()],R=this.getStyle("lineWidth",I,o),C=this.getStyle("lineDash",I,o),D={color:r===c?"rgb(0, 255, 0)":this.getStyle("color",I,o),lineDash:C,lineWidth:R,...u};Object.keys(s).forEach((e=>{const r=s[e];let c,d;switch(e){case S:c=this.renderPoint;break;case f:c=this.renderMultipoint;break;case g:c=this.renderPolyLine;break;case m:c=this.renderEllipse;break;case p:c=this.renderEllipse,d=l.utilities.math.ellipse.getCanvasEllipseCorners;break;default:throw new Error(`Unsupported GraphicType: ${e}`)}const u=c(n,t,r,a,i,D);this.renderTextBox(n,t,u,d,o,I,D)}))}}}_getTextBoxLinesFromLabels(e){const n=Math.min(e.length,5),t=[];for(let o=0;o<n;o++){const n=e[o];t.push(`${R(n.label)}: ${n.value}`)}return t}renderPolyLine(e,n,t,o,a,s){const r={color:s.color,width:s.lineWidth,lineDash:s.lineDash};let i=[];return t.map(((t,a)=>{const s=t.map((e=>n.worldToCanvas(e))),c=`${a}`;2===s.length?l.drawing.drawLine(e,o,c,s[0],s[1],r):l.drawing.drawPolyline(e,o,c,s,r),i=i.concat(s)})),i}renderMultipoint(e,n,t,o,a,s){let r;t.map(((t,a)=>{r=t.map((e=>n.worldToCanvas(e)));l.drawing.drawHandles(e,o,"0",r,{color:s.color})}))}renderPoint(e,n,t,o,a,s){const r=[];return t.map(((t,i)=>{const c=t[0];r.push(n.worldToCanvas(c));const u=d.metaData.get("imagePixelModule",a);let S=10,f=10;if(u){const{columns:e,rows:n}=u;S=e/10,f=n/10}const g=d.utilities.worldToImageCoords(a,c),m=d.utilities.imageToWorldCoords(a,[g[0]+S,g[1]+f]);r.push(n.worldToCanvas(m));const p=`${i}`;l.drawing.drawArrow(e,o,p,r[1],r[0],{color:s.color,width:s.lineWidth})})),r}renderEllipse(e,n,t,o,a,s){let r;return t.map(((t,a)=>{if(0===t.length)return;const i=t,c=n.getRotation();let d;r=i.map((e=>n.worldToCanvas(e))),d=90==c||270==c?l.utilities.math.ellipse.getCanvasEllipseCorners([r[2],r[3],r[0],r[1]]):l.utilities.math.ellipse.getCanvasEllipseCorners(r);const u=`${a}`;l.drawing.drawEllipse(e,o,u,d[0],d[1],{color:s.color,width:s.lineWidth,lineDash:s.lineDash})})),r}renderTextBox(e,n,t,o,a,s,r={}){if(!t||!a)return;const{annotationUID:i,data:c={}}=a,{label:d}=c,{color:u}=r;let S=t;"function"==typeof o&&(S=o(t));const f=this._getTextBoxLinesFromLabels(d),g=l.utilities.drawing.getTextBoxCoordsCanvas(S);a.data?.handles?.textBox?.worldPosition||(a.data.handles.textBox.worldPosition=n.canvasToWorld(g));const m=n.worldToCanvas(a.data.handles.textBox.worldPosition),p=this.getLinkedTextBoxStyle(s,a),I=l.drawing.drawLinkedTextBox(e,i,"1",f,m,t,{},{...p,color:u}),{x:h,y:R,width:C,height:D}=I;a.data.handles.textBox.worldBoundingBox={topLeft:n.canvasToWorld([h,R]),topRight:n.canvasToWorld([h+C,R]),bottomLeft:n.canvasToWorld([h,R+D]),bottomRight:n.canvasToWorld([h+C,R+D])}}}I.toolName="DICOMSRDisplay";const h={"Short Axis":"W: ","Long Axis":"L: ",AREA:"Area: ",Length:"",CORNERSTONEFREETEXT:""};function R(e){const n=h[e];return void 0!==n?n:e}const C={DICOMSRDisplay:I.toolName,SRLength:"SRLength",SRBidirectional:"SRBidirectional",SREllipticalROI:"SREllipticalROI",SRCircleROI:"SRCircleROI",SRArrowAnnotate:"SRArrowAnnotate",SRAngle:"SRAngle",SRCobbAngle:"SRCobbAngle",SRRectangleROI:"SRRectangleROI",SRPlanarFreehandROI:"SRPlanarFreehandROI"},D=1e-4;function T(e,n,t){const o=C.DICOMSRDisplay,a={TrackingUniqueIdentifier:e.TrackingUniqueIdentifier,renderableData:{},labels:e.labels,imageId:n};e.coords.forEach((e=>{const{GraphicType:t,GraphicData:o}=e;void 0===a.renderableData[t]&&(a.renderableData[t]=[]),a.renderableData[t].push(function(e,n,t){let o;switch(e){case S:case f:case g:o=[];for(let e=0;e<n.length;e+=2){const a=d.utilities.imageToWorldCoords(t,[n[e],n[e+1]]);o.push(a)}break;case m:{const e=[];for(let o=0;o<n.length;o+=2){const a=d.utilities.imageToWorldCoords(t,[n[o],n[o+1]]);e.push(a)}const a=e[0],s=e[1],r=c.R3.distance(a,s),i=d.metaData.get("imagePlaneModule",t);if(!i)throw new Error("No imagePlaneModule found");const{columnCosines:l,rowCosines:u}=i,S=c.R3.create();c.R3.scaleAndAdd(S,a,l,r);const f=c.R3.create();c.R3.scaleAndAdd(f,a,l,-r);const g=c.R3.create();c.R3.scaleAndAdd(g,a,u,r);const m=c.R3.create();c.R3.scaleAndAdd(m,a,u,-r),o=[S,f,g,m];break}case p:{const e=[];for(let o=0;o<n.length;o+=2){const a=d.utilities.imageToWorldCoords(t,[n[o],n[o+1]]);e.push(a)}const a=c.R3.fromValues(...e[0]),s=c.R3.fromValues(...e[1]),r=c.R3.fromValues(...e[2]),i=c.R3.fromValues(...e[3]),l=c.R3.create();c.R3.sub(l,s,a),c.R3.normalize(l,l);const u=c.R3.create();c.R3.sub(u,i,r),c.R3.normalize(u,u);const S=d.metaData.get("imagePlaneModule",t);if(!S)throw new Error("imageId does not have imagePlaneModule metadata");const{columnCosines:f}=S,g=c.R3.fromValues(...f),m=Math.abs(c.R3.dot(g,l)),p=Math.abs(c.R3.dot(g,u)),I=Math.abs(m),h=Math.abs(p);o=[],Math.abs(I-1)<D?o=[e[0],e[1],e[2],e[3]]:Math.abs(h-1)<D?o=[e[2],e[3],e[0],e[1]]:console.warn("OBLIQUE ELLIPSE NOT YET SUPPORTED");break}default:console.warn("Unsupported GraphicType:",e)}return o}(t,o,n))}));const s=d.metaData.get("imagePlaneModule",n),r={annotationUID:e.TrackingUniqueIdentifier,highlighted:!1,isLocked:!1,invalidated:!1,metadata:{toolName:o,FrameOfReferenceUID:s.frameOfReferenceUID,referencedImageId:n},data:{label:e.labels,handles:{textBox:e.textBox??{}},cachedStats:{},TrackingUniqueIdentifier:a.TrackingUniqueIdentifier,renderableData:a.renderableData,frameNumber:t}};l.annotation.state.getAnnotationManager().addAnnotation(r)}var O=t(91202);const y=O.adaptersSR.Cornerstone3D.MeasurementReport.CORNERSTONE_TOOL_CLASSES_BY_UTILITY_TYPE,E=["cornerstoneTools@^4.0.0"],U=y.CORNERSTONE_3D_TAG;const{CodeScheme:w}=O.adaptersSR.Cornerstone3D,{ImageSet:b,MetadataProvider:N}=i.classes,M=["1.2.840.10008.5.1.4.1.1.88.11","1.2.840.10008.5.1.4.1.1.88.22","1.2.840.10008.5.1.4.1.1.88.33","1.2.840.10008.5.1.4.1.1.88.34"],v="Cornerstone3DTools",P="126000",A="111028",q="126010",k="125007",V="126200",x="112040",L="112039",F="121071",B="G-C0E3",$=w.codeValues.CORNERSTONEFREETEXT,_={SRT:"SRT",CornerstoneCodeSchemes:[w.CodingSchemeDesignator,"CST4"]},G="INFERRED FROM",W="CONTAINS",H="CORNERSTONEFREETEXT";function j(e,n){return this.instances.push(...e),i.utils.sortStudyInstances(this.instances),this.instance=this.instances[this.instances.length-1],this.isLoaded=!1,this}function z(e,n,t){if(!e||!e.length)throw new Error("No instances were provided");i.utils.sortStudyInstances(e);const o=e[e.length-1],{StudyInstanceUID:a,SeriesInstanceUID:s,SOPInstanceUID:c,SeriesDescription:l,SeriesNumber:d,SeriesDate:u,ConceptNameCodeSequence:S,SOPClassUID:f}=o;if(((e,n)=>{n.forEach((n=>{if(n.StudyInstanceUID!==e)throw console.warn("Not all instances have the same UID",e,n),new Error(`Instances ${n.SOPInstanceUID} does not belong to ${e}`)}))})(o.StudyInstanceUID,e),!S||S.CodeValue!==P)return n.services.uiNotificationService.show({title:"DICOM SR",message:"OHIF only supports TID1500 Imaging Measurement Report Structured Reports. The SR you’re trying to view is not supported.",type:"warning",duration:6e3}),[];const g={Modality:"SR",displaySetInstanceUID:i.utils.guid(),SeriesDescription:l,SeriesNumber:d,SeriesDate:u,SOPInstanceUID:c,SeriesInstanceUID:s,StudyInstanceUID:a,SOPClassHandlerId:r,SOPClassUID:f,instances:e,referencedImages:null,measurements:null,isDerivedDisplaySet:!0,isLoaded:!1,sopClassUids:M,instance:o,addInstances:j};return g.load=()=>async function(e,n,t){const{displaySetService:o,measurementService:a}=n.services,s=t.getDataSources(),r=s[0],{ContentSequence:i}=e.instance;async function c(n,t=null,o=null){for(const a in n)if("object"==typeof n[a]&&null!==n[a])await c(n[a],n,a);else if(Array.isArray(n[a]))await Promise.all(n[a].map((e=>c(e,n,a))));else if("BulkDataURI"===a){const s=await r.retrieve.bulkDataURI({BulkDataURI:n[a],StudyInstanceUID:e.instance.StudyInstanceUID,SeriesInstanceUID:e.instance.SeriesInstanceUID,SOPInstanceUID:e.instance.SOPInstanceUID});t&&o&&(t[o]=new Float32Array(s))}}!0!==e.isLoaded&&await c(i);e.referencedImages=function(e){const n=Z(e.find((e=>e.ConceptNameCodeSequence.CodeValue===A)).ContentSequence).find((e=>e.ConceptNameCodeSequence.CodeValue===V)),t=[];return Z(n.ContentSequence).forEach((e=>{const{ReferencedSOPSequence:n}=e;if(n)for(const e of Z(n))if(e.ReferencedSOPClassUID){const{ReferencedSOPClassUID:n,ReferencedSOPInstanceUID:o}=e;t.push({ReferencedSOPClassUID:n,ReferencedSOPInstanceUID:o})}})),t}(i),e.measurements=function(e){const n=e.find((e=>e.ConceptNameCodeSequence.CodeValue===q)),t=function(e){const n={};return e.forEach((e=>{const t=Z(e.ContentSequence),o=t.find((e=>e.ConceptNameCodeSequence.CodeValue===x));o||console.warn("No Tracking Unique Identifier, skipping ambiguous measurement.");const a=o.UID;void 0===n[a]?n[a]=[...t]:t.forEach((e=>{e.ConceptNameCodeSequence.CodeValue!==x&&n[a].push(e)}))})),n}(Z(n.ContentSequence).filter((e=>e.ConceptNameCodeSequence.CodeValue===k))),o=[];return Object.keys(t).forEach((e=>{const n=function(e){if(e.some((e=>"SCOORD"===e.ValueType||"SCOORD3D"===e.ValueType)))return function(e){const n=e.find((e=>"SCOORD"===e.ValueType)),t=e.find((e=>"UIDREF"===e.ValueType)),o=e.find((e=>e.ConceptNameCodeSequence.CodeValue===L));if(!n)return void console.warn(`graphic ValueType ${n.ValueType} not currently supported, skipping annotation.`);const a=e.filter((e=>"NUM"===e.ValueType)),s={loaded:!1,labels:[],coords:[J(n)],TrackingUniqueIdentifier:t.UID,TrackingIdentifier:o.TextValue};return a.forEach((e=>{const{ConceptNameCodeSequence:n,MeasuredValueSequence:t}=e;t&&s.labels.push(K(n,t))})),s}(e);return function(e){const n=e.filter((e=>"NUM"===e.ValueType)),t=e.find((e=>"UIDREF"===e.ValueType)),o=e.find((e=>e.ConceptNameCodeSequence.CodeValue===L)),a=e.find((e=>e.ConceptNameCodeSequence.CodeValue===F)),s=e.filter((e=>e.ConceptNameCodeSequence.CodingSchemeDesignator===_.SRT&&e.ConceptNameCodeSequence.CodeValue===B)),r={loaded:!1,labels:[],coords:[],TrackingUniqueIdentifier:t.UID,TrackingIdentifier:o.TextValue};a&&_.CornerstoneCodeSchemes.includes(a.ConceptCodeSequence.CodingSchemeDesignator)&&a.ConceptCodeSequence.CodeValue===$&&r.labels.push({label:H,value:a.ConceptCodeSequence.CodeMeaning});if(s.length){const e=s.find((e=>_.CornerstoneCodeSchemes.includes(e.ConceptCodeSequence.CodingSchemeDesignator)&&e.ConceptCodeSequence.CodeValue===$));e&&r.labels.push({label:H,value:e.ConceptCodeSequence.CodeMeaning})}return n.forEach((e=>{const{ConceptNameCodeSequence:n,ContentSequence:t,MeasuredValueSequence:o}=e,{ValueType:a}=t;if("SCOORD"===!a)return void console.warn(`Graphic ${a} not currently supported, skipping annotation.`);const s=J(t);s&&r.coords.push(s),o&&r.labels.push(K(n,o))})),r}(e)}(t[e]);n&&o.push(n)})),o}(i);const l=a.getSourceMappings(v,"0.1");e.isHydrated=!1,e.isRehydratable=function(e,n){if(!n||!n.length)return!1;const t=n.map((e=>e.annotationType)),{measurements:o}=e,a=Object.keys(y).filter((e=>"function"==typeof y[e].isValidCornerstoneTrackingIdentifier)),s=[];a.forEach((e=>{t.includes(e)&&s.push(y[e])}));for(let e=0;e<o.length;e++){const{TrackingIdentifier:n}=o[e]||{};if(s.some((e=>{let[t,o]=n.split(":");E.includes(t)&&(t=U);const a=`${t}:${o}`;return e.isValidCornerstoneTrackingIdentifier(a)})))return!0;console.log("Measurement is not rehydratable",n,o[e])}return console.log("No measurements found which were rehydratable"),!1}(e,l),e.isLoaded=!0,o.activeDisplaySets.forEach((t=>{Y(e,t,r,n)})),o.subscribe(o.EVENTS.DISPLAY_SETS_ADDED,(t=>{const{displaySetsAdded:o}=t;o.forEach((t=>{Y(e,t,r,n)}))}))}(g,n,t),[g]}function Y(e,n,t,o){const{customizationService:a}=o.services;let s=e.measurements.filter((e=>!1===e.loaded));if(0===s.length)return;if(!n instanceof b)return;if(n.unsupported)return;const{sopClassUids:r}=n;if(s=s.filter((e=>e.coords.some((e=>r.includes(e.ReferencedSOPSequence.ReferencedSOPClassUID))))),0===s.length)return;const i=[];s.forEach((e=>{const{coords:n}=e;n.forEach((e=>{const n=e.ReferencedSOPSequence.ReferencedSOPInstanceUID;i.includes(n)||i.push(n)}))}));const c=t.getImageIdsForDisplaySet(n);for(const t of c){if(!s.length)return;const{SOPInstanceUID:o,frameNumber:r}=N.getUIDsFromImageID(t);if(i.includes(o))for(let i=s.length-1;i>=0;i--){let c=s[i];const l=a.getModeCustomization("onBeforeSRAddMeasurement")?.value;if("function"==typeof l&&(c=l({measurement:c,StudyInstanceUID:e.StudyInstanceUID,SeriesInstanceUID:e.SeriesInstanceUID})),X(c,o,r)){const e=c.coords[0].ReferencedSOPSequence&&c.coords[0].ReferencedSOPSequence?.ReferencedFrameNumber||1;T(c,t,e),c.loaded=!0,c.imageId=t,c.displaySetInstanceUID=n.displaySetInstanceUID,c.ReferencedSOPInstanceUID=c.coords[0].ReferencedSOPSequence.ReferencedSOPInstanceUID,c.frameNumber=e,delete c.coords,s.splice(i,1)}}}}function X(e,n,t){const{coords:o}=e,a=e.coords[0].ReferencedSOPSequence&&e.coords[0].ReferencedSOPSequence?.ReferencedFrameNumber||1;if(t&&Number(t)!==Number(a))return!1;for(let e=0;e<o.length;e++){const t=o[e],{ReferencedSOPInstanceUID:a}=t.ReferencedSOPSequence;if(a===n)return!0}}function J(e){const{ValueType:n,RelationshipType:t,GraphicType:o,GraphicData:a}=e;if(t!=G&&t!=W)return void console.warn(`Relationshiptype === ${t}. Cannot deal with NON TID-1400 SCOORD group with RelationshipType !== "INFERRED FROM" or "CONTAINS"`);const s={ValueType:n,GraphicType:o,GraphicData:a};if("SCOORD"===n){const{ReferencedSOPSequence:n}=e.ContentSequence;s.ReferencedSOPSequence=n}else if("SCOORD3D"===n){const{ReferencedFrameOfReferenceSequence:n}=e.ContentSequence;s.ReferencedFrameOfReferenceSequence=n}return s}function K(e,n){const{CodeMeaning:t}=e,{NumericValue:o,MeasurementUnitsCodeSequence:a}=n,{CodeValue:s}=a;return{label:t,value:`${o?Number(o).toFixed(2):""} ${s}`}}function Z(e){return e?Array.isArray(e)?e:[e]:[]}const Q=function({servicesManager:e,extensionManager:n}){return[{name:s,sopClassUids:M,getDisplaySetsFromSeries:t=>z(t,e,n)}]},ee={id:"@ohif/sr",name:"SR Key Images",protocolMatchingRules:[],toolGroupIds:["default"],numberOfPriorsReferenced:0,defaultViewport:{viewportOptions:{viewportType:"stack",toolGroupId:"default",allowUnmatchedView:!0},displaySets:[{id:"srDisplaySetId",matchedDisplaySetsIndex:-1}]},displaySetSelectors:{srDisplaySetId:{seriesMatchingRules:[{attribute:"Modality",constraint:{equals:"SR"}}]}},stages:[{name:"SR Key Images",viewportStructure:{layoutType:"grid",properties:{rows:1,columns:1}},viewports:[{viewportOptions:{allowUnmatchedView:!0},displaySets:[{id:"srDisplaySetId"}]}]}]};var ne=t(67540);const{log:te}=i.default;const oe=function(e,n){const t={};function o(o,a){if(!o.metadata?.referencedImageId)return void te.warn(`[DICOMSR] No referencedImageId found for ${a} ${o.id}`);const s=o.metadata.referencedImageId;t[s]||(t[s]={});const r=t[s];r[a]||(r[a]={data:[]});const i=e.find((e=>e.uid===o.annotationUID)),c=r[a].data;let{finding:l}=i;const d=[];i.label&&(n.includes(a)?l={CodeValue:"CORNERSTONEFREETEXT",CodingSchemeDesignator:"CORNERSTONEJS",CodeMeaning:i.label}:d.push({CodeValue:"CORNERSTONEFREETEXT",CodingSchemeDesignator:"CORNERSTONEJS",CodeMeaning:i.label})),i.findingSites&&d.push(...i.findingSites);const u=Object.assign({},o,{finding:l,findingSites:d});c.push(u)}const a=e.map((e=>e.uid)).slice(),s=l.annotation.state.getAnnotationManager(),r=s.getFramesOfReference();for(let e=0;e<r.length;e++){const n=r[e],i=s.getAnnotations(n),c=Object.keys(i);for(let e=0;e<c.length;e++){const n=c[e],s=i[n];if(s)for(let e=0;e<s.length;e++){const r=s[e],i=a.findIndex((e=>e===r.annotationUID));if(-1!==i&&(o(r,n),a.splice(i,1),!a.length))return t}}}return t},{MeasurementReport:ae}=O.adaptersSR.Cornerstone3D,{log:se}=i.default,re=e=>{const{servicesManager:n}=e,{customizationService:t}=n.services,o={downloadReport:({measurementData:e,additionalFindingTypes:n,options:t={}})=>{const a=o.generateReport(e,n,t),s=ne.default.data.datasetToBlob(a),r=URL.createObjectURL(s);window.location.assign(r)},storeMeasurements:async({measurementData:e,dataSource:n,additionalFindingTypes:o,options:a={}})=>{if(se.info("[DICOMSR] storeMeasurements"),!n||!n.store||!n.store.dicom)return se.error("[DICOMSR] datasource has no dataSource.store.dicom endpoint!"),Promise.reject({});try{const s=((e,n,t={})=>{const o=oe(e,n),a=ae.generateReport(o,d.metaData,d.utilities.worldToImageCoords,t),{dataset:s}=a;return void 0===s.SpecificCharacterSet&&(s.SpecificCharacterSet="ISO_IR 192"),s})(e,o,a),{StudyInstanceUID:r,ContentSequence:c}=s;if(!c?.[4].ContentSequence?.length)throw console.log("naturalizedReport missing imaging content",s),new Error("Invalid report, no content");const l=t.getModeCustomization("onBeforeDicomStore")?.value;let u;return"function"==typeof l&&(u=l({measurementData:e,naturalizedReport:s})),await n.store.dicom(s,null,u),r&&n.deleteStudyMetadataPromise(r),i.DicomMetadataStore.addInstances([s],!0),s}catch(e){throw console.warn(e),se.error(`[DICOMSR] Error while saving the measurements: ${e.message}`),new Error(e.message||"Error while saving the measurements.")}}},a={downloadReport:{commandFn:o.downloadReport},storeMeasurements:{commandFn:o.storeMeasurements}};return{actions:o,definitions:a,defaultContext:"CORNERSTONE_STRUCTURED_REPORT"}};function ie(e,n,t){class o extends n{}o.toolName=e,(0,l.addTool)(o)}var ce=t(83330),le=t(92522);function de(){return de=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},de.apply(null,arguments)}const ue=o.lazy((()=>t.e(5571).then(t.bind(t,85571)))),Se=e=>o.createElement(o.Suspense,{fallback:o.createElement("div",null,"Loading...")},o.createElement(ue,e)),fe={id:a,onModeEnter:function({servicesManager:e}){const{displaySetService:n}=e.services;[...n.getDisplaySetCache().values()].filter((e=>e.SOPClassHandlerId===r)).forEach((e=>{e.isHydrated=!1}))},preRegistration:function({configuration:e={}}){ie(C.DICOMSRDisplay,I),ie(C.SRLength,l.LengthTool),ie(C.SRBidirectional,l.BidirectionalTool),ie(C.SREllipticalROI,l.EllipticalROITool),ie(C.SRCircleROI,l.CircleROITool),ie(C.SRArrowAnnotate,l.ArrowAnnotateTool),ie(C.SRAngle,l.AngleTool),ie(C.SRPlanarFreehandROI,l.PlanarFreehandROITool),ie(C.SRRectangleROI,l.RectangleROITool),ie(C.SRCobbAngle,l.CobbAngleTool);const n={lineDash:"4,4"};l.annotation.config.style.setToolGroupToolStyles("SRToolGroup",{[C.DICOMSRDisplay]:n,SRLength:n,SRBidirectional:n,SREllipticalROI:n,SRCircleROI:n,SRArrowAnnotate:n,SRCobbAngle:n,SRAngle:n,SRPlanarFreehandROI:n,SRRectangleROI:n,global:{}})},getViewportModule:({servicesManager:e,extensionManager:n})=>[{name:"dicom-sr",component:t=>o.createElement(Se,de({servicesManager:e,extensionManager:n},t))}],getCommandsModule:re,getSopClassHandlerModule:Q,getUtilityModule:({servicesManager:e})=>[{name:"tools",exports:{toolNames:C}}]}},92522:(e,n,t)=>{t.d(n,{Z:()=>r});const o=t(84793).classes.ImageSet,a=(e,n)=>{const{displaySetInstanceUID:t,ReferencedSOPInstanceUID:o}=e,a=n.getDisplaySetByUID(t);if(a.images)return a.images.find((e=>e.SOPInstanceUID===o))},s=(e,n)=>{const t=[],o={};for(const s of n.measurements){const{imageId:n}=s;if(!n)continue;if(o[n])continue;const r=a(s,e);r?(o[n]=r,t.push(r)):console.log("Measurement",s,"had no instances found")}return t},r=(e,n)=>{const t=s(e,n),a=new o(t),r=t[0];return a.setAttributes({displaySetInstanceUID:a.uid,SeriesDate:r.SeriesDate,SeriesTime:r.SeriesTime,SeriesInstanceUID:a.uid,StudyInstanceUID:r.StudyInstanceUID,SeriesNumber:r.SeriesNumber||0,SOPClassUID:r.SOPClassUID,SeriesDescription:`${n.SeriesDescription} KO ${n.instance.SeriesNumber}`,Modality:"KO",isMultiFrame:!1,numImageFrames:t.length,SOPClassHandlerId:"@ohif/extension-default.sopClassHandlerModule.stack",isReconstructable:!1,isCompositeStack:!0,madeInClient:!0,excludeFromThumbnailBrowser:!0,updateInstances:function(){this.images.splice(0,this.images.length,...s(e,n)),this.numImageFrames=this.images.length}}),e.addDisplaySets(a),a}},83330:(e,n,t)=>{t.d(n,{Z:()=>p});var o=t(62709),a=t(84793);var s=t(91202),r=t(93725);const{locking:i}=r.annotation,{guid:c}=a.default.utils,{MeasurementReport:l,CORNERSTONE_3D_TAG:d}=s.adaptersSR.Cornerstone3D,u="Cornerstone3DTools",S="0.1",f=["cornerstoneTools@^4.0.0"],g=(e,n)=>{if(!n||"CORNERSTONEJS"===n.CodingSchemeDesignator)return;const t=`${n.CodingSchemeDesignator}:${n.CodeValue}`;return{...e[t],ref:t,...n,text:n.CodeMeaning}},m=(e,n)=>{if(!n||!n.length)return;const t=[];for(let o=0;o<n.length;o++){const a=g(e,n[o][0]||n[o]);a&&t.push(a)}return t.length&&t||void 0};function p({servicesManager:e,extensionManager:n,appConfig:t},s){const p=r.annotation.state.getAnnotationManager(),R=t?.disableEditing,C=n.getActiveDataSource()[0],{measurementService:D,displaySetService:T,customizationService:O}=e.services,y=O.getCustomization("codingValues",{}),E=T.getDisplaySetByUID(s),U=D.getSourceMappings(u,S);if(!U||!U.length)throw new Error("Attempting to hydrate measurements service when no mappings present. This shouldn't be reached.");const w=a.DicomMetadataStore.getInstance(E.StudyInstanceUID,E.SeriesInstanceUID,E.SOPInstanceUID),b={},N={};E.measurements.forEach((e=>{const{ReferencedSOPInstanceUID:n,imageId:t,frameNumber:o}=e;b[n]||(b[n]=t,N[n]=[]),N[n][o]||(N[n][o]=t)}));const M=function(e){const n="Imaging Measurements",t="Measurement Group",o="Tracking Identifier",a=I(e.ContentSequence).find(h(n)),s=I(a.ContentSequence).filter(h(t)),r={},i=l.CORNERSTONE_TOOL_CLASSES_BY_UTILITY_TYPE,c=[];return Object.keys(i).forEach((e=>{c.push(i[e]),r[e]=[]})),s.forEach(((e,n)=>{const t=I(e.ContentSequence).find((e=>e.ConceptNameCodeSequence.CodeMeaning===o)),a=t.TextValue;let[s,r]=a.split(":");f.includes(s)&&(s=d);const i=`${s}:${r}`;t.TextValue=i})),e}(w);let v=l.generateToolState(M,b,o.utilities.imageToWorldCoords,o.metaData);const P=O.getModeCustomization("onBeforeSRHydration")?.value;"function"==typeof P&&(v=P({storedMeasurementByAnnotationType:v,displaySet:E}));const A=U.map((e=>e.annotationType)),q={};Object.keys(v).forEach((e=>{A.includes(e)&&(q[e]=v[e])}));const k=[];let V;Object.keys(q).forEach((e=>{q[e].forEach((e=>{const n=e.annotation.data&&e.annotation.data.frameNumber||1,t=N[e.sopInstanceUid][n]||b[e.sopInstanceUid];k.includes(t)||k.push(t)}))}));const x=[];for(let e=0;e<k.length;e++){const n=k[e],{SeriesInstanceUID:t,StudyInstanceUID:a}=o.metaData.get("instance",n);x.includes(t)||x.push(t),V?V!==a&&console.warn("NO SUPPORT FOR SRs THAT HAVE MEASUREMENTS FROM MULTIPLE STUDIES."):V=a}return Object.keys(q).forEach((e=>{q[e].forEach((n=>{const t=n.annotation.data&&n.annotation.data.frameNumber||1,a=N[n.sopInstanceUid][t]||b[n.sopInstanceUid];n.uid=c();const s=o.metaData.get("instance",a),{FrameOfReferenceUID:r}=s,l={annotationUID:n.annotation.annotationUID,data:n.annotation.data,metadata:{toolName:e,referencedImageId:a,FrameOfReferenceUID:r}},d=D.getSource(u,S);l.data.label=function(e){const{findingSites:n=[],finding:t}=e;let o=n.find((e=>"CORNERSTONEFREETEXT"===e.CodeValue));return o?o.CodeMeaning:t&&"CORNERSTONEFREETEXT"===t.CodeValue?t.CodeMeaning:void 0}(n),l.data.finding=g(y,n.finding?.[0]),l.data.findingSites=m(y,n.findingSites),l.data.site=l.data.findingSites?.[0];const f=U.find((n=>n.annotationType===e)),I=D.addRawMeasurement(d,e,{annotation:l},f.toMeasurementSchema,C);if(R){const e=p.getAnnotation(I);i.setAnnotationLocked(e,!0)}k.includes(a)||k.push(a)}))})),E.isHydrated=!0,{StudyInstanceUID:V,SeriesInstanceUIDs:x}}const I=function(e){return Array.isArray(e)?e:[e]},h=e=>n=>n.ConceptNameCodeSequence.CodeMeaning===e},75449:(e,n,t)=>{t.d(n,{l2:()=>s,yR:()=>r});var o=t(62709);const a={TrackingUniqueIdentifier:null,trackingIdentifiersByViewportId:{}};function s(e,n,t=0){const s=(0,o.getEnabledElement)(e),{viewport:r}=s;a.trackingIdentifiersByViewportId[r.id]={trackingUniqueIdentifiers:n,activeIndex:t}}function r(e){const n=(0,o.getEnabledElement)(e),{viewport:t}=n;return a.trackingIdentifiersByViewportId[t.id]?a.trackingIdentifiersByViewportId[t.id]:{trackingUniqueIdentifiers:[]}}}}]);
//# sourceMappingURL=7360.bundle.07f3bff006f4df10a9b8.js.map