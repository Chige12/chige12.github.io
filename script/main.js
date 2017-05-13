$(function(){
    $('#global_nav').hover(function(){
        $(this).addClass('motion');
    },function(){
        $(this).removeClass('motion');
    });
    $('.global_nav_item').click(function(){
        $("#global_nav").removeClass("motion");
    });
});

$(function () {
 var ua = navigator.userAgent;
 if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
     // スマートフォン用コード
         $.scrollify.disable();
         });
 } else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
     // タブレット用コード
         $.scrollify.disable();
         });
 } else {
     // PC用コード
         $.scrollify({
           section : ".container",
           sectionName : "section-name",
           easing: "easeOutExpo",
           scrollSpeed: 600,
           offset : 0,
           scrollbars: true,
           before:function() {},
           after:function() {}
         });
      }
  })

  $(".scroll-to-header").click(function(e) {
  e.preventDefault();
  $.scrollify.move("#header");
  });
  $(".scroll-to-about").click(function(e) {
  e.preventDefault();
  $.scrollify.move("#about");
  });
  $(".scroll-to-history").click(function(e) {
  e.preventDefault();
  $.scrollify.move("#history");
  });
  $(".scroll-to-works").click(function(e) {
  e.preventDefault();
  $.scrollify.move("#works");
  });
  $(".scroll-to-contact").click(function(e) {
  e.preventDefault();
  $.scrollify.move("#contact");
  });
