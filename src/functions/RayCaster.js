import * as THREE from "three";
const pointer = new THREE.Vector2(-100, -100);
const raycaster = new THREE.Raycaster();

export default function RayCasterRender(camera, scene, object) {
  window.addEventListener("click", (e) => {
    pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObject(scene);
    intersects.forEach((elem) => {
      if (intersects[0].object == object) {
        intersects[0].object.material.color.set(0xff0000);
      }
    });
  });
}
