!function(e){var t={show:function(t){this.append('<div class="loader_opacity" style="opacity: 0; position:absolute; top: 0; left: 0; bottom:0; right:0;"></div>'),e(".loader_opacity").css("z-index","99998"),e(".loader_opacity").animate({opacity:.5},500),this.addClass("form-loader")},hide:function(t){this.find(".loader_opacity").remove(),e(".loader_opacity").css("z-index","-99998"),e(".loader_opacity").animate({opacity:0},500),this.removeClass("form-loader")}};e.fn.loader=function(e){if(t[e])return t[e].apply(this,Array.prototype.slice.call(arguments,1))}}(jQuery),$(document).ready((function(){$('form[data-type="ajax-form"]').on("click",(function(e){var t=e.target,i=t.getAttribute("data-send");if("INPUT"==t.tagName&&"ajax"==i){var a=$(t).parents("form"),s=a.attr("method"),l=a.attr("id");return a.loader("show"),$.ajax({type:s,data:a.serialize(),dataType:"html",url:a.attr("action"),success:function(e){var t=$(e).find("#"+l);a.loader("hide"),$("#"+l).html(t.html())}}),!1}})),$("#news1").click((function(){$(this).addClass("active"),$("#news2").removeClass("active"),$(".news1").animate({opacity:1},1e3),$(".news1").css("z-index","100"),$(".news2").animate({opacity:0},1e3),$(".news2").css("z-index","-100")})),$("#news2").click((function(){$(this).addClass("active"),$("#news1").removeClass("active"),$(".news1").animate({opacity:0},1e3),$(".news1").css("z-index","-100"),$(".news2").animate({opacity:1},1e3),$(".news2").css("z-index","100")})),$(".karta, .btn_quest").click((function(e){e.preventDefault();var t=$(this).attr("href"),i=$(t).offset().top;$("body,html").animate({scrollTop:i},1e3)}));var e,t=0,i=0,a=0;function s(t=!1){var i=window.innerWidth;i>1e3?e=4:i>768?e=3:i>640?e=2:i>480?e=1:i<=480&&(e=-1);for(var a=$("#menu_header > li.listItem"),s=a.length-1;s>=0;s--)s>e&&$(".flexMenu").prepend(a[s]);var l=$("#menu_header > li.listItem").length-1;if(l<e)for(;l<e;)$("#menu_header").append($(".flexMenu li.submenuItem:first-child")),l+=1}function l(){var e=$("#store-filter").serialize();""==e&&(e={}),$.fn.yiiListView.update("list-view",{data:e,url:""})}function n(){$('[data-toggle="popover"]').popover({trigger:"hover",placement:"bottom"})}$("#menu_bottom li").each((function(e,s){$(s).hasClass("column1")&&($(s).css("top",35*t+"px"),t+=1),$(s).hasClass("column2")&&($(s).css("top",35*i+"px"),i+=1),$(s).hasClass("column3")&&($(s).css("top",35*a+"px"),a+=1)})),$(".search").click((function(){$(".form_search").animate({right:"0px"},1500)})),$(".close_search").click((function(){$(".form_search").animate({right:"-275px"},1500)})),s(),$(".reg .head_region").click((function(){!function(e=!1){if(window.innerWidth<=768){var t=$(".right_region");t.hasClass("active")?(t.animate({height:34},200),t.removeClass("active")):(t.animate({height:302},200),t.addClass("active"))}else $(".right_region").css("height",""),$(".right_region").removeClass("active")}()})),$(window).resize((function(){s(!0)})),$(".icon-menu").on("click",(function(){$(this).hasClass("active")?($(this).removeClass("active"),$(".flexMenu").slideToggle("hide")):($(this).toggleClass("active"),$(".flexMenu").slideToggle("slow"))})),$("#menu_header li ul > li a, #menu_bottom li ul > li a, .flexMenu li ul > li a, #info_ul li ul > li a").click((function(e){if($(this).next().slideToggle("normal"),"A"==e.target.tagName&&"#"==$(e.target).attr("href"))return!1})),$("#menu_header > li, #menu_bottom > li, .flexMenu > li").click((function(e){if($(this).hasClass("active")?($(this).removeClass("active"),$(this).find("ul").slideToggle("hide")):($(this).parent().find("li").removeClass("active"),$(this).parent().find("li").find("ul").css("display",""),$(this).toggleClass("active"),$(this).find("> ul").slideToggle("slow")),"A"==e.target.tagName&&"#"==$(e.target).attr("href"))return!1})),$("#info_ul > li").click((function(e){if($(this).hasClass("active")?($(this).removeClass("active"),$(this).find("ul").slideToggle("hide")):($(this).parent().find("li").removeClass("active"),$(this).parent().find("li").find("ul").css("display",""),$(this).toggleClass("active"),$(this).find("> ul").slideToggle("slow")),"A"==e.target.tagName&&"#"==$(e.target).attr("href"))return!1})),$(document).delegate(".wrapper-dropdown-ul-1, .wrapper-dropdown-ul-2","click",(function(e){$(this).hasClass("active")?$(this).removeClass("active"):$(this).addClass("active");var t=e.target;"LI"!=t.tagName&&"A"!=t.tagName||$(t).parents("ul").prev("span").html(t.innerHTML)})),$('#store-filter input[type="submit"]').on("click",(function(){return l(),!1})),$("#category-dropdown ul > li").on("click",(function(){$("#category-checkbox input:checked").click(),$('#category-checkbox input[value="'+$(this).data("id")+'"]').click(),l()})),$(".filter-block").on("change",(function(e){l()})),n(),$(document).bind("ajaxComplete",(function(){n(),$(".wrapper-dropdown-ul-2 ul.dropdown_ul_2").prepend('<li><a href="/store">Не выбрано</a></li>'),$(".wrapper-dropdown-ul-2 ul.dropdown_ul_2 li a").each((function(){($(this).hasClass("asc")||$(this).hasClass("desc"))&&$(".wrapper-dropdown-ul-2 span").html($(this))}))})),$(".btn_reset_form").click((function(){return $("form#store-filter").trigger("reset"),l(),!1})),$(window).scroll((function(){$(this).scrollTop()>300?$(".button-up").fadeIn():$(".button-up").fadeOut()})),$(".button-up").click((function(){return $("body,html").animate({scrollTop:0},300),!1})),$(window).resize((function(){$(window).height();$(window).width()>983?($(".filter").css("left","0px"),$("#strel").css("display",""),$("#strel2").css("display","none"),$(".sidebar").css("left","-52px"),$("#strel").removeClass("is-visible"),$("#strel2").removeClass("is-visible")):$("#strel").hasClass("is-visible")||$(".filter").css("left","-255px")})),$("#strel").click((function(){$(this).toggleClass("is-visible"),$(".filter").animate({left:$("#strel").hasClass("is-visible")?"0":"-255px"},500),$(".sidebar").animate({left:$("#strel").hasClass("is-visible")?"202px":"-52px"},500),$("#strel").toggle(),$("#strel2").toggle()})),$("#strel2").click((function(){$("#strel").toggleClass("is-visible"),$(".filter").animate({left:$("#strel").hasClass("is-visible")?"0":"-255px"},500),$(".sidebar").animate({left:$("#strel").hasClass("is-visible")?"202px":"-52px"},500),$("#strel").toggle(),$("#strel2").toggle()})),$(".tab-content table").wrap('<div class="table_respon"></div>'),$(".item_region a").on("click",(function(){$(".reg").fadeOut("slow",(function(){$(".camp_region").addClass("slide_left")})),$(".camp_region .head_region span").text($(this).text());var e=$(this).next("ul");return e.length>0?$(".camp_region .bottom_region ul").html(e.html()):$(".camp_region .bottom_region ul").html("<ul></ul>"),!1})),$(".btn_in_region").on("click",(function(){return $(".camp_region").removeClass("slide_left"),$(".reg").fadeIn("slow"),!1})),$("ul.region > li.item_region").hover((function(e){var t=("A"==e.target.tagName?$(e.target).parent():$(e.target)).data("id");$(t).css({fill:"#2c246b",opacity:.4})}),(function(e){var t=("A"==e.target.tagName?$(e.target).parent():$(e.target)).data("id");$(t).css({fill:"",opacity:""})})),$("#map path").on("click",(function(e){var t=$(e.target).attr("id");return $('ul.region > li[data-id="#'+t+'"] > a').click(),!1}))}));