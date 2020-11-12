import './main.scss'
import * as THREE from "three";

let camera, scene, renderer;
let cube;



// 初始化相机
function initCamera() {
  const fov=75
  const aspect=window.innerWidth / window.innerHeight
  const near=0.1
  const far=100
  camera = new THREE.PerspectiveCamera(
    fov,aspect,near,far
  );
  camera.position.z = 3;
}
// 初始化场景
function initScene() {
  scene = new THREE.Scene();
}
// 初始化灯光
function initLight(){
  const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);
}
// 初始化渲染器
function initRender() {
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  renderer.setClearColor(0xffffff, 1.0);
}
// 初始化模型
function initModle() {
  const boxWidth = 1;
  const boxHeight = 1;
  const boxDepth = 1;
  const color="#1cc"
  const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
  const material = new THREE.MeshPhongMaterial({color});
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
}
// 屏幕适配方案
function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  const width = window.innerWidth;
  const height = window.innerHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, true);
  }
  return needResize;
}
// 初始化
function main() {
  initCamera();
  initScene();
  initModle();
  initLight()
  initRender();
  render()
}
// 动画
function render() {
  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  }
 

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.02;

  renderer.render(scene, camera);
  requestAnimationFrame(render);
}
main();