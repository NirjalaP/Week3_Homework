$(document).ready(function () {
    $("td").each(function () {
      if ($(this).text() !== "Not Available") {
        $(this).addClass("selectable");
      }
    });
    $("td").click(function () {
      // user select a table data cell
      var content = $(this).text(); // get content of cell
  
  
      if (content != "Not Available") {
        // check if content does not contain a particular string
        $(this).toggleClass("tdhighlight"); // add or remove class when cell is selected
      }
    });
  });
  