// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// fetch("https://5fa790be9def160016adaf1c.mockapi.io/api/v1/users", {
//   method: "POST",
//   body: {
//     username: "username 2",
//     email: "email 2",
//     password: "password 2",
//   },
// })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function fetchData() {
  try {
    const fetchResult = await fetch(
      "https://5fa790be9def160016adaf1c.mockapi.io/api/v1/users",
      {
        method: "POST",
        body: {
          username: "username 2",
          email: "email 2",
          password: "password 2",
        },
      }
    );
    if (fetchResult.json()) {
      alert("Register Success!");
    }
  } catch (error) {
    alert("Register Failed!");
  }
}

fetchData();
