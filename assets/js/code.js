/*This functions changes the background image when the button is pressed*/
var isBackground = true;

// when the toggle button is pressed change the background
function changeBackground() {
  var images = document.querySelector("body");
  if (isBackground) {
    images.style.backgroundImage = "url(/assets/images/raining_lofi.jpg)";
    isBackground = false;
  } else {
    images.style.backgroundImage = "url(/assets/images/day.jpg)";
    isBackground = true;
  }
}
