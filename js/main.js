"use strict";
var initTabs = (function () {
  var contentItems = document.querySelectorAll('.content__item');
  var tabGroup0    = document.getElementById("tab-group-0");
  var tabsItems0   = document.querySelectorAll("#tab-group-0 > li");

  _setTabGroupClick(tabGroup0, tabsItems0, 0);

  function _setTabGroupClick (tabGroup, tabsItems, tabIndex) {
    var tabSlected = tabsItems[tabIndex];

    tabGroup.addEventListener('click', function (e) {
      if (e.target.dataset.tab && (tabSlected.dataset.tab !== e.target.dataset.tab)) {
        var currentTabIndex = parseInt(e.target.dataset.tab);

        var oldTabIndex = parseInt(tabSlected.dataset.tab);

        tabSlected.classList.remove('selected');
        tabSlected = tabsItems[currentTabIndex];
        tabSlected.classList.add('selected');

        contentItems[oldTabIndex].classList.remove('content--show');
        contentItems[currentTabIndex].classList.add('content--show');
      }
    });
  }
})();
