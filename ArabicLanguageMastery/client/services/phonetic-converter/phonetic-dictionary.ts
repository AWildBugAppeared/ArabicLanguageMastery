import { ArabicLetters } from './arabic-constants';

const phoneticDictionary: { [id: string]: ArabicLetters } = {};

phoneticDictionary.a = ArabicLetters.alif;
phoneticDictionary.b = ArabicLetters.baa;
phoneticDictionary.t = ArabicLetters.taa;
phoneticDictionary.th = ArabicLetters.thaa;
phoneticDictionary.j = ArabicLetters.jeem;
phoneticDictionary.H = ArabicLetters.Haa;
phoneticDictionary.kh = ArabicLetters.khaa;
phoneticDictionary.d = ArabicLetters.dhaal;
phoneticDictionary.zh = ArabicLetters.zhaal;
phoneticDictionary.r = ArabicLetters.raa;
phoneticDictionary.z = ArabicLetters.zaa;
phoneticDictionary.s = ArabicLetters.seen;
phoneticDictionary.sh = ArabicLetters.sheen;
phoneticDictionary.S = ArabicLetters.saad;
phoneticDictionary.D = ArabicLetters.daad;
phoneticDictionary.T = ArabicLetters.Tha;
phoneticDictionary.Z = ArabicLetters.Zha;
phoneticDictionary['3'] = ArabicLetters.ein;
phoneticDictionary.gh = ArabicLetters.ghayn;
phoneticDictionary.f = ArabicLetters.faa;
phoneticDictionary.q = ArabicLetters.qaaf;
phoneticDictionary.k = ArabicLetters.kaaf;
phoneticDictionary.l = ArabicLetters.laam;
phoneticDictionary.m = ArabicLetters.meem;
phoneticDictionary.n = ArabicLetters.nuun;
phoneticDictionary.w = ArabicLetters.waw;
phoneticDictionary.h = ArabicLetters.haa;
phoneticDictionary.A = ArabicLetters.hamza;
phoneticDictionary.I = ArabicLetters.hamzaKasrah;
phoneticDictionary["'"] = ArabicLetters.hamzaSmall;
phoneticDictionary.y = ArabicLetters.yaa;

export { phoneticDictionary };
