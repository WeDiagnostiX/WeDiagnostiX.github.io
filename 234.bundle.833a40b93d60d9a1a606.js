"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[234],{2234:(e,n,a)=>{a.r(n),a.d(n,{default:()=>p});var s=a(86326);const t=JSON.parse('{"UU":"@ohif/extension-dicom-pdf"}').UU,r=`${t}.sopClassHandlerModule.dicom-pdf`;var i=a(53562);const{ImageSet:c}=i.classes,l=Object.values({ENCAPSULATED_PDF:"1.2.840.10008.5.1.4.1.1.104.1"});function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},o.apply(this,arguments)}const d=s.lazy((()=>a.e(976).then(a.bind(a,25976)))),u=e=>s.createElement(s.Suspense,{fallback:s.createElement("div",null,"Loading...")},s.createElement(d,e)),p={id:t,getViewportModule:({servicesManager:e,extensionManager:n})=>[{name:"dicom-pdf",component:a=>s.createElement(u,o({servicesManager:e,extensionManager:n},a))}],getSopClassHandlerModule:function({servicesManager:e,extensionManager:n}){return[{name:"dicom-pdf",sopClassUids:l,getDisplaySetsFromSeries:e=>((e,n,a)=>{const s=a.getActiveDataSource()[0];return e.map((e=>{const{Modality:n,SOPInstanceUID:a,EncapsulatedDocument:t}=e,{SeriesDescription:c="PDF",MIMETypeOfEncapsulatedDocument:o}=e,{SeriesNumber:d,SeriesDate:u,SeriesInstanceUID:p,StudyInstanceUID:m,SOPClassUID:S}=e,g=s.retrieve.directURL({instance:e,tag:"EncapsulatedDocument",defaultType:o||"application/pdf",singlepart:"pdf"});return{Modality:n,displaySetInstanceUID:i.utils.guid(),SeriesDescription:c,SeriesNumber:d,SeriesDate:u,SOPInstanceUID:a,SeriesInstanceUID:p,StudyInstanceUID:m,SOPClassHandlerId:r,SOPClassUID:S,referencedImages:null,measurements:null,pdfUrl:g,instances:[e],thumbnailSrc:s.retrieve.directURL({instance:e,defaultPath:"/thumbnail",defaultType:"image/jpeg",tag:"Absent"}),isDerivedDisplaySet:!0,isLoaded:!1,sopClassUids:l,numImageFrames:0,numInstances:1,instance:e}}))})(e,0,n)}]}}}}]);
//# sourceMappingURL=234.bundle.833a40b93d60d9a1a606.js.map