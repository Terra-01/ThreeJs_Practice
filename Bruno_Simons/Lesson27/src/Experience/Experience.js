import * as THREE from 'three'
import Sizes from "./Utils/Sizes.js"
import Time from './Utils/Time.js'
import Camera from './Camera.js'
import Renderer from './Renderer.js'
import World from './World/World.js'
import Resources from './Utils/Resources.js'
import Debug from './Utils/Debug.js'
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
        window.experience = this

        // Options
        this.canvas = canvas
        // console.log(canvas)
        
        // Setup
        this.debug = new Debug()
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
        this.world.update()
        this.renderer.update()
        // console.log ('update kardo')
    }

    destroy()
    {
        this.sizes.off('resize')
        this.time.off('tick')

        // Traverse the whole scene
        this.scene.traverse((child) =>
        {
            // console.log(child)

            if(child instanceof THREE.Mesh)
            {
                // console.log(child)
                child.geometry.dispose()

                for(const key in child.material)
                {
                    // console.log(key)
                    
                    const value = child.material[key]
                    // console.log(value)

                    if(value && typeof value.dispose === 'function')
                    {
                        value.dispose()
                    }

                }
            }
        })

        this.camera.controls.dispose()
        this.renderer.instance.dispose()

        if(this.debug.active)
        {
            this.debug.ui.destroy()
        }
    }
}