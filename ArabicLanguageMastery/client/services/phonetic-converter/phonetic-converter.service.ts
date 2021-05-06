import {
  dualCharacterMappingsFirstLetters,
  dualCharacterMappingsSecondLetter,
} from './english-constants';
import { phoneticDictionary } from './phonetic-dictionary';

export class PhoneticConverterService {
  public convertToArabic(english: string): string {
    const characterArray = english.split('');

    let arabic = '';
    let character = '';

    for (let i = 0; i < characterArray.length; i++) {
      character = characterArray[i];

      if (
        i + 1 !== characterArray.length &&
        dualCharacterMappingsFirstLetters.includes(character) &&
        dualCharacterMappingsSecondLetter === characterArray[i + 1]
      ) {
        arabic += this.convert(`${character}${characterArray[++i]}`);
        continue;
      } else arabic += this.convert(character);
    }

    return arabic;
  }

  convert(character: string): string {
    return phoneticDictionary[character] ?? character;
  }
}
