/**
 * scene.js — Three.js Scene Setup
 * Creates renderer, camera, lighting, and post-processing
 */
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

class SceneManager {
  constructor() {
    this.container = document.getElementById('canvas-container');
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.mouse = new THREE.Vector2(0, 0);
    this.scrollProgress = 0;
    this.clock = new THREE.Clock();

    this.initScene();
    this.initCamera();
    this.initRenderer();
    this.initLights();
    this.initPostProcessing();
    this.initEvents();
  }

  initScene() {
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x0a0a0f, 0.0008);
  }

  initCamera() {
    this.camera = new THREE.PerspectiveCamera(60, this.width / this.height, 0.1, 1000);
    this.camera.position.set(0, 0, 30);
  }

  initRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.2;
    this.container.appendChild(this.renderer.domElement);
  }

  initLights() {
    // Ambient light
    const ambient = new THREE.AmbientLight(0x1a1a2e, 0.5);
    this.scene.add(ambient);

    // Purple point light
    this.purpleLight = new THREE.PointLight(0x7c3aed, 2, 80);
    this.purpleLight.position.set(-15, 10, 15);
    this.scene.add(this.purpleLight);

    // Cyan point light
    this.cyanLight = new THREE.PointLight(0x06b6d4, 2, 80);
    this.cyanLight.position.set(15, -10, 15);
    this.scene.add(this.cyanLight);

    // Pink accent light
    this.pinkLight = new THREE.PointLight(0xe879f9, 1, 60);
    this.pinkLight.position.set(0, 15, 5);
    this.scene.add(this.pinkLight);
  }

  initPostProcessing() {
    this.composer = new EffectComposer(this.renderer);
    
    const renderPass = new RenderPass(this.scene, this.camera);
    this.composer.addPass(renderPass);

    this.bloomPass = new UnrealBloomPass(
      new THREE.Vector2(this.width, this.height),
      0.8,   // strength
      0.4,   // radius
      0.85   // threshold
    );
    this.composer.addPass(this.bloomPass);
  }

  initEvents() {
    // Resize
    window.addEventListener('resize', () => this.onResize());

    // Mouse move
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = (e.clientX / this.width) * 2 - 1;
      this.mouse.y = -(e.clientY / this.height) * 2 + 1;
    });

    // Scroll
    window.addEventListener('scroll', () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      this.scrollProgress = window.scrollY / docHeight;
    });
  }

  onResize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.width, this.height);
    this.composer.setSize(this.width, this.height);
  }

  updateLights(time) {
    // Subtle light animation
    this.purpleLight.position.x = Math.sin(time * 0.3) * 15;
    this.purpleLight.position.y = Math.cos(time * 0.2) * 10;
    this.cyanLight.position.x = Math.cos(time * 0.3) * 15;
    this.cyanLight.position.y = Math.sin(time * 0.2) * 10;
    this.pinkLight.position.x = Math.sin(time * 0.5) * 8;
  }

  render() {
    const time = this.clock.getElapsedTime();
    this.updateLights(time);
    
    // Camera slight shift on scroll
    this.camera.position.y = -this.scrollProgress * 5;
    
    // Camera subtle follow mouse
    this.camera.position.x += (this.mouse.x * 2 - this.camera.position.x) * 0.02;
    this.camera.lookAt(0, -this.scrollProgress * 5, 0);

    this.composer.render();
  }
}

export default SceneManager;
