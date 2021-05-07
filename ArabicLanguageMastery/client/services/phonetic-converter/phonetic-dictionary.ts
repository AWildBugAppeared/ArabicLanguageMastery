import { ArabicLetters, ArabicVowels } from './arabic-constants';
import {
  PhoneticArabicDipthongs,
  PhoneticArabicVowels,
} from './english-constants';

const phoneticLetterDictionary: { [id: string]: ArabicLetters } = {};

// #region Alphabet/Letters
phoneticLetterDictionary.a = ArabicLetters.alif;
phoneticLetterDictionary.b = ArabicLetters.baa;
phoneticLetterDictionary.t = ArabicLetters.taa;
phoneticLetterDictionary.th = ArabicLetters.thaa;
phoneticLetterDictionary.j = ArabicLetters.jeem;
phoneticLetterDictionary.H = ArabicLetters.Haa;
phoneticLetterDictionary.kh = ArabicLetters.khaa;
phoneticLetterDictionary.d = ArabicLetters.dhaal;
phoneticLetterDictionary.zh = ArabicLetters.zhaal;
phoneticLetterDictionary.r = ArabicLetters.raa;
phoneticLetterDictionary.z = ArabicLetters.zaa;
phoneticLetterDictionary.s = ArabicLetters.seen;
phoneticLetterDictionary.sh = ArabicLetters.sheen;
phoneticLetterDictionary.S = ArabicLetters.saad;
phoneticLetterDictionary.D = ArabicLetters.daad;
phoneticLetterDictionary.T = ArabicLetters.Tha;
phoneticLetterDictionary.Z = ArabicLetters.Zha;
phoneticLetterDictionary['3'] = ArabicLetters.ein;
phoneticLetterDictionary.g = ArabicLetters.ghayn;
phoneticLetterDictionary.gh = ArabicLetters.ghayn;
phoneticLetterDictionary.f = ArabicLetters.faa;
phoneticLetterDictionary.q = ArabicLetters.qaaf;
phoneticLetterDictionary.k = ArabicLetters.kaaf;
phoneticLetterDictionary.l = ArabicLetters.laam;
phoneticLetterDictionary.m = ArabicLetters.meem;
phoneticLetterDictionary.n = ArabicLetters.nuun;
phoneticLetterDictionary.w = ArabicLetters.waw;
phoneticLetterDictionary.h = ArabicLetters.haa;
phoneticLetterDictionary.A = ArabicLetters.hamza;
phoneticLetterDictionary.I = ArabicLetters.hamzaKasrah;
phoneticLetterDictionary["'"] = ArabicLetters.hamzaSmall;
phoneticLetterDictionary.y = ArabicLetters.yaa;
// #endregion

const phoneticDipthongDictionary: { [id: string]: ArabicVowels } = {};

const phoneticVowelDictionary: { [id: string]: ArabicVowels } = {};

phoneticVowelDictionary[PhoneticArabicVowels.a] = ArabicVowels.fathah;
phoneticVowelDictionary[PhoneticArabicVowels.aa] = ArabicVowels.harfIllahAlif;
phoneticVowelDictionary[PhoneticArabicVowels.e] = ArabicVowels.kasrah;
phoneticVowelDictionary[PhoneticArabicVowels.ee] = ArabicVowels.harfIllahYaa;
phoneticVowelDictionary[PhoneticArabicVowels.ii] = ArabicVowels.harfIllahYaa;
phoneticVowelDictionary[PhoneticArabicVowels.i] = ArabicVowels.kasrah;
phoneticVowelDictionary[PhoneticArabicVowels.o] = ArabicVowels.dammah;
phoneticVowelDictionary[PhoneticArabicVowels.oo] = ArabicVowels.harfIllahWaw;
phoneticVowelDictionary[PhoneticArabicVowels.u] = ArabicVowels.dammah;
phoneticVowelDictionary[PhoneticArabicVowels.uu] = ArabicVowels.harfIllahWaw;

export {
  phoneticDipthongDictionary,
  phoneticLetterDictionary,
  phoneticVowelDictionary,
};
