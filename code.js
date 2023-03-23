/*This functions changes the background image when the button is pressed*/
var isBackground = true;

function changeBackground() {
  var images = document.querySelector("body");
  if (isBackground) {
    images.style.backgroundImage = "url(/images/nightsky_lofi.jpg)";
    isBackground = false;
  } else {
    images.style.backgroundImage = "url(/images/daytime_lofi.jpg)";
    isBackground = true;
  }
}
