'use strict';
(function () {

  const MAX_TABLE_ROWS = 5;

  let mockData = [
    {id: 2, name: "John", value: 570},
    {id: 1, name: "Alice", value: 1000},
    {id: 3, name: "Victoria", value: 760},
    {id: 4, name: "Eva", value: 930},
    {id: 5, name: "James", value: 15}
  ];

  window.data = {
    mockData: mockData,
    fillTableByData: fillTableByData,
  };

  let input = document.querySelector("#input");
  let button = document.querySelector("button");
  let table = document.querySelector("#table");
  let rows = table.querySelectorAll(".table__body .table__row");

function compareForFilter(item) {
  let dataFromInput = input.value.toLowerCase();

  return item.name.toLowerCase().includes(dataFromInput);
}

  function filterData() {
    window.data.mockData = mockData.filter(compareForFilter);

    fillTableByData(window.data.mockData);
  }

  function fillTableByData(data) {
    for (let i = 0; i < rows.length; i++) {
      if(i > data.length - 1) {
        rows[i].style.display = "none";
      }
      else {
        rows[i].style.display = "";
        rows[i].querySelectorAll(".table__cell")[0].textContent = data[i].id;
        rows[i].querySelectorAll(".table__cell")[1].textContent = data[i].name;
        rows[i].querySelectorAll(".table__cell")[2].textContent = data[i].value;
      }
    }
  }

  fillTableByData(mockData);

  // для тестирования можно использовать мгновенную фильтрацию при вводе
  input.addEventListener("keyup", filterData);
  // button.addEventListener("click", filterData);
})();