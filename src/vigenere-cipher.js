class VigenereCipheringMachine {


    constructor(isDirect) {
        this.isDirect = isDirect !== false;
    }

    encrypt(str, key) {
        if (str === 'undefined' || key === 'undefined') throw new Error();
        let keyIndex = -1;
        let result = str.split('')
        .map((letter, index) =>{
            if (this.isLowerCase(letter)) {
                keyIndex++;
                return String.fromCharCode((letter.charCodeAt() + key[keyIndex % key.length].toLowerCase().charCodeAt() - 194) % 26 + 97);
            }
            else if (this.isUpperCase(letter)) {
                keyIndex++;
                return String.fromCharCode((letter.charCodeAt() + key[keyIndex % key.length].toUpperCase().charCodeAt() - 130) % 26 + 65);
            }
            else {
                return letter;
            }
            
       });
       if (this.isDirect) {
            return result.join('').toUpperCase();
       }
       else {
            return result.reverse().join('').toUpperCase();
       }
    }



    decrypt(str, key) {
        if (str === 'undefined' || key === 'undefined') throw new Error();
        let keyIndex = -1;
        key = key.toUpperCase();
        let result = str.split('')
        .map((letter, index) =>{
            // if (!this.isLetter) {
            //     return letter;
            // }
            if (this.isLowerCase(letter)) {
                keyIndex++;
                return String.fromCharCode((letter.charCodeAt() + 26 - key[keyIndex % key.length].toLowerCase().charCodeAt()) % 26 + 97);
            }
            else if (this.isUpperCase(letter)) {
                keyIndex++;
                return String.fromCharCode((letter.charCodeAt() + 26 - key[keyIndex % key.length].toUpperCase().charCodeAt()) % 26 + 65);
            }
            else {
                return letter;
            }
            
       });
        if (this.isDirect) {
            return result.join('');
        }
        else {
            return result.reverse().join('');
        }
    }


    isUpperCase(letter) {
        return 65 <= letter.charCodeAt() && letter.charCodeAt() <= 90; 
    }

    isLowerCase(letter) {
        return 97 <= letter.charCodeAt() && letter.charCodeAt() <= 122; 
    }
}

module.exports = VigenereCipheringMachine;
