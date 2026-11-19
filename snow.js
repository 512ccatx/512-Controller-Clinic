(function () {

  // Respect users who have reduced motion enabled

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const canvas = document.createElement('canvas');
canvas.id = 'snow-canvas';

  canvas.style.cssText = `

    position: fixed;

    top: 0;

    left: 0;

    width: 100%;

    height: 100%;

    pointer-events: none;

    z-index: 9998;

  `;

  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);

  let height = (canvas.height = window.innerHeight);

  // Adjust flake count here (40-70 is a nice subtle drizzle)

  const flakeCount = 55;

  const flakes = [];

  for (let i = 0; i < flakeCount; i++) {

    flakes.push({

      x: Math.random() * width,

      y: Math.random() * height,

      r: Math.random() * 2.5 + 1,      // Size

      d: Math.random() * 1 + 0.3,      // Fall speed

      drift: Math.random() * 1 - 0.5,  // Gentle horizontal sway

      opacity: Math.random() * 0.5 + 0.3

    });

  }

  function resize() {

    width = canvas.width = window.innerWidth;

    height = canvas.height = window.innerHeight;

  }

  window.addEventListener('resize', resize);

  let angle = 0;

  function draw() {

    ctx.clearRect(0, 0, width, height);

    angle += 0.005;

    for (let i = 0; i < flakeCount; i++) {

      const f = flakes[i];

      ctx.beginPath();

      ctx.fillStyle = `rgba(224, 242, 254, ${f.opacity})`; // Soft icy white

      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);

      ctx.fill();

      f.y += f.d;

      f.x += Math.sin(angle + i) * 0.4 + f.drift * 0.3;

      // Reset flake to top once it falls off-screen

      if (f.y > height) {

        f.y = -5;

        f.x = Math.random() * width;

      }

      if (f.x > width + 5) f.x = -5;

      if (f.x < -5) f.x = width + 5;

    }

    requestAnimationFrame(draw);

  }

  draw();

})();
 
