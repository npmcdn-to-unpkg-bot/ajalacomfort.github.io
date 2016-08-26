$(document).ready(function(){

	//store the width of the body 
	var body_width = ($("body").width());
		//Listen to scrolling 
	
	
		$(window).scroll(function(e){
			var height = $(this).scrollTop();
			
				if(height < 720){
					//keep the fixed navigation hidden
						$("#side_navigation").css({display:"none"})
					
				}
				else if(height > 720){
					//show the hidden navigation
					$("#side_navigation").css({display:"block"})
					
				}
				else if(height > (720 *2)){}
				else{}
			
		})
	
	
	//add draggable jquery to the time line stick
	$("#timeline_stick").draggable({addClasses:true,axis:"x",containment:"parent"})
	
	//listen to drag of the time line stick relative to the parent width 

	$("#timeline_stick").on("drag",function(event,ui){
		
			var percent = ((ui.position.left) / body_width  ) * 100;
			var of_five = percent  / 100 * (4 * body_width);
			//adjust width of the time line space 
		$("#timeline_space").css({width:percent + "%"});
		
		//UPDATE THE VIEW OF THE ABOUT SECTION BASED ON THE SCROLL OF THE TIMELINE 
	$("#about_space").css({marginLeft:"-" + of_five + "px" })
		
	})
	
	///LISTEN TO CLICK OF NAV
	
	$("#bigNav text").on("click", function(){
		var c = (this).getAttribute("class");
				scroll("svg",c)
		})
	$("#side_navigation li").on("click",function(){
			var c = $(this).attr("class")
			scroll("normal",c)
	})
	
	
	//side function for the scrollign 
	
	function scroll(element,obj){
		
		var id;
		if(obj === "homeNav"){id="#landing_page"}
		else if(obj === "aboutNav"){ id="#about"}
		else{id="#blog"}
		
				return $('html, body').animate({scrollTop:$(id).position().top}, 'slow');
	}
})




/***** JQUERY FOR SVG SKILL S***/
$(document).ready(function(){
  var percents = [50,80,90,60,30,40,70,100,40,50],calc = 2 * 3.14 * 70;
  var colors = ["#197278","#283d3b","#283d3b","#edddd4","#fcba04","#3d0b37","#f45b69","#ff84e8","#2274a5","#d1603d"]
  var circle_list = $("circle").toArray();
  //DESIGN THE SKILL SETS 
  function updatePercent(val){
    $(circle_list[val]).css({
      "stroke-dasharray": ((percents[val] / 100) * calc) + "," + calc,
      stroke:colors[val],
      "stroke-width":3
    })
    val++;
    return val > percents.length - 1 ? true : updatePercent(val);
  }
  
  //CALLING FUNCTIONS 
  updatePercent(0)
})

