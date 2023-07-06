import * as THREE from 'three'
import gsap from 'gsap'
//console.log(gsap)

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
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
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

//Time now
/* let time = Date.now() */

//Clock
/* const clock = new THREE.Clock() */

//Gsap
gsap.to(mesh.position, { duration: 1, delay: 1, x: 2})
gsap.to(mesh.position, { duration: 1, delay: 2, x: 0})

//Animations
const tick = () =>
{
    //relative time
    /* const currentTime = Date.now()
    const deltaTime = currentTime - time
    time = currentTime
    console.log (deltaTime) */
    //Update object
    /* mesh.rotation.y += 0.002 * deltaTime */

    // Never Use getDelta(), It will mess with the internal logic of the class

    //Elapsed Time
    /* const elapsedTime = clock.getElapsedTime() */

    //Update object
    /* mesh.rotation.y = elapsedTime * Math.PI * 2 */ //For a full rotation each second
    /* mesh.position.y = Math.sin(elapsedTime)
    mesh.position.x = Math.cos(elapsedTime)
    camera.lookAt(mesh.position) */

    //Render
    renderer.render(scene, camera)

    //Calling tick again on next frame
    window.requestAnimationFrame(tick)
}

tick()