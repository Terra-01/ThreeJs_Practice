import * as THREE from 'three'

//Sizes
const sizes = {
    width:800,
    height:600
}

//Scene
const scene = new THREE.Scene()

//Camera
const camera = new THREE.PerspectiveCamera(55, sizes.width/sizes.height)
camera.position.z = 3
scene.add(camera)

//Cube
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color: 0xff0000})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

//Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('canvas.webgl')
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
