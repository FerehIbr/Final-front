$(document).ready(function () {
  FixedHeader();
  salam();
  wishlistF();
  if (JSON.parse(localStorage.getItem("modal")) === null) {
    $(".overlay-first-modal").css({
      opacity: "1",
      visibility: "visible",
      "z-index": "99999",
    });
    $(".modal-close-icon").parent().css({
      opacity: "1",
      visibility: "visible",
      "z-index": "99999",
    });
  }
  //First Modal
  $(document).on("click", ".modal-close-icon", function (e) {
    e.preventDefault();
    if (JSON.parse(localStorage.getItem("modal")) === null) {
      localStorage.setItem("modal", JSON.stringify("modal"));
    }

    $(".overlay-first-modal").css({
      opacity: "0",
      visibility: "hidden",
      "z-index": "-10",
    });
    $(this).parent().css({
      opacity: "0",
      visibility: "hidden",
      "z-index": "-10",
    });
  });
  // Phone menu
  $(".up-icon").click(function () {
    $(".down-icon").hide();
    $(".up-icon").show();
    $(this).hide();
    $(this).next().show();
    $(".nav-toggle").removeClass("active-ul");
    $(this).next().next().addClass("active-ul");
    $(".head-text").css("color", "#253D4E");
    $(this).prev().css("color", "#b73b3b");
  });
  $(".down-icon").click(function () {
    $(this).hide();
    $(this).prev().show();
    $(this).next().removeClass("active-ul");
    $(this).prev().prev().css("color", "#253D4E");
  });
  $(".up-icon2").click(function () {
    $(".down-icon2").hide();
    $(".up-icon2").show();
    $(this).hide();
    $(this).next().show();
    $(".nav-toggle2").removeClass("active-ul");
    $(this).next().next().addClass("active-ul");
    $(".head-text2").css("color", "#253D4E");
    $(this).prev().css("color", "#b73b3b");
  });
  $(".down-icon2").click(function () {
    $(this).hide();
    $(this).prev().show();
    $(this).next().removeClass("active-ul");
    $(this).prev().prev().css("color", "#253D4E");
  });
  // Side-bar menu
  $(".burger").click(function () {
    // open
    $(".phone-side-menu").css({
      opacity: "1",
      visibility: "visible",
      transform: "translateX(0px)",
    });
    $(".overlay-body").css({
      opacity: "0.7",
      visibility: "visible",
    });
  });
  // close
  $(".sidebar-close-icon").click(function () {
    $(".phone-side-menu").css({
      opacity: "0",
      visibility: "hidden",
      transform: "translateX(-200px)",
    });
    $(".overlay-body").css({
      opacity: "0",
      visibility: "hidden",
    });
  });
  $(".overlay-body").click(function () {
    $(".phone-side-menu").css({
      opacity: "0",
      visibility: "hidden",
      transform: "translateX(-200px)",
    });
    $(".overlay-body").css({
      opacity: "0",
      visibility: "hidden",
    });
  });
  //Header
  // Search div open-close
  $(".open-search-div").click(function () {
    $("#search").slideDown("slow");
  });
  $(".close-inp").click(function () {
    $("#search").slideUp("slow");
  });
  // Cart click overlay
  $(".shopping-cart-header").click(function () {
    $(".overlay-cart").css({
      opacity: "1",
      visibility: "visible",
    });
    $(".header-cart").css({
      transform: "translateX(0%)",
    });
  });
  $(".overlay-cart").click(function () {
    $(".overlay-cart").css({
      opacity: "0",
      visibility: "hidden",
    });
    $(".header-cart").css({
      transform: "translateX(100%) translatex(30px)",
    });
    $("#modal-prod").css({
      opacity: "0",
      visibility: "hidden",
    });
  });
  $(".cart-close-icon").click(function () {
    $(".overlay-cart").css({
      opacity: "0",
      visibility: "hidden",
    });
    $(".header-cart").css({
      transform: "translateX(100%) translatex(30px)",
    });
  });

  //Arrival
  //Open product Modal
  $(".open-modal")
    .parent()
    .click(function (e) {
      e.preventDefault();
      $("#modal-prod").css({
        opacity: "1",
        visibility: "visible",
      });
      $(".overlay-cart").css({
        opacity: "1",
        visibility: "visible",
      });
    });
  // Sizes change active class
  $(".sizes a").click(function (e) {
    e.preventDefault();
    $(this).addClass("active-det");
    $(this).siblings().removeClass("active-det");
  });
  $(".colors a").click(function (e) {
    e.preventDefault();
    $(this).addClass("active-det");
    $(this).siblings().removeClass("active-det");
  });
  // SHOP---->
  // Grid change
  $(".equal").click(function () {
    //self change
    $(this).addClass("active-grid");
    $(".nonequal").removeClass("active-grid");
    // product list change
    $(this)
      .parent()
      .parent()
      .next()
      .find(".product-card")
      .removeClass("product-card-row");
  });
  $(".nonequal").click(function () {
    //self change
    $(this).addClass("active-grid");
    $(".equal").removeClass("active-grid");
    // product list change
    $(this)
      .parent()
      .parent()
      .next()
      .find(".product-card")
      .addClass("product-card-row");
  });
  // Dropdown sidebar menu
  $(".fa-plus").click(function (e) {
    e.preventDefault();
    $(this).parent().parent().siblings().find(".sub-list").slideUp();
    $(".fa-minus").css({
      opacity: "0",
      visibility: "hidden",
    });
    $(".fa-plus").css({
      opacity: "1",
      visibility: "visible",
    });
    $(this).parent().next(".sub-list").slideDown();
    $(this).css({
      opacity: "0",
      visibility: "hidden",
    });
    $(this).next().css({
      opacity: "1",
      visibility: "visible",
    });
  });
  $(".fa-minus").click(function (e) {
    e.preventDefault();
    $(this).parent().parent().siblings().find(".sub-list").slideUp();
    $(this).parent().next(".sub-list").slideUp();
    $(this).css({
      opacity: "0",
      visibility: "hidden",
    });
    $(this).prev().css({
      opacity: "1",
      visibility: "visible",
    });
  });
  $("ul.tabs li").click(function () {
    var tab_id = $(this).attr("data-tab");

    $("ul.tabs li").removeClass("current");
    $(".tab-content").removeClass("current");

    $(this).addClass("current");
    $("#" + tab_id).addClass("current");
  });
  // Shop filter
  $(".shopFilter").click(function (e) {
    e.preventDefault();
    if ($(this).hasClass("size")) {
      $(this).toggleClass("active-size");
    }
    if ($(this).hasClass("color")) {
      $(this).toggleClass("active-color");
    }
    if ($(this).hasClass("speciality")) {
      if ($(this).hasClass("active-speciality")) {
        $(this).removeClass("active-speciality");
      } else {
        $(".speciality").removeClass("active-speciality");
        $(this).addClass("active-speciality");
      }
    }
    if ($(this).hasClass("price")) {
      if ($(this).hasClass("active-price")) {
        $(this).removeClass("active-price");
      } else {
        $(".price").removeClass("active-price");
        $(this).addClass("active-price");
      }
    }
    if ($(this).hasClass("category")) {
      if ($(this).hasClass("active-category")) {
        $(this).removeClass("active-category");
      } else {
        $(".category").removeClass("active-category");
        $(this).addClass("active-category");
      }
    }
    if ($(this).hasClass("vendor")) {
      if ($(this).hasClass("active-vendor")) {
        $(this).removeClass("active-vendor");
      } else {
        $(".vendor").removeClass("active-vendor");
        $(this).addClass("active-vendor");
      }
    }
  });
  // Shop --------------->

  // BASKET---->
  // Increse Decrease product count
  $(document).on("click", ".dec", function (e) {
    e.preventDefault();
    let prodCount = parseInt($(this).next(".prod-count").val());
    if (prodCount != 1) {
      prodCount--;
    }
    $(this).next(".prod-count").val(prodCount);
    var cartBasket = JSON.parse(localStorage.getItem("basket"));
    for (let i = 0; i < cartBasket.length; i++) {
      if ($(this).next(".prod-count").attr("data-id") == cartBasket[i].id) {
        cartBasket[i].count = prodCount;
        localStorage.setItem("basket", JSON.stringify(cartBasket));
        salam();
      }
    }
  });
  $(document).on("click", ".inc", function (e) {
    e.preventDefault();
    let prodCount = parseInt($(this).prev(".prod-count").val());
    prodCount++;
    $(this).prev(".prod-count").val(prodCount);
    var cartBasket = JSON.parse(localStorage.getItem("basket"));
    for (let i = 0; i < cartBasket.length; i++) {
      if ($(this).prev(".prod-count").attr("data-id") == cartBasket[i].id) {
        cartBasket[i].count = prodCount;
        localStorage.setItem("basket", JSON.stringify(cartBasket));
        salam();
      }
    }
  });

  if (JSON.parse(localStorage.getItem("basket")) == null) {
    localStorage.setItem("basket", JSON.stringify([]));
  }

  $(document).on("click", ".addtocart", function (e) {
    e.preventDefault();
    if (JSON.parse(localStorage.getItem("basket")) === null) {
      localStorage.setItem("basket", JSON.stringify([]));
    }
    let basket = JSON.parse(localStorage.getItem("basket"));
    let prodImage = $(this).parent().prev().find(".main").attr("src");
    let prodName = $(this).prev().prev(".prod-name").text();
    let prodId = $(this).attr("data-id");
    let Color = $(this).attr("data-color");
    let Size = $(this).attr("data-size");
    let proPrice = Number($(this).prev().find(".price-value").text());
    let exist = basket.find((n) => n.id == prodId);

    if (exist === undefined) {
      basket.push({
        id: prodId,
        name: prodName,
        image: prodImage,
        price: proPrice,
        color: Color,
        size: Size,
        count: 1,
      });
    } else {
      exist.count += 1;
    }
    localStorage.setItem("basket", JSON.stringify(basket)); // Cart button

    salam();
  });
  function salam() {
    var cartBasket = JSON.parse(localStorage.getItem("basket"));
    if (cartBasket != null && cartBasket.length > 0) {
      var totalPriceCount = 0;

      $(".header-cart .left").html(
        `
        <div class="basket-content">
      <div class="headerBasket">

      </div>
      <div class="total">
          <span>Total</span>
          <span>$<span class="subtotalPrice">0</span>.00</span>
      </div>
      <hr>
      <p>Shipping, taxes, and discounts will be calculated at checkout.</p>
      <a href="checkout.html" class="proceed viewshopAbutton">Proceed to Checkout</a>
      <a href="basket.html" class="cart viewshopAbutton">View Cart </a>
  </div>`
      );
      $(".basketElems").html("");
      for (let item of cartBasket) {
        totalPriceCount += item.price * item.count;
        var element = `
		<div class="basket-card row">
			<div class="remove-icon" data-id="${item.id}">
				<i class="fa-solid fa-xmark"></i>
			</div>
			<div class="left-card col-lg-3">
				<a href="" class="image">
					<img src="${item.image}" alt="">
				</a>
			</div>
			<div class="right-card col-lg-9">
				<div class="content">
					<a href="" class="prod-name">${item.name}</a>
					<ul class="prod-elements">
						<li class="size">${item.size}</li>
						<li class="color">${item.color}</li>
						<li class="category">Alcohol Free</li>
					</ul>
					<div class="price">
						<span>$ ${item.price}</span>
					</div>
					<div class="count">
						<a href="" class="dec">-</a>
						<input type="text" data-id="${item.id}" class="prod-count" value="${item.count}">
						<a href="" class="inc">+</a>
					</div>
				</div>
			</div>
		</div>
		`;
        var element2 = `
		<div class="basket-card row">
			<div class="remove-icon" data-id="${item.id}">
				<i class="fa-solid fa-xmark"></i>
			</div>
			<div class="left-card col-lg-3 col-md-3 col-sm-12 text-md-center">
				<a href="" class="image d-sm-block text-sm-center">
					<img src="${item.image}" alt="">
				</a>
			</div>
			<div class="right-card col-lg-9 col-md-9 col-sm-12">
				<div class="content col-sm-12 col-xs-12">
					<a href="" class="prod-name">${item.name}</a>
					<ul class="prod-elements">
						<li class="size">${item.size}</li>
						<li class="color">${item.color}</li>
						<li class="category">Alcohol Free</li>
					</ul>
					<div class="price">
						<span>$ ${item.price}</span>
					</div>
					<div class="count">
						<a href="" class="dec">-</a>
						<input type="text" data-id="${item.id}" class="prod-count" value="${
          item.count
        }">
						<a href="" class="inc">+</a>
					</div>
					<div class="total">
						<span class="basketTotal">Total $${item.price * item.count}</span>
					</div>
				</div>
			</div>
		</div>
		`;
        $(".notification").text(cartBasket.length);
        // $(".headerBasket").append(element);

        $(".headerBasket").append(element);
        $(".basketElems").append(element2);
        $(".subtotalPrice").text(totalPriceCount);
      }
    } else {
      let err = `
	  <div class="err-message">
	<h3 style="font-family: 'Text Me One';
  font-size: 16px;">Basket is empty ... </h3>
  <a href="shop.html" class="viewshopAbutton" style="transform: translateX(-50%);
  position: absolute;
  left: 50%;
  white-space: nowrap;">Continue Shopping</a>
	</div>
	`;
      $(".header-cart .left").html(err);
      $(".basketElems").html(`<h3 style="font-family: 'Text Me One';
      font-size: 16px;">Basket is empty ... </h3>`);
      $(".notification").text("0");
      $(".subtotalPrice").text("0");
      $(".basketTotal").text("0");
    }
  }

  // Home page and Product page link
  $(document).ready(function () {
    $(".GoToProduct").click(function (e) {
      localStorage.setItem("product", JSON.stringify([]));
      let product = JSON.parse(localStorage.getItem("product"));

      let img1 = $(this).parent().parent().find(".main").attr("src");
      let img2 = $(this).parent().parent().find(".hover").attr("src");
      let thisPrId = $(this).attr("data-id");
      let prName = $(this).parent().parent().next().find(".prod-name").text();
      let prPrice = Number(
        $(this).parent().parent().next().find(".price-value").text()
      );
      product.push({
        img1: img1,
        img2: img2,
        id: thisPrId,
        name: prName,
        price: prPrice,
      });
      localStorage.setItem("product", JSON.stringify(product));
    });
  });
  // Header cart button remove item
  $(document).on("click", ".remove-icon", function () {
    var cartBasket = JSON.parse(localStorage.getItem("basket"));
    for (let i = 0; i < cartBasket.length; i++) {
      if ($(this).attr("data-id") == cartBasket[i].id) {
        cartBasket.splice(i, 1);
        localStorage.setItem("basket", JSON.stringify(cartBasket));
        salam();
      }
    }
  });
  // Basket ------------------>
  // Wishlist
  $(document).on("click", ".addtowishlist", function (e) {
    e.preventDefault();
    if (JSON.parse(localStorage.getItem("wishlist")) === null) {
      localStorage.setItem("wishlist", JSON.stringify([]));
    }
    let wishlist = JSON.parse(localStorage.getItem("wishlist"));
    let prodImage = $(this)
      .parent()
      .parent()
      .parent()
      .next(".main")
      .attr("src");
    let prodName = $(this)
      .parent()
      .parent()
      .parent()
      .parent()
      .next()
      .find(".prod-name")
      .text();
    let prodId = $(this)
      .parent()
      .parent()
      .parent()
      .parent()
      .next()
      .find(".addtocart")
      .attr("data-id");
    let proPrice = Number(
      $(this)
        .parent()
        .parent()
        .parent()
        .parent()
        .next()
        .find(".price-value")
        .text()
    );

    let exist = wishlist.find((n) => n.id == prodId);

    if (exist === undefined) {
      wishlist.push({
        id: prodId,
        name: prodName,
        image: prodImage,
        price: proPrice,
      });
    }
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    wishlistF();
  });
  $(document).on("click", ".removeWishlist", function (e) {
    e.preventDefault();
    var cartWishlist = JSON.parse(localStorage.getItem("wishlist"));
    for (let i = 0; i < cartWishlist.length; i++) {
      if ($(this).attr("data-id") == cartWishlist[i].id) {
        cartWishlist.splice(i, 1);
        localStorage.setItem("wishlist", JSON.stringify(cartWishlist));
        wishlistF();
      }
    }
  });
  function wishlistF() {
    var cartWishlist = JSON.parse(localStorage.getItem("wishlist"));
    if (cartWishlist != null && cartWishlist.length > 0) {
      $(".wishlist-body").html("");
      for (let item of cartWishlist) {
        var element = `
	
        <tr id="row_bavaria-wine">
        <td class="product-thumbnail">
            <a href="product-detail.html">
                <img src="${item.image}" style="width: 100px;" alt="">
            </a>
        </td>
        <td class="product-name">
            <a href="/products/bavaria-wine" style="color: black;">${item.name}</a>
        </td>
        <td class="product-price-cart">
            <span class="amount">$ ${item.price}</span>
        </td>
        <td class="product-wishlist-cart">
            <a href="product-detail.html" style="border : 1px solid #e4e4e4"
                class="dt-sc-btn product-cart viewshopAbutton">Select Options</a>
        </td>
        <td>
            <a href="" data-id="${item.id}" style="color: black;" class="product-cart removeWishlist">
                <i class="fa fa-trash"></i>
            </a>
        </td>
    </tr>
		`;
        $(".wishlistCount").text(cartWishlist.length);
        $(".wishlist-body").append(element);
      }
    } else {
      let err = `
      <div class="wish-empty" style="text-align: center;">
          <img src="images/empty-cart.jpeg" style="width: 200px;"/>
          <h4>Nothing found in wishlist!</h4>
          <a href="shop.html" class="viewshopAbutton">Start Shopping</a>
      </div>
      `;
      $(".wishlistCount").text("0");
      $(".wishlist-container").html(err);
    }
  }
  // Wishlist-------------------->
  //Check out
  $(".estimates").click(function () {
    $("#shipping").slideToggle();
  });
  $(".addNote").click(function () {
    $(this).css({ display: "none" });
    $("#addNoteInput").css({ display: "block" });
    $(".addNoteLabel").css({ display: "block" });
  });
  //Check out--------------->

  // Window
  // To top function
  document.querySelector(".topBtn").addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  // Parallax background
  $(window).scroll(function () {
    let offSetY = window.pageYOffset;
    $("#maker").css({
      "background-position-y": `${-(offSetY - 750) * 0.2 + "px"}`,
    });
    $("#offer").css({
      "background-position-y": `${-(offSetY - 750) * 0.2 + "px"}`,
    });
  });
});

// Sticky header
window.onscroll = function () {
  FixedHeader();
  ScrollToTop();
};
function FixedHeader() {
  var phoneHeader = document.querySelector(".sticky-header");
  if (window.scrollY >= 240) {
    phoneHeader.style.transform = "translateY(0px)";
    phoneHeader.style.transition = "transition: all .5s";
    phoneHeader.style.opacity = "1";
    if (window.scrollY > 1000) {
      const counters = document.querySelectorAll(".value");
      const speed = 200;

      counters.forEach((counter) => {
        var animate = () => {
          const value = +counter.getAttribute("akhi");
          const data = +counter.innerText;

          const time = value / speed;
          if (data < value) {
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 300);
          } else {
            counter.innerText = value;
          }
        };
        setTimeout(animate, 200);
      });

      if (window.scrollY > 5500) {
        const counters2 = document.querySelectorAll(".valueh");
        const speed2 = 200;

        counters2.forEach((counter2) => {
          var animate2 = () => {
            const value2 = +counter2.getAttribute("akhi");
            const data2 = +counter2.innerText;

            const time2 = value2 / speed2;
            if (data2 < value2) {
              counter2.innerText = Math.ceil(data2 + time2);
              setTimeout(animate2, 300);
            } else {
              counter2.innerText = value2;
            }
          };
          setTimeout(animate2, 200);
        });
      }
    }
  } else {
    phoneHeader.style.transition = "transition: all .5s";
    phoneHeader.style.transform = "translateY(-80px)";
    phoneHeader.style.opacity = "0";
  }
}
// Scroll to top button visibility
function ScrollToTop() {
  let scBtn = document.querySelector(".toTopBtn");
  if (window.scrollY > 350) {
    scBtn.style.opacity = "1";
    scBtn.style.visibility = "visible";
  } else {
    scBtn.style.opacity = "0";
    scBtn.style.visibility = "hidden";
  }
}
// Intro slider
var swiper = new Swiper(".mySwiperIntro", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Swipe slider
var swipert1 = new Swiper(".mySwiperTab1", {
  slidesPerView: 4,
  grid: {
    rows: 2,
  },
  navigation: {
    nextEl: ".swiper-button-next-t1",
    prevEl: ".swiper-button-prev-t1",
  },
  breakpoints: {
    1020: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    0: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
  },
});
var swipert2 = new Swiper(".mySwiperTab2", {
  slidesPerView: 4,
  grid: {
    rows: 2,
  },
  navigation: {
    nextEl: ".swiper-button-next-t2",
    prevEl: ".swiper-button-prev-t2",
  },
  breakpoints: {
    1020: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    0: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
  },
});
var swipert3 = new Swiper(".mySwiperTab3", {
  slidesPerView: 4,
  grid: {
    rows: 2,
  },
  navigation: {
    nextEl: ".swiper-button-next-t3",
    prevEl: ".swiper-button-prev-t3",
  },
  breakpoints: {
    1020: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    0: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
  },
});

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1020: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    570: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
});
// Shop left bottom slider
var swiper = new Swiper(".mySwiper3", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".mySwiperModal", {
  navigation: {
    nextEl: ".swiper-button-next-modal",
    prevEl: ".swiper-button-prev-modal",
  },
});
