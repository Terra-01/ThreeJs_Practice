import './style.css'
import * as THREE from 'three'

console.log(THREE)

// We need to create a scene :
// For which we need object, camera and a renderer.
const scene = new THREE.Scene()

// Object Red Cube
const geometry = new THREE.BoxGeometry( 1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xffdfdf })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
// camera.position.x = 1
// camera.position.y = 1
scene.add(camera)


// Renderer
// Getting the canvas element of class webgl from the HTML file
const canvas = document.querySelector('.webgl')
// console.log(canvas)
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)