var normal = "abcdefghijklmnopqrstuvwxyz"; //The original order of the english alphabet
var cipher = ""; //This will become the encrypted mapping
var sentence = "Hi there my name is Lloyd"; // whatever you would like to encrypt
var shift = 5; // whatever you would like to shift key to
var words = sentence.split(" "); //This takes the string from sentence and cuts it into a array words, cutting takes place where there are spaces

// ENCTRYPTION FUNCTION -  This function will handle all the encryption and return encrypted string
function encrypt(array, key) {
    var dummy = "";
    
    if(key < 1 && key > 26) {
        console.log("No encryption will take place please try again {incorrect input: 1:26}");
    }
    else {
        cipher = cipher + normal.slice(key) + normal.slice(0,key);
    }

    words.forEach(function(word) {
        for(var i = 0; i < word.length; i++) {
            dummy = dummy + cipher[normal.indexOf(word[i].toLowerCase())];
        }  
        dummy = dummy + " ";   
    });

    return dummy;
}


//Calling of the ENCRYPT function to encrypt your sentence with the needed key
console.log(encrypt(words,shift));
