


 export class PasswordCheck {

    constructor() {
        this.badPasswords = [
    'biteme', 'london','soccer', 'william','querty','liverpool','pussy',
            'admin123','whatever','dallas','hockey','test','zaq1zaq1','1q2w3e',
            'aaaaaa','killer','bandit','ashley','cookie','merlin','trustno1',
           'ranger','chelsea','banana','jennifer','1990','amanda','1989', 'hunter',
              'nicole', 'hello','maverick','blahblah','mercedes','corvette','computer',
          'cheese','ferrari','starwars','1qaz2wsx','andrea','lakers','andrew','12341234',
            'matthew','robert','1234','sophie','pepper'
        ]   //TOP 50 worst password
       
        this.specChars = ['!','"','#','$','%','&',"'",'(',')','*','+',',','-',
                        '.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~'];

        this.pwStrengthText = ['Acceptable','Strong','Very Strong'];
    }
    checkPassword(password) {
        
        if (!this.isValidPassword(password))  {
            
            return false;
        }else {return true}

    }


    countAndSetPwChars (password) {
        try {

        password.numbers = password.password.match(/\d/g).length;
        password.capitalLetters = password.password.match(/\p{Lu}/gu).length;
        password.lowerCaseLetters = password.password.match(/\p{Ll}/gu).length;

        password.splittedPw.forEach(item=>{
            if (this.specChars.includes(item)){
                password.specCharacters++;
            }
        })
        return true;
    }
        catch {
            return false;
        }
        
    }


    isValidPassword(password) {
        console.log(password.password.length)
        if( password.password.length < 9 ||
        this.badPasswords.includes(password.password) ||
        !this.countAndSetPwChars(password) ||
        !password.capitalLetters ||
        !password.numbers ||
        !password.lowerCaseLetters ||
        !password.specCharacters) {
            return false;
        } else {
            return true;
        }
    
    }

    calculatePwStrength(password) {
        
        let number = password.numbers*1.2;
        let capLetter = password.capitalLetters*1.2;
        let specChars = password.specCharacters*1.5;
        let lowerCaseLetters = password.lowerCaseLetters
        let result = Math.round( (number+capLetter+specChars+lowerCaseLetters)/password.password.length*100);
        console.log(result)
        return result;
    }

    returnStrengthTextAndColor(pwStrength) {
        let result;
        if (pwStrength <= 120) {
            result = [this.pwStrengthText[0],'lightgreen'];
        }

        if (pwStrength > 120 && pwStrength < 124) {
            result = [this.pwStrengthText[1],'green'];
        }

        if (pwStrength >= 124) {
            result = [this.pwStrengthText[2],'darkgreen'];
        }
        return result;

    }

}