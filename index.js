const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
const LOCAL_JSON_PATH = "db.json";

const getData = (path) => {
  try {
    const response = fetch(path).then((response) => response.json());
    return response;
  } catch (error) {
    console.log(error);
  }
}

const sendData = (url, data) => {
  console.log(`Sending via fetch to ${url} data ${data}`);
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((jsonData) => jsonData)
    .catch((error) => {
      console.log("sendData error", error);
    });
}

getData(LOCAL_JSON_PATH).then((res) => {
  sendData(POSTS_URL, res);
});

getData(POSTS_URL).then((res) => console.log(res));
