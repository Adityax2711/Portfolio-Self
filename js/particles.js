/**
 * particles.js — Floating Particle System
 * Creates a field of neon-colored particles with mouse interaction
 */
import * as THREE from 'three';

class ParticleSystem {
  constructor(scene) {
    this.scene = scene;
    this.particles = null;
    this.particleCount = 1500;
    this.mouseInfluence = new THREE.Vector3();
    this.originalPositions = [];
    this.velocities = [];
    
    this.init();
  }

  init() {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(this.particleCount * 3);
    const colors = new Float32Array(this.particleCount * 3);
    const sizes = new Float32Array(this.particleCount);
    const alphas = new Float32Array(this.particleCount);

    // Color palette for particles
    const colorPalette = [
      new THREE.Color(0x7c3aed), // purple
      new THREE.Color(0x06b6d4), // cyan
      new THREE.Color(0xe879f9), // pink
      new THREE.Color(0xa855f7), // light purple
      new THREE.Color(0x22d3ee), // light cyan
    ];

    for (let i = 0; i < this.particleCount; i++) {
      const i3 = i * 3;

      // Spread particles in a large volume
      positions[i3] = (Math.random() - 0.5) * 120;
      positions[i3 + 1] = (Math.random() - 0.5) * 120;
      positions[i3 + 2] = (Math.random() - 0.5) * 80 - 10;

      // Store original positions
      this.originalPositions.push(
        positions[i3],
        positions[i3 + 1],
        positions[i3 + 2]
      );

      // Random velocities for drift
      this.velocities.push(
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.005
      );

      // Random color from palette
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;

      // Random sizes
      sizes[i] = Math.random() * 3 + 0.5;
      
      // Random alpha
      alphas[i] = Math.random() * 0.7 + 0.3;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute('alpha', new THREE.BufferAttribute(alphas, 1));

    // Custom shader material
    const material = new THREE.ShaderMaterial({
      vertexShader: `
        attribute float size;
        attribute float alpha;
        varying vec3 vColor;
        varying float vAlpha;
        
        void main() {
          vColor = color;
          vAlpha = alpha;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (200.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vAlpha;
        
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          
          float glow = 1.0 - smoothstep(0.0, 0.5, dist);
          glow = pow(glow, 1.5);
          
          gl_FragColor = vec4(vColor, vAlpha * glow);
        }
      `,
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);
  }

  update(time, mouse) {
    if (!this.particles) return;

    const positions = this.particles.geometry.attributes.position.array;

    for (let i = 0; i < this.particleCount; i++) {
      const i3 = i * 3;

      // Gentle drift
      positions[i3] += this.velocities[i3] + Math.sin(time + i * 0.01) * 0.003;
      positions[i3 + 1] += this.velocities[i3 + 1] + Math.cos(time + i * 0.01) * 0.003;
      positions[i3 + 2] += this.velocities[i3 + 2];

      // Mouse influence (push particles away)
      const dx = positions[i3] - mouse.x * 30;
      const dy = positions[i3 + 1] - mouse.y * 30;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 15) {
        const force = (15 - dist) / 15 * 0.05;
        positions[i3] += dx * force;
        positions[i3 + 1] += dy * force;
      }

      // Boundary wrapping
      if (positions[i3] > 60) positions[i3] = -60;
      if (positions[i3] < -60) positions[i3] = 60;
      if (positions[i3 + 1] > 60) positions[i3 + 1] = -60;
      if (positions[i3 + 1] < -60) positions[i3 + 1] = 60;
    }

    this.particles.geometry.attributes.position.needsUpdate = true;
  }
}

export default ParticleSystem;
