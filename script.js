(function frame() {
  confetti({
    particleCount: 2,
    angle: 60,
    spread: 55,
    origin: { x: 0 }
  });
  confetti({
    particleCount: 2,
    angle: 120,
    spread: 55,
    origin: { x: 1 }
  });

  requestAnimationFrame(frame);
}());

function ip(data) {
  document.getElementById('ip').innerHTML = `IP: ${data.query}<br>Country: ${data.country}<br>Region: ${data.regionName}<br>City: ${data.city}<br>Zip: ${data.zip}<br>Latitude/Longitude: ${data.lat.toString()}/${data.lon.toString()}<br>ISP: ${data.isp}`
}
