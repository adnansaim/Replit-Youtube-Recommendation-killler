const logo = document.querySelector("#logo");
const sideBarLogo = document.querySelectorAll(".style-scope.ytd-app");
const ThreeBars = document.getElementById("guide-button");

function hideHomeRecommendations() {
  let contents = document.querySelectorAll("#contents");

  if (contents[0] && contents[0].classList.contains("ytd-rich-grid-renderer")) {
    contents[0].style.display = "none";
  } else {
    return undefined;
  }
}
window.addEventListener("load", function () {
  hideHomeRecommendations();
  ThreeBars.style.display = "none";
});

window.onload = setTimeout(() => {
  hideRelatedRecommendations();
}, 1000);

function hideRelatedRecommendations() {
  let relatedDiv = document.querySelectorAll("#related");
  let homeButton = document.querySelector("#endpoint");
  relatedDiv[0].style.display = "none";
  homeButton.style.display = "none";
}
logo.addEventListener("click", function () {
  goToYoutube();
});
sideBarLogo[15].addEventListener("click", function () {
  goToYoutube();
});

ThreeBars.addEventListener("click", function () {
  goToYoutube();
});

function goToYoutube() {
  window.location.href = "https://www.youtube.com/";
}
