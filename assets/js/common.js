document.addEventListener('DOMContentLoaded', function () {
  /* Device Object Size Responsive */
  rem();
  window.addEventListener('resize', rem);

  /* Iphone Check */
  if (navigator.userAgent.match(/iP(hone|od|ad)/)) {
    document
      .getElementsByName('viewport')[0]
      .setAttribute('content', 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover');
  } else {
    document
      .getElementsByName('viewport')[0]
      .setAttribute('content', 'width=device-width, initial-scale=1.0, viewport-fit=cover');
  }

  /* Device Check */
  if (navigator.userAgent.match(/Android|Mobile|iP(hone|od|ad)|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/,)) {
    document.querySelector(':root').classList.add('dv_mobile');
  } else {
    document.querySelector(':root').classList.add('dv_pc');
  }
});

/* Device Object Size Responsive */
function rem() {
  let clientWidth = document.body.clientWidth;
  let breakPoint_pc = 1900;
  let size_pc = breakPoint_pc;
  let breakPoint_mobile = 768;
  let size_mobile = 375;
  let rem_pc = clientWidth / size_pc;
  let rem_mobile = clientWidth / size_mobile;
  if (clientWidth <= breakPoint_mobile) {
    document.querySelector(':root').style.setProperty('font-size', (rem_mobile * 10) + 'px');
    // document.querySelector(':root').style.setProperty('font-size', '10px');
  } else {
    document.querySelector(':root').style.setProperty('font-size', (rem_pc * 10) + 'px');
    // document.querySelector(':root').style.setProperty('font-size', '10px');
  }
}