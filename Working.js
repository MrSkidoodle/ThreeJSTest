<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Three.js Example</title>
    <style>
      body {
        margin: 0;
        overflow: hidden;
      }
    </style>
  </head>
  <body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script>
      // Set up the scene, camera, and renderer
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      // Create a block geometry and material
      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshPhongMaterial({
        color: 0x00ff00,
      });

      // Create a block mesh and add it to the scene
      const block = new THREE.Mesh(geometry, material);
      scene.add(block);

      // Create a light from above and add it to the scene
      const light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(0, 1, 0);
      scene.add(light);

      // Rotate the camera around the block
      function animate() {
        requestAnimationFrame(animate);
        camera.position.x = Math.sin(Date.now() * 0.001) * 5;
        camera.position.y = 2;
        camera.position.z = Math.cos(Date.now() * 0.001) * 5;
        camera.lookAt(block.position);
        renderer.render(scene, camera);
      }
      animate();

      // Adjust the renderer size when the window is resized
      window.addEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });
    </script>
  </body>
</html>
