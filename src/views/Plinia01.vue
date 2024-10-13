<template>
  <div id="canvasZone">
    <canvas id="renderCanvas"></canvas>
  </div>
</template>

<script>
import * as BABYLON from '@babylonjs/core';
import '@babylonjs/inspector';
import '@babylonjs/loaders';
import '@babylonjs/gui';
import '@babylonjs/materials';
import '@babylonjs/procedural-textures';
import '@babylonjs/post-processes';
import '@babylonjs/serializers';

export default {
  name: 'BabylonARComponent',
  mounted() {
    this.initBabylon();
    window.addEventListener("resize", this.onResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
    if (this.engine) {
      this.engine.dispose();
    }
  },
  methods: {
    async initBabylon() {
      const canvas = document.getElementById('renderCanvas');
      const engine = new BABYLON.Engine(canvas, true, {
        preserveDrawingBuffer: true,
        stencil: true,
        disableWebGL2Support: false
      });

      const scene = await this.createScene(engine, canvas);

      engine.runRenderLoop(() => {
        if (scene && scene.activeCamera) {
          scene.render();
        }
      });

      this.engine = engine;
      this.scene = scene;
    },
    async createScene(engine, canvas) {
      const scene = new BABYLON.Scene(engine);
      await this.setupXR(scene, {
        uiOptions: {
          sessionMode: 'immersive-ar'
        }
      });
      return scene;
    },
    async setupXR(scene, options) {
      scene.createDefaultEnvironment({ createGround: false, createSkybox: false });

      const root = new BABYLON.TransformNode('root', scene);
      const model = await BABYLON.SceneLoader.ImportMeshAsync('', 'https://cdn.tinyglb.com/models/', '17fb778d959d4825800865c44305831e.glb', scene);
      model.meshes[0].parent = root;
      root.rotationQuaternion = new BABYLON.Quaternion();

      const xr = await scene.createDefaultXRExperienceAsync(options);
      const featuresManager = xr.baseExperience.featuresManager;
      const imageTracking = featuresManager.enableFeature(BABYLON.WebXRFeatureName.IMAGE_TRACKING, 'latest', {
        images: [
          {
            src: 'https://github.com/gustavo-qs/eldritch_visions/blob/main/src/assets/qrcode.png?raw=true',
            estimatedRealWorldWidth: 0.2
          }
        ]
      });

      imageTracking.onTrackedImageUpdatedObservable.add(image => {
        image.transformationMatrix.decompose(root.scaling, root.rotationQuaternion, root.position);
        root.setEnabled(true);
        root.translate(BABYLON.Axis.Y, 0.1, BABYLON.Space.LOCAL);
      });

      return xr;
    },
    onResize() {
      if (this.engine) {
        this.engine.resize();
      }
    }
  }
};
</script>

<style scoped>
html, body {
  overflow: hidden;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

#renderCanvas {
  width: 100%;
  height: 100%;
  touch-action: none;
}

#canvasZone {
  width: 100%;
  height: 100%;
}
</style>