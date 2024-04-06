document.addEventListener("DOMContentLoaded", function () {
  anime({
    targets: ".function-based-values-demo .el",
    translateX: function (el) {
      var screenWidth = window.innerWidth;
      var dataX = parseInt(el.getAttribute("data-x"));
      if (screenWidth <= 580) {
        // Adjust data-x for mobile screens
        dataX = dataX * 0.8; // Example adjustment, you can adjust this as needed
      }
      if (screenWidth <= 768) {
        // Adjust data-x for mobile screens
        dataX = dataX * 0.4; // Example adjustment, you can adjust this as needed
      }
      return dataX;
    },
    translateY: function (el, i) {
      return 50 + -50 * i;
    },
    scale: function (el, i, l) {
      return l - i + 0.25;
    },
    rotate: function () {
      return anime.random(-360, 360);
    },
    borderRadius: function () {
      return ["50%", anime.random(10, 35) + "%"];
    },
    duration: function () {
      return anime.random(1200, 1800);
    },
    delay: function () {
      return anime.random(0, 400);
    },
    direction: "alternate",
    loop: true,
  });
});
