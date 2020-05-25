'use strict';
(function () {
  let table = document.querySelector("#table");
  let idHeader = document.querySelector("#id");
  let nameHeader = document.querySelector("#name");
  let valueHeader = document.querySelector("#value");

  let mockData = window.data.mockData;

  let check = {
    isClickedByID: false,
    isClickedByName: false,
    isClickedByValue: false,
  };

  function sortBy(isClickedBy, compare) {
    if(check[isClickedBy]) {
      mockData.reverse();
      window.data.fillTableByData(mockData);
      return;
    }
    mockData.sort(compare);
    window.data.fillTableByData(mockData);

    if(isClickedBy === 'isClickedByID') {
      check.isClickedByID = true;
      check.isClickedByName = false;
      check.isClickedByValue = false;
    }
    if(isClickedBy === 'isClickedByName') {
      check.isClickedByID = false;
      check.isClickedByName = true;
      check.isClickedByValue = false;
    }
    if(isClickedBy === 'isClickedByValue') {
      check.isClickedByID = false;
      check.isClickedByName = false;
      check.isClickedByValue = true;
    }
  }

  function compareNames(a, b) {
    if (a.name > b.name) return 1;
    if (a.name === b.name) return 0;
    if (a.name < b.name) return -1;
  }

  function compareID(a, b) {
    return a.id - b.id;
  }

  function compareValue(a, b) {
    return a.value - b.value;
  }

  let sortByID = sortBy.bind(null, 'isClickedByID', compareID);
  let sortByName = sortBy.bind(null, 'isClickedByName', compareNames);
  let sortByValue = sortBy.bind(null, 'isClickedByValue', compareValue);

  idHeader.addEventListener('click', sortByID);
  nameHeader.addEventListener('click', sortByName);
  valueHeader.addEventListener('click', sortByValue);

  // по моему это красивый код )

})();