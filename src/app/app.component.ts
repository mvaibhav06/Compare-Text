import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  randomText = lorem.sentence();
  didUserWon = false;
  enteredText = '';

  onInput(val) {
    this.enteredText = val;
  }

  getClass(randomLetter: string, enteredLetter: String) {
    if (!enteredLetter) {
      return 'pending';
    } else if (enteredLetter === randomLetter) {
      return 'correct';
    } else {
      return 'incorrect';
    }
  }
}
