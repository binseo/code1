
$(document).ready(function(){
    $('.visual .popup .popup_wrap').slick({
        autoplay: true, //팝업 자동 실행
        autoplaySpeed: 6000, //팝업이 머무는 시간
        speed: 500, //팝업 전환 속도
        // fade: true,  //페이드 효과 적용
        dots: true, //하단 페이지 버튼 (true, false)
        arrows: true,  //다음, 이전팝업 (true, false)
        //pauseOnHover: true, //마우스호버시 일시정지
        //infinite: false, //무한반복
    });

    // $('.클래스명').slick('slickPause');  /* 일시정지 기능 */
    // $('.클래스명').slick('slickPlay');  /* 재생 기능 */
    $('.visual .btn_wrap .ctrl_stop').on('click', function(){
        console.log('일시정지 버튼 - 일시정지 버튼 숨김 / 재생버튼 나옴')
        $('.visual .popup .popup_wrap').slick('slickPause'); /* 일시정지 기능 */
        $(this).hide() //숨김
        $('.visual .btn_wrap .ctrl_play').show() //나타남
    })
    $('.visual .btn_wrap .ctrl_play').on('click', function(){
        console.log('재생 버튼 - 재생버튼 숨김 / 일시정지 버튼 나옴')
        $('.visual .popup .popup_wrap').slick('slickPlay'); /* 재생 기능 */
        $(this).hide() //숨김
        $('.visual .btn_wrap .ctrl_stop').show() //나타남
    })
    



    $('.biz .list .list_wrap').slick({
        autoplay: false, //팝업 자동 실행
        autoplaySpeed: 3000, //팝업이 머무는 시간
        speed: 500, //팝업 전환 속도
        dots: false, //하단 페이지 버튼 (true, false)
        arrows: false,  //다음, 이전팝업 (true, false)
        //pauseOnHover: true, //마우스호버시 일시정지
        //infinite: false, //무한반복
        //variableWidth: true, //넓이를 자유롭게 설정
        slidesToShow: 4, //한번에 보일 팝업 수           (//pc버전//)
        //slidesToScroll: 1, //한번 드래그에 움직이는 슬라이드 제한
        swipeToSlide: true, //드래그한만큼 슬라이드 움직이기
        //centerMode: true, //가운데정렬(가운데가 1번)
        responsive: [
            {
              breakpoint: 1024, //1300px 이하
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 375,
              settings: {
                slidesToShow: 1
              }
            },
        ]
    });
    




    $('.notice .list .list_wrap').slick({
        autoplay: false, //팝업 자동 실행
        autoplaySpeed: 3000, //팝업이 머무는 시간
        speed: 500, //팝업 전환 속도
        dots: false, //하단 페이지 버튼 (true, false)
        arrows: false,  //다음, 이전팝업 (true, false)
        //pauseOnHover: true, //마우스호버시 일시정지
        infinite: false, //무한반복
        variableWidth: true, //넓이를 자유롭게 설정
        slidesToShow: 3, //한번에 보일 팝업 수
        //slidesToScroll: 1, //한번 드래그에 움직이는 슬라이드 제한
        swipeToSlide: true, //드래그한만큼 슬라이드 움직이기
        //centerMode: true, //가운데정렬(가운데가 1번)
        responsive: [
            {
              breakpoint: 1300, //1300px 이하
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 1
              }
            },
        ]

    });


// var $slider = $('.visual .popup .popup_wrap');
// var $paging = $('.paging');
// var $current = $paging.find('.current');
// var $total = $paging.find('.total');
// var $bar = $paging.find('.bar');

// function updatePaging(slick, currentSlide) {
//   var slidesToShow = slick.options.slidesToShow || 1;
//   var totalSlides = slick.slideCount;

//   var totalPage = Math.ceil(totalSlides / slidesToShow);
//   var currentPage = Math.ceil((currentSlide + slidesToShow) / slidesToShow);

//   // 안전 처리
//   currentPage = Math.min(currentPage, totalPage);

//   var percent = (currentPage / totalPage) * 100;

//   $current.text(currentPage);
//   $total.text(totalPage);
//   $bar.css('width', percent + '%');
// }

// $slider.on('init', function (event, slick) {
//   updatePaging(slick, slick.currentSlide);
// });

// $slider.on('afterChange', function (event, slick, currentSlide) {
//   updatePaging(slick, currentSlide);
// });


// $slider.slick({
//   autoplay: false,
//   dots: true,
//   arrows: true,
//   variableWidth: true,
//   swipeToSlide: true,
//   infinite: false,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         variableWidth: false,
//         slidesToShow: 2
//       }
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         variableWidth: false,
//         slidesToShow: 1
//       }
//     }
//   ]
// });

// var $slider = $('.visual .popup .popup_wrap');
// var $paging = $('.paging');
// var $current = $paging.find('.current');
// var $total = $paging.find('.total');
// var $bar = $paging.find('.bar');

// function getSlidesToShow(slick) {
//   return slick.options.slidesToShow ||
//          slick.originalSettings.slidesToShow ||
//          1;
// }

// function updatePaging(slick, currentSlide) {
//   if (!slick) return;

//   var slidesToShow = getSlidesToShow(slick);
//   var totalSlides = slick.slideCount;

//   var totalPage = Math.ceil(totalSlides / slidesToShow);
//   var currentPage = Math.floor(currentSlide / slidesToShow) + 1;

//   currentPage = Math.max(1, Math.min(currentPage, totalPage));

//   var percent = (currentPage / totalPage) * 100;

//   $current.text(currentPage);
//   $total.text(totalPage);
//   $bar.css('width', percent + '%');
// }

// /* init / resize / first paint 모두 대응 */
// $slider.on('init setPosition afterChange', function (e, slick, currentSlide) {
//   updatePaging(slick, currentSlide || 0);
// });

// $slider.slick({
//   autoplay: false,
//   dots: true,
//   arrows: true,
//   variableWidth: true,
//   swipeToSlide: true,
//   infinite: false,
//   slidesToShow: 1, // 기본값 반드시 명시
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         variableWidth: false,
//         slidesToShow: 2
//       }
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         variableWidth: false,
//         slidesToShow: 1
//       }
//     }
//   ]
// });

var $slider = $('.visual .popup .popup_wrap');
var $paging = $('.paging');
var $current = $paging.find('.current');
var $total = $paging.find('.total');
var $bar = $paging.find('.bar');

function updatePaging(slick) {
  var totalSlides = slick.slideCount;

  // 실제 활성화된 첫 번째 슬라이드 index
  var activeIndex = slick.$slides
    .filter('.slick-active')
    .first()
    .data('slick-index');

  // fallback
  if (activeIndex === undefined) activeIndex = 0;

  var currentPage = activeIndex + 1;
  var totalPage = totalSlides;

  var percent = (currentPage / totalPage) * 100;

  $current.text(currentPage);
  $total.text(totalPage);
  $bar.css('width', percent + '%');
}

$slider.on('init setPosition afterChange', function (e, slick) {
  updatePaging(slick);
});

$slider.slick({
  autoplay: false,
  arrows: true,
  variableWidth: true,
  swipeToSlide: true,
  infinite: false
});


// $(function () {
//   var $slider = $('.bbs_photoslide .slide_list');
//   var $paging = $slider.closest('.photoslidebox').find('.paging');
//   var $current = $paging.find('.current');
//   var $total = $paging.find('.total');
//   var $bar = $paging.find('.bar');

//   function updatePaging(slick, currentSlide) {
//     var total = slick.slideCount;
//     var current = (currentSlide || 0) + 1;
//     var percent = (current / total) * 100;

//     $current.text(current);
//     $total.text(total);
//     $bar.css('width', percent + '%');
//   }

//   $slider.on('init afterChange', function (e, slick, currentSlide) {
//     updatePaging(slick, currentSlide);
//   });

//   //  slick 초기화
//   $slider.slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     infinite: true,
//     arrows: true,
//     dots: true
//   });
// });






})