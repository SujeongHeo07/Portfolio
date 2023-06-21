$(document).ready(function() {
    var windowHeight = $(window).height();
    var sections = $(".section");
    var targetPosition = [];

    sections.each(function(index) {
        var sectionOffset = $(this).offset().top;
        targetPosition.push(sectionOffset - windowHeight);
    });
    
    // 텍스트 애니메이션 콘텐츠
    var textContent = $(".textHideAni");
    
    // 탭메뉴 위치에 올 때 클래스 변화
    $(window).scroll(function() {
        // portfolio
        if ($(this).scrollTop() >= Math.ceil($("#section_1").offset().top)) {
            $(".section").removeClass("active");
            $("#section_1").addClass("active");
            
            $(".nav").removeClass("active");
            $(".nav_1").addClass("active");
        }
        
        // about
        if ($(this).scrollTop() >= Math.ceil($("#section_2").offset().top - 150)) {
            $(".section").removeClass("active");
            $("#section_2").addClass("active");
            
            $(".nav").removeClass("active");
            $(".nav_2").addClass("active");
            
        }
        
        // project
        if ($(this).scrollTop() >= Math.ceil($("#section_3").offset().top - 150)) {
            $(".section").removeClass("active");
            $("#section_3").addClass("active");
            
            $(".nav").removeClass("active");
            $(".nav_3").addClass("active");
            
        }
        
        // contact
        if ($(this).scrollTop() >= Math.ceil($("#section_4").offset().top - 100)) {
            $(".section").removeClass("active");
            $("#section_4").addClass("active");
            
            $(".nav").removeClass("active");
            $(".nav_4").addClass("active");
            $(".nav").css("color", "#fff");
            $(".header .logo a").css("color","#fff");
            $(".top_btn").show();
            
        } else {
            $(".nav").css("color", "var(--black-color)");
            $(".header .logo a").css("color","var(--black-color)");
            $(".top_btn").hide();
        }
        
        // 스크롤 애니메이션
        var currentPosition = $(window).scrollTop();

        textContent.each(function() {
            var $this = $(this);
            var sectionIndex = $this.closest(".section").index();

            if (currentPosition >= targetPosition[sectionIndex]) {
               $this.addClass("active");
            } else {
               $this.removeClass("active");
            }
            
        });
        
    });
    
    // cursor
    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
		t.style.top = n.clientY + "px", 
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px", 
		i.style.left = n.clientX + "px", 
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".cursor_hover"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }        
    
    
});

// email copy
function emailCopy() {
    window.navigator.clipboard.writeText("chomal07@naver.com").then(() => {
        alert("복사 되었습니다.");
    });
}

// 텍스트 애니메이션
function showText() {
    var delay = 400;
    $('.textHideAni').find(".showText").each(function(index) {
        var textContent = $(this);
        var textIndex = index + 1;

        setTimeout(function() {
            textContent.animate({top: "0",}, 300);
        }, delay * textIndex);

    });
}

// 상단 스크롤 이동
function topScroll() {
    $("html, body").animate({scrollTop:0}, '500');
}

// 프로젝트
function projectView(obj, no) {
    // 프로젝트 상세 보기
    $(".project_view_area").find(".project_view").removeClass("on");
    $("#project_" + no).addClass("on");
    
    // 프로젝트 리스트
    $(".project_li").find(".num").removeClass("now");
    $(obj).find(".num").addClass("now");
}





