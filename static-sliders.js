(function ($) {
  'use strict';

  if (!$ || !$.fn.slick) return;

  var responsive = function (desktop, tablet, phone, narrow) {
    return [
      { breakpoint: 1024, settings: tablet },
      { breakpoint: 600, settings: phone },
      { breakpoint: 480, settings: narrow }
    ];
  };

  var mobile = function (slidesToShow, rows, speed) {
    return {
      slidesToShow: slidesToShow,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      arrows: false,
      rows: rows,
      autoplay: true,
      autoplaySpeed: speed
    };
  };

  var init = function (selector, options) {
    $(selector).each(function () {
      var $slider = $(this);
      if ($slider.hasClass('slick-initialized')) {
        var slides = [];
        $slider.find('.slick-slide:not(.slick-cloned)').each(function () {
          var $content = $(this).children().first().children().first();
          if ($content.length) slides.push($content.children().clone());
        });
        $slider
          .removeClass('slick-initialized slick-slider slick-dotted')
          .removeAttr('style')
          .empty();
        slides.forEach(function ($content) {
          $slider.append($content);
        });
      }
      $slider.slick(options);
    });
  };

  $(function () {
    init('.recognised', {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      margin: 10,
      rows: 2,
      responsive: responsive(
        null,
        mobile(1, 1, 2000),
        mobile(1, 1, 2000),
        mobile(1, 2, 4000)
      )
    });

    init('.institutes', {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      margin: 10,
      rows: 1,
      responsive: responsive(
        null,
        mobile(2, 1, 2000),
        mobile(1, 1, 2000),
        mobile(1, 1, 4000)
      )
    });

    init('.jklogo', {
      dots: true,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      margin: 10,
      rows: 1,
      responsive: responsive(
        null,
        mobile(3, 1, 2000),
        mobile(2, 2, 2000),
        mobile(2, 2, 4000)
      )
    });

    init('.study', {
      dots: false,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      margin: 10,
      rows: 1,
      responsive: responsive(
        null,
        mobile(2, 1, 2000),
        mobile(2, 1, 2000),
        mobile(2, 1, 4000)
      )
    });

    init('.campus-life', {
      dots: true,
      infinite: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      rows: 1,
      responsive: responsive(
        null,
        mobile(1, 1, 2000),
        mobile(1, 1, 2000),
        mobile(1, 1, 4000)
      )
    });

    init('.student', {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      margin: 10,
      centerMode: true,
      centerPadding: '50px',
      rows: 1,
      responsive: responsive(
        null,
        mobile(2, 1, 2000),
        mobile(1, 1, 2000),
        mobile(1, 1, 4000)
      )
    });

    init('.Steps', {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      rows: 1,
      responsive: responsive(
        null,
        mobile(5, 1, 2000),
        mobile(3, 1, 2000),
        mobile(2, 1, 4000)
      )
    });

    init('.regular', {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      rows: 1,
      responsive: responsive(
        null,
        mobile(3, 1, 2000),
        mobile(2, 1, 2000),
        mobile(2, 1, 4000)
      )
    });

    var exchange = document.getElementById('jkblseven');
    if (exchange) {
      exchange.style.setProperty('display', 'flow-root', 'important');
      exchange.style.setProperty('overflow', 'visible', 'important');
      var exchangeTop = exchange.getBoundingClientRect().top;
      var exchangeBottom = exchangeTop;
      exchange.querySelectorAll('.study').forEach(function (slider) {
        exchangeBottom = Math.max(exchangeBottom, slider.getBoundingClientRect().bottom);
      });
      exchange.style.setProperty(
        'height',
        Math.ceil(exchangeBottom - exchangeTop + 40) + 'px',
        'important',
      );
    }
  });
}(window.jQuery));
