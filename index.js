const dataTag = document.querySelector(".data");
const tbl = document.createElement("table");
const tblBody = document.createElement("tbody");
dataTag.append(tbl);
dataTag.append(tblBody);
let dataResult;


const getData = () => {

  const myData = (result) => {
    dataResult = result
  };
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      newData = data;
      return data;
    })
    .then((data) => {myData(data); return data;}).then((data) => {
      let dataContainer = data;
      Array(dataContainer).forEach((el) => {
        el.forEach((key, value) => {
          let newRow = document.createElement("tr");
          let newCell = document.createElement("td");
          let newContent = JSON.stringify(key, value);
          newCell.append(newContent);
          newRow.append(newCell);
          tblBody.append(newRow);
          tbl.append(tblBody);
        });
      });
      console.log(data);
      return data;
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
    .then((response) => {
      response.json();
      console.log("sendData");
    })
    .catch((error) => {
      console.log("sendData error", error);
    });
};

document.addEventListener("DOMContentLoaded", (e) => {
  console.log("Hello");
  getData();
  console.log(dataResult);
  sendData("https://jsonplaceholder.typicode.com/posts", dataResult);
});
