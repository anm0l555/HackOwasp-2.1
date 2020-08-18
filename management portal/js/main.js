// var x;
// 		for(x=0;x<20;x++){
// 			setTimeout (function(){
//              var box = document.createElement('div');
// 				box.className = 'cat';
// 				document.getElementById('cat_container').appendChild(box);
// 			},500*x);
// 		}


// on click effect on the buttons
    var Eventbutton1= document.querySelector(".js_1");
    var Timeline1= document.querySelector(".jsgo_1");

    Timeline1.style.display = "none";

    Eventbutton1.addEventListener('click',function(){
        Eventbutton1.style.border="none";
	    if (Timeline1.style.display === 'none'){
	    	document.querySelector(".container1").style.transition = "2s";
	    	document.querySelector(".jsgo_1").style.transition = "2s";
	    	document.querySelector(".container1").style.position = "relative";
		    Timeline1.style.display = "block"
	      }else if (Timeline1.style.display === "block" && Timeline2.style.display === "block") {
	      	document.querySelector(".container1").style.position = "relative";
		    Timeline1.style.display = "none"
	      }else if((Timeline1.style.display === "none" && Timeline2.style.display === "block")||(Timeline1.style.display === "block" && Timeline2.style.display === "none")){
            document.querySelector(".container1").style.position = "absolute";
	      	Timeline1.style.display = "none"
	      }
    
     });


    var Eventbutton2 = document.querySelector(".js_2");
    var Timeline2= document.querySelector(".jsgo_2");

    Timeline2.style.display = "none";

    Eventbutton2.addEventListener('click',function(){
    	Eventbutton2.style.border="none";
	    if (Timeline2.style.display === 'none'){
	    	document.querySelector(".container1").style.position = "relative";
		    Timeline2.style.display = "block"
	    }else if(Timeline1.style.display === "block" && Timeline2.style.display === "block") {
	    	document.querySelector(".container1").style.position = "relative";
		    Timeline2.style.display = "none";
	    }else if((Timeline1.style.display === "none" && Timeline2.style.display === "block")||(Timeline1.style.display === "block" && Timeline2.style.display === "none")){
            document.querySelector(".container1").style.position = "absolute";
	      	Timeline2.style.display = "none"
	      }
    });



    // Admin panel js here...............

    
    var Adminbutton = document.querySelector(".js_3");
    var AdminHandle = document.querySelector(".form");

    AdminHandle.style.display = "none";
    Adminbutton.addEventListener('click',function(){
        if(AdminHandle.style.display === "none"){
        	document.querySelector(".container1").style.position = "relative"
        	AdminHandle.style.display = "block";
        }else{
        	document.querySelector(".container1").style.position = "absolute";
        	AdminHandle.style.display = "none"
        }


    })