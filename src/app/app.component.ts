import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  length = 0;
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onChangeUseLetters() {
    console.log('bla');

    this.includeLetters = this.includeLetters ? false : true;
    console.log(this.includeLetters);
  }
  onChangeUseNumbers() {
    this.includeNumbers = this.includeNumbers ? false : true;
    console.log('num' + this.includeNumbers);
  }
  onChangeUseSymbols() {
    this.includeSymbols = this.includeSymbols ? false : true;
    console.log(this.includeSymbols);
  }

  onButtonClick() {
    // console.log(`generate password with
    // LetersL:${this.includeLetters}
    // Numbers:${this.includeNum}
    // Symbols:${this.includeSymbol}`);
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwx';
    const symbols = '!@#$%^&*()';

    let validChars = '';

    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }
    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    console.log(generatedPassword);

    this.password = generatedPassword;
  }
  onChangeLength(v: string) {
    const parsedValue = parseInt(v);
    //console.log(parsedValue);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
      //console.log('this.length');
    }
  }
}
