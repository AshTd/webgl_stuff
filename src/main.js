import { render } from 'redering/renderer.js';


function update(){
  let lastTimestamp = performance.now();

  render();  // <--- Render here

  let currentTimestamp = performance.now();
  mspf = currentTimestamp - lastTimestamp;
}


function vsyncRenderLoop(timestamp){
  if (!paused){
    update();
  }

  requestAnimationFrame(vsyncRenderLoop);
}


requestAnimationFrame(vsyncRenderLoop);
