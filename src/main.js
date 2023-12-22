import * as THREE from "three";
import CreateCube, { cube, line } from "./functions/CreateCube";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import RayCasterRender from "./functions/RayCaster";
let scene, camera, renderer;
let controls;
init();
function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.update();

  camera.position.z = 20;
  camera.position.x = 17;
  camera.position.y = 9;

  controls.target.set(5, 5, 5);
}

const cubeTab = [];
for (let i = 0; i < 10; i++) {
  CreateCube(scene, Math.random() * 15, Math.random() * 15, Math.random() * 15);
  cube.addEventListener("click", () => console.log("dsa"));
  cubeTab.push(cube);
}
let object = cubeTab[Math.floor(Math.random() * cubeTab.length)];

animate();
function animate() {
  controls.update();
  RayCasterRender(camera, scene, object);
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
