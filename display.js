export class Display {

    constructor() {
        this.strenghtBar = document.getElementById('strength');
        this.isValidPwField = document.getElementById('strengthdisplay');
    }

    flashHtmlElement(element){
        console.log(element);
        element.style.display='block';
         window.setTimeout(i=>{
            element.style.display = 'none';
        },3000) 

    }
    changeValidPwField(text,color) {
        this.isValidPwField.textContent = text;
        this.isValidPwField.style.backgroundColor = color;
    }

    changeStrengthBarText(text) {
        this.strenghtBar.textContent = text;
    }

    changeStrengthBarColor(color) {
        this.strenghtBar.style.backgroundColor=color;
    }

    displayWrongPw(){
        this.changeValidPwField('The Password is not good!!!!','red');
        this.flashHtmlElement(this.isValidPwField);
        
    }

    displayGoodPw(){
        this.changeValidPwField('The Password is good!!!!','lightblue');
        this.flashHtmlElement(this.isValidPwField);
    }

    displayPwStrength(text,color) {

        this.changeStrengthBarText(text);
        this.changeStrengthBarColor(color);
        this.flashHtmlElement(this.strenghtBar);
    }

}