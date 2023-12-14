import * as BABYLON from "babylonjs";

const canvas = document.getElementById("renderCanvas");
const engine = new BABYLON.Engine(canvas, true);
const scene = new BABYLON.Scene(engine);

// Create a camera
const camera = new BABYLON.ArcRotateCamera(
  "camera",
  Math.PI / 2,
  Math.PI / 3,
  15,
  new BABYLON.Vector3(0, 0, 0),
  scene
);
camera.attachControl(canvas, true);

// Create a light
const light = new BABYLON.HemisphericLight(
  "light",
  new BABYLON.Vector3(0, 1, 0),
  scene
);

const sphere = BABYLON.MeshBuilder.CreateSphere(
  "sphere",
  { diameter: 2, segments: 32 },
  scene
);

sphere.position.y = 1;

// const ground = BABYLON.MeshBuilder.CreateGround(
//   "ground",
//   { width: 6, height: 6 },
//   scene
// );

scene.createDefaultEnvironment();

// XR
const xrHelper = await scene.createDefaultXRExperienceAsync();

// Main render loop
engine.runRenderLoop(() => {
  scene.render();
});

// Handle window resize
window.addEventListener("resize", () => {
  engine.resize();
});
