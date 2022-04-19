const btn = document.querySelector('.btn').addEventListener('click', () => {
  async function getData() {
    const dateFacts = await fetch('http://numbersapi.com/random/math');
    const dateString = await dateFacts.text();
    console.log(dateString);

    document.querySelector('.text').textContent = dateString;
  }

  getData();
});
