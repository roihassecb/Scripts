javascript: void (function () {
  document.querySelector("#details-module").remove();
  document.querySelector("#viewissuesidebar").remove();
  const elHeight = document.querySelector("#descriptionmodule").offsetHeight;
  const elToScroll = document.querySelector("#view_issue_steps_section");
  const windowHeight = innerHeight;
  const height = 41 + 79 + 56 + elHeight;
  elToScroll.style.setProperty("height", `${windowHeight - height}px`);
  elToScroll.style.setProperty("overflow", "scroll");
})();



