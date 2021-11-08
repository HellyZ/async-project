let xhr = new XMLHttpRequest();

const xmlPost = (url, data) => {
  console.log(`Sending via xmlPost to ${url} data ${JSON.stringify(data)}`);
  xhr.open("POST", url);
  xhr.send(data);

  xhr.onload = function () {
    if (xhr.status == 200 || xhr.status == 201) {
      console.log(`Готово, получили ${xhr.response.length} байт`);
    } else {
      console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);
    }
  };

  xhr.onprogress = function (event) {
    if (event.lengthComputable) {
      console.log(`Получено ${event.loaded} из ${event.total} байт`);
    } else {
      console.log(`Получено ${event.loaded} байт`);
    }
  };
  xhr.onerror = function () {
    console.log("Запрос не удался");
  };
};

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
  xmlPost(POSTS_URL, res);
});

getData(POSTS_URL).then((res) => console.log(res));
