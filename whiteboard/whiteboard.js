function blobs() {
        rub = false;
      }
      
      function geof() {
        rub = true;
      };
      
      
      const canvas = document.querySelector('#draw');
      const ctx = canvas.getContext('2d');
      canvas.width = 0.90 * window.innerWidth;
      canvas.height = 0.92 * window.innerHeight;
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';

      let isDrawing = false;
      let hue = 0;
      let huepc,
          rub = false;
      let last;
      let lastY;
      let slider = document.getElementById('marker');

      function draw(e) {
        if (!isDrawing) return;
        console.log(e);
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.strokeStyle = rub ? '#fff' : `hsl(${hue}, 100%, 50%)`;
        ctx.stroke();
        
        [lastX, lastY] = [e.offsetX, e.offsetY];
      }
      
      canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
      });
      
      canvas.addEventListener('mousemove', draw);
      canvas.addEventListener('mouseup', () => isDrawing = false);
      canvas.addEventListener('mouseout', () => isDrawing = false);
      canvas.addEventListener('wheel', (j) => {
        hue += j.deltaY/40;
        document.getElementById('big').style.background = `hsl(${hue}, 100%, 50%)`;
        document.getElementById('medium').style.background = `hsl(${hue}, 100%, 50%)`;
        document.getElementById('small').style.background = `hsl(${hue}, 100%, 50%)`;
        document.getElementById('tiny').style.background = `hsl(${hue}, 100%, 50%)`;
        huepc = hue < 0 ? ((hue % 360)+360)/3.6 : (hue % 360)/3.6;
        slider.style.left = huepc + "%";
      });
      
      function penSize(s){
        ctx.lineWidth = window.innerWidth * s / 100;
      }