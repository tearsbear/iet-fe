let file_idcard = null;
let file_letter = null;

$("#inputFile").on("change", function () {
  // Get the selected file(s)
  var files = $(this)[0].files;

  // Check if any file is selected
  if (files.length > 0) {
    // File(s) are selected
    var file = files[0]; // Assuming only one file is selected

    // Read the file
    var reader = new FileReader();

    reader.onload = function (event) {
      // File reading finished successfully
      var fileContent = event.target.result;

      // Convert file content to Base64
      var base64String = btoa(fileContent);
      // Check if file name is too long
      var fileName = file.name;
      var maxLength = 20; // Change this value to your desired maximum length
      if (fileName.length > maxLength) {
        fileName = fileName.substring(0, maxLength) + "..."; // Truncate file name
      }

      $(".file-placeholder").text(fileName);

      file_idcard = base64String;
    };

    reader.onerror = function (event) {
      // File reading encountered an error
      console.error("Error reading file:", event.target.error);
    };

    // Start reading the file
    reader.readAsBinaryString(file);
  } else {
    // No file selected
    console.log("No file selected.");
  }
});

$("#inputFileRec").on("change", function () {
  // Get the selected file(s)
  var files = $(this)[0].files;

  // Check if any file is selected
  if (files.length > 0) {
    // File(s) are selected
    var file = files[0]; // Assuming only one file is selected

    // Read the file
    var reader = new FileReader();

    reader.onload = function (event) {
      // File reading finished successfully
      var fileContent = event.target.result;

      // Convert file content to Base64
      var base64String = btoa(fileContent);
      // Check if file name is too long
      var fileName = file.name;
      var maxLength = 20; // Change this value to your desired maximum length
      if (fileName.length > maxLength) {
        fileName = fileName.substring(0, maxLength) + "..."; // Truncate file name
      }

      $(".file-placeholder-rec").text(fileName);

      file_letter = base64String;
    };

    reader.onerror = function (event) {
      // File reading encountered an error
      console.error("Error reading file:", event.target.error);
    };

    // Start reading the file
    reader.readAsBinaryString(file);
  } else {
    // No file selected
    console.log("No file selected.");
  }
});
