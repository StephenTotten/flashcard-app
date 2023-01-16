var word;
var definit;
var city;
var country;
var customObj;

var alphabetButton = document.querySelector("#alphabet")
var numbersButton = document.querySelector("#numbers")
var definitionsButton = document.querySelector("#definitions")
var customButton = document.querySelector("#custom")
var citiesButton = document.querySelector("#cities")
var form = document.getElementById('form2');

alphabetButton.addEventListener("click", displayAlpha);

numbersButton.addEventListener("click", displayNumber);

definitionsButton.addEventListener("click", getWord);


form.addEventListener('submit', displayCustom);

citiesButton.addEventListener("click", getCities);

var container = document.getElementById("container");
var cardContainer = document.getElementById("cardcontainer");

// Letters Array
var alphaArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// Letters Arrays
var alphaUpperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var alphaLowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



// Numbers Arrays
const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",];


// Getting random number from Array

const number2 = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",];

const random = Math.floor(Math.random() * number.length);



// WordsAPI Fetch Request, Returns Random Word/Definition and Console Logs it

function getWord() {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '9c87cf3d42msh23dac74cec4328bp1b4dbdjsnc47d2a2101c4',
			'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
		}
	};

	fetch('https://wordsapiv1.p.rapidapi.com/words/?random=true&hasDetails=definitions', options)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log(data);
			word = data.word;
			definit = data.results[0].definition;
			displayWord();
		})


	function displayWord() {
		var cardBlank = document.getElementById("front");
		var cardBack = document.getElementById("back");
		cardBlank.innerHTML = word;
		cardBack.innerHTML = definit;
	}
}

// Cities and Countries Fetch Request
function getCities() {
	const options2 = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '9c87cf3d42msh23dac74cec4328bp1b4dbdjsnc47d2a2101c4',
			'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
		}
	};

	fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/cities', options2)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log(data);
			var randomIndex = Math.floor(Math.random() * 5);
			city = data.data[randomIndex].city;
			country = data.data[randomIndex].country;
			displayCity();
		})

	function displayCity() {
		var cardBlank = document.getElementById("front");
		cardBlank.innerHTML = city;
		var cardBack = document.getElementById("back");
		cardBack.innerHTML = country;
	}
}

function displayAlpha() {

	function getRandomItem(alphaArray) {
		var randomIndex = Math.floor(Math.random() * alphaArray.length);
		var item = alphaArray[randomIndex];
		return item;
	}
	var result = getRandomItem(alphaArray);
	var cardBlank = document.getElementById("front");
	var cardBack = document.getElementById("back");
	cardBack.innerHTML = result;
	cardBlank.innerHTML = result;
}

let numbers = [];
for (var i = 0; i <= 100; i++) {
	numbers.push(i);
}

function displayNumber() {

	function randNumber(arr) {
		var randomIndex = Math.floor(Math.random() * arr.length);
		var num = arr[randomIndex];
		return num;
	}
	var answer = randNumber(numbers);
	var cardF = document.getElementById("front");
	var cardB = document.getElementById("back");
	cardF.innerHTML = answer;
	cardB.innerHTML = answer;

}

//Card Flip Function
const card = document.getElementById("card")

card.addEventListener("click", flipCard)
function flipCard() {
	card.classList.toggle("flipCard");
}



// fetch('https://wordsapiv1.p.rapidapi.com/words/?random=true', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));


var customForm = document.getElementById("form");
customButton.addEventListener("click", function (event) {
	event.preventDefault();
	if (customForm === "block") {
		customForm.style.display = "none";
	} else {
		customForm.style.display = "block";
	}
});
var submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", function (event) {
	event.preventDefault();
	var errorMessage = document.getElementById("error-message")
	errorMessage.innerHTML = "";

	var userTitle = document.getElementById("title").value;
	var userQuestionOne = document.getElementById("question-one").value;
	var userAnswerOne = document.getElementById("answer-one").value;
	var userQuestionTwo = document.getElementById("question-two").value;
	var userAnswerTwo = document.getElementById("answer-two").value;
	var userQuestionThree = document.getElementById("question-three").value;
	var userAnswerThree = document.getElementById("answer-three").value;
	var userQuestionFour = document.getElementById("question-four").value;
	var userAnswerFour = document.getElementById("answer-four").value;
	var userQuestionFive = document.getElementById("question-five").value;
	var userAnswerFive = document.getElementById("answer-five").value;

	console.log("Title: " + userTitle);
	console.log("Question 1: " + userQuestionOne);
	console.log("Answer 1: " + userAnswerOne)

	var cardBank = {
		question1: userQuestionOne,
		answer1: userAnswerOne,
		question2: userQuestionTwo,
		answer2: userAnswerTwo,
		question3: userQuestionThree,
		answer3: userAnswerThree,
		question4: userQuestionFour,
		answer4: userAnswerFour,
		question5: userQuestionFive,
		answer5: userAnswerFive,
	}
	console.log(cardBank);
	customObj = cardBank;
	if (userTitle === "") {
		errorMessage.innerHTML = "Please include a title!";
	} else if (userQuestionOne === ""
		|| userAnswerOne === ""
		|| userQuestionTwo === ""
		|| userAnswerTwo === ""
		|| userQuestionThree === ""
		|| userAnswerThree === ""
		|| userQuestionFour === ""
		|| userAnswerFour === ""
		|| userQuestionFive === ""
		|| userAnswerFive === "") {
		errorMessage.innerHTML = "Please fill out every blank!";
	}

	displayCustom();
});

function displayCustom() {
	var cardBlank = document.getElementById("front");
	var cardBack = document.getElementById("back");
	cardBlank.innerHTML = customObj.question1;
	cardBack.innerHTML = customObj.answer1;
	showNextButton();
	function showNextButton() {
		var x = document.createElement("BUTTON");
		var t = document.createTextNode(">> Next Card >>");
		x.appendChild(t);
		submitBtn.style.display = "none";
		cardContainer.appendChild(x);
		x.addEventListener("click", function (event) {
			event.preventDefault();
			if (cardBack.style.display = "visible") {
				flipCard();
			}

			if (cardBlank.innerHTML == customObj.question1 &&
				cardBack.innerHTML == customObj.answer1) {
				cardBlank.innerHTML = customObj.question2
				cardBack.innerHTML = customObj.answer2
			} else if (cardBlank.innerHTML == customObj.question2 &&
				cardBack.innerHTML == customObj.answer2) {
				cardBlank.innerHTML = customObj.question3
				cardBack.innerHTML = customObj.answer3
			} else if (cardBlank.innerHTML == customObj.question3 &&
				cardBack.innerHTML == customObj.answer3) {
				cardBlank.innerHTML = customObj.question4
				cardBack.innerHTML = customObj.answer4
			} else if (cardBlank.innerHTML == customObj.question4 &&
				cardBack.innerHTML == customObj.answer4) {
				cardBlank.innerHTML = customObj.question5
				cardBack.innerHTML = customObj.answer5
			} else if (cardBlank.innerHTML == customObj.question5 &&
				cardBack.innerHTML == customObj.answer5) {
				cardBlank.innerHTML = customObj.question1
				cardBack.innerHTML = customObj.answer1
			}
			
		})
	}

}
