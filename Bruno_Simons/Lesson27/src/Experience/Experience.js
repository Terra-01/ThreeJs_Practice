import * as THREE from 'three'
import Sizes from "./Utils/Sizes.js"
import Time from './Utils/Time.js'
import Camera from './Camera.js'
import Renderer from './Renderer.js'
import World from './World/World.js'
import Resources from './Utils/Resources.js'
import sources from './sources.js'

let instance = null

export default class Experience
{
    constructor(canvas)
    {
        if(instance)
        {
            return instance
        }

        instance = this
        // console.log(instance)

        // Global access
        /* window.experience = this */

        // Options
        this.canvas = canvas
        // console.log(canvas)
        
        // Setup
        this.sizes = new Sizes()
        this.time = new Time()
        this.scene = new THREE.Scene()
        this.resources = new Resources(sources)
        this.camera = new Camera()
        this.renderer = new Renderer()
        this.world = new World()

        // Sizes resize event
        this.sizes.on('resize', () =>
        {
            this.resize()
        })

        // Time tick event
        this.time.on('tick', () =>
        {
            this.update()
        })
    }

    resize()
    {
        this.camera.resize()
        // this.sizes.resize()
        this.renderer.resize()
        // console.log ('resize kardo')
    }

    update()
    {
        this.camera.update()
        this.renderer.update()
        // console.log ('update kardo')
    }
}