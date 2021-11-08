let dbData;
const getData = () => {
  fetch("db.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      dbData = data
    })
    .catch((error) => {
      console.log("getData error", error);
    });
};

const sendData = (url, data) => {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => {
      console.log("sendData error", error);
    });
};

getData();
sendData("https://jsonplaceholder.typicode.com/posts", dbData);
