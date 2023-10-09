import * as THREE from 'three'
import Experience from '../Experience.js'

export default class Floor
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources


        this.setGeometry()
        this.setTextures()
        this.setMaterial()
        this.setMesh()
    }
    setGeometry()
    {
        this.geometry = new THREE.CircleGeometry(5, 64)
    }
    setTextures()
    {
        this.textures = {}

        this.textures.color = this.resources.items.grassColorTexture
        console.log(this.grassColorTexture)
    }
    setMaterial()
    {

    }
    setMesh()
    {

    }
}