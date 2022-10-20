import './style.css'
import * as THREE from 'three'
import { Camera, Group, MeshBasicMaterial } from 'three'

console.log('Hello World.js')
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
/* const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh) */

// Position
// mesh.position.x = 0.7
// mesh.position.y = -0.6
// mesh.position.z = 1
/* mesh.position.set(0.7, -0.6, 1) */

// Scale
// mesh.scale.x = 2
// mesh.scale.y = 0.5
// mesh.scale.z = 0.5
/* mesh.scale.set(2, 0.5, 0.5) */

// console.log(mesh.position.normalize())
// console.log(mesh.position.length())



// Rotation
/* mesh.rotation.reorder('YXZ')
mesh.rotation.x = Math.PI * 0.25
mesh.rotation.y = Math.PI * 0.25 */

// Now we will create a group of 3 cubes
const cubez = new THREE.Group()
cubez.position.y = 1
cubez.scale.y = 0.5
cubez.rotation.x = 1
scene.add(cubez)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
cubez.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)
cube2.position.x = -2
cubez.add(cube2)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x0000ff })
)
cube3.position.x = 2
cubez.add(cube3)


// Axes Helper
const axesHelper= new THREE.AxesHelper(3)
scene.add(axesHelper)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
// camera.position.set(1, 1, 3)
scene.add(camera)

// camera.lookAt(new THREE.Vector3(3, 0, 0)) // Use the coordinates for the Object!
/* camera.lookAt(mesh.position) */ // Position of Cube

/* console.log(mesh.position.distanceTo (camera.position)) */

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)