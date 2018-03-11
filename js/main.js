"use strict";
var initTabs = (function () {
  var tabGroup0  = document.getElementById("tab-group-0");
  var tabs0      = document.querySelectorAll("#tab-group-0 > li");
  var tabSlected = tabs0[0];

  tabGroup0.addEventListener('click', function (e) {
    if (e.target.dataset.tab && (tabSlected.dataset.tab !== e.target.dataset.tab)) {
      tabSlected.classList.remove('selected');
      tabSlected = tabs0[parseInt(e.target.dataset.tab)];
      tabSlected.classList.add('selected');
    }
  });
})();
