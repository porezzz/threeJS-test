import * as THREE from 'three'
export let cube, line
export default function CreateCube(scene, xpos, ypos, zpos, width=1, height=1, depth=1) {
    const geometry = new THREE.BoxGeometry(width, height, depth);
    const material = new THREE.MeshBasicMaterial({color: 0xFFFFFF});
    cube = new THREE.Mesh(geometry, material);
    // cube.addEventListener('click', () => {
    //     alert('dsa')
    // })
    // cube.dispatchEvent({type:'click', message: 'huj!'});
    cube.position.z = zpos
    cube.position.x = xpos
    cube.position.y = ypos

    scene.add(cube)
}