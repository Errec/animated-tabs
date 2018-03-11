"use strict";
var initTabs = (function () {
  var tabGroup0  = document.getElementById("tab-group-0");
  var tabsItems0 = document.querySelectorAll("#tab-group-0 > li");

  _setTabGroupClick(tabGroup0, tabsItems0, tabsItems0[0]);

  function _setTabGroupClick (tabGroup, tabsItems, tabSlected) {
    tabGroup.addEventListener('click', function (e) {
      if (e.target.dataset.tab && (tabSlected.dataset.tab !== e.target.dataset.tab)) {
        tabSlected.classList.remove('selected');
        tabSlected = tabsItems[parseInt(e.target.dataset.tab)];
        tabSlected.classList.add('selected');
      }
    });
  }
})();
