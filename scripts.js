


//variable
var body  = document.querySelector('body')
var button =document.querySelector('.trigger')
var audio = document.querySelector('audio');

//event/event listener

button.addEventListener('click',spin)


//declare function
function spin() {
	
	//condition statement v
if (body.id == 'spin') {
	body.id = ''

} 
else {
	body.id = 'spin'
	audio.play()
}

//random position

var x =Math.random()* window.innerWidth;
var y = Math.random()* window.innerHeight;

button.style.left = x +'px'
button.style.top = y +'px'

}
