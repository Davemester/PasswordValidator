export class Password {

    constructor(password){

        this.password = password;
        this.passwordStrength = 0;
        this.splittedPw = password.split('');
        this.capitalLetters = 0;
        this.lowerCaseLetters = 0;
        this.numbers = 0;
        this.specCharacters = 0;

    }

    setPasswordStrength(value){
        this.passwordStrength= value;
        return this.passwordStrength;
    }



 
    
}

