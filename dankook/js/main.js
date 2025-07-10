$(document).ready(function(){
    // console.log('????')
    /************************************ notice 탭 기능 : 시작 ***********************************
     * 1. 클릭한 li에서 data-content 값을 가져와서
     *   ==> tab_item 중에 해당 값이 id인 요소를 찾아서 나타나게 해야함 (다른 요소는 숨김)
     * 2. 클릭한 li에만 active클래스 줌
     * 3. 클릭한 li안에 있는 span에 선택됨이라고 글자 써줌 (다른 li에 있는 건 삭제)
     * 4. 클릭한 li 속성 aria-selected 값을 true로 변경 (다른 li는 모두 false)
    */

    let notice_content // 클릭한 메뉴의 이름(id)
    $('.notice .group01 .notice_btn ul li').on('click', function(){
        // console.log('누름!!!!!!!!!!!!!')
        // $(this).hasClass('active') 확인? 맞는 지 has
        if($(this).hasClass('active') == false){
            // console.log('선택안된 메뉴')
            //1번 시작
            notice_content = $(this).attr('data-content') // attr --> 속성 값을 가지고 오는 것
            // console.log(find_content)
            $('.notice .group01 .notice_box .tab_item').removeClass('active')
            $('.notice .group01 .notice_box').find('#'+notice_content).addClass('active') 
            // find는 자식을 선택하는 것 me 아님 
            // 1번 끝

            // 2번 시작
            $('.notice .group01 .notice_btn ul li').removeClass('active')
            $(this).addClass('active')
            // 2번 끝
            
            //3번 시작
            $('.notice .group01 .notice_btn ul li button span').text('')
            $(this).find('span').text('선택됨')
            //3번 끝

            $('.notice .group01 .notice_btn ul li').attr('aria-selected', 'false') // 속성 값을 변경하는 방법
            $(this).attr('aria-selected', 'true')
        }
    })

    /************************************ notice 탭 기능 : 끝 ************************************/

    
    /************************************ calendar 탭 기능 : 시작 ***********************************
     * 1. 클릭한 li에서 data-content 값을 가져와서
     *   ==> tab_item 중에 해당 값이 id인 요소를 찾아서 나타나게 해야함 (다른 요소는 숨김)
     * 2. 클릭한 li에만 active클래스 줌
     * 3. 클릭한 li안에 있는 span에 선택됨이라고 글자 써줌 (다른 li에 있는 건 삭제)
     * 4. 클릭한 li 속성 aria-selected 값을 true로 변경 (다른 li는 모두 false)
    */

    let calendar_content // 클릭한 메뉴의 이름(id)
    $('.notice .group02 .calendar .calendar_btn ul li').on('click', function(){
        // console.log('누름!!!!!!!!!!!!!')
        // $(this).hasClass('active') 확인? 맞는 지 has
        if($(this).hasClass('active') == false){
            // console.log('선택안된 메뉴')
            //1번 시작
            calendar_content = $(this).attr('data-content') // attr --> 속성 값을 가지고 오는 것
            // console.log(find_content)
            $('.notice .group02 .calendar_box .tab_item').removeClass('active')
            $('.notice .group02 .calendar_box').find('#'+calendar_content).addClass('active') 
            // find는 자식을 선택하는 것 me 아님 
            // 1번 끝

            // 2번 시작
            $('.notice .group02 .calendar .calendar_btn ul li').removeClass('active')
            $(this).addClass('active')
            // 2번 끝
            
            //3번 시작
            $('.notice .group02 .calendar .calendar_btn ul li button span').text('')
            $(this).find('span').text('선택됨')
            //3번 끝

            $('.notice .group02 .calendar .calendar_btn ul li').attr('aria-selected', 'false') // 속성 값을 변경하는 방법
            $(this).attr('aria-selected', 'true')
        }
    })

    /************************************ calendar 탭 기능 : 끝 ************************************/

}) //$(document).ready