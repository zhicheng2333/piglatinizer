// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add way to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkway.

// 1.1) Wire frame your project and think through the logic
// 1.2) Create your HTML and your click function to take in user input
// 2.1) Write function to figure out whether the first letter is a vowel
// 2.2) 
	// Complete two functions that take string as a parameter. 
	// One to transform the the word to pig latin if it starts with a vowel  
	// One to transform the the word to pig latin if it starts with a consonant 
// 3.1) 
	 // Complete the function toPigLatinSentence that takes a string sentence as a parameter. 
	 // Split the sentence into words. 
     // Itterate over each word and pig latinize it
// 3.2) 
	// add the piglatinized word to a new array
	// Join the array into a new string  


// Document Ready Function
$(document).ready(function() {
	$(".btn").click(function(){
		


    });
});

// Finds whether a single word starts with a vowel and runs the appropriate transformation function
function toPigLatinWord(word) {
  if (wordStartsWithVowel(word)) {
    return wordStartsWithVowelTransformation(word);
  } else {
    return wordStartsWithConsonantTransformation(word);
  }
}

// This function should return true if the input word starts with a vowel,
// and false if it does not.
function wordStartsWithVowel(word) {
  // Write your code here 



}

// Appends "way" to the end of the word and return it.
function wordStartsWithVowelTransformation(word) {
  // Write your code here
 


}

// Moves the first consonant (or consonant cluster) to the end of the word
// and then appends "ay" to the end of the word.
function wordStartsWithConsonantTransformation(word) {
  // Write your code here
  


}

// Itterates through all the words in the sentence and transforms each word to pig latin

function toPigLatinSentence(sentence){




}

