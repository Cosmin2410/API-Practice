const btn = document.querySelector('.btn').addEventListener('click', () => {
  const getData = async () => {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
    document.querySelector('.text').innerHTML = `"${data.value}"`;
  };
  getData();
});
