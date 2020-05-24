'use strict';
(function () {


  const MAX_TABLE_ROWS = 5;

  let mockData = [
    {id: 1, name: "Alice", value: 1000},
    {id: 2, name: "John", value: 570},
    {id: 3, name: "Victoria", value: 760},
    {id: 4, name: "Eva", value: 930},
    {id: 5, name: "James", value: 15}
  ];

  let input = document.querySelector("#input");
  let table = document.querySelector("#table");
  let dataFromInput = input.value.toLowerCase();
  let rows = table.querySelectorAll(".table__body .table__row");

  function filterData() {
    let cell;
    let i;
    let cellValue;

    for (i = 0; i < rows.length; i++) {
      cell = rows[i].querySelectorAll(".table__cell")[1];

      cellValue = cell.textContent;

      if (cellValue.toLowerCase().includes(dataFromInput)) {
        rows[i].style.display = "";
      } else {
        rows[i].style.display = "none";
      }
    }
  }

  function fillTableByData(data) {
    for (let i = 0; i < data.length; i++) {
      rows[i].querySelectorAll(".table__cell")[0].textContent = data[i].id;
      rows[i].querySelectorAll(".table__cell")[1].textContent = data[i].name;
      rows[i].querySelectorAll(".table__cell")[2].textContent = data[i].value;
    }
  }

  fillTableByData(mockData);

  input.addEventListener("keyup", filterData);
})();