$(".responsive").slick({
  slidesToShow: 3,
  speed: 2000,
  dots: false,
  infinite: true,
  autoplay: true,
  nextArrow: false,
  prevArrow: false,
  autoplaySpeed: 1000,
  // slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
        nextArrow: false,
        prevArrow: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".responsive-2").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  infinite: true,
  arrows: false,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".resource-prev").click(function () {
  $(".responsive-2").slick("slickPrev");
});

$(".resource-next").click(function () {
  $(".responsive-2").slick("slickNext");
});

$(".responsive-3").slick({
  slidesToShow: 2,
  speed: 1000,
  dots: false,
  infinite: true,
  autoplay: true,
  nextArrow: false,
  prevArrow: false,
  autoplaySpeed: 1000,
  // slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        nextArrow: false,
        prevArrow: false,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(document).ready(function () {
  $(".responsive-4").slick({
    slidesToShow: 3,
    speed: 800,
    dots: false,
    infinite: true,
    autoplay: false,       
    autoplaySpeed: 1500,
    arrows: true,  

    prevArrow:
      '<button type="button" class="slick-prev custom-arrow"><i class="fa-solid fa-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next custom-arrow"><i class="fa-solid fa-chevron-right"></i></button>',

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});


$(".responsive-5").slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: "linear",
});


$(document).on("click", ".slick-prev-custom", function () {
  $(".responsive-5").slick("slickPrev");
});


$(document).on("click", ".slick-next-custom", function () {
  $(".responsive-5").slick("slickNext");
});