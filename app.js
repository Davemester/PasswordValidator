
import { PasswordCheck } from './passwordcheck.js'
import { Password } from './password.js'
import { Display } from './display.js'

class Main {

    constructor (){
        this.pwField = document.getElementById('password');
    }

    mainScript() {
        let password = new Password(this.pwField.value);
        let pwCheck = new PasswordCheck();
        let display = new Display();
       if ( pwCheck.checkPassword(password)) {
           
            password.setPasswordStrength(pwCheck.calculatePwStrength(password));
            display.displayGoodPw();
            let strengthFieldContent = pwCheck.returnStrengthTextAndColor(password.passwordStrength)
            display.displayPwStrength(strengthFieldContent[0],strengthFieldContent[1]); 

       } else {
        display.displayWrongPw();
       }
    }
}

function test() {
    let main = new Main();
    main.mainScript();
}

document.querySelector('.okbutton').onclick = test;
