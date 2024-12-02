'use client';

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { TextureLoader, RepeatWrapping, MeshStandardMaterial } from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

/*The models used in this animation were made by the creator in Fusion 360 and the wood texture used in the 3D animation was downloaded from AmbientCG*/
function CanvaHouse({ isRotating, cameraTarget, onCameraTargetReached }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Create the scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    // Create the camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(-3, 3, -3);
    camera.lookAt(0, 0, 0);


    // Create the renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Add the orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);

    // This was to help me to locate the panels
    /*const axesHelper = new THREE.AxesHelper(5);
    scene.add( axesHelper );*/

    // Add the GLTF loader
    const loader = new GLTFLoader();

    // Add a light source
    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);

    // Add a point light
    const pointLight = new THREE.PointLight(0xffffff, 1, 100); // Increase intensity for more lighting
    pointLight.position.set(3, 3, 3);
    scene.add(pointLight);

    // Load the wood texture
    const textureLoader = new TextureLoader();
    const woodTextures = {
      color: textureLoader.load('/Materials/Wood048_2K-JPG_Color.jpg'),
      roughness: textureLoader.load('/Materials/Wood048_2K-JPG_Roughness.jpg'),
      normal: textureLoader.load('/Materials/Wood048_2K-JPG_NormalGL.jpg'), // Use NormalDX for DirectX-normal map
      displacement: textureLoader.load('/Materials/Wood048_2K-JPG_Displacement.jpg'),
    };
    
    
    // Create a reusable material
    const woodMaterial = new MeshStandardMaterial({
      map: woodTextures.color, // Base color map
      roughnessMap: woodTextures.roughness, // Roughness map for surface imperfections
      normalMap: woodTextures.normal, // Normal map for realistic surface details
      displacementMap: woodTextures.displacement, // Displacement map for 3D effect
      displacementScale: 0.1, // Adjust scale for subtle height variation
      roughness: 0.8, // Adjust roughness level if necessary
      metalness: 0, // Wood isn't metallic
      thickness: 5.0,
      transmission: 1.0,
      emissiveIntensity: 0.1, // Adjust emissive intensity (brightness)
    });

    // Load GLB models
    loader.load(
        "/Models/Back panel.glb", // Path to your model in the public folder
        (gltf) => {
        const backpanel = gltf.scene;
        // Traverse to find meshes and apply the wood texture
        backpanel.traverse((node) => {
          if (node.isMesh) {
              node.material = woodMaterial;
          }
        });
        backpanel.scale.set(1, 1, 1); // Scale the model if necessary
        backpanel.position.set(0, 0, 0); // Position the model at the origin
        scene.add(backpanel);
      },
      (xhr) => {
        console.log(`Model loading: ${(xhr.loaded / xhr.total) * 100}%`);
      },
      (error) => {
        console.error("Error loading model:", error);
      }
    );

    loader.load(
        "/Models/Side panel.glb", // Path to your model in the public folder
        (gltf) => {
        const rightpanel = gltf.scene;
        rightpanel.traverse((node) => {
          if (node.isMesh) {
              node.material = woodMaterial;
          }
        });
        rightpanel.scale.set(1, 1, 1); // Scale the model if necessary
        rightpanel.position.set(2.2, 0, 0); // Position the model at the origin
        rightpanel.rotation.y = Math.PI;
        scene.add(rightpanel);
      },
      (xhr) => {
        console.log(`Model loading: ${(xhr.loaded / xhr.total) * 100}%`);
      },
      (error) => {
        console.error("Error loading model:", error);
      }
    );

    loader.load(
      "/Models/Side panel.glb", // Path to your model in the public folder
      (gltf) => {
      const leftpanel = gltf.scene;
      leftpanel.traverse((node) => {
        if (node.isMesh) {
            node.material = woodMaterial;
        }
      });
      leftpanel.scale.set(1, 1, 1); // Scale the model if necessary
      leftpanel.position.set(0, 0, 1.8); // Position the model at the origin
      scene.add(leftpanel);
    },
    (xhr) => {
      console.log(`Model loading: ${(xhr.loaded / xhr.total) * 100}%`);
    },
    (error) => {
      console.error("Error loading model:", error);
    }
    );

    loader.load(
        "/Models/Front panel.glb", // Path to your model in the public folder
        (gltf) => {
        const frontpanel = gltf.scene;
        frontpanel.traverse((node) => {
          if (node.isMesh) {
              node.material = woodMaterial;
          }
        });
        frontpanel.scale.set(1, 1, 1); // Scale the model if necessary
        frontpanel.position.set(0, 0, 1.8); // Position the model at the origin
        scene.add(frontpanel);
      },
      (xhr) => {
        console.log(`Model loading: ${(xhr.loaded / xhr.total) * 100}%`);
      },
      (error) => {
        console.error("Error loading model:", error);
      }
    );

    loader.load(
        "/Models/Large ceiling.glb", // Path to your model in the public folder
        (gltf) => {
        const largeceiling = gltf.scene;
        largeceiling.traverse((node) => {
          if (node.isMesh) {
              node.material = woodMaterial;
          }
        });
        largeceiling.scale.set(1, 1, 1); // Scale the model if necessary
        largeceiling.position.set(-0.2, 1.8, 0); // Position the model at the origin
        largeceiling.rotation.x = Math.PI;
        largeceiling.rotation.z = -0.264;
        scene.add(largeceiling);
      },
      (xhr) => {
        console.log(`Model loading: ${(xhr.loaded / xhr.total) * 100}%`);
      },
      (error) => {
        console.error("Error loading model:", error);
      }
    );

    /* I had a problem with this model that I would try to fix later
    loader.load(
        "/Models/Short ceiling.glb", // Path to your model in the public folder
        (gltf) => {
        const shortceiling = gltf.scene;
        shortceiling.traverse((node) => {
          if (node.isMesh) {
              node.material = woodMaterial;
          }
        });
        shortceiling.scale.set(1, 1, 1); // Scale the model if necessary
        shortceiling.rotation.y = Math.PI / 2;
        shortceiling.rotation.x = Math.PI;
        shortceiling.rotation.z = 0.508;
        scene.add(shortceiling);
      },
      (xhr) => {
        console.log(`Model loading: ${(xhr.loaded / xhr.total) * 100}%`);
      },
      (error) => {
        console.error("Error loading model:", error);
      }
    );*/

    loader.load(
        "/Models/Floor.glb", // Path to your model in the public folder
        (gltf) => {
        const floor = gltf.scene;
        floor.scale.set(1, 1, 1); // Scale the model if necessary
        floor.position.set(-0.1, 0, 2.2); // Position the model at the origin
        scene.add(floor);
      },
      (xhr) => {
        console.log(`Model loading: ${(xhr.loaded / xhr.total) * 100}%`);
      },
      (error) => {
        console.error("Error loading model:", error);
      }
    );

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Internal rotation state
    let rotating = isRotating;

    // Raycaster for rotation
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    // Add a click event listener to toggle rotation
    window.addEventListener('pointerdown', (event) => {
        // Update pointer coordinates normalized to [-1, 1]
        pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
        pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

        // Cast a ray to detect intersection
        raycaster.setFromCamera(pointer, camera);
        const intersects = raycaster.intersectObjects(scene.children, true);

        if (intersects.length > 0) {
            rotating = !rotating; // Toggle the internal rotation state
        }
    });

    // Animation loop
    const animate = () => {
        requestAnimationFrame(animate);

        if (rotating) {
            scene.rotation.y += 0.005; // Rotate the scene if enabled
        }

        controls.update();
        renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      renderer.dispose();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} />;
}

export default CanvaHouse;
