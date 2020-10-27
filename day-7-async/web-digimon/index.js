const url = "https://digimon-api.vercel.app/api/digimon";
let body = document.getElementsByTagName("body")[0];

// Cara 1
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((result) => {
    console.log("CARA 1", result);
  })
  .catch((err) => {
    console.log(err);
  });

// Cara 2
const getData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log("CARA 2", data);

  for (let i = 0; i < 5; i++) {
    const digimon = `
      <div>
        <h1>${data[i].name}</h1>
        <img src="${data[i].img}" alt="">
      </div>
    `;

    body.innerHTML += digimon
  }
};

getData();
