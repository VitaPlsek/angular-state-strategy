import { Injectable } from '@angular/core';


@Injectable()
export class LoremIpsumService {

  private wordLibrary = ['beef', 'chicken', 'pork', 'bacon', 'chuck', 'short loin', 'sirloin', 'shank', 'flank', 'sausage', 'pork belly', 'shoulder', 'cow', 'pig', 'ground round', 'hamburger', 'meatball', 'tenderloin', 'strip steak', 't-bone', 'ribeye', 'shankle', 'tongue', 'tail', 'pork chop', 'pastrami', 'corned beef', 'jerky', 'ham', 'fatback', 'ham hock', 'pancetta', 'pork loin', 'short ribs', 'spare ribs', 'beef ribs', 'drumstick', 'tri-tip', 'ball tip', 'venison', 'turkey', 'biltong', 'rump', 'jowl', 'salami', 'bresaola', 'meatloaf', 'brisket', 'boudin', 'andouille', 'capicola', 'swine', 'kielbasa', 'frankfurter', 'prosciutto', 'filet mignon', 'leberkas', 'turducken', 'doner', 'kevin', 'landjaeger', 'porchetta', 'burgdoggen'];

  private ucFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  generateWords(numberOfWords) {

    const words = [];
    for (let i = 1; i < numberOfWords; i++) {
      const randomNumber = Math.floor(Math.random() * (this.wordLibrary.length - 1));
      const word = this.wordLibrary[randomNumber];

      words.push(word);
    }

    words[0] = this.ucFirst(words[0]);

    return words.join(' ');
  }

}

