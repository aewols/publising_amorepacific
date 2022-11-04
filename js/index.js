$(document).ready(function(){


    //팝업창 띄우기 함수생성
    function openPopup(){
        $("#popup").fadeIn(function(){ //검정배경 나타남
            $("#popup .body").css("display","block"); //팝업창내용 보여짐
        });
    }
    $(document).ready(function(){
        $(".btn_close").click(function(){//close눌렀을때
            $("#popup").hide(); //popup 안보이게 함
        });
    });	 


    //스크롤바가 이동될 때마다 스크롤위치값 나타내기
    $(window).scroll(function(){
        $("#txt1").text($(this).scrollTop());
    });




    //탑버튼________________________________________

    $(".top_btn").hide();  //탑버튼 숨기기

    //스크롤이 350이상일때 TOP버튼 보이게 하고 스크롤을 올리면 다시 숨김
    $(window).scroll(function(){

        if($(this).scrollTop()>350){
            $(".top_btn").fadeIn();
        }else{
            $(".top_btn").fadeOut();
        }

    });


    //TOP버튼 클릭시 맨위로
    $(".top_btn").click(function(){
        $("body,html").animate({scrollTop:"0px"},700);
        return false;
    });




    //오른쪽 스크롤버튼______________________

    $("#scroll_btn").hide();  //스크롤시 나오는 버튼 숨김

    //스크롤이 600이상일때 오른쪽퀵버튼 보이게 하고 스크롤을 올리면 다시 숨김
    $(window).scroll(function(){

        if($(this).scrollTop()>600){
            $("#scroll_btn").fadeIn();
        }else{
            $("#scroll_btn").fadeOut();
        }

    });

    //스크롤에 따라 스크롤버튼이 해당하는 버튼 오버가 되게 함...
    $(window).scroll(function(){
        
        //scroll 600~1299
        if($(this).scrollTop()>=600 && $(this).scrollTop()<1299){
            $("#scroll_btn ul .scb1").css({"width":"180px","border-radius":"25px"});
            $("#scroll_btn ul .scb1 a .scroll_hover").css({"display":"inline-block"});
            $(".news_small .title .line").css({"width":"250px","opacity":"1"});
            $(".news_small .title h3").css({"color":"#fff"});
        }else{
            $("#scroll_btn ul .scb1").css({"width":"35px","border-radius":"50%"});
            $("#scroll_btn ul .scb1 a .scroll_hover").css({"display":"none"});
            $(".news_small .title .line").css({"width":"0px","opacity":"0"});
            $(".news_small .title h3").css({"color":"#000"});
        }


        //scroll 1300~1999
        if($(this).scrollTop()>=1300 && $(this).scrollTop()<1999){
            $("#scroll_btn ul .scb2").css({"width":"180px","border-radius":"25px"});
            $("#scroll_btn ul .scb2 a .scroll_hover").css({"display":"inline-block"});
            $(".tab-header .title .line").css({"width":"250px","opacity":"1"});
            $(".tab-header .title h3").css({"color":"#fff"});
        }else{
            $("#scroll_btn ul .scb2").css({"width":"35px","border-radius":"50%"});
            $("#scroll_btn ul .scb2 a .scroll_hover").css({"display":"none"});
            $(".tab-header .title .line").css({"width":"0px","opacity":"0"});
            $(".tab-header .title h3").css({"color":"#000"});
        }


        //scroll 2000~2399
        if($(this).scrollTop()>=2000 && $(this).scrollTop()<2399){
            $("#scroll_btn ul .scb3").css({"width":"180px","border-radius":"25px"});
            $("#scroll_btn ul .scb3 a .scroll_hover").css({"display":"inline-block"});
            $("#brands .title .line").css({"width":"250px","opacity":"1"});
            $("#brands .title h3").css({"color":"#fff"});
        }else{
            $("#scroll_btn ul .scb3").css({"width":"35px","border-radius":"50%"});
            $("#scroll_btn ul .scb3 a .scroll_hover").css({"display":"none"});
            $("#brands .title .line").css({"width":"0px","opacity":"0"});
            $("#brands .title h3").css({"color":"#000"});
        }

    });


    //오른쪽퀵버튼 보였을때 클릭시 콘텐츠의 위치로 이동
    $("#scroll_btn ul .scb1").click(function(){
        $("body,html").animate({scrollTop:"810px"},700);
    });
    $("#scroll_btn ul .scb2").click(function(){
        $("body,html").animate({scrollTop:"1560px"},700);
    });
    $("#scroll_btn ul .scb3").click(function(){
        $("body,html").animate({scrollTop:"2310px"},700);
    });

        


    //header________________________________________

    //처음 보이는 탑메뉴
    $(".gnbMenu").mouseenter(function(){  //메뉴영역에 오버시
		$(this).find("li>.smenu").stop().slideDown();
		$(".bg_box").stop().slideDown();
	});

	$("nav").mouseleave(function(){  //헤더영역을 나갔을때
		$(this).find("li>.smenu").stop().slideUp();
		$(".bg_box").stop().slideUp();
	});


    //스크롤 내렸을때 보이는 탑메뉴
    $(".gnbMenu_fix").mouseenter(function(){
        $(this).find("li>.smenu_fix").stop().slideDown();
        $(".bg_box_fix").stop().slideDown();
    });

    $(".gnbMenu_fix").mouseleave(function(){
        $(this).find("li>.smenu_fix").stop().slideUp();
        $(".bg_box_fix").stop().slideUp();
    });


    //스크롤 내렸을때 보이는 탑메뉴2
    $(window).scroll(function(){
        
        if($(this).scrollTop()>299){
            $(".gnb_fix").css({"margin-top":"0px","transition":"all 0.4s"});
        }else{
            $(".gnb_fix").css({"margin-top":"-140px","transition":"all 0.4s"});
        }

    });




    //lang//////////////
    cc=true;
    $(".lang").hover(function(){
        
        if(cc){
            $(this).css({"width":"155px"});
            $(".lang2").css({"opacity":"1"});
            $(".lang1").css({/* "color":"#005295", */"left":"12px"});
            cc=false;
        }else{
            $(this).css({"width":"36px"});
            $(".lang2").css({"opacity":"0"});
            $(".lang1").css({/* "color":"#000", */"left":"7px"});
            cc=true;
        }

    });




    //search_bar//////////////
    bb=true;
    $("button").click(function(){
        
        if(bb){
            $(".search_bar").css({"width":"195px"});
            $("input").css({"opacity":"1"});
            $(this).find("span").css({"color":"#005295"});
            $(this).css({"right":"10px"});
            bb=false;
        }else{
            $(".search_bar").css({"width":"36px"});
            $("input").css({"opacity":"0"});
            $(this).find("span").css({"color":"#000"});
            $(this).css({"right":"5px"});
            bb=true;
        }

    });






    //section________________________________________


    $(window).scroll(function(){
        if($(this).scrollTop()>50){
            if($(this).scrollTop()>500){
                $("#visual dl dt").css({"filter":"grayscale(1)","transition":"all 0.7s"});
            }else{
                $("#visual dl dt").css({"filter":"grayscale(0)","transition":"all 0.7s"});
            }
        }else{
            $("#visual dl dt").css({"filter":"grayscale(1)","transition":"all 0.7s"});
        }
    });

    $(window).scroll(function(){
        if($(this).scrollTop()>500){
            if($(this).scrollTop()>1200){
                $(".news_small>div").css({"filter":"grayscale(1)","transition":"all 0.7s"});
            }else{
                $(".news_small>div").css({"filter":"grayscale(0)","transition":"all 0.7s"});
            }
        }else{
            $(".news_small>div").css({"filter":"grayscale(1)","transition":"all 0.7s"});
        }
    });

    $(window).scroll(function(){
        if($(this).scrollTop()>1300){
            if($(this).scrollTop()>1900){
                $(".content_right ul li").css({"filter":"grayscale(1)","transition":"all 0.7s"});
            }else{
                $(".content_right ul li").css({"filter":"grayscale(0)","transition":"all 0.7s"});
            }
        }else{
            $(".content_right ul li").css({"filter":"grayscale(1)","transition":"all 0.7s"});
        }
    });
    
    $(window).scroll(function(){
        if($(this).scrollTop()>1900){
            $(".bimg").css({"filter":"grayscale(0)","transition":"all 0.7s"});
        }else{
            $(".bimg").css({"filter":"grayscale(1)","transition":"all 0.7s"});
        }
    });

    //첫번째 dd를 제외하고 나머지는 보이지않게 할 경우
    $("dd:not(:first)").css("display","none");
    //첫번째 탭메뉴 활성화
    $("dt:first").addClass("selected");
    

    $("dl dt").click(function(){

        $("dd").hide("slow");  //현재 열려있는 dd 안보이게 함
        $(this).find("+dd").show("slow");  //선택한 dt의 바로 다음 dd 보이게 함
        $("dt").removeClass("selected");  //기존 선택된 탭메뉴 제거
        $(this).addClass("selected");  //새로 선택된 탭메뉴 추가

    });

    //첫번째 dd를 제외하고 나머지는 보이지않게 할 경우
    $("dl .vi_tab2 video").css("display","none");
    $("dl .vi_tab2 video").css("display","none");
    //첫번째 탭메뉴 활성화
    $("dl .vi_tab1  video").show();

    // 탭메뉴 dt를 클릭시 바뀌는 dl의 전체배경이미지
    $("dl .vi_tab1").click(function(){
		$(this).find("video").fadeIn(2000);
        $("dl .vi_tab2 video").fadeOut(fast);
        $("dl .vi_tab3 video").fadeOut(fast);
	});
    $("dl .vi_tab2").click(function(){
		$(this).find("video").fadeIn(2000);
        $("dl .vi_tab1 video").fadeOut(fast);
        $("dl .vi_tab3 video").fadeOut(fast);
	});
    $("dl .vi_tab3").click(function(){
		$(this).find("video").fadeIn(2000);
        $("dl .vi_tab1 video").fadeOut(fast);
        $("dl .vi_tab2 video").fadeOut(fast);
	});


    $(".tab>li").click(function(){

        val=$(this).index();
        num=+70*val; //세로폭 70px씩 증가됨

        $(".tab-header .tab-highlight").animate({top:num});
        $(".tab li a").css("color","#000");  //탭의 기존 글자색
        $(this).find(">a").css("color","#fff");  //선택된 탭의 글자색


        $(".panel>li").hide();  //기존의 보여진 내용 숨기기
        $($(this).find("a").attr("href")).fadeIn();  //새로 선택된 내용 href 연결된 내용 보여주기
    });




    //자동으로 슬라이드 함수생성
    function slideauto(){

        $(".brands_img>ul").stop(true,true).animate({marginLeft:"-=300px"},1000,function(){  //"-=255px" > 대입연산자 : 누적되어 연산됨
            $(".brands_img>ul>li:first-child").appendTo(".brands_img>ul");  //첫번째 이미지 맨뒤로 이동
            $(this).css({marginLeft:"0px"});  //최종목적지
        });

    }
    auto=setInterval(slideauto,4000);

    //마우스를 올리면 슬라이드자동함수 멈추고, 마우스를 내리면 다시 자동함수 실행...
    $(".brands_img").hover(function(){
        clearInterval(auto);
    }, function(){
        auto=setInterval(slideauto,4000)
    });


    //다음보기
    $(".brand_btn .brand_right").click(function(){

        clearInterval(auto);

        $(".brands_img>ul").stop(true,true).animate({marginLeft:"-=300px"},1000,function(){  //"-=255px" > 대입연산자 : 누적되어 연산됨
            $(".brands_img>ul>li:first-child").appendTo(".brands_img>ul");  //첫번째 이미지 맨뒤로 이동
            $(this).css({marginLeft:"0px"});  //최종목적지
        });

        auto=setInterval(slideauto,4000);

    });


    //이전보기
    $(".brand_btn .brand_left").click(function(){

        clearInterval(auto);

        $(".brands_img>ul").stop(true,true).animate({marginLeft:"+=300px"},1000,function(){  //"-=255px" > 대입연산자 : 누적되어 연산됨
            $(".brands_img>ul>li:last-child").prependTo(".brands_img>ul");  //첫번째 이미지 맨뒤로 이동
            $(this).css({marginLeft:"0px"});  //최종목적지
        });

        auto=setInterval(slideauto,4000);

    });






    // footer________________________________________


    $(".footmenu1>h4").click(function(){
        $(this).find("span").toggleClass("arrow");
        $(".fbox1").stop(true,true).slideToggle();
    });
    

    $(".footmenu2>h4").click(function(){
        $(this).find("span").toggleClass("arrow");
        $(".fbox2").stop(true,true).slideToggle();
    });
        







    // sub________________________________________
    
    //서브 페이지 비주얼 상단 현재위치 메뉴
    $(".sub_title>a").click(function(){
        $(this).find("span").toggleClass("marrow");
        $(".sub").stop(true,true).slideToggle();
    });


    //Our Story///////////////////

        
    $(window).scroll(function(){
        if($(this).scrollTop()>200){ 
            if($(this).scrollTop()>300){  
                if($(this).scrollTop()>400){  
                    if($(this).scrollTop()>500){
                        if($(this).scrollTop()>600){
                            if($(this).scrollTop()>700){
                                $(".os_tet1 p").css({"top":"50px","transition":"all 0.7s"});
                            }else{
                                $(".os_tet1 p").css({"top":"100px","transition":"all 0.7s"});
                            }
                        }else{
                            $(".os_tet1 p").css({"top":"150px","transition":"all 0.7s"});
                        }
                    }else{
                        $(".os_tet1 p").css({"top":"200px","transition":"all 0.7s"});
                    }   
                }else{
                    $(".os_tet1 p").css({"top":"250px","transition":"all 0.7s"});
                } 
            }else{
                $(".os_tet1 p").css({"top":"300px","transition":"all 0.7s"});
            } 
        }else{
            $(".os_tet1 p").css({"top":"350px","transition":"all 0.7s"});
        } 

        if($(this).scrollTop()>950){ 
            if($(this).scrollTop()>1050){  
                if($(this).scrollTop()>1150){  
                    if($(this).scrollTop()>1250){
                        if($(this).scrollTop()>1350){
                            if($(this).scrollTop()>1450){
                                $(".os_tet2 p").css({"top":"50px","transition":"all 0.7s"});
                            }else{
                                $(".os_tet2 p").css({"top":"100px","transition":"all 0.7s"});
                            }
                        }else{
                            $(".os_tet2 p").css({"top":"150px","transition":"all 0.7s"});
                        }
                    }else{
                        $(".os_tet2 p").css({"top":"200px","transition":"all 0.7s"});
                    }   
                }else{
                    $(".os_tet2 p").css({"top":"250px","transition":"all 0.7s"});
                } 
            }else{
                $(".os_tet2 p").css({"top":"300px","transition":"all 0.7s"});
            } 
        }else{
            $(".os_tet2 p").css({"top":"350px","transition":"all 0.7s"});
        } 

        if($(this).scrollTop()>1600){ 
            if($(this).scrollTop()>1700){  
                if($(this).scrollTop()>1800){  
                    if($(this).scrollTop()>1900){
                        if($(this).scrollTop()>2000){
                            if($(this).scrollTop()>2100){
                                $(".os_tet3 p").css({"top":"50px","transition":"all 0.7s"});
                            }else{
                                $(".os_tet3 p").css({"top":"100px","transition":"all 0.7s"});
                            }
                        }else{
                            $(".os_tet3 p").css({"top":"150px","transition":"all 0.7s"});
                        }
                    }else{
                        $(".os_tet3 p").css({"top":"200px","transition":"all 0.7s"});
                    }   
                }else{
                    $(".os_tet3 p").css({"top":"250px","transition":"all 0.7s"});
                } 
            }else{
                $(".os_tet3 p").css({"top":"300px","transition":"all 0.7s"});
            } 
        }else{
            $(".os_tet3 p").css({"top":"350px","transition":"all 0.7s"});
        } 


        if($(this).scrollTop()>549){
            $(".sc1 .light").css({"right":"200px","top":"-200px","transition":"all 0.7s"});
        }else{
            $(".sc1 .light").css({"right":"-500px","top":"500px","transition":"all 0.7s"});
        }

        if($(this).scrollTop()>1299){
            $(".sc2 .light").css({"left":"0px","top":"-100px","transition":"all 0.7s"});
        }else{
            $(".sc2 .light").css({"left":"700px","top":"600px","transition":"all 0.7s"});
        }

        if($(this).scrollTop()>1999){
            $(".sc3 .light").css({"right":"200px","top":"-200px","transition":"all 0.7s"});
        }else{
            $(".sc3 .light").css({"right":"-500px","top":"500px","transition":"all 0.7s"});
        }
    });






    //Our Values///////////////////

    var target1=$(".ov1"),
        targetContent=target1.find(".ov_img1");

    $(window).scroll(function(){

        if($(this).scrollTop()>=749){
            target1.addClass("ovactive");
            if($(this).scrollTop()>=1354){
                target1.removeClass("ovactive");
                target1.css({paddingTop:"599px",paddingBottom:0})
            }
        }else{
            target1.removeClass("ovactive");
            target1.css({paddingTop:0,paddingBottom:"600px"})
        }

        if($(this).scrollTop()>899){
            if($(this).scrollTop()>1049){
                $(".ov_img1 h5").css({"margin-top":"-600px","transition":"all 1s"});
            }else{
                $(".ov_img1 h5").css({"margin-top":"-170px","transition":"all 1s"});
            }
        }else{
            $(".ov_img1 h5").css({"margin-top":"230px","transition":"all 1s"});
        }
    });




    var target2=$(".ov2"),
        targetContent=target2.find(".ov_img2");

    $(window).scroll(function(){

        if($(this).scrollTop()>=2099){
            target2.addClass("ovactive");
            if($(this).scrollTop()>=2704){
                target2.removeClass("ovactive");
                target2.css({paddingTop:"599px",paddingBottom:0})
            }
        }else{
            target2.removeClass("ovactive");
            target2.css({paddingTop:0,paddingBottom:"600px"})
        }

        if($(this).scrollTop()>2249){
            if($(this).scrollTop()>2399){
                $(".ov_img2 h5").css({"margin-top":"-600px","transition":"all 1s"});
            }else{
                $(".ov_img2 h5").css({"margin-top":"-170px","transition":"all 1s"});
            }
        }else{
            $(".ov_img2 h5").css({"margin-top":"230px","transition":"all 1s"});
        }
    });




    var target3=$(".ov3"),
        targetContent=target3.find(".ov_img3");

    $(window).scroll(function(){

        if($(this).scrollTop()>=4049){
            target3.addClass("ovactive");
            if($(this).scrollTop()>=4654){
                target3.removeClass("ovactive");
                target3.css({paddingTop:"599px",paddingBottom:0})
            }
        }else{
            target3.removeClass("ovactive");
            target3.css({paddingTop:0,paddingBottom:"600px"})
        }

        if($(this).scrollTop()>4199){
            if($(this).scrollTop()>4349){
                $(".ov_img3 h5").css({"margin-top":"-600px","transition":"all 1s"});
            }else{
                $(".ov_img3 h5").css({"margin-top":"-170px","transition":"all 1s"});
            }
        }else{
            $(".ov_img3 h5").css({"margin-top":"230px","transition":"all 1s"});
        }

    });






    //Research & Innovation///////////////////


    $(window).scroll(function(){
        if($(this).scrollTop()>499){
            $(".ri1 .ri_light").css({"right":"600px","top":"-600px","transition":"all 0.7s"});
            $(".ri_img1").css({"filter":"grayscale(0)","transition":"all 0.1s"});
        }else{
            $(".ri1 .ri_light").css({"right":"-100px","top":"100px","transition":"all 0.7s"});
            $(".ri_img1").css({"filter":"grayscale(1)","transition":"all 0.1s"});
        }

        if($(this).scrollTop()>1249){
            $(".ri2 .ri_light").css({"right":"600px","top":"-600px","transition":"all 0.7s"});
            $(".ri_img2").css({"filter":"grayscale(0)","transition":"all 0.1s"});
        }else{
            $(".ri2 .ri_light").css({"right":"-100px","top":"100px","transition":"all 0.7s"});
            $(".ri_img2").css({"filter":"grayscale(1)","transition":"all 0.1s"});
        }

        if($(this).scrollTop()>1949){
            $(".ri3 .ri_light").css({"right":"600px","top":"-600px","transition":"all 0.7s"});
            $(".ri_img3").css({"filter":"grayscale(0)","transition":"all 0.1s"});
        }else{
            $(".ri3 .ri_light").css({"right":"-100px","top":"100px","transition":"all 0.7s"});
            $(".ri_img3").css({"filter":"grayscale(1)","transition":"all 0.1s"});
        }
    });






    //Sustainability///////////////////

    $(window).scroll(function(){

        if($(this).scrollTop()>899){
            $(".sa1 h5").fadeIn(500);
            $(".sa1 h5 span").css({"width":"180px","opacity":"1"});
        }

        if($(this).scrollTop()>999){
            $(".pr_img1").fadeIn(500);
        }
        if($(this).scrollTop()>1099){
            $(".sa_pr1 h4").fadeIn(500).css({"right":"0px","transition":"all 1.2s"});
        }
        if($(this).scrollTop()>1199){
            $(".sa_pr1 p").fadeIn(500).css({"right":"-100px","transition":"all 1.2s"});
        }
        if($(this).scrollTop()>1299){
            $(".sa_pr1 ul li:first-child").fadeIn(500).css({"right":"-200px","transition":"all 1.2s"});
        }
        if($(this).scrollTop()>1399){
            $(".sa_pr1 ul li:last-child").fadeIn(500).css({"right":"-300px","transition":"all 1.2s"});
        }
        if($(this).scrollTop()>1499){
            $(".sa_pr1 p").css({"right":"0px","transition":"all 1s"});
            $(".sa_pr1 ul li:first-child").css({"right":"0px","transition":"all 1s"});
            $(".sa_pr1 ul li:last-child").css({"right":"0px","transition":"all 1s"});
        }

        if($(this).scrollTop()>1599){
            $(".pr_img2").fadeIn(500);
        }
        if($(this).scrollTop()>1699){
            $(".sa_pr2 h4").fadeIn(500).css({"left":"0px","transition":"all 1.2s"});
        }
        if($(this).scrollTop()>1799){
            $(".sa_pr2 p").fadeIn(500).css({"left":"100px","transition":"all 1.2s"});
        }
        if($(this).scrollTop()>1899){
            $(".sa_pr2 ul li:first-child").fadeIn(500).css({"left":"200px","transition":"all 1.2s"});
        }
        if($(this).scrollTop()>1999){
            $(".sa_pr2 ul li:nth-child(2)").fadeIn(500).css({"left":"300px","transition":"all 1.2s"});
        }
        if($(this).scrollTop()>2099){
            $(".sa_pr2 ul li:last-child").fadeIn(500).css({"left":"400px","transition":"all 1.2s"});
        }
        if($(this).scrollTop()>2199){
            $(".sa_pr2 p").css({"left":"0px","transition":"all 1s"});
            $(".sa_pr2 ul li:first-child").css({"left":"0px","transition":"all 1s"});
            $(".sa_pr2 ul li:nth-child(2)").css({"left":"0px","transition":"all 1s"});
            $(".sa_pr2 ul li:last-child").css({"left":"0px","transition":"all 1s"});
        }



        if($(this).scrollTop()>2299){
            $(".sa2 h5").fadeIn(500);
            $(".sa2 h5 span").css({"width":"180px","opacity":"1"});
        }
        if($(this).scrollTop()>2399){
            $(".sa_ka1 h4").fadeIn(500);
        }
        if($(this).scrollTop()>2499){
            $(".ka_contents1:first-child").fadeIn(500);
        }
        if($(this).scrollTop()>2599){
            $(".ka_contents1:nth-child(2)").fadeIn(500).css({"margin-top":"100px"});
        }
        if($(this).scrollTop()>2699){
            $(".ka_contents1:last-child").fadeIn(500).css({"margin-top":"200px"});
        }
        if($(this).scrollTop()>2799){
            $(".ka_contents1:first-child").css({"margin-top":"0px","transition":"all 1s"});
            $(".ka_contents1:nth-child(2)").css({"margin-top":"0px","transition":"all 1s"});
            $(".ka_contents1:last-child").css({"margin-top":"0px","transition":"all 1s"});
        }

        if($(this).scrollTop()>2899){
            $(".sa_ka2 h4").fadeIn(500);
        }
        if($(this).scrollTop()>2949){
            $(".sa_box1").fadeIn(500);
        }
        if($(this).scrollTop()>2999){
            $(".sa_box2").fadeIn(500).css({"margin-top":"50px"});
        }
        if($(this).scrollTop()>3049){
            $(".sa_box3").fadeIn(500).css({"margin-top":"100px"});
        }
        if($(this).scrollTop()>3099){
            $(".sa_box4").fadeIn(500).css({"margin-top":"150px"});
        }
        if($(this).scrollTop()>3149){
            $(".sa_box1").css({"margin-top":"0px","transition":"all 1s"});
            $(".sa_box2").css({"margin-top":"0px","transition":"all 1s"});
            $(".sa_box3").css({"margin-top":"0px","transition":"all 1s"});
            $(".sa_box4").css({"margin-top":"0px","transition":"all 1s"});
        }

    });
    

    $(".sa_box1").hover(function(){
        $(".ka_logo1").stop(true,true).animate({marginTop:"-225px"},250);
    },function(){
        $(".ka_logo1").stop(true,true).animate({marginTop:"0px"},250);
    });

    $(".sa_box2").hover(function(){
        $(".ka_logo2").stop(true,true).animate({marginTop:"-225px"},250);
    },function(){
        $(".ka_logo2").stop(true,true).animate({marginTop:"0px"},250);
    });

    $(".sa_box3").hover(function(){
        $(".ka_logo3").stop(true,true).animate({marginTop:"-225px"},250);
    },function(){
        $(".ka_logo3").stop(true,true).animate({marginTop:"0px"},250);
    });

    $(".sa_box4").hover(function(){
        $(".ka_logo4").stop(true,true).animate({marginTop:"-225px"},250);
    },function(){
        $(".ka_logo4").stop(true,true).animate({marginTop:"0px"},250);
    });







    //safety_quality///////////////////


    var sq_w=$(".sq_right_in li").width()+40; 
    var sq_n=$(".sq_right_in li").length;
    var sq_oldidx=0;
    var sq_index=0;
    g_pop=$(".sq_left li").index();
    $(".sq_page span:nth-child(1)").text(g_pop+1);

    $(".sq_right_in li:last").prependTo(".sq_right_in");
    $(".sq_right_in").css({left:-sq_w});

    function sqslide(sq_index,m){ 
        
        if(m==0){
            $(".sq_right_in").stop(true,true).animate({
                left:"+="+sq_w+"px"},1000,function(){
                $(".sq_right_in li:last").prependTo(".sq_right_in");
                $(".sq_right_in").css({left:-sq_w});
            });
        }else{
            $(".sq_right_in").stop(true,true).animate({
                left:"-="+sq_w+"px"},1000,function(){
                $(".sq_right_in li:first").appendTo(".sq_right_in");
                $(".sq_right_in").css({left:-sq_w});
            });
        }

        $(".sq_left li").eq(sq_oldidx).stop(true,true).fadeOut(1000);  //기존이미지 사라짐
        $(".sq_left li").eq(sq_index).stop(true,true).fadeIn(1000);  //새이미지 나타남
        sq_oldidx=sq_index;  //새로 나온 이미지가 다시 기존이미지로 바뀌고 다시 fadeOut...

    }


    function sqslideAuto(){
        sq_index++;
        if(sq_index==sq_n){ 
            sq_index=0;
        }
        sqslide(sq_index,1); 
    }

    sqauto=setInterval(sqslideAuto,5000);


    $(".sq_right_in, .sq_text").hover(function(){
        clearInterval(sqauto);
    },function(){
        sqauto=setInterval(sqslideAuto,5000);
    });


    $(".sq_side_btn .sq_pre").click(function(){
        
        clearInterval(sqauto);
        
        sq_index--;
        if(sq_index<0){
            sq_index=sq_n-1;
        }
        sqslide(sq_index,0);

        sqauto=setInterval(sqslideAuto,5000);

    })


    $(".sq_side_btn .sq_nex").click(function(){

        clearInterval(sqauto);
        
        sq_index++;
        if(sq_index>=sq_n){ 
            sq_index=0;
        }
        sqslide(sq_index,1);

        sqauto=setInterval(sqslideAuto,5000);

    })


    //버튼/////
    var page_img_h= $(".sq_preText ul li").height();
	var page_img_n= $(".sq_preText ul li").length;
	var page_oldidx=0;
	var page_index=0;

	$(".sq_preText ul li:last").prependTo(".sq_preText ul");
	$(".sq_preText ul").css({top:-page_img_h}); 

	function page_slideImg(page_index,page_m){

		if(page_m==0){
			$(".sq_preText ul").stop(true,true).animate({
				top:"+="+page_img_h+"px"},1000,function(){
				$(".sq_preText ul li:last").prependTo(".sq_preText ul");				
				$(".sq_preText ul").css({top:-page_img_h });
			});
			
		}else{
			$(".sq_preText ul").stop(true,true).animate({
				top:"-="+page_img_h+"px"},1000,function(){
				$(".sq_preText ul li:first").appendTo(".sq_preText ul");				
				$(".sq_preText ul").css({top:-page_img_h });
			});
			
		}
		page_oldidx=page_index;
	}


	function page_slideAuto(){
		page_index++;
		if(page_index==page_img_n){ 
			page_index=0;
		}
		page_slideImg(page_index,1);
	}

	page_auto=setInterval(page_slideAuto,5000);


    $(".sq_right_in, .sq_text").hover(function(){
        clearInterval(page_auto);
    },function(){
        page_auto=setInterval(page_slideAuto,5000);
    });


    $(".sq_side_btn .sq_pre").click(function(){
        
        clearInterval(page_auto);
        
        page_index--;
        if(page_index<0){
            page_index=page_img_n-1;
        }
        page_slideImg(page_index,0);

        page_auto=setInterval(page_slideAuto,5000);

    })


    $(".sq_side_btn .sq_nex").click(function(){

        clearInterval(sqauto);
        
        page_index++;
        if(page_index>=page_img_n){ 
            page_index=0;
        }
        page_slideImg(page_index,1);

        page_auto=setInterval(page_slideAuto,5000);

    })

    $(window).scroll(function(){

        if($(this).scrollTop()>299){
            $(".sq1 h5").fadeIn(500);
            $(".sq1 h5 span").css({"width":"180px","opacity":"1"});
        }
        if($(this).scrollTop()>399){
            $(".sq1 p").fadeIn(500);
        }
        if($(this).scrollTop()>499){
            $(".sq_slide").fadeIn(500);
        }

        if($(this).scrollTop()>1199){
            $(".sq2 h5").fadeIn(500);
            $(".sq2 h5 span").css({"width":"180px","opacity":"1"});
        }
        if($(this).scrollTop()>1299){
            $(".sq2 p").fadeIn(500);
        }
        if($(this).scrollTop()>1399){
            $(".sq_table").fadeIn(500);
        }

    });







    //Architecture///////////////////

    
    $(window).scroll(function(){
        if($(this).scrollTop()>200){ 
            if($(this).scrollTop()>300){  
                if($(this).scrollTop()>400){  
                    if($(this).scrollTop()>500){
                        if($(this).scrollTop()>600){
                            if($(this).scrollTop()>700){
                                $(".sc1 .sc_img h6").css({"left":"130px","transition":"all 0.7s"});
                                $(".sc1 .sc_text h6").css({"left":"-470px","transition":"all 0.7s"});
                            }else{
                                $(".sc1 .sc_img h6").css({"left":"100px","transition":"all 0.7s"});
                                $(".sc1 .sc_text h6").css({"left":"-500px","transition":"all 0.7s"});
                            }
                        }else{
                            $(".sc1 .sc_img h6").css({"left":"70px","transition":"all 0.7s"});
                            $(".sc1 .sc_text h6").css({"left":"-530px","transition":"all 0.7s"});
                        }
                    }else{
                        $(".sc1 .sc_img h6").css({"left":"40px","transition":"all 0.7s"});
                        $(".sc1 .sc_text h6").css({"left":"-560px","transition":"all 0.7s"});
                    }   
                }else{
                    $(".sc1 .sc_img h6").css({"left":"10px","transition":"all 0.7s"});
                    $(".sc1 .sc_text h6").css({"left":"-590px","transition":"all 0.7s"});
                } 
            }else{
                $(".sc1 .sc_img h6").css({"left":"-20px","transition":"all 0.7s"});
                $(".sc1 .sc_text h6").css({"left":"-620px","transition":"all 0.7s"});
            } 
        }else{
            $(".sc1 .sc_img h6").css({"left":"-50px","transition":"all 0.7s"});
            $(".sc1 .sc_text h6").css({"left":"-650px","transition":"all 0.7s"});
        } 

        if($(this).scrollTop()>1000){ 
            if($(this).scrollTop()>1100){  
                if($(this).scrollTop()>1200){  
                    if($(this).scrollTop()>1300){
                        if($(this).scrollTop()>1400){
                            if($(this).scrollTop()>1500){
                                $(".sc2 .sc_text h6").css({"left":"-150px","transition":"all 0.7s"});
                                $(".sc2 .sc_img h6").css({"left":"-750px","transition":"all 0.7s"});
                            }else{
                                $(".sc2 .sc_text h6").css({"left":"-120px","transition":"all 0.7s"});
                                $(".sc2 .sc_img h6").css({"left":"-720px","transition":"all 0.7s"});
                            }
                        }else{
                            $(".sc2 .sc_text h6").css({"left":"-90px","transition":"all 0.7s"});
                            $(".sc2 .sc_img h6").css({"left":"-690px","transition":"all 0.7s"});
                        }
                    }else{
                        $(".sc2 .sc_text h6").css({"left":"-60px","transition":"all 0.7s"});
                        $(".sc2 .sc_img h6").css({"left":"-660px","transition":"all 0.7s"});
                    }   
                }else{
                    $(".sc2 .sc_text h6").css({"left":"-30px","transition":"all 0.7s"});
                    $(".sc2 .sc_img h6").css({"left":"-630px","transition":"all 0.7s"});
                } 
            }else{
                $(".sc2 .sc_text h6").css({"left":"0px","transition":"all 0.7s"});
                $(".sc2 .sc_img h6").css({"left":"-600px","transition":"all 0.7s"});
            } 
        }else{
            $(".sc2 .sc_text h6").css({"left":"30px","transition":"all 0.7s"});
            $(".sc2 .sc_img h6").css({"left":"-570px","transition":"all 0.7s"});
        } 

        if($(this).scrollTop()>1800){ 
            if($(this).scrollTop()>1900){  
                if($(this).scrollTop()>2000){  
                    if($(this).scrollTop()>2100){
                        if($(this).scrollTop()>2200){
                            if($(this).scrollTop()>2300){
                                $(".sc3 .sc_img h6").css({"left":"10px","transition":"all 0.7s"});
                                $(".sc3 .sc_text h6").css({"left":"-590px","transition":"all 0.7s"});
                            }else{
                                $(".sc3 .sc_img h6").css({"left":"-20px","transition":"all 0.7s"});
                                $(".sc3 .sc_text h6").css({"left":"-620px","transition":"all 0.7s"});
                            }
                        }else{
                            $(".sc3 .sc_img h6").css({"left":"-50px","transition":"all 0.7s"});
                            $(".sc3 .sc_text h6").css({"left":"-650px","transition":"all 0.7s"});
                        }
                    }else{
                        $(".sc3 .sc_img h6").css({"left":"-80px","transition":"all 0.7s"});
                        $(".sc3 .sc_text h6").css({"left":"-680px","transition":"all 0.7s"});
                    }   
                }else{
                    $(".sc3 .sc_img h6").css({"left":"-110px","transition":"all 0.7s"});
                    $(".sc3 .sc_text h6").css({"left":"-710px","transition":"all 0.7s"});
                } 
            }else{
                $(".sc3 .sc_img h6").css({"left":"-140px","transition":"all 0.7s"});
                $(".sc3 .sc_text h6").css({"left":"-740px","transition":"all 0.7s"});
            } 
        }else{
            $(".sc3 .sc_img h6").css({"left":"-170px","transition":"all 0.7s"});
            $(".sc3 .sc_text h6").css({"left":"-770px","transition":"all 0.7s"});
        } 

        if($(this).scrollTop()>2500){ 
            if($(this).scrollTop()>2600){  
                if($(this).scrollTop()>2700){  
                    if($(this).scrollTop()>2800){
                        if($(this).scrollTop()>2900){
                            if($(this).scrollTop()>3000){
                                $(".sc4 .sc_text h6").css({"left":"50px","transition":"all 0.7s"});
                                $(".sc4 .sc_img h6").css({"left":"-550px","transition":"all 0.7s"});
                            }else{
                                $(".sc4 .sc_text h6").css({"left":"80px","transition":"all 0.7s"});
                                $(".sc4 .sc_img h6").css({"left":"-520px","transition":"all 0.7s"});
                            }
                        }else{
                            $(".sc4 .sc_text h6").css({"left":"110px","transition":"all 0.7s"});
                            $(".sc4 .sc_img h6").css({"left":"-490px","transition":"all 0.7s"});
                        }
                    }else{
                        $(".sc4 .sc_text h6").css({"left":"140px","transition":"all 0.7s"});
                        $(".sc4 .sc_img h6").css({"left":"-460px","transition":"all 0.7s"});
                    }   
                }else{
                    $(".sc4 .sc_text h6").css({"left":"170px","transition":"all 0.7s"});
                    $(".sc4 .sc_img h6").css({"left":"-430px","transition":"all 0.7s"});
                } 
            }else{
                $(".sc4 .sc_text h6").css({"left":"200px","transition":"all 0.7s"});
                $(".sc4 .sc_img h6").css({"left":"-400px","transition":"all 0.7s"});
            } 
        }else{
            $(".sc4 .sc_text h6").css({"left":"230px","transition":"all 0.7s"});
            $(".sc4 .sc_img h6").css({"left":"-370px","transition":"all 0.7s"});
        } 
    });




    //이미지 전환효과 함수생성

    showImg=0; 
    nextImg=0;
 
    function changeImg(){  /*일반함수*/
 
        nextImg++; 
        ImgCount=$(".sc1 .sc_img .largeImg li").length;
 
        if(nextImg==ImgCount){  //마지막이미지일때 다시 첫번째 이미지로  
            nextImg=0;
        }
 
        $(".sc1 .sc_img .largeImg li").eq(showImg).removeClass("imgVisible"); //이미지크기변화클래스
        $(".sc1 .sc_img .largeImg li").eq(nextImg).addClass("imgVisible");
        $(".sc1 .sc_img .thumbs li").eq(nextImg).addClass("active"); //선택된 하단버튼
        $(".sc1 .sc_img .thumbs li").eq(showImg).removeClass("active"); //기존 하단버튼     
        showImg=nextImg;
 
    }

    timer1=setInterval(changeImg,5000); 

     //버튼클릭시...
    $(".sc1 .sc_img .thumbs li").click(function(){

        clearInterval(timer1); //버튼클릭시 자동함수 해지

        nextImg=$(this).index();  //0,1,2,...

        $(".sc1 .sc_img .largeImg li").eq(showImg).removeClass("imgVisible"); //이미지크기변화클래스
        $(".sc1 .sc_img .largeImg li").eq(nextImg).addClass("imgVisible");
        $(".sc1 .sc_img .thumbs li").eq(nextImg).addClass("active"); //선택된 하단버튼
        $(".sc1 .sc_img .thumbs li").eq(showImg).removeClass("active"); //기존 하단버튼     
        showImg=nextImg;

        timer1=setInterval(changeImg,5000); 
    });



    
    //이미지 전환효과 함수생성

    showImg2=0; 
    nextImg2=0;

    function changeImg2(){  /*일반함수*/

        nextImg2++; 
        ImgCount2=$(".sc1 .sc_img .largeImg li").length;

        if(nextImg2==ImgCount2){  //마지막이미지일때 다시 첫번째 이미지로  
            nextImg2=0;
        }

        $(".sc2 .sc_img .largeImg li").eq(showImg2).removeClass("imgVisible"); //이미지크기변화클래스
        $(".sc2 .sc_img .largeImg li").eq(nextImg2).addClass("imgVisible");
        $(".sc2 .sc_img .thumbs li").eq(nextImg2).addClass("active"); //선택된 하단버튼
        $(".sc2 .sc_img .thumbs li").eq(showImg2).removeClass("active"); //기존 하단버튼     
        showImg2=nextImg2;

    }

    timer2=setInterval(changeImg2,5000); 

    // 버튼클릭시...
    $(".sc2 .sc_img .thumbs li").click(function(){

        clearInterval(timer2); //버튼클릭시 자동함수 해지

        nextImg2=$(this).index();  //0,1,2,...

        $(".sc2 .sc_img .largeImg li").eq(showImg2).removeClass("imgVisible"); //이미지크기변화클래스
        $(".sc2 .sc_img .largeImg li").eq(nextImg2).addClass("imgVisible");
        $(".sc2 .sc_img .thumbs li").eq(nextImg2).addClass("active"); //선택된 하단버튼
        $(".sc2 .sc_img .thumbs li").eq(showImg2).removeClass("active"); //기존 하단버튼     
        showImg2=nextImg2;

        timer2=setInterval(changeImg2,5000); 
    });


        
        
    //이미지 전환효과 함수생성

    showImg3=0; 
    nextImg3=0;

    function changeImg3(){  /*일반함수*/

        nextImg3++; 
        ImgCount3=$(".sc3 .sc_img .largeImg li").length;

        if(nextImg3==ImgCount3){  //마지막이미지일때 다시 첫번째 이미지로  
            nextImg3=0;
        }

        $(".sc3 .sc_img .largeImg li").eq(showImg3).removeClass("imgVisible"); //이미지크기변화클래스
        $(".sc3 .sc_img .largeImg li").eq(nextImg3).addClass("imgVisible");
        $(".sc3 .sc_img .thumbs li").eq(nextImg3).addClass("active"); //선택된 하단버튼
        $(".sc3 .sc_img .thumbs li").eq(showImg3).removeClass("active"); //기존 하단버튼     
        showImg3=nextImg3;

    }

    timer3=setInterval(changeImg3,5000); 

    //버튼클릭시...
    $(".sc3 .sc_img .thumbs li").click(function(){

        clearInterval(timer3); //버튼클릭시 자동함수 해지

        nextImg3=$(this).index();  //0,1,2,...

        $(".sc3 .sc_img .largeImg li").eq(showImg3).removeClass("imgVisible"); //이미지크기변화클래스
        $(".sc3 .sc_img .largeImg li").eq(nextImg3).addClass("imgVisible");
        $(".sc3 .sc_img .thumbs li").eq(nextImg3).addClass("active"); //선택된 하단버튼
        $(".sc3 .sc_img .thumbs li").eq(showImg3).removeClass("active"); //기존 하단버튼     
        showImg3=nextImg3;

        timer3=setInterval(changeImg3,5000); 
    });



                 
    //이미지 전환효과 함수생성

    showImg4=0; 
    nextImg4=0;

    function changeImg4(){  /*일반함수*/

        nextImg4++; 
        ImgCount4=$(".sc4 .sc_img .largeImg li").length;

        if(nextImg4==ImgCount4){  //마지막이미지일때 다시 첫번째 이미지로  
            nextImg4=0;
        }

        $(".sc4 .sc_img .largeImg li").eq(showImg4).removeClass("imgVisible"); //이미지크기변화클래스
        $(".sc4 .sc_img .largeImg li").eq(nextImg4).addClass("imgVisible");
        $(".sc4 .sc_img .thumbs li").eq(nextImg4).addClass("active"); //선택된 하단버튼
        $(".sc4 .sc_img .thumbs li").eq(showImg4).removeClass("active"); //기존 하단버튼     
        showImg4=nextImg4;

    }

    timer4=setInterval(changeImg4,5000);   
            
    //버튼클릭시...
    $(".sc4 .sc_img .thumbs li").click(function(){

        clearInterval(timer4); //버튼클릭시 자동함수 해지

        nextImg4=$(this).index();  //0,1,2,...

        $(".sc4 .sc_img .largeImg li").eq(showImg4).removeClass("imgVisible"); //이미지크기변화클래스
        $(".sc4 .sc_img .largeImg li").eq(nextImg4).addClass("imgVisible");
        $(".sc4 .sc_img .thumbs li").eq(nextImg4).addClass("active"); //선택된 하단버튼
        $(".sc4 .sc_img .thumbs li").eq(showImg4).removeClass("active"); //기존 하단버튼     
        showImg4=nextImg4;

        timer4=setInterval(changeImg4,5000); 
    });






    //Space///////////////////


    // /* 해당 탭메뉴를 클릭할때 해당 첫 썸네일을 클릭시킴....
	// (마지막에 누른채로 보이지 않고 항상 처음처럼 보이게 함) */
	$(".tab_title_1>li:first-child").click(function(){  
		$("#tab1 .slide_btn ul li:first").click();
	}); 
    $(".tab_title_1>li:nth-child(2)").click(function(){  
		$("#tab2 .slide_btn ul li:first").click();
	});
    $(".tab_title_1>li:nth-child(3)").click(function(){  
		$("#tab3 .slide_btn ul li:first").click();
	});
    $(".tab_title_1>li:last-child").click(function(){  
		$("#tab4 .slide_btn ul li:first").click();
	});

    $(".tab_title_2>li:first-child").click(function(){  
		$("#tab5 .slide_btn ul li:first").click();
	}); 
    $(".tab_title_2>li:nth-child(2)").click(function(){  
		$("#tab6 .slide_btn ul li:first").click();
	});
    $(".tab_title_2>li:nth-child(3)").click(function(){  
		$("#tab7 .slide_btn ul li:first").click();
	});
    $(".tab_title_2>li:nth-child(4)").click(function(){  
		$("#tab8 .slide_btn ul li:first").click();
	});
    $(".tab_title_2>li:nth-child(5)").click(function(){  
		$("#tab9 .slide_btn ul li:first").click();
	});
    $(".tab_title_2>li:nth-child(6)").click(function(){  
		$("#tab10 .slide_btn ul li:first").click();
	});
    $(".tab_title_2>li:last-child").click(function(){  
		$("#tab11 .slide_btn ul li:first").click();
	});

    $(".tab_title_3>li:first-child").click(function(){  
		$("#tab12 .slide_btn ul li:first").click();
	}); 
    $(".tab_title_3>li:nth-child(2)").click(function(){  
		$("#tab13 .slide_btn ul li:first").click();
	});
    $(".tab_title_3>li:last-child").click(function(){  
		$("#tab14 .slide_btn ul li:first").click();
	});

    
    //sc1________________

    $(".panel_1>li:not(:first)").hide();
    //첫번째를 제외한 나머지 내용 숨기기

    $(".tab_title_1>li").click(function(){
        $(".tab_title_1>li").removeClass("selected");  //기존선택된 selected 클래스 삭제
        $(this).addClass("selected");  //새로 선택된 selected 클래스 생성
        $(".panel_1>li").hide();  //기존의 보여진 내용 숨기기
        $($(this).find("a").attr("href")).show();  //새로 선택된 내용 href 연결된 내용 보여주기
    });

    
    // #tab1

    var oldidx=0;  //기존이미지
    var idx=0;  //새로 바뀌는 이미지

    function fadeImg(idx){  //매개변수가 있는 함수 > idx는 선택되는 이미지 

        
        if(oldidx!=idx){  //기존의 이미지와 선택된 이미지가 다를때...

            $("#tab1 .slide_btn ul li").eq(idx).css({"color":"#fff","border-bottom":"2px solid #fff"});  //선택된 썸네일 이미지
            $("#tab1 .slide_btn ul li").eq(oldidx).css({"color":"#666","border-bottom":"none"});  //기존의 썸네일 이미지
            $("#tab1 .slide ul li").eq(idx).stop(true,true).fadeIn(300);  //선택된 이미지 나타남
            $("#tab1 .slide ul li").eq(oldidx).stop(true,true).fadeOut(300);  //기존 이미지 사라짐
            $("#tab1 .slide ul li p").eq(idx).css({"bottom":"0"});  //선택된 텍스트
            $("#tab1 .slide ul li p").eq(oldidx).css({"bottom":"-90px"});  //기존 텍스트

        }
        oldidx=idx;  //선택된 이미지는 다시 기존이미지로 저장되어서 Fade Out...

    }

    $("#tab1 .slide ul li p:first-child").eq(idx).css({"bottom":"0"});

    $("#tab1 .slide_btn ul li").click(function(){
        idx=$(this).index();  //0,1,2,...
        fadeImg(idx);
    });


    //#tab2

    var oldidx2=0;  //기존이미지
    var idx2=0;  //새로 바뀌는 이미지

    function fadeImg2(idx2){  //매개변수가 있는 함수 > idx는 선택되는 이미지 

        if(oldidx2!=idx2){  //기존의 이미지와 선택된 이미지가 다를때...

            $("#tab2 .slide_btn ul li").eq(idx2).css({"color":"#fff","border-bottom":"2px solid #fff"});  //선택된 썸네일 이미지
            $("#tab2 .slide_btn ul li").eq(oldidx2).css({"color":"#666","border-bottom":"none"});  //기존의 썸네일 이미지
            $("#tab2 .slide ul li").eq(idx2).stop(true,true).fadeIn(300);  //선택된 이미지 나타남
            $("#tab2 .slide ul li").eq(oldidx2).stop(true,true).fadeOut(300);  //기존 이미지 사라짐
            $("#tab2 .slide ul li p").eq(idx2).css({"bottom":"0"});  //선택된 텍스트
            $("#tab2 .slide ul li p").eq(oldidx2).css({"bottom":"-90px"});  //기존 텍스트

        }
        oldidx2=idx2;  //선택된 이미지는 다시 기존이미지로 저장되어서 Fade Out...

    }

    $("#tab2 .slide ul li p:first-child").eq(idx2).css({"bottom":"0"});

    $("#tab2 .slide_btn ul li").click(function(){
        idx2=$(this).index();  //0,1,2,...
        fadeImg2(idx2);
    });


    //#tab3

    var oldidx3=0;  //기존이미지
    var idx3=0;  //새로 바뀌는 이미지

    function fadeImg3(idx3){  //매개변수가 있는 함수 > idx는 선택되는 이미지 

        if(oldidx3!=idx3){  //기존의 이미지와 선택된 이미지가 다를때...

            $("#tab3 .slide_btn ul li").eq(idx3).css({"color":"#fff","border-bottom":"2px solid #fff"});  //선택된 썸네일 이미지
            $("#tab3 .slide_btn ul li").eq(oldidx3).css({"color":"#666","border-bottom":"none"});  //기존의 썸네일 이미지
            $("#tab3 .slide ul li").eq(idx3).stop(true,true).fadeIn(300);  //선택된 이미지 나타남
            $("#tab3 .slide ul li").eq(oldidx3).stop(true,true).fadeOut(300);  //기존 이미지 사라짐
            $("#tab3 .slide ul li p").eq(idx3).css({"bottom":"0"});  //선택된 텍스트
            $("#tab3 .slide ul li p").eq(oldidx3).css({"bottom":"-90px"});  //기존 텍스트

        }
        oldidx3=idx3;  //선택된 이미지는 다시 기존이미지로 저장되어서 Fade Out...

    }

    $("#tab3 .slide ul li p:first-child").eq(idx3).css({"bottom":"0"});

    $("#tab3 .slide_btn ul li").click(function(){
        idx3=$(this).index();  //0,1,2,...
        fadeImg3(idx3);
    });


    //#tab4

    var oldidx4=0;  //기존이미지
    var idx4=0;  //새로 바뀌는 이미지

    function fadeImg4(idx4){  //매개변수가 있는 함수 > idx는 선택되는 이미지 

        if(oldidx4!=idx4){  //기존의 이미지와 선택된 이미지가 다를때...

            $("#tab4 .slide_btn ul li").eq(idx4).css({"color":"#fff","border-bottom":"2px solid #fff"});  //선택된 썸네일 이미지
            $("#tab4 .slide_btn ul li").eq(oldidx4).css({"color":"#666","border-bottom":"none"});  //기존의 썸네일 이미지
            $("#tab4 .slide ul li").eq(idx4).stop(true,true).fadeIn(300);  //선택된 이미지 나타남
            $("#tab4 .slide ul li").eq(oldidx4).stop(true,true).fadeOut(300);  //기존 이미지 사라짐
            $("#tab4 .slide ul li p").eq(idx4).css({"bottom":"0"});  //선택된 텍스트
            $("#tab4 .slide ul li p").eq(oldidx4).css({"bottom":"-90px"});  //기존 텍스트

        }
        oldidx4=idx4;  //선택된 이미지는 다시 기존이미지로 저장되어서 Fade Out...

    }

    $("#tab4 .slide ul li p:first-child").eq(idx4).css({"bottom":"0"});

    $("#tab4 .slide_btn ul li").click(function(){
        idx4=$(this).index();  //0,1,2,...
        fadeImg4(idx4);
    });




    //sc2________________

    $(".panel_2>li:not(:first)").hide();
    //첫번째를 제외한 나머지 내용 숨기기

    $(".tab_title_2>li").click(function(){
        $(".tab_title_2>li").removeClass("selected");  //기존선택된 selected 클래스 삭제
        $(this).addClass("selected");  //새로 선택된 selected 클래스 생성
        $(".panel_2>li").hide();  //기존의 보여진 내용 숨기기
        $($(this).find("a").attr("href")).show();  //새로 선택된 내용 href 연결된 내용 보여주기
    });


    // #tab5

    var oldidx5=0;  //기존이미지
    var idx5=0;  //새로 바뀌는 이미지

    function fadeImg5(idx5){  //매개변수가 있는 함수 > idx는 선택되는 이미지 

        
        if(oldidx5!=idx5){  //기존의 이미지와 선택된 이미지가 다를때...

            $("#tab5 .slide_btn ul li").eq(idx5).css({"color":"#fff","border-bottom":"2px solid #fff"});  //선택된 썸네일 이미지
            $("#tab5 .slide_btn ul li").eq(oldidx5).css({"color":"#666","border-bottom":"none"});  //기존의 썸네일 이미지
            $("#tab5 .slide ul li").eq(idx5).stop(true,true).fadeIn(300);  //선택된 이미지 나타남
            $("#tab5 .slide ul li").eq(oldidx5).stop(true,true).fadeOut(300);  //기존 이미지 사라짐
            $("#tab5 .slide ul li p").eq(idx5).css({"bottom":"0"});  //선택된 텍스트
            $("#tab5 .slide ul li p").eq(oldidx5).css({"bottom":"-90px"});  //기존 텍스트

        }
        oldidx5=idx5;  //선택된 이미지는 다시 기존이미지로 저장되어서 Fade Out...

    }

    $("#tab5 .slide ul li p:first-child").eq(idx5).css({"bottom":"0"});

    $("#tab5 .slide_btn ul li").click(function(){
        idx5=$(this).index();  //0,1,2,...
        fadeImg5(idx5);
    });


    //#tab6

    var oldidx6=0;  //기존이미지
    var idx6=0;  //새로 바뀌는 이미지

    function fadeImg6(idx6){  //매개변수가 있는 함수 > idx는 선택되는 이미지 

        if(oldidx6!=idx6){  //기존의 이미지와 선택된 이미지가 다를때...

            $("#tab6 .slide_btn ul li").eq(idx6).css({"color":"#fff","border-bottom":"2px solid #fff"});  //선택된 썸네일 이미지
            $("#tab6 .slide_btn ul li").eq(oldidx6).css({"color":"#666","border-bottom":"none"});  //기존의 썸네일 이미지
            $("#tab6 .slide ul li").eq(idx6).stop(true,true).fadeIn(300);  //선택된 이미지 나타남
            $("#tab6 .slide ul li").eq(oldidx6).stop(true,true).fadeOut(300);  //기존 이미지 사라짐
            $("#tab6 .slide ul li p").eq(idx6).css({"bottom":"0"});  //선택된 텍스트
            $("#tab6 .slide ul li p").eq(oldidx6).css({"bottom":"-90px"});  //기존 텍스트

        }
        oldidx6=idx6;  //선택된 이미지는 다시 기존이미지로 저장되어서 Fade Out...

    }

    $("#tab6 .slide ul li p:first-child").eq(idx6).css({"bottom":"0"});

    $("#tab6 .slide_btn ul li").click(function(){
        idx6=$(this).index();  //0,1,2,...
        fadeImg6(idx6);
    });


    //#tab7

    var oldidx7=0;  //기존이미지
    var idx7=0;  //새로 바뀌는 이미지

    function fadeImg7(idx7){  //매개변수가 있는 함수 > idx는 선택되는 이미지 

        if(oldidx7!=idx7){  //기존의 이미지와 선택된 이미지가 다를때...

            $("#tab7 .slide_btn ul li").eq(idx7).css({"color":"#fff","border-bottom":"2px solid #fff"});  //선택된 썸네일 이미지
            $("#tab7 .slide_btn ul li").eq(oldidx7).css({"color":"#666","border-bottom":"none"});  //기존의 썸네일 이미지
            $("#tab7 .slide ul li").eq(idx7).stop(true,true).fadeIn(300);  //선택된 이미지 나타남
            $("#tab7 .slide ul li").eq(oldidx7).stop(true,true).fadeOut(300);  //기존 이미지 사라짐
            $("#tab7 .slide ul li p").eq(idx7).css({"bottom":"0"});  //선택된 텍스트
            $("#tab7 .slide ul li p").eq(oldidx7).css({"bottom":"-90px"});  //기존 텍스트

        }
        oldidx7=idx7;  //선택된 이미지는 다시 기존이미지로 저장되어서 Fade Out...

    }

    $("#tab7 .slide ul li p:first-child").eq(idx7).css({"bottom":"0"});

    $("#tab7 .slide_btn ul li").click(function(){
        idx7=$(this).index();  //0,1,2,...
        fadeImg7(idx7);
    });
    

    // #tab8

    var oldidx8=0;  //기존이미지
    var idx8=0;  //새로 바뀌는 이미지

    function fadeImg8(idx8){  //매개변수가 있는 함수 > idx는 선택되는 이미지 

        
        if(oldidx8!=idx8){  //기존의 이미지와 선택된 이미지가 다를때...

            $("#tab8 .slide_btn ul li").eq(idx8).css({"color":"#fff","border-bottom":"2px solid #fff"});  //선택된 썸네일 이미지
            $("#tab8 .slide_btn ul li").eq(oldidx8).css({"color":"#666","border-bottom":"none"});  //기존의 썸네일 이미지
            $("#tab8 .slide ul li").eq(idx8).stop(true,true).fadeIn(300);  //선택된 이미지 나타남
            $("#tab8 .slide ul li").eq(oldidx8).stop(true,true).fadeOut(300);  //기존 이미지 사라짐
            $("#tab8 .slide ul li p").eq(idx8).css({"bottom":"0"});  //선택된 텍스트
            $("#tab8 .slide ul li p").eq(oldidx8).css({"bottom":"-90px"});  //기존 텍스트

        }
        oldidx8=idx8;  //선택된 이미지는 다시 기존이미지로 저장되어서 Fade Out...

    }

    $("#tab8 .slide ul li p:first-child").eq(idx8).css({"bottom":"0"});

    $("#tab8 .slide_btn ul li").click(function(){
        idx8=$(this).index();  //0,1,2,...
        fadeImg8(idx8);
    });


    //#tab9

    var oldidx9=0;  //기존이미지
    var idx9=0;  //새로 바뀌는 이미지

    function fadeImg9(idx9){  //매개변수가 있는 함수 > idx는 선택되는 이미지 

        if(oldidx9!=idx9){  //기존의 이미지와 선택된 이미지가 다를때...

            $("#tab9 .slide_btn ul li").eq(idx9).css({"color":"#fff","border-bottom":"2px solid #fff"});  //선택된 썸네일 이미지
            $("#tab9 .slide_btn ul li").eq(oldidx9).css({"color":"#666","border-bottom":"none"});  //기존의 썸네일 이미지
            $("#tab9 .slide ul li").eq(idx9).stop(true,true).fadeIn(300);  //선택된 이미지 나타남
            $("#tab9 .slide ul li").eq(oldidx9).stop(true,true).fadeOut(300);  //기존 이미지 사라짐
            $("#tab9 .slide ul li p").eq(idx9).css({"bottom":"0"});  //선택된 텍스트
            $("#tab9 .slide ul li p").eq(oldidx9).css({"bottom":"-90px"});  //기존 텍스트

        }
        oldidx9=idx9;  //선택된 이미지는 다시 기존이미지로 저장되어서 Fade Out...

    }

    $("#tab9 .slide ul li p:first-child").eq(idx9).css({"bottom":"0"});

    $("#tab9 .slide_btn ul li").click(function(){
        idx9=$(this).index();  //0,1,2,...
        fadeImg9(idx9);
    });


    //#tab10

    var oldidx10=0;  //기존이미지
    var idx10=0;  //새로 바뀌는 이미지

    function fadeImg10(idx10){  //매개변수가 있는 함수 > idx는 선택되는 이미지 

        if(oldidx10!=idx10){  //기존의 이미지와 선택된 이미지가 다를때...

            $("#tab10 .slide_btn ul li").eq(idx10).css({"color":"#fff","border-bottom":"2px solid #fff"});  //선택된 썸네일 이미지
            $("#tab10 .slide_btn ul li").eq(oldidx10).css({"color":"#666","border-bottom":"none"});  //기존의 썸네일 이미지
            $("#tab10 .slide ul li").eq(idx10).stop(true,true).fadeIn(300);  //선택된 이미지 나타남
            $("#tab10 .slide ul li").eq(oldidx10).stop(true,true).fadeOut(300);  //기존 이미지 사라짐
            $("#tab10 .slide ul li p").eq(idx10).css({"bottom":"0"});  //선택된 텍스트
            $("#tab10 .slide ul li p").eq(oldidx10).css({"bottom":"-90px"});  //기존 텍스트

        }
        oldidx10=idx10;  //선택된 이미지는 다시 기존이미지로 저장되어서 Fade Out...

    }

    $("#tab10 .slide ul li p:first-child").eq(idx10).css({"bottom":"0"});

    $("#tab10 .slide_btn ul li").click(function(){
        idx10=$(this).index();  //0,1,2,...
        fadeImg10(idx10);
    });


    //#tab11

    var oldidx11=0;  //기존이미지
    var idx11=0;  //새로 바뀌는 이미지

    function fadeImg11(idx11){  //매개변수가 있는 함수 > idx는 선택되는 이미지 

        if(oldidx11!=idx11){  //기존의 이미지와 선택된 이미지가 다를때...

            $("#tab11 .slide_btn ul li").eq(idx11).css({"color":"#fff","border-bottom":"2px solid #fff"});  //선택된 썸네일 이미지
            $("#tab11 .slide_btn ul li").eq(oldidx11).css({"color":"#666","border-bottom":"none"});  //기존의 썸네일 이미지
            $("#tab11 .slide ul li").eq(idx11).stop(true,true).fadeIn(300);  //선택된 이미지 나타남
            $("#tab11 .slide ul li").eq(oldidx11).stop(true,true).fadeOut(300);  //기존 이미지 사라짐
            $("#tab11 .slide ul li p").eq(idx11).css({"bottom":"0"});  //선택된 텍스트
            $("#tab11 .slide ul li p").eq(oldidx11).css({"bottom":"-90px"});  //기존 텍스트

        }
        oldidx11=idx11;  //선택된 이미지는 다시 기존이미지로 저장되어서 Fade Out...

    }

    $("#tab11 .slide ul li p:first-child").eq(idx11).css({"bottom":"0"});

    $("#tab11 .slide_btn ul li").click(function(){
        idx11=$(this).index();  //0,1,2,...
        fadeImg11(idx11);
    });




    //sc3________________

    $(".panel_3>li:not(:first)").hide();
    //첫번째를 제외한 나머지 내용 숨기기

    $(".tab_title_3>li").click(function(){
        $(".tab_title_3>li").removeClass("selected");  //기존선택된 selected 클래스 삭제
        $(this).addClass("selected");  //새로 선택된 selected 클래스 생성
        $(".panel_3>li").hide();  //기존의 보여진 내용 숨기기
        $($(this).find("a").attr("href")).show();  //새로 선택된 내용 href 연결된 내용 보여주기
    });

    
    // #tab12

    var oldidx12=0;  //기존이미지
    var idx12=0;  //새로 바뀌는 이미지

    function fadeImg12(idx12){  //매개변수가 있는 함수 > idx는 선택되는 이미지 

        
        if(oldidx12!=idx12){  //기존의 이미지와 선택된 이미지가 다를때...

            $("#tab12 .slide_btn ul li").eq(idx12).css({"color":"#fff","border-bottom":"2px solid #fff"});  //선택된 썸네일 이미지
            $("#tab12 .slide_btn ul li").eq(oldidx12).css({"color":"#666","border-bottom":"none"});  //기존의 썸네일 이미지
            $("#tab12 .slide ul li").eq(idx12).stop(true,true).fadeIn(300);  //선택된 이미지 나타남
            $("#tab12 .slide ul li").eq(oldidx12).stop(true,true).fadeOut(300);  //기존 이미지 사라짐
            $("#tab12 .slide ul li p").eq(idx12).css({"bottom":"0"});  //선택된 텍스트
            $("#tab12 .slide ul li p").eq(oldidx12).css({"bottom":"-90px"});  //기존 텍스트

        }
        oldidx12=idx12;  //선택된 이미지는 다시 기존이미지로 저장되어서 Fade Out...

    }

    $("#tab12 .slide ul li p:first-child").eq(idx12).css({"bottom":"0"});

    $("#tab12 .slide_btn ul li").click(function(){
        idx12=$(this).index();  //0,1,2,...
        fadeImg12(idx12);
    });


    //#tab13

    var oldidx13=0;  //기존이미지
    var idx13=0;  //새로 바뀌는 이미지

    function fadeImg13(idx13){  //매개변수가 있는 함수 > idx는 선택되는 이미지 

        if(oldidx13!=idx13){  //기존의 이미지와 선택된 이미지가 다를때...

            $("#tab13 .slide_btn ul li").eq(idx13).css({"color":"#fff","border-bottom":"2px solid #fff"});  //선택된 썸네일 이미지
            $("#tab13 .slide_btn ul li").eq(oldidx13).css({"color":"#666","border-bottom":"none"});  //기존의 썸네일 이미지
            $("#tab13 .slide ul li").eq(idx13).stop(true,true).fadeIn(300);  //선택된 이미지 나타남
            $("#tab13 .slide ul li").eq(oldidx13).stop(true,true).fadeOut(300);  //기존 이미지 사라짐
            $("#tab13 .slide ul li p").eq(idx13).css({"bottom":"0"});  //선택된 텍스트
            $("#tab13 .slide ul li p").eq(oldidx13).css({"bottom":"-90px"});  //기존 텍스트

        }
        oldidx13=idx13;  //선택된 이미지는 다시 기존이미지로 저장되어서 Fade Out...

    }

    $("#tab13 .slide ul li p:first-child").eq(idx13).css({"bottom":"0"});

    $("#tab13 .slide_btn ul li").click(function(){
        idx13=$(this).index();  //0,1,2,...
        fadeImg13(idx13);
    });


    //#tab14

    var oldidx14=0;  //기존이미지
    var idx14=0;  //새로 바뀌는 이미지

    function fadeImg14(idx14){  //매개변수가 있는 함수 > idx는 선택되는 이미지 

        if(oldidx14!=idx14){  //기존의 이미지와 선택된 이미지가 다를때...

            $("#tab14 .slide_btn ul li").eq(idx14).css({"color":"#fff","border-bottom":"2px solid #fff"});  //선택된 썸네일 이미지
            $("#tab14 .slide_btn ul li").eq(oldidx14).css({"color":"#666","border-bottom":"none"});  //기존의 썸네일 이미지
            $("#tab14 .slide ul li").eq(idx14).stop(true,true).fadeIn(300);  //선택된 이미지 나타남
            $("#tab14 .slide ul li").eq(oldidx14).stop(true,true).fadeOut(300);  //기존 이미지 사라짐
            $("#tab14 .slide ul li p").eq(idx14).css({"bottom":"0"});  //선택된 텍스트
            $("#tab14 .slide ul li p").eq(oldidx14).css({"bottom":"-90px"});  //기존 텍스트

        }
        oldidx14=idx14;  //선택된 이미지는 다시 기존이미지로 저장되어서 Fade Out...

    }

    $("#tab14 .slide ul li p:first-child").eq(idx14).css({"bottom":"0"});

    $("#tab14 .slide_btn ul li").click(function(){
        idx14=$(this).index();  //0,1,2,...
        fadeImg14(idx14);
    });






    //Art & Culture///////////////////

    $(".ac_arrow1").click(function(){
        $(".view2, .view3, .view4").stop().hide();
        $(".ac_img1 ul li:not(:first)").css({"height":"600px"});
        $(".ac_img1 ul li:not(:first) .all_title h4").removeClass("aarrow");
        $(".ac_arrow:not(:first)").removeClass("aarrow");
        $(".ac_arrow:not(:first)").find("span").removeClass("aarrow");
    });
    $(".ac_arrow2").click(function(){
        $(".view1, .view3, .view4").stop().hide();
        $(".ac_img1 ul li:not(:eq(1))").css({"height":"600px"});
        $(".ac_img1 ul li:not(:eq(1)) .all_title h4").removeClass("aarrow");
        $(".ac_arrow:not(:eq(1))").removeClass("aarrow");
        $(".ac_arrow:not(:eq(1))").find("span").removeClass("aarrow");
    });
    $(".ac_arrow3").click(function(){
        $(".view1, .view2, .view4").stop().hide();
        $(".ac_img1 ul li:not(:eq(2))").css({"height":"600px"});
        $(".ac_img1 ul li:not(:eq(2)) .all_title h4").removeClass("aarrow");
        $(".ac_arrow:not(:eq(2))").removeClass("aarrow");
        $(".ac_arrow:not(:eq(2))").find("span").removeClass("aarrow");
    });
    $(".ac_arrow4").click(function(){
        $(".view1, .view2, .view3").stop().hide();
        $(".ac_img1 ul li:not(:last)").css({"height":"600px"});
        $(".ac_img1 ul li:not(:last) .all_title h4").removeClass("aarrow");
        $(".ac_arrow:not(:last)").removeClass("aarrow");
        $(".ac_arrow:not(:last)").find("span").removeClass("aarrow");
    });

    dd=true;
    $(".ac_arrow1").click(function(){
        
        if(dd){
            $(".view1").stop().show();
            $(".ac_img1 ul li:first-child").css({"height":"860px"});
            $(".ac_img1 ul li:first-child .all_title h4").addClass("aarrow");
            $(this).addClass("aarrow");
            $(this).find("span").addClass("aarrow");
            dd=false;
        }else{
            $(".view1").stop().hide();
            $(".ac_img1 ul li:first-child").css({"height":"600px"});
            $(".ac_img1 ul li:first-child .all_title h4").removeClass("aarrow");
            $(this).removeClass("aarrow");
            $(this).find("span").removeClass("aarrow");
            dd=true;
        }

    });

    ee=true;
    $(".ac_arrow2").click(function(){
        
        if(ee){
            $(".view2").stop().show();
            $(".ac_img1 ul li:nth-child(2)").css({"height":"860px"});
            $(".ac_img1 ul li:nth-child(2) .all_title h4").addClass("aarrow");
            $(this).addClass("aarrow");
            $(this).find("span").addClass("aarrow");
            ee=false;
        }else{
            $(".view2").stop().hide();
            $(".ac_img1 ul li:nth-child(2)").css({"height":"600px"});
            $(".ac_img1 ul li:nth-child(2) .all_title h4").removeClass("aarrow");
            $(this).removeClass("aarrow");
            $(this).find("span").removeClass("aarrow");
            ee=true;
        }

    });

    ff=true;
    $(".ac_arrow3").click(function(){
        
        if(ff){
            $(".view3").stop().show();
            $(".ac_img1 ul li:nth-child(3)").css({"height":"860px"});
            $(".ac_img1 ul li:nth-child(3) .all_title h4").addClass("aarrow");
            $(this).addClass("aarrow");
            $(this).find("span").addClass("aarrow");
            ff=false;
        }else{
            $(".view3").stop().hide();
            $(".ac_img1 ul li:nth-child(3)").css({"height":"600px"});
            $(".ac_img1 ul li:nth-child(3) .all_title h4").removeClass("aarrow");
            $(this).removeClass("aarrow");
            $(this).find("span").removeClass("aarrow");
            ff=true;
        }

    });

    gg=true;
    $(".ac_arrow4").click(function(){
        
        if(gg){
            $(".view4").stop().show();
            $(".ac_img1 ul li:last-child").css({"height":"860px"});
            $(".ac_img1 ul li:last-child .all_title h4").addClass("aarrow");
            $(this).addClass("aarrow");
            $(this).find("span").addClass("aarrow");
            gg=false;
        }else{
            $(".view4").stop().hide();
            $(".ac_img1 ul li:last-child").css({"height":"600px"});
            $(".ac_img1 ul li:last-child .all_title h4").removeClass("aarrow");
            $(this).removeClass("aarrow");
            $(this).find("span").removeClass("aarrow");
            gg=true;
        }

    });


    hh=true;
    $(".ac_more_btn").click(function(){
        
        if(gg){
            $(".ac_hide").stop().show();
            $(".ac2").stop().animate({height:"2460px"});
            $(this).text("X Close");
            gg=false;
        }else{
            $(".ac_hide").stop().hide();
            $(".ac2").stop().animate({height:"900px"});
            $(this).text("+ READ MORE");
            gg=true;
        }

    });






    //NEWS///////////////////

    /* 탭메뉴 클릭_____________________________*/

    $(".nw_panel>li:not(:first)").hide();
    //첫번째를 제외한 나머지 내용 숨기기

    $(".nw_tab>li").click(function(){

        $(".nw_tab>li").removeClass("nwactive");//기존선택된 selected 클래스삭제
        $(this).addClass("nwactive"); //새로 선택된 selected 클래스 생성
        $(".nw_panel>li").stop().fadeOut();//기존의 보여진 내용 숨기기
        $($(this).find("a").attr("href")).stop().fadeIn();//새로 선택된 내용 href 연결된내용 보여주기
    
    });

    
});