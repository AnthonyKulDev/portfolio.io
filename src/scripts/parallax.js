const parallax = document.querySelector('.parallax');
const parallaxLayers = parallax.children;

function moveLayersDependsOnScroll(scroll, layers, speed){
  Array.from(layers).forEach(layer =>{

    const divider = layer.dataset.speed;
    const strafe = scroll * divider / speed;

    layer.style.transform = `translateY(-${strafe}%)`;
  })
}

window.addEventListener('scroll', e=>{
  const wScroll = window.pageYOffset;
  moveLayersDependsOnScroll(wScroll, parallaxLayers, 160);
})