/**
 * main.js — App Initialization
 * Orchestrates all modules and runs the animation loop
 */
import SceneManager from './scene.js';
import ParticleSystem from './particles.js';
import ModelManager from './models.js';
import AnimationManager from './animations.js';

class App {
  constructor() {
    this.init();
  }

  async init() {
    // Wait for DOM
    if (document.readyState === 'loading') {
      await new Promise((resolve) => document.addEventListener('DOMContentLoaded', resolve));
    }

    // Initialize Three.js scene
    this.scene = new SceneManager();
    
    // Initialize particles
    this.particles = new ParticleSystem(this.scene.scene);
    
    // Initialize 3D models
    this.models = new ModelManager(this.scene.scene);
    
    // Initialize scroll animations & interactions
    this.animations = new AnimationManager();

    // Hide loader
    this.hideLoader();

    // Start render loop
    this.animate();
  }

  hideLoader() {
    const loader = document.querySelector('.loader');
    if (loader) {
      setTimeout(() => {
        loader.classList.add('hidden');
        setTimeout(() => loader.remove(), 600);
      }, 1800);
    }
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    const time = this.scene.clock.getElapsedTime();

    // Update particles
    this.particles.update(time, this.scene.mouse);

    // Update 3D models
    this.models.update(time, this.scene.mouse);

    // Render scene with post-processing
    this.scene.render();
  }
}

// Launch
new App();
