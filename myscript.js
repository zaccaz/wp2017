//window.alert("testing");
var n = 3; 
var word = new Array(n);
var counter = 0;
var bits = 1;//true for activate myMove()


for(i=0; i<n ;i++)
{
	word[i] = document.getElementById("container"+i);
}

function myMove()
{
	if(bits == 1)
	{
		bits =0;//deactivate myMove
		var elem = document.getElementById("cover");
		var elem2 = document.getElementById("sec_cover");
		var main = document.getElementById("container0");
		var main2 = document.getElementById("container1");
		var emptyL = 0.4*document.documentElement.clientWidth;
		
		$(".emptyL").css("width", emptyL+"px");
		console.log(emptyL);
		
		var ori = word[counter%n];
		var overlap = word[(counter+1)%n];
		
		console.log($(".emptyL").css("width"));
		$(overlap).css("z-index", "2");
		$(overlap).css("visibility", "visible");
		
		
		var pos = -20;
		var pos2 = -30;
		
		var $block = $('#abgne-block-20110112'), 
			_width = $block.width();
		
		//speed indicator
		var id = setInterval(frame,6);//execute frame per 1ms

		var check =0;
		function frame() //percentage move 
		{
			
			if(pos2 == 100)
			{
				$(ori).css("width", "0%");
				$(ori).css("visibility", "hidden");
				$(ori).css("z-index", "");
				$(overlap).css("z-index", "1");
				counter++;
				bits = 1;//reactivate my move
				clearInterval(id);
			}
			else
			{
				pos++; 
				pos2++;
				//elem.style.top = pos + 'px'; 
				elem.style.left = pos + '%'; 
				elem2.style.left = pos2 + '%';
				if(pos >= 0)
				{
					//overlap.style.width = pos2 + '%';
					$(overlap).css("width", pos+"%");
				}
			}
		}
	}
}