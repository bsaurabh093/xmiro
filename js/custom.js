

        // Responsive Toggle End
      $(document).ready(function () {
          $(".responsive-menu").click(function () {
              $(".menu-bar").toggleClass("show");
          })
      });
      function cross(x) {
      x.classList.toggle("change");
      }
      function sub(){
          let submenu = document.getElementById("drop-list")
          submenu.classList.toggle("menu-show");
      }


    // video script
const playBtn = document.querySelector('.play_btn')
const pauseBtn = document.querySelector('.pause_btn')
const video = document.querySelector('.video')
const btnWrap = document.querySelector('.btn');
const text = document.querySelector('.text');

playBtn.addEventListener('click',function(){
    video.play();
    playBtn.style.display="none";
    text.style.display="none";
})




var counters = $(".number");
  var countersQuantity = counters.length;
  var counter = [];

  for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
  }

  var count = function(start, value, id) {
    var localStart = start;
    setInterval(function() {
      if (localStart < value) {
        localStart++;
        counters[id].innerHTML = localStart;
      }
    }, 40);
  }

  for (j = 0; j < countersQuantity; j++) {
    count(0, counter[j], j);
  }
  // bottom to top scroll
    $(document).ready(function () {
    var scrollTop = $(".scrollTop");
    $(window).scroll(function () {
        var topPos = $(this).scrollTop();
        if (topPos > 100) {
        $(scrollTop).css("opacity", "1");

        } else {
        $(scrollTop).css("opacity", "0");
        }
    });
    $(scrollTop).click(function () {
        $('html, body').animate({
        scrollTop: 0
        }, 800);
        return false;
    });
    });


