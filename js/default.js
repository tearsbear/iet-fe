// Reset scroll position to the top when the page loads
window.onload = function () {
  window.scrollTo(0, 0);
};

// Your existing script for navbar styling based on scroll position
$(document).ready(function () {
  // Retrieve the last scroll position from local storage
  const lastScrollPosition = localStorage.getItem("lastScrollPosition");

  // Function to apply navbar style based on scroll position
  function applyNavbarStyle(scrollPosition) {
    // Specify the scroll position at which you want to change the background color
    const scrollPositionToChangeColor = 90;

    // Check if the scroll position is greater than or equal to the specified value
    if (scrollPosition >= scrollPositionToChangeColor) {
      // Change the navbar style when scrolled down
      $(".navbar").addClass("bg-white");
      $(".navbar").addClass("shadow-sm");
      $(".navbar-brand img").attr("src", "assets/logo.svg");
      $(".nav-active").css("color", "var(--color-primary)");
      $(".nav-drop").css("color", "var(--color-primary)");
      $(".nav-drop img").attr("src", "../iet/assets/icons/globe.svg");
      $(".nav-active").hover(
        function () {
          $(this).css("color", "var(--color-primary)"); // Restore default color when not hovering
        },
        function () {
          $(this).css("color", "var(--color-primary)");
        }
      );
      $(".nav-unactive").hover(
        function () {
          $(this).css("color", "var(--color-primary)"); // Restore default color when not hovering
        },
        function () {
          $(this).css("color", "#a8a8a8");
        }
      );
    } else {
      // Restore the default style when scrolled back up
      $(".navbar").removeClass("bg-white");
      $(".navbar").removeClass("shadow-sm");
      $(".navbar-brand img").attr("src", "assets/logo-alt.svg");
      $(".nav-active").css("color", "#fff");
      $(".nav-drop").css("color", "#fff");
      $(".nav-drop img").attr("src", "../iet/assets/icons/globe-white.svg");

      $(".nav-active").hover(
        function () {
          $(this).css("color", "#fff");
        },
        function () {
          $(this).css("color", "#fff"); // Restore default color when not hovering
        }
      );
      $(".nav-unactive").hover(
        function () {
          $(this).css("color", "#fff");
        },
        function () {
          $(this).css("color", "#a8a8a8"); // Restore default color when not hovering
        }
      );
    }
  }

  // Apply navbar style immediately after page load
  applyNavbarStyle($(window).scrollTop());

  // Add a scroll event handler to the window
  $(window).scroll(function () {
    // Get the current scroll position
    const currentScrollPosition = $(this).scrollTop();

    // Apply navbar style based on the current scroll position
    applyNavbarStyle(currentScrollPosition);

    // Store the current scroll position in local storage
    localStorage.setItem("lastScrollPosition", currentScrollPosition);
  });

  // Update the last scroll position initially if it's available
  if (lastScrollPosition) {
    $(window).scrollTop(parseInt(lastScrollPosition));
  }
});
