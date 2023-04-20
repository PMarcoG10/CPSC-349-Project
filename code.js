/*This functions changes the background image when the button is pressed*/
var isBackground = true;

function changeBackground() {
  var images = document.querySelector("body");
  if (isBackground) {
    images.style.backgroundImage = "url(/images/raining_lofi.jpg)";
    isBackground = false;
  } else {
    images.style.backgroundImage = "url(/images/day.jpg)";
    isBackground = true;
  }
}
