const liveUpdate = () => {
  setInterval(async () => {
    const response = await fetch('http://api.open-notify.org/iss-now.json');
    const data = await response.json();
    const strucure = `
    <p> Latitude: ${data.iss_position.latitude}°</p>
    <p> Longitude: ${data.iss_position.longitude}°</p>`;
    document.querySelector('body').innerHTML = strucure;
  }, 1000);
};

liveUpdate();
