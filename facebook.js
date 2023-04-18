const newsFeedContainer = document.querySelector(
  ".x9f619.x1n2onr6.x1ja2u2z.x78zum5.xdt5ytf.x2lah0s.x193iq5w.xeuugli"
);
const fbLogo = document.querySelector(
  ".x6s0dn4.x9f619.x78zum5.x1iyjqo2.x1s65kcs.x1d52u69.xixxii4.x17qophe.x13vifvy.xzkaem6"
);
const sideDistractionBar = document.querySelector(
  ".x9f619.x1n2onr6.x1ja2u2z.x78zum5.xdt5ytf.x2lah0s.x193iq5w.x1cy8zhl.xwib8y2.x1iorvi4"
);
console.log(sideDistractionBar);

fbLogo.addEventListener("click", function () {
  window.location.href = "https://www.facebook.com/";
});

window.onload = function () {
  newsFeedContainer.style.maxHeight = "0px";
  newsFeedContainer.style.overflow = "hidden";
  sideDistractionBar.style.display = "none";
};
