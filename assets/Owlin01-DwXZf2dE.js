import{_ as o,E as c,S as d,T as m,a as l,Q as u,W as p,A as g,b as f,c as b,d as h,o as v}from"./index-Bmi1ccQk.js";const w={name:"BabylonARComponent",mounted(){this.initBabylon(),window.addEventListener("resize",this.onResize)},beforeUnmount(){window.removeEventListener("resize",this.onResize),this.engine&&this.engine.dispose()},methods:{async initBabylon(){const n=document.getElementById("renderCanvas"),a=new c(n,!0,{preserveDrawingBuffer:!0,stencil:!0,disableWebGL2Support:!1}),e=await this.createScene(a,n);a.runRenderLoop(()=>{e&&e.activeCamera&&e.render()}),this.engine=a,this.scene=e},async createScene(n,a){const e=new d(n);return await this.setupXR(e,{uiOptions:{sessionMode:"immersive-ar"}}),e},async setupXR(n,a){n.createDefaultEnvironment({createGround:!1,createSkybox:!1});const e=new m("root",n),s=await l.ImportMeshAsync("","https://cdn.tinyglb.com/models/","aaa80e82c62a475a821170e0c447ad2f.glb",n);s.meshes[0].parent=e,e.rotationQuaternion=new u;const t=await n.createDefaultXRExperienceAsync(a);return t.baseExperience.featuresManager.enableFeature(p.IMAGE_TRACKING,"latest",{images:[{src:"https://cdn.babylonjs.com/imageTracking.png",estimatedRealWorldWidth:.2}]}).onTrackedImageUpdatedObservable.add(i=>{i.transformationMatrix.decompose(e.scaling,e.rotationQuaternion,e.position),e.setEnabled(!0),e.translate(g.Y,.1,f.LOCAL)}),t},onResize(){this.engine&&this.engine.resize()}}},y={id:"canvasZone"};function _(n,a,e,s,t,r){return v(),b("div",y,a[0]||(a[0]=[h("canvas",{id:"renderCanvas"},null,-1)]))}const x=o(w,[["render",_],["__scopeId","data-v-cb61c7d8"]]);export{x as default};
