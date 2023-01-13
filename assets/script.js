

// Letters Arrays
var alphaUpperArray = ["A", "B", "C", "D", "E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var alphaLowerArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Numbers Arrays
const number = ["0","1","2","3","4","5","6","7","8","9","10",];


// Getting random number from Array

const number2 = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten",];

const random = Math.floor(Math.random() * number.length);


// WordsAPI Fetch Request, Returns Random Word/Definition and Console Logs it
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9c87cf3d42msh23dac74cec4328bp1b4dbdjsnc47d2a2101c4',
		'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
	}
};

fetch('https://wordsapiv1.p.rapidapi.com/words/?random=true', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


	//submit form event listener
	//on submit, store questions and answers into object as key,value pair
	//on submit, store questions and answers into array as key-value pair objects
	//console.log to make sure they're stored properly
