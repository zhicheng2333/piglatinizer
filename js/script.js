$("document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.
    var alawys = 'ways'
    var piglatin = 'ay'
    var consonant = ['B','C','D','F','G','H','J','K','L','M','N','P','Q','R','S','T','Y','V','X','Z'];
    var vowel = ['A','E','I','O','U'];

    $("#button").click(function() {
        var input = $(".input").val();
        var first_letter = input.charAt(0);
        first_letter = first_letter.toUpperCase();
        if (consonant.includes(first_letter)) {
            console.log("First letter is a consonant", first_letter);
            var length_of_word = input.length;
            var trimmed = input.slice(1, length_of_word)
            var translated = trimmed + first_letter + piglatin
            // append the translated string to your output HTML
        } else if (first_letter in vowel) {
            print(first_letter,'is a vowel')
            pig_latin=word+ways
            print('The word in Pig Latin is:',pig_latin)
        } else {
            print(' I dont know what is this',first_letter)
        }
        $(".output").text('<p>' + inputworld + '</p>');
    }); // end click handler
});
