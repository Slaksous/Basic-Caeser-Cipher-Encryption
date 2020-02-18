var normal = "abcdefghijklmnopqrstuvwxyz"; //The original order of the english alphabet
var cipher = ""; //This will become the encrypted mapping

//USER INPUT ===================================================================================================
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Would you like to encrypt of decrypt (e/d) ? ", function(option) {
    rl.question("What Key to use:", function(shiftKey) {
        rl.question("String you would like to convert: ", function(str) {
            words = str.split(" ");
            if(option === 'e') {
                console.log('encryption');
                console.log(encrypt(words, shiftKey));
            }
            else if(option === 'd') {
                console.log('decryption');
                console.log(decrypt(words, shiftKey));
            }
            rl.close();
        });
    }); 
});
//===============================================================================================================

// ENCTRYPTION FUNCTION =========================================================================================
function encrypt(array, key) {
    var dummy = "";
    createCipher(key); //making new cipher based on key

    words.forEach(function(word) { //building of encrypted string
        for(var i = 0; i < word.length; i++) {
            dummy = dummy + cipher[normal.indexOf(word[i].toLowerCase())];
        }  
        dummy = dummy + " ";   
    });

    return dummy;
}
//===============================================================================================================

// DECRYPTION FUNCTION ==========================================================================================
function decrypt(array, key) {
    var dummy = ""; 
    createCipher(key); //making new cipher based on key

    words.forEach(function(word) { //building of normal string
        for(var i = 0; i < word.length; i++) {
            dummy = dummy + normal[cipher.indexOf(word[i].toLowerCase())];
        }  
        dummy = dummy + " ";   
    });
    return dummy; //final normal string
}
//===============================================================================================================

// CREATE CIPHER FUNCTION =======================================================================================
function createCipher(key) {
    if(key < 1 && key > 26) { //checking that key is not less than 1 or more than 26
        console.log("No encryption will take place please try again {incorrect input: 1:26}");
    }
    else { // building of cipher
        cipher = cipher + normal.slice(key) + normal.slice(0,key);
    }
}
//===============================================================================================================

