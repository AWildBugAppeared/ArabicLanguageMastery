import {
  ArabicLetter,
  arabicLettersWhichDontAcceptAlif,
  ArabicMiscCharacter,
  ArabicVowel,
} from './arabic-constants';
import {
  dualCharacterMappingsFirstLetters,
  dualCharacterMappingsSecondLetter,
  PhoneticArabicLetter,
  PhoneticArabicTanween,
} from './english-constants';
import {
  phoneticLetterDictionary,
  phoneticVowelDictionary,
} from './phonetic-dictionary';

export class PhoneticConverterService {
  public convertToArabic(english: string): string {
    const characterArray = english.split('');

    let arabic = '';

    let thirdLastArabicCharacter = '';
    let secondLastArabicCharacter = '';
    let lastArabicCharacter = '';
    let character = '';
    let nextCharacter = '';

    for (let i = 0; i < characterArray.length; i++) {
      thirdLastArabicCharacter = arabic[arabic.length - 3];
      secondLastArabicCharacter = arabic[arabic.length - 2];
      lastArabicCharacter = arabic[arabic.length - 1];
      character = characterArray[i];
      nextCharacter =
        i + 1 === characterArray.length ? '' : characterArray[i + 1];

      if (
        lastArabicCharacter === thirdLastArabicCharacter &&
        secondLastArabicCharacter === ArabicMiscCharacter.sukoon
      ) {
        arabic = arabic.substr(0, arabic.length - 2);
        arabic += ArabicMiscCharacter.shaddah;
      }

      if (
        character === ' ' &&
        i > 2 &&
        this.isLastWordEndingInTanween(english, i)
      ) {
        const secondLastLetter = english[i - 2];
        const lastLetter = english[i - 1];
        const tanweenSyllable = `${secondLastLetter}${lastLetter}`;

        arabic = arabic.substr(0, arabic.length - 2);
        arabic += this.convertToVowel(tanweenSyllable);
        arabic +=
          tanweenSyllable === PhoneticArabicTanween.an &&
          !arabicLettersWhichDontAcceptAlif.includes(arabic[arabic.length - 2])
            ? `${ArabicLetter.alif} `
            : ' ';

        continue;
      }

      if (
        this.isArabicLetter(lastArabicCharacter) &&
        lastArabicCharacter !== ArabicLetter.alif
      ) {
        if (this.isPhoneticVowel(character)) {
          arabic +=
            character === nextCharacter
              ? this.convertToVowel(`${character}${characterArray[++i]}`)
              : this.convertToVowel(character);
          continue;
        }
        if (
          this.isEnglishConsonant(character) ||
          (character === ' ' &&
            Object.values(ArabicVowel).includes(
              arabic[arabic.length - 2] as ArabicVowel
            ))
        ) {
          arabic += ArabicMiscCharacter.sukoon;
        }
      }

      if (
        nextCharacter &&
        dualCharacterMappingsFirstLetters.includes(character) &&
        dualCharacterMappingsSecondLetter === nextCharacter
      ) {
        arabic += this.convertToConsonant(`${character}${characterArray[++i]}`);
        continue;
      }

      arabic += this.convertToConsonant(character);
    }

    return arabic;
  }

  convertToConsonant(character: string): string {
    return phoneticLetterDictionary[character] ?? character;
  }

  convertToVowel(character: string): string {
    return phoneticVowelDictionary[character] ?? character;
  }

  isArabicLetter(character: string): boolean {
    return (
      !Object.values(ArabicVowel).includes(character as ArabicVowel) &&
      Object.values(ArabicLetter).includes(character as ArabicLetter)
    );
  }

  isEnglishConsonant(character: string): boolean {
    return !!Object.values(PhoneticArabicLetter).includes(
      character as PhoneticArabicLetter
    );
  }

  isLastWordEndingInTanween(
    english: string,
    spaceCharacterIndex: number
  ): boolean {
    const englishTrimmed = english.substr(0, spaceCharacterIndex);

    const secondLastLetter = englishTrimmed[englishTrimmed.length - 2];
    const lastLetter = englishTrimmed[englishTrimmed.length - 1];

    if (!secondLastLetter || !lastLetter) return false;

    const tanweenSyllable = `${secondLastLetter}${lastLetter}`;

    return !!Object.values(PhoneticArabicTanween).includes(
      tanweenSyllable as PhoneticArabicTanween
    );
  }

  isPhoneticVowel(character: string): boolean {
    return !!phoneticVowelDictionary[character];
  }
}
