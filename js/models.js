/**
 * models.js — 3D Model Creation
 * Generates geometric models for the hero and background
 */
import * as THREE from 'three';

class ModelManager {
  constructor(scene) {
    this.scene = scene;
    this.models = {};

    this.createHeroIcosahedron();
    this.createFloatingTorus();
    this.createGridPlane();
    this.createOrbitingOrbs();
  }

  createHeroIcosahedron() {
    const group = new THREE.Group();

    // Main wireframe icosahedron
    const icoGeom = new THREE.IcosahedronGeometry(6, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: 0x7c3aed,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const ico = new THREE.Mesh(icoGeom, icoMat);
    group.add(ico);

    // Inner solid icosahedron with glow
    const innerGeom = new THREE.IcosahedronGeometry(4.5, 1);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x1a1a2e,
      emissive: 0x7c3aed,
      emissiveIntensity: 0.15,
      metalness: 0.9,
      roughness: 0.4,
      transparent: true,
      opacity: 0.3,
    });
    const inner = new THREE.Mesh(innerGeom, innerMat);
    group.add(inner);

    // Edge glow lines
    const edgesGeom = new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(6.05, 1));
    const edgesMat = new THREE.LineBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.4,
    });
    const edges = new THREE.LineSegments(edgesGeom, edgesMat);
    group.add(edges);

    // Vertex dots
    const dotGeom = new THREE.SphereGeometry(0.12, 8, 8);
    const dotMat = new THREE.MeshBasicMaterial({
      color: 0xe879f9,
      transparent: true,
      opacity: 0.9,
    });

    const positions = icoGeom.attributes.position;
    const addedVertices = new Set();

    for (let i = 0; i < positions.count; i++) {
      const key = `${positions.getX(i).toFixed(2)},${positions.getY(i).toFixed(2)},${positions.getZ(i).toFixed(2)}`;
      if (addedVertices.has(key)) continue;
      addedVertices.add(key);

      const dot = new THREE.Mesh(dotGeom, dotMat);
      dot.position.set(positions.getX(i), positions.getY(i), positions.getZ(i));
      group.add(dot);
    }

    group.position.set(0, 0, 0);
    this.models.heroIco = group;
    this.models.heroIcoWireframe = ico;
    this.models.heroIcoInner = inner;
    this.models.heroIcoEdges = edges;
    this.scene.add(group);
  }

  createFloatingTorus() {
    const group = new THREE.Group();

    // Torus knot
    const torusGeom = new THREE.TorusKnotGeometry(2.5, 0.3, 100, 16, 2, 3);
    const torusMat = new THREE.MeshStandardMaterial({
      color: 0x0a0a0f,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.3,
      metalness: 0.95,
      roughness: 0.2,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const torus = new THREE.Mesh(torusGeom, torusMat);
    group.add(torus);

    group.position.set(18, 5, -15);
    this.models.torus = group;
    this.models.torusMesh = torus;
    this.scene.add(group);
  }

  createGridPlane() {
    // Cyberpunk grid floor
    const gridHelper = new THREE.GridHelper(200, 50, 0x7c3aed, 0x1a1a2e);
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.15;
    gridHelper.position.y = -20;
    
    this.models.grid = gridHelper;
    this.scene.add(gridHelper);

    // Horizon gradient plane
    const planeGeom = new THREE.PlaneGeometry(200, 100);
    const planeMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        void main() {
          float alpha = smoothstep(0.0, 0.6, vUv.y) * 0.1;
          vec3 color = mix(vec3(0.486, 0.227, 0.929), vec3(0.024, 0.714, 0.831), vUv.y);
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const plane = new THREE.Mesh(planeGeom, planeMat);
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -20.1;
    this.scene.add(plane);
  }

  createOrbitingOrbs() {
    const orbGroup = new THREE.Group();
    const orbCount = 6;
    const colors = [0x7c3aed, 0x06b6d4, 0xe879f9, 0xa855f7, 0x22d3ee, 0x60a5fa];

    for (let i = 0; i < orbCount; i++) {
      const orbGeom = new THREE.SphereGeometry(0.3, 16, 16);
      const orbMat = new THREE.MeshStandardMaterial({
        color: colors[i],
        emissive: colors[i],
        emissiveIntensity: 0.5,
        metalness: 0.5,
        roughness: 0.3,
      });
      const orb = new THREE.Mesh(orbGeom, orbMat);
      
      // Ring around orb
      const ringGeom = new THREE.RingGeometry(0.5, 0.55, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: colors[i],
        transparent: true,
        opacity: 0.3,
        side: THREE.DoubleSide,
      });
      const ring = new THREE.Mesh(ringGeom, ringMat);
      ring.rotation.x = Math.random() * Math.PI;

      const orbWrapper = new THREE.Group();
      orbWrapper.add(orb);
      orbWrapper.add(ring);
      
      // Store orbit parameters
      orbWrapper.userData = {
        radius: 9 + Math.random() * 3,
        speed: 0.2 + Math.random() * 0.3,
        offset: (i / orbCount) * Math.PI * 2,
        yAmplitude: 2 + Math.random() * 3,
        ySpeed: 0.3 + Math.random() * 0.2,
      };

      orbGroup.add(orbWrapper);
    }

    this.models.orbGroup = orbGroup;
    this.scene.add(orbGroup);
  }

  update(time, mouse) {
    // Hero icosahedron rotation
    if (this.models.heroIco) {
      this.models.heroIco.rotation.x = time * 0.15 + mouse.y * 0.3;
      this.models.heroIco.rotation.y = time * 0.2 + mouse.x * 0.3;
      
      // Pulsing scale
      const scale = 1 + Math.sin(time * 0.8) * 0.03;
      this.models.heroIco.scale.setScalar(scale);

      // Wireframe opacity pulse
      if (this.models.heroIcoWireframe) {
        this.models.heroIcoWireframe.material.opacity = 0.4 + Math.sin(time * 1.5) * 0.2;
      }
    }

    // Floating torus
    if (this.models.torus) {
      this.models.torus.rotation.x = time * 0.2;
      this.models.torus.rotation.y = time * 0.3;
      this.models.torus.position.y = 5 + Math.sin(time * 0.5) * 3;
    }

    // Orbiting orbs
    if (this.models.orbGroup) {
      this.models.orbGroup.children.forEach((orbWrapper) => {
        const { radius, speed, offset, yAmplitude, ySpeed } = orbWrapper.userData;
        const angle = time * speed + offset;
        
        orbWrapper.position.x = Math.cos(angle) * radius;
        orbWrapper.position.z = Math.sin(angle) * radius;
        orbWrapper.position.y = Math.sin(time * ySpeed + offset) * yAmplitude;
        
        // Orbs self-rotate
        orbWrapper.rotation.y = time * 2;
        orbWrapper.rotation.z = time * 1.5;
      });
    }

    // Grid scroll effect
    if (this.models.grid) {
      this.models.grid.position.z = (time * 2) % 4;
    }
  }
}

export default ModelManager;
