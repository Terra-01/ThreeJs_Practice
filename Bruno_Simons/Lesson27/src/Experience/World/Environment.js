import * as THREE from 'three'
import Experience from '../Experience.js'


export default class Environment
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        // console.log(this)

        //Setup
        this.setSunLight()
        this.setEnvironmentMap()
    }

    setSunLight()
    {
        const sunLight = new THREE.DirectionalLight('#ffffff', 4)
        sunLight.castShadow = true
        sunLight.shadow.camera.far = 15
        sunLight.shadow.mapSize.set(1024, 1024)
        sunLight.shadow.normalBias = 0.05
        sunLight.position.set(3.5, 2, - 1.25)
        this.scene.add(sunLight)
    }

    setEnvironmentMap()
    {
        this.environmentMap = {}
        this.environmentMap.intensity = 0.4
        this.environmentMap.texture = this.resources.items.environmentMapTexture
        this.environmentMap.texture.colorSpace = THREE.SRGBColorSpace
        
        this.scene.environment = this.environmentMap.texture

        this.environmentMap.updateMaterials = () =>
        {
            this.scene.traverse((child) =>
            {
                if(child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial)
                {
                    child.material.envMap = this.environmentMap.texture
                    child.material.envMapIntensity = this.environmentMap.intensity
                    child.material.needsUpdate = true
                }
            })
        }
        this.environmentMap.updateMaterials()
    }
}