$(document).ready(function(){
    // console.log('???????')
    /* ************************************** visual_swiper : 시작 ************************************ */

    const visual_swiper = new Swiper('.visual .swiper', {
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 9900,
            disableOnInteraction: true,
        },
        pagination: {
            el: '.visual .paging',
            type: 'fraction',
            formatFractionCurrent: n => ('0' + n).slice(-2),
            formatFractionTotal: n => ('0' + n).slice(-2),
        },
        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .ctrl_wrap button.btn_next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .ctrl_wrap button.btn_prev',  
        },
        on: {
            slideChangeTransitionStart: function () {
            resetProgressAnimation();
          },
        }
    });
      
    // 처음 로딩 시 1회 시작
    resetProgressAnimation();
    
    function resetProgressAnimation() {
        const progress = document.querySelector('.progress-bar .progress');
        if (!progress) return;

        progress.style.animation = 'none';
        progress.offsetHeight; // 강제 리플로우
        progress.style.animation = null;
    }

     $('.visual .ctrl_wrap button.btn_stop').on('click', function(){
        // console.log('정지버튼 클릭')
        visual_swiper.autoplay.stop();  /* 일시정지 기능 */
        $(this).hide()
        $('.visual .ctrl_wrap button.btn_play').show()
        document.querySelector('.progress').style.animationPlayState = 'paused'; // progress 정지
    })

    $('.visual .ctrl_wrap button.btn_play').on('click', function(){
        // console.log('재생 버튼')
        visual_swiper.autoplay.start();  /* 재생 기능 */
        $(this).hide()
        $('.visual .ctrl_wrap button.btn_stop').show()
        resetProgressAnimation(); // progress 다시 재생
    })

    /* ************************************ visual_swiper : 끝 *********************************** */
    
});

    
    
