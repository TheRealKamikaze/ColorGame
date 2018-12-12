var numsquares=6;

var colors= generateRandomColors(6);

var squares = document.querySelectorAll(".square");

var find=colors[pickColor()];

var h1=document.querySelector("h1");

var play=document.querySelector("#play");

var modes=document.querySelectorAll(".mode");

for(var i=0; i<modes.length; i++){
	modes[i].addEventListener("click", function(){
		modes[0].classList.remove("selected");
		modes[1].classList.remove("selected");
		this.classList.add("selected");

		this.textContent==="Easy"? numsquares=3: numsquares=6;
		reset();
	})
}

function reset(){
	colors= generateRandomColors(numsquares);
	find=colors[pickColor()];
	colorDisplay.textContent=find;
	play.textContent="New Colors?";
	message.textContent="";
	for(i=0;i<squares.length;i++){
		if(i<numsquares){
			squares[i].style.background=colors[i];
			squares[i].style.display="block";
		}
		else
			squares[i].style.display="none";
		h1.style.background="steelblue";
	}

}

var colorDisplay=document.getElementById("find");
colorDisplay.textContent=find;

var message=document.querySelector("#message");
play.textContent="New Colors?";

play.addEventListener("click",function(){
	reset();
})

for(i=0;i<squares.length;i++){
	squares[i].style.background=colors[i];
	squares[i].addEventListener("click",function(){
			var color=this.style.background;
				if(color===find){
					message.textContent="Correct!!";
					for (i =0;	 i < colors.length;	 i++) {
						squares[i].style.background=find;
						play.textContent="Play Again!!";
					}
					h1.style.background=find;
				}
				else{
					message.textContent="Try Again!!";
					this.style.background="#232323";
				}
	});
}

function pickColor(){
	var b= Math.floor(Math.random()*numsquares);
	return b;
}

function generateRandomColors(n){
	var arr=[];
	for(i=0; i<n; i++){
		var r=Math.floor(Math.random()*256);
		var g=Math.floor(Math.random()*256);
		var b=Math.floor(Math.random()*256);
		arr[i]="rgb("+r+", " +g+", "+ b+")";
	}
	return arr;
}
