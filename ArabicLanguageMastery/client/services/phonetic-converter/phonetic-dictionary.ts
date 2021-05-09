import {
  ArabicLetter,
  ArabicSpecialWords,
  ArabicVowel,
} from './arabic-constants';
import {
  PhoneticArabicLetter,
  PhoneticArabicSpecialWords,
  PhoneticArabicTanween,
  PhoneticArabicVowel,
} from './english-constants';

const phoneticLetterDictionary: { [id: string]: string } = {};

// #region Alphabet/Letters
phoneticLetterDictionary[PhoneticArabicLetter.alif] = ArabicLetter.alif;
phoneticLetterDictionary[PhoneticArabicLetter.baa] = ArabicLetter.baa;
phoneticLetterDictionary[PhoneticArabicLetter.taa] = ArabicLetter.taa;
phoneticLetterDictionary[PhoneticArabicLetter.thaa] = ArabicLetter.thaa;
phoneticLetterDictionary[PhoneticArabicLetter.jeem] = ArabicLetter.jeem;
phoneticLetterDictionary[PhoneticArabicLetter.Haa] = ArabicLetter.Haa;
phoneticLetterDictionary[PhoneticArabicLetter.khaa] = ArabicLetter.khaa;
phoneticLetterDictionary[PhoneticArabicLetter.dhaal] = ArabicLetter.dhaal;
phoneticLetterDictionary[PhoneticArabicLetter.zhaal] = ArabicLetter.zhaal;
phoneticLetterDictionary[PhoneticArabicLetter.raa] = ArabicLetter.raa;
phoneticLetterDictionary[PhoneticArabicLetter.zaa] = ArabicLetter.zaa;
phoneticLetterDictionary[PhoneticArabicLetter.seen] = ArabicLetter.seen;
phoneticLetterDictionary[PhoneticArabicLetter.sheen] = ArabicLetter.sheen;
phoneticLetterDictionary[PhoneticArabicLetter.saad] = ArabicLetter.saad;
phoneticLetterDictionary[PhoneticArabicLetter.daad] = ArabicLetter.daad;
phoneticLetterDictionary[PhoneticArabicLetter.Tha] = ArabicLetter.Tha;
phoneticLetterDictionary[PhoneticArabicLetter.Zha] = ArabicLetter.Zha;
phoneticLetterDictionary[PhoneticArabicLetter.ayn] = ArabicLetter.ein;
phoneticLetterDictionary[PhoneticArabicLetter.ghayn] = ArabicLetter.ghayn;
phoneticLetterDictionary[PhoneticArabicLetter.ghaynShort] = ArabicLetter.ghayn;
phoneticLetterDictionary[PhoneticArabicLetter.faa] = ArabicLetter.faa;
phoneticLetterDictionary[PhoneticArabicLetter.qaaf] = ArabicLetter.qaaf;
phoneticLetterDictionary[PhoneticArabicLetter.kaaf] = ArabicLetter.kaaf;
phoneticLetterDictionary[PhoneticArabicLetter.laam] = ArabicLetter.laam;
phoneticLetterDictionary[PhoneticArabicLetter.meem] = ArabicLetter.meem;
phoneticLetterDictionary[PhoneticArabicLetter.noon] = ArabicLetter.noon;
phoneticLetterDictionary[PhoneticArabicLetter.waw] = ArabicLetter.waw;
phoneticLetterDictionary[PhoneticArabicLetter.wawHamzah] =
  ArabicLetter.wawHamzah;
phoneticLetterDictionary[PhoneticArabicLetter.haa] = ArabicLetter.haa;
phoneticLetterDictionary[PhoneticArabicLetter.hamzah] = ArabicLetter.hamza;
phoneticLetterDictionary[PhoneticArabicLetter.hamzahKasrah] =
  ArabicLetter.hamzaKasrah;
phoneticLetterDictionary[PhoneticArabicLetter.hamzahSmall] =
  ArabicLetter.hamzaSmall;
phoneticLetterDictionary[PhoneticArabicLetter.yaa] = ArabicLetter.yaa;
phoneticLetterDictionary[PhoneticArabicLetter.alifMaqsoor] =
  ArabicLetter.alifMaqsoor;
// #endregion

// #region Special words
const phoneticSpecialWordsDictionary: { [id: string]: ArabicSpecialWords } = {};

phoneticSpecialWordsDictionary[PhoneticArabicSpecialWords.Allah] =
  ArabicSpecialWords.Allah;
phoneticSpecialWordsDictionary[PhoneticArabicSpecialWords.Allahumma] =
  ArabicSpecialWords.Allahumma;
// #endregion

// #region Vowels
const phoneticVowelDictionary: { [id: string]: ArabicVowel } = {};

phoneticVowelDictionary[PhoneticArabicVowel.a] = ArabicVowel.fathah;
phoneticVowelDictionary[PhoneticArabicVowel.aa] = ArabicVowel.harfIllahAlif;
phoneticVowelDictionary[PhoneticArabicVowel.standingAlif] =
  ArabicVowel.standingAlifSuper;
phoneticVowelDictionary[PhoneticArabicTanween.an] = ArabicVowel.fathatain;
phoneticVowelDictionary[PhoneticArabicVowel.e] = ArabicVowel.kasrah;
phoneticVowelDictionary[PhoneticArabicVowel.ee] = ArabicVowel.harfIllahYaa;
phoneticVowelDictionary[PhoneticArabicTanween.en] = ArabicVowel.kasratain;
phoneticVowelDictionary[PhoneticArabicVowel.ii] = ArabicVowel.standingAlifSub;
phoneticVowelDictionary[PhoneticArabicTanween.in] = ArabicVowel.kasratain;
phoneticVowelDictionary[PhoneticArabicVowel.i] = ArabicVowel.kasrah;
phoneticVowelDictionary[PhoneticArabicVowel.o] = ArabicVowel.dammah;
phoneticVowelDictionary[PhoneticArabicVowel.oo] = ArabicVowel.harfIllahWaw;
phoneticVowelDictionary[PhoneticArabicTanween.on] = ArabicVowel.dammatain;
phoneticVowelDictionary[PhoneticArabicVowel.u] = ArabicVowel.dammah;
phoneticVowelDictionary[PhoneticArabicVowel.uu] = ArabicVowel.dammahInverted;
phoneticVowelDictionary[PhoneticArabicTanween.un] = ArabicVowel.dammatain;
// #endregion

export {
  phoneticSpecialWordsDictionary,
  phoneticLetterDictionary,
  phoneticVowelDictionary,
};
