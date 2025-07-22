$(document).ready(function(){
    const myFullpage = new fullpage('#fullpage', {  /* html에서 페이지 전체를 감싸는 요소 */
		
		anchors: ['home', 'profile', 'project01', 'project02', 'project03', 'contact'], /* href="#link1" 이렇게 코딩하면 해당 링크명으로 이동 */
		menu: '.gnb',
		autoScrolling:true, /* 한페이지씩 스크롤 */
		scrollHorizontally: true,

		verticalCentered: true, /* 컨텐츠 요소 위아래 가운데 */
		
		scrollOverflow: false, /* 컨텐츠가 넘쳐도 스크롤 금지 */

		afterLoad: function(origin, destination, direction, trigger){
			if(destination.index == 0){
			  $('header .gnb ul li').removeClass('active')
			  $('header .gnb ul li:nth-child(1)').addClass('active')
			}else if(destination.index == 1){
			  $('header .gnb ul li').removeClass('active')
			  $('header .gnb ul li:nth-child(2)').addClass('active')
			}else if(destination.index == 2){
			  $('header .gnb ul li').removeClass('active')
			  $('header .gnb ul li:nth-child(3)').addClass('active')
			}else if(destination.index == 3){
				$('header .gnb ul li').removeClass('active')
				$('header .gnb ul li:nth-child(4)').addClass('active')
			}else if(destination.index == 4){
				$('header .gnb ul li').removeClass('active')
				$('header .gnb ul li:nth-child(5)').addClass('active')
			}else if(destination.index == 5){
				$('header .gnb ul li').removeClass('active')
				$('header .gnb ul li:nth-child(6)').addClass('active')
			}
			  
		},
        
	});// fullpage
	
}) //$(document).ready




