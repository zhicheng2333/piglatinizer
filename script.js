$(document).ready(function() {

	$(".btn").click(function(){
		
		var input = $(".form-control").val()
		console.log(input);

		var result = pigLatinize(input);
		
   		$('.result-text').html("<h3>" + result + "</h3>")

    });

});


function pigLatinizeWord(word){
	var finalWord = ''
	var startingLetter = word[0]
	var endingLetters = word.slice(1, word.length);

	finalWord = endingLetters + startingLetter + "ay"

	return finalWord
}


function pigLatinize(sentence){
	var sentenceArray = sentence.split(" ");;
	var piglatinizedArray = [];

	for(var i = 0; i < sentenceArray.length; i++){
		piglatinizedArray.push(pigLatinizeWord(sentenceArray[i]));
		
	}

	console.log(piglatinizedArray);
	return piglatinizedArray.join(" ");
}
