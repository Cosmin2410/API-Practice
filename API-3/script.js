const liveUpdate = () => {
  setInterval(async () => {
    const response = await fetch('http://api.open-notify.org/iss-now.json');
    const data = await response.json();
    const strucure = `
    <p> ${data.iss_position.latitude}</p>
    <p> ${data.iss_position.latitude}</p>`;
    document.querySelector('body').innerHTML = strucure;
  }, 1000);
};

liveUpdate();
