const btn = document.querySelector('.btn').addEventListener('click', () => {
  async function getData() {
    const dateFacts = await fetch('http://numbersapi.com/4/18/date');
    const dateString = await dateFacts.text();
    console.log(dateString);

    document.querySelector('.text').textContent = dateString;
  }

  getData();
});
