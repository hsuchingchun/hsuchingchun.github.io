// elm.addEventListener("click", function (event) {
//     const isMobile = window.matchMedia("(max-width: 767px)").matches;
//     if (isMobile) {
//       return;
//     }
//     event.preventDefault();
//     var wrapper = event.currentTarget;
//     var src = wrapper.getAttribute("data-src");
//     if (src) {
//       wrapper.removeAttribute("data-src");
//       var iframe = document.createElement("iframe");
//       iframe.src = src + "?autopaly=1";
//       wrapper.innerHTML = "";
//       wrapper.appendChild(iframe);
//     }
//   });

// window.onload = function () {
//   const images = document.querySelectorAll("img");
//   images.forEach((img) => {
//     const wrapper = document.createElement("div");
//     wrapper.classList.add("img-container");
//     img.parentElement.insertBefore(wrapper, img);
//     wrapper.appendChild(img);

//     wrapper.addEventListener("click", function () {
//       const isZoomed = img.style.transform === "scale(2)";
//       img.style.transform = isZoomed ? "scale(1)" : "scale(2)";
//       const body = document.querySelector("body");
//       body.style.backdropFilter = isZoomed ? "blur(0)" : "blur(5px)";
//       img.style.zIndex = isZoomed ? "0" : "1"; // 設置 z-index
//     });

//     wrapper.addEventListener("mouseleave", function () {
//       img.style.transform = "scale(1)";
//     });
//   });
// };
