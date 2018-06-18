// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.

$( document ).ready(function() {
  



});


// Takes a word as a parameter and returns a transfromed word. 
function wordToPigLatin(word) {
	var vowels = [ 'a', 'e', 'i', 'o', 'u' ];

	var firstLetter = word[0];

	if (vowels.indexOf(firstLetter) > -1) {
		return word + 'ay';
	} else {
		return word.slice(1) + firstLetter + 'ay';
	}
}


// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance


