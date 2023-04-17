const logo = document.querySelector("#logo");

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
});

window.onload = setTimeout(() => {
  hideRelatedRecommendations();
}, 1000);

function hideRelatedRecommendations() {
  let relatedDiv = document.querySelectorAll("#related");
  relatedDiv[0].style.display = "none";
}
logo.addEventListener("click", function () {
  window.location.href = "https://www.youtube.com/";
});
