
$(document).ready(function () {
    //btn1
    $(".hover-image-btn1").hover(
      function() {
        // 鼠標懸停時，將圖像的src屬性更改為img2.png
        $(this).attr("src", "./images/btn2.png");
      },
      function() {
        // 鼠標離開時，將圖像的src屬性恢復為img1.png
        $(this).attr("src", "./images/btn.png");
      }
    );

    //btn1
    $(".hover-image-dog01").hover(
      function() {
        // 鼠標懸停時，將圖像的src屬性更改為img2.png
        $(this).attr("src", "./images/dog01-hover-1.png");
      },
      function() {
        // 鼠標離開時，將圖像的src屬性恢復為img1.png
        $(this).attr("src", "./images/dog01.png");
      }
    );

    //btn1
    $(".hover-image-dog02").hover(
        function() {
          // 鼠標懸停時，將圖像的src屬性更改為img2.png
          $(this).attr("src", "./images/dog01-hover.png");
        },
        function() {
          // 鼠標離開時，將圖像的src屬性恢復為img1.png
          $(this).attr("src", "./images/04.png");
        }
      );
    //dog02
    $(".hover-image-dog03").hover(
     function() {
       // 鼠標懸停時，將圖像的src屬性更改為img2.png
       $(this).attr("src", "./images/dog01-hover-2.png");
     },
     function() {
       // 鼠標離開時，將圖像的src屬性恢復為img1.png
       $(this).attr("src", "./images/08.png");
     }
    );






  });
