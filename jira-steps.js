javascript: function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function fillTest() {
  var description = jQuery("#description-val").text().trim();
  var rows = description.split("\n");
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    row = row.trim();
    if (row == "") continue;
    var rowSplitted = row.split(";");
    var step = rowSplitted[0].trim();
    var expectedResult =
      rowSplitted.length == 1 ? "Done" : rowSplitted[1].trim();
    var focusedRow = jQuery("tr.jira-restfultable-focused");
    focusedRow.find("textarea[name=step]").val(step);
    focusedRow.find("textarea[name=result]").val(expectedResult);
    focusedRow.find('input[value="Add"]').click();
    await sleep(50);
  }
}
fillTest();
