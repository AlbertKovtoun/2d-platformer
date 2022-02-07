import * as THREE from "three"
import { scene } from "./Experience"

import vertexShader from "../../shaders/vertex.glsl"
import fragmentShader from "../../shaders/fragment.glsl"

export class Generator {
  constructor() {
    this.setGenerator()
  }

  setGenerator() {
    const planeGeometry = new THREE.PlaneGeometry(2, 2)
    const planeMaterial = new THREE.ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    })

    const plane = new THREE.Mesh(planeGeometry, planeMaterial)
    scene.add(plane)
  }
}
