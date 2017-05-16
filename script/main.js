 var ua = navigator.userAgent;
   if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0 || ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
       // スマートフォン/タブレット用コード
       $(function(){
          $(function(){
             $('#global_nav').click(function(){
                 $(this).addClass('motion');
             });
             $('.container').click(function(){
                 $("#global_nav").removeClass("motion");
             });
             $('.global_nav_item').click(function(){
                 $("#global_nav").removeClass("motion");
             });
          });
           // スクロールの速度
           var speed = 600; // ミリ秒
          //ページ内スクロール
          $(".scroll-to-header").click(function () {
              var i = $(".scroll-to-header").index(this)
              var p = $("#header").eq(i).offset().top;
              $('html,body').animate({ scrollTop: p }, speed, 'easeOutExpo');
              return false;
          });
          $(".scroll-to-about").click(function () {
              var i = $(".scroll-to-about").index(this)
              var p = $("#about").eq(i).offset().top;
              $('html,body').animate({ scrollTop: p }, speed, 'easeOutExpo');
              return false;
          });
          $(".scroll-to-works").click(function () {
              var i = $(".scroll-to-works").index(this)
              var p = $("#works").eq(i).offset().top;
              $('html,body').animate({ scrollTop: p }, speed, 'easeOutExpo');
              return false;
          });
          $(".scroll-to-contact").click(function () {
              var i = $(".scroll-to-contact").index(this)
              var p = $("#contact").eq(i).offset().top;
              $('html,body').animate({ scrollTop: p }, speed, 'easeOutExpo');
              return false;
          });
       });

   } else {
       // PC用コード
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
}
