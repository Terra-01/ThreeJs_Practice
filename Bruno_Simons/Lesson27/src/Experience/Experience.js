import * as THREE from 'three'
import Sizes from "./Utils/Sizes.js"
import Time from './Utils/Time.js'
import Camera from './Camera.js'

export default class Experience
{
    constructor(canvas)
    {
        // Global access
        /* window.experience = this */

        // Options
        this.canvas = canvas
        console.log(canvas)
        
        // Setup
        this.sizes = new Sizes()
        this.time = new Time()
        this.scene = new THREE.Scene()

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
        // console.log ('resize kardo')
    }

    update()
    {
        // console.log ('update kardo')
    }
}