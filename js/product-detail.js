// Get big image from home page
var prodImage = JSON.parse(localStorage.getItem("product"));
if(prodImage != null){
  for (let images of prodImage) {
    $(".ProdName").text(images.name);
    $(".headName").text(images.name);
    $(".price-value").text(images.price);
    let bigImages = `
    <div class="swiper-slide image-b" style="width: 534px !important;">
    <img src="${images.img1}" />
    </div>
    <div class="swiper-slide image-b" style="width: 534px !important;">
    <img src="${images.img2}" />
    </div>
    <div class="swiper-slide image-b" style="width: 534px !important;">
    <img src="images/product3.webp" />
    </div>
    `;
    let smallImages = `
    <div class="swiper-slide">
    <img src="${images.img1}" />
    </div>
    <div class="swiper-slide">
    <img src="${images.img2}" />
    </div>
    <div class="swiper-slide">
      <img src="images/product3.webp" />
    </div>
    `;
    $(".big-image-slider").html(bigImages);
    $(".small-image-slider").html(smallImages);
  }
}
$(document).on("click", ".writeReview", function (e) {
  e.preventDefault();
  $(".prod-review-form").slideToggle();
});
var swiper = new Swiper(".mySwiperProdDetail", {
  slidesPerView: 4,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },breakpoints: {
    1200: {
      slidesPerView: 4,
      spaceBetween: 0
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 0
    }
  }
});

// Swiper slider
var swiperp = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 2,
  freeMode: true,
  clickable: false,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  cssMode: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiperp,
  },
});

$(document).ready(function () {
  // PRODUCT DETAIL---->

  // Image on hover move
  var X = 0;
  var Y = 0;
  $(".image-b img").mouseover(function (en) {
    $(this).css({
      opacity: "0",
    });
    X = 272;
    Y = 400;
    $(this)
      .parent()
      .css({
        "background-image": `url(${this.src})`,
        "background-position": `${X}px ${Y}px`,
        transform: "scale(0.82)",
        transition: "all 0s",
      });
    $(this).mousemove(function (e) {
      $(this)
        .parent()
        .css({
          "background-image": `url(${this.src})`,
          "background-position": `${X - e.pageX}px ${Y - e.pageY}px`,
          transform: "scale(0.82)",
          transition: "all 0s",
        });
    });
    $(".image-b img").mouseleave(function () {
      $(this).css({
        opacity: "1",
      });
      $(this)
        .parent()
        .css({
          "background-image": `url(${this.src})`,
          "background-position": `${X}px ${Y}px`,
          transform: "scale(1)",
          transition: "all 0s",
        });
    });
  });
});
