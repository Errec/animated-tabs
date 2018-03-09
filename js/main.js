"use strict";
var initTabs = (function () {
  var tabGroup1  = document.getElementById("tab-group-1");
  var tabs1      = document.querySelectorAll("#tab-group-1 > li");
  var tabSlected = tabs1[0];

  tabGroup1.addEventListener('click', function (e) {
    console.log("target", e.target.dataset.tab);
    console.log("current target", e.currentTarget.dataset.tab);
    console.log('===================================================');
    e.stopPropagation();
  });
})();
