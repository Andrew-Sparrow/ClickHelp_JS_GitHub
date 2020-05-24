'use strict';

let mockData = [
  { id: 1, name: "Alice", value: 1000 },
  { id: 2, name: "John", value: 570 },
  { id: 3, name: "Victoria", value: 660 },
  { id: 4, name: "Eva", value: 930 },
  { id: 5, name: "James", value: 15 }
];

let input = document.querySelector("#input");

function sortData() {
  let filterData = input.value.toLowerCase();
  let table = document.querySelector("#table");
  let rows = table.querySelectorAll(".table__body .table__row");
  let cell;
  let i;
  let cellValue;

  for (i = 0; i < rows.length; i++) {
    cell = rows[i].querySelectorAll(".table__cell")[1];

    cellValue = cell.textContent;

    if (cellValue.toLowerCase().indexOf(filterData) > -1) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
}

input.addEventListener("keyup", sortData);
