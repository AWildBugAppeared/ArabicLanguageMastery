import { ArabicLetters, ArabicVowels } from './arabic-constants';
import {
  dualCharacterMappingsFirstLetters,
  dualCharacterMappingsSecondLetter,
} from './english-constants';
import {
  phoneticLetterDictionary,
  phoneticVowelDictionary,
} from './phonetic-dictionary';

export class PhoneticConverterService {
  public convertToArabic(english: string): string {
    const characterArray = english.split('');

    let arabic = '';

    let lastArabicCharacter = '';
    let character = '';
    let nextCharacter = '';

    for (let i = 0; i < characterArray.length; i++) {
      lastArabicCharacter = arabic[arabic.length - 1];
      character = characterArray[i];
      nextCharacter =
        i + 1 === characterArray.length ? '' : characterArray[i + 1];

      if (
        this.isArabicConsonant(lastArabicCharacter) &&
        this.isPhoneticVowel(character)
      ) {
        arabic +=
          character === nextCharacter
            ? this.convertToVowel(`${character}${characterArray[++i]}`)
            : this.convertToVowel(character);
        continue;
      }
      if (
        nextCharacter &&
        dualCharacterMappingsFirstLetters.includes(character) &&
        dualCharacterMappingsSecondLetter === nextCharacter
      ) {
        arabic += this.convertToConsonant(`${character}${characterArray[++i]}`);
        continue;
      } else arabic += this.convertToConsonant(character);
    }

    return arabic;
  }

  convertToConsonant(character: string): string {
    return phoneticLetterDictionary[character] ?? character;
  }

  convertToVowel(character: string): string {
    return phoneticVowelDictionary[character] ?? character;
  }

  isArabicConsonant(character: string): boolean {
    return (
      !Object.values(ArabicVowels).includes(character as ArabicVowels) &&
      Object.values(ArabicLetters).includes(character as ArabicLetters)
    );
  }

  isPhoneticVowel(character: string): boolean {
    return !!phoneticVowelDictionary[character];
  }
}
