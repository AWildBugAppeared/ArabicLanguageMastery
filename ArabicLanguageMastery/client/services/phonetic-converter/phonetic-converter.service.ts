import {
  ArabicLetter,
  arabicLettersWhichDontAcceptAlif,
  ArabicLigature,
  ArabicMiscCharacter,
  arabicStandingHamzahs,
  ArabicVowel,
} from './arabic-constants';
import {
  dualCharacterMappingsFirstLetters,
  dualCharacterMappingsSecondLetter,
  PhoneticArabicLetter,
  PhoneticArabicTanween,
  specialWordPrefixTag,
} from './english-constants';
import {
  phoneticLetterDictionary,
  phoneticSpecialWordsDictionary,
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
      nextCharacter = characterArray[i + 1];

      // Check for special words
      if (`${character}${nextCharacter}` === specialWordPrefixTag) {
        const results = english.substring(i).match(/(?<=##)[^#]+(?=##)/);

        if (results && results?.length > 0) {
          const specialWord = results[0];
          arabic += this.convertSpecialWords(specialWord);
          // ##Allah##
          // ^Current character index which needs to be placed at the end
          i += specialWord.length + specialWordPrefixTag.length + 1;
          continue;
        }
      }

      if (
        lastArabicCharacter === thirdLastArabicCharacter &&
        secondLastArabicCharacter === ArabicMiscCharacter.sukoon
      ) {
        arabic = arabic.substr(0, arabic.length - 2);
        arabic += ArabicMiscCharacter.shaddah;
      }

      if (
        character === ' ' &&
        // i > 2 &&
        english[i - 6] &&
        english[i - 6] !== ' ' &&
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
        (this.isArabicLigature(lastArabicCharacter) ||
          this.isArabicLetter(lastArabicCharacter)) &&
        lastArabicCharacter !== ArabicLetter.alif
      ) {
        if (this.isPhoneticVowel(character)) {
          let vowel = '';

          vowel =
            character === nextCharacter
              ? `${character}${characterArray[++i]}`
              : character;

          arabic += this.convertToVowel(vowel);
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

  convertSpecialWords(word: string): string {
    return phoneticSpecialWordsDictionary[word] ?? word;
  }

  convertToConsonant(character: string): string {
    return phoneticLetterDictionary[character] ?? character;
  }

  convertToVowel(character: string): string {
    return phoneticVowelDictionary[character] ?? character;
  }

  deleteLastCharacter(input: string): string {
    input = input.substring(0, input.length - 1);
    return input;
  }

  isArabicLetter(character: string): boolean {
    return (
      !Object.values(ArabicVowel).includes(character as ArabicVowel) &&
      Object.values(ArabicLetter).includes(character as ArabicLetter)
    );
  }

  isArabicLigature(ligature: string): boolean {
    return Object.values(ArabicLigature).includes(ligature as ArabicLigature);
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

  isStandingHamzah(character: string): boolean {
    return arabicStandingHamzahs.includes(character);
  }
}
