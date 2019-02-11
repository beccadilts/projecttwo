// Interactivity demo 2


console.log('hello')
//variable
var body  = document.querySelector('body')
var button =document.querySelector('.trigger')


//event/event listener

button.addEventListener('click',spin)

//declare function
function spin() {
	
	//condition statement v
if (body.id == 'spin') {
	body.id = ''
} else {
	body.id = 'spin'
}


}
