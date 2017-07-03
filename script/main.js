
/**
 * メーラーを起動してメールを送信する
 */

window.onload = function() {

    /**
   * メールに記載する情報を格納する変数
   */
    var address, subject, body;
    var sendmail = document.getElementById('mail');

    sendmail.onclick = function() {

        // メールに記載したい情報をhiddenタグから取得
        address = 'tige1215.technic@gmail.com';
        subject = '【コンタクトページのリンクより送信】';
        body = '以下に内容をどうぞ。';

        location.href = 'mailto:' + address + '?subject=' + subject + '&body=' + body;
    };

};

document.getElementById('video_play').addEventListener('click', function(e) {
      $('#video_popup_wrapper').removeClass('display_none');
    e.preventDefault();
});
document.getElementById('video_popup_wrapper').addEventListener('click', function(e) {
    console.log("click!");
      $('#video_popup_wrapper').addClass('display_none');
    e.preventDefault();
});


 var ua = navigator.userAgent;
   if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0 || ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
       // スマートフォン/タブレット用コード
       $(function(){
          $(function(){
             $('#global_nav').click(function(){
                 $(this).addClass('motion');
             });
             $('.global_nav_item').click(function(){
                 $("#global_nav").removeClass("motion");
             });
             $('.container').click(function(){
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
          $(".scroll-to-skill").click(function () {
              var i = $(".scroll-to-skill").index(this)
              var p = $("#skill").eq(i).offset().top;
              $('html,body').animate({ scrollTop: p }, speed, 'easeOutExpo');
              return false;
          });
          $(".scroll-to-history").click(function () {
              var i = $(".scroll-to-history").index(this)
              var p = $("#history").eq(i).offset().top;
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
      $(".scroll-to-skill").click(function(e) {
      e.preventDefault();
      $.scrollify.move("#skill");
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
