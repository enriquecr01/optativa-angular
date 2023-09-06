import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate'
})

// ng generate pipe translate --skip-tests=true
export class TranslatePipe implements PipeTransform {
  

  readonly DICTIONARY: { [key: string]: any } = {
    'es': {
      'hello': 'Hola',
      'hau': '¿Como estas?',
      'imfty': 'Estoy bien, gracias',
    },
    'en': {
      'hello': 'Hello',
      'hau': 'How are you?',
      'imfty': "I'm fine, thank you",
    },
    'fr': {
      'hello': 'Salut',
      'hau': 'Comment ça va?',
      'imfty': 'Je vais bien, merci',
    },
  }

  transform(value: string, args: string): string {
    if (args != null) {
      return this.DICTIONARY[args][value]
    }
    return '';
  }

}
