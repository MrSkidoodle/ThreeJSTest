import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import WebGL from 'three/addons/capabilities/WebGL.js';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10,);
scene.background = new THREE.Color("0x75d114");

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshPhongMaterial({color: 0x00f00});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 3;
camera.position.y = 2;
camera.position.x = 2;
const controls = new OrbitControls( camera, renderer.domElement);

const skycolor = 0xB1E1FF;
const groundcolor = 0xB97A20;
const intensity = 5;
const light = new THREE.HemisphereLight(skycolor, groundcolor, intensity);
light.position.set(0, 4, 0);
scene.add(light);


function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

if (WebGL.isWebGLAvailable()) {
    animate();
} else {
    const warning = WebGL.getWebGLErrorMessage();
    document.getElementById('container').appendChild(warning);
}