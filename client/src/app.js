import * as THREE from 'three'
import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import '../style/style.scss'

let camera, controls, scene, renderer, effect

init()
initWhale()
animate()

function init() {
  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    1,
    5000
  )
  camera.position.y = 450
  camera.position.z = 1200

  scene = new THREE.Scene()
  scene.background = new THREE.Color(1, 1, 1)

  let s = 100000
  const pointLight1 = new THREE.PointLight(0xffffff)
  pointLight1.position.set(500 * s, 500 * s, 500 * s)
  scene.add(pointLight1)

  const pointLight2 = new THREE.PointLight(0xffffff, 0.25)
  pointLight2.position.set(-500* s, -500 * s, -500 * s)
  scene.add(pointLight2)

  renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)

  let charset = ' `.:-+*=%@#'
  effect = new AsciiEffect(renderer, charset, { invert: true })
  effect.setSize(window.innerWidth, window.innerHeight)
  effect.domElement.style.color = 'white'
  effect.domElement.style.backgroundColor = 'black'

  // Special case: append effect.domElement, instead of renderer.domElement.
  // AsciiEffect creates a custom domElement (a div container) where the ASCII elements are placed.
  effect.domElement.id = 'myCanvas'
  document.body.appendChild(effect.domElement)
  controls = new OrbitControls(camera, effect.domElement)

  // document.body.appendChild(renderer.domElement)
  // controls = new OrbitControls(camera, renderer.domElement)

  window.addEventListener('resize', onWindowResize)
}

function initWhale() {
  const manager = new THREE.LoadingManager();
  const loader = new GLTFLoader(manager);
  const path = './statics/whale.glb';
  loader.load(path, function(gltf) {
    let mesh = gltf.scene.children[0];
    console.log('gltf', gltf)
    mesh.scale.set(10000, 10000, 10000)
    mesh.position.set(-1000, 0, 0)
    scene.add(mesh)
    console.log(mesh)
  });
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()

  renderer.setSize(window.innerWidth, window.innerHeight)
  effect.setSize(window.innerWidth, window.innerHeight)
}

function animate() {
  requestAnimationFrame(animate)

  render()
}

function render() {
  controls.update()

  effect.render(scene, camera)
}
