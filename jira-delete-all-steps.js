javascript: (function () {
  function deleteAllSteps() {
    function deleteFirstStep() {
      function clickDeleteStep() {
        jQuery("a[href*='teststep-dd-']")
          .last()
          .css("visibility", "visible")
          .click();
        jQuery("a[id*='step-']:contains('Delete'):visible").click();
      }
      function submitDeletion() {
        jQuery("#cycle-delete-form-submit").click();
      }
      jQuery.when(clickDeleteStep()).then(submitDeletion);
    }
    function getNumberOfSteps() {
      return jQuery("a[href*='teststep-dd-']").length;
    }
    function executeFunction(func, numberOfTimes, waitBetweenMethods) {
      waitBetweenMethods =
        typeof waitBetweenMethods === "undefined" ? 400 : waitBetweenMethods;
      var executionCount = 0;
      function execute() {
        if (executionCount == numberOfTimes) return;
        executionCount++;
        func();
        setTimeout(function () {
          execute();
        }, waitBetweenMethods);
      }
      execute();
    }
    executeFunction(deleteFirstStep, getNumberOfSteps(), 500);
  }
  deleteAllSteps();
})();
