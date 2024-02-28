var stepper1;

$(document).ready(function () {
  stepper1 = new Stepper($("#stepper1")[0]); // Initialize stepper1
  var stepper1Node = document.querySelector("#stepper1");
  let role = "";
  let file_input = null;

  stepper1Node.addEventListener("show.bs-stepper", function (event) {
    // You can call prevent to stop the rendering of your step
    // event.preventDefault();
    console.log(event.detail.indexStep);
    if (event.detail.indexStep == 1) {
      $(".step1")
        .html(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2 text-light" viewBox="0 0 16 16">
        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
        </svg>`);
      $(".step1").addClass("step-complete");
      $(".step2").html(`2`);
      $(".step2").removeClass("step-complete");
    } else if (event.detail.indexStep == 2) {
      $(".step2")
        .html(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2 text-light" viewBox="0 0 16 16">
        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
        </svg>`);
      $(".step2").addClass("step-complete");
    } else {
      $(".step1").html(`1`);
      $(".step1").removeClass("step-complete");
    }
  });

  $(".btn-role").on("click", function () {
    role = $(this).attr("data-role");

    if (!$(this).hasClass("active")) {
      $(".btn-role").removeClass("active");
      $(this).addClass("active");
    } else {
      $(this).addClass("active");
    }

    $("#accRole").text(role);
    $(".role-text").show();
    $(".btn-next-role").removeClass("disabled");

    if (role == "Project Owner") {
      $(".form-category").show();
    } else {
      $(".form-category").hide();
    }
  });

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

        file_input = base64String;

        // Do something with the Base64 string
        console.log(file_input);
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

  $(".btn-next-register").on("click", function () {
    // Retrieve all input values
    var fullName = $("#inputFullName").val().trim();
    var companyName = $("#inputCompanyName").val().trim();
    var userName = $("#inputUsername").val().trim();
    var email = $("#exampleInputEmail1").val().trim();
    var file = file_input;

    if (role == "Project Owner") {
      var category = $("#inputCategory").val();
      if (
        fullName === "" ||
        companyName === "" ||
        userName === "" ||
        email === "" ||
        file === null ||
        category === null
      ) {
        // Check if any input is empty
        alert("Please fill in all required fields.");
        return; // Exit the function if any input is empty
      }
    } else {
      if (
        fullName === "" ||
        companyName === "" ||
        userName === "" ||
        email === "" ||
        file === null
      ) {
        // Check if any input is empty
        alert("Please fill in all required fields.");
        return; // Exit the function if any input is empty
      }
    }

    // If all inputs are filled, proceed to the next step
    stepper1.next();
  });

  // Select the checkbox and the button
  var $checkbox = $("#exampleCheck1");
  var $nextButton = $(".btn-next-submit");

  // Add change event listener to the checkbox
  $checkbox.on("change", function () {
    // If the checkbox is checked, enable the button
    if ($checkbox.prop("checked")) {
      $nextButton.removeClass("disabled");
    } else {
      // If the checkbox is unchecked, disable the button
      $nextButton.addClass("disabled");
    }
  });

  $(".btn-next-submit").on("click", function () {
    alert("thanks");

    setTimeout(() => {
      window.location.href = "index.php?page=login";
    }, 500);
  });
});
