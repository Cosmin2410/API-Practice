const getData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments');
  const data = await response.json();

  let containerData = '';
  data.map((values) => {
    containerData += `
    <div class="container"> 
      <h2 class="title"> ${values.body} </h2>
      <p class="text"> ${values.name} </p> 
    </div>`;
  });

  document.querySelector('body').innerHTML = containerData;
};

getData();
