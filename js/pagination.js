'use strict';

(function () {
  const MAX_TABLE_ROWS = 5;

  let entriesAmount = window.data.mockData.length;
  let pagesAmount = Math.ceil(entriesAmount / MAX_TABLE_ROWS);

  let pagesHTML = "";
  let pagesContainer = document.querySelector(".pagination");

  pagesContainer.innerHTML = pagesHTML;
  
  function newDataPart(from, to) {
    let newData = window.data.mockData.slice(from, to);
    return newData;
  }

  for (let i = 1; i <= pagesAmount; i++) {
    let pageItem = '<a href="#"' + ' onclick="window.data.fillTableByData([])">' + i + '</a>';
    pagesHTML += pageItem;
  }

  pagesContainer.innerHTML = pagesHTML;

})();
