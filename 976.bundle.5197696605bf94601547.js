"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[976],{25976:(e,t,l)=>{l.r(t),l.d(t,{default:()=>i});var a=l(86326),s=l(97598),n=l.n(s);function r({displaySets:e}){const[t,l]=(0,a.useState)(null);if(e&&e.length>1)throw new Error("OHIFCornerstonePdfViewport: only one display set is supported for dicom pdf right now");const{pdfUrl:s}=e[0];return(0,a.useEffect)((()=>{(async()=>{l(await s)})()}),[s]),a.createElement("div",{className:"bg-primary-black w-full h-full text-white"},a.createElement("object",{data:t,type:"application/pdf",className:"w-full h-full"},a.createElement("div",null,"No online PDF viewer installed")))}r.propTypes={displaySets:n().arrayOf(n().object).isRequired};const i=r}}]);
//# sourceMappingURL=976.bundle.5197696605bf94601547.js.map