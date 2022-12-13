$( document ).ready( function() {
    // 처음에는 안보이게 숨기기
    //클릭했을 때 스르륵 올라가도록 애니메이션 효과
    $(".top").click(function(){
      $('body,html').animate({
        scrollTop:0 
      },400 );
      return false;
    });
  });

  /* */

