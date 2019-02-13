// Interactivity demo 2

//Zoom the Moon

console.log('hello')
//variable
var body  = document.querySelector('body')
var button =document.querySelector('.trigger')
var audio = document.querySelector('audio');


//event/event listener

button.addEventListener('click',zoom)

//declare function
function zoom() {
	
	//condition statement v
if (body.id == 'zoom') {
	body.id = ''

} 
else {
	body.id = 'zoom'
	audio.play()
}


}

