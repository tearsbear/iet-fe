$(document).ready(function () {
  $(".password-toggle-container").click(function (e) {
    e.preventDefault(); // Prevent default anchor behavior

    var passwordInput = $(this)
      .closest(".password-container")
      .find('input[name="password"]');
    var type = passwordInput.attr("type");

    // Toggle password visibility
    if (type === "password") {
      passwordInput.attr("type", "text");
      console.log("jhi");
      $(".password-icon").attr("src", "assets/icons/eye.svg"); // Change icon to show password
    } else {
      passwordInput.attr("type", "password");
      $(".password-icon").attr("src", "assets/icons/eye-off.svg"); // Change icon to hide password
    }
  });
});
