/* eslint-disable  @typescript-eslint/no-explicit-any */

import { phoneticConverterService as service } from '@/services/service-exporter';

describe('PhoneticConverterService', () => {
  beforeEach(() => {});

  afterEach(() => {});

  it('should return the arabic alphabet', () => {
    const english =
      "a b t th j H kh d zh r z s sh S D T Z 3 g gh f q k l m n w W h A I ' y Y";
    const expectedArabic =
      'ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ غ ف ق ك ل م ن و ؤ ه أ إ ء ي ى';

    const arabic = service.convertToArabic(english);

    expect(arabic).toEqual(expectedArabic);
  });

  it('should return the short Arabic vowels', () => {
    const english = 'yajidu';
    const expectedArabic = 'يَجِدُ';

    const arabic = service.convertToArabic(english);

    expect(arabic).toEqual(expectedArabic);
  });

  it('should return the dipthongs', () => {
    const words = ['suuqiinaa', 'sooqeenaa'];
    const expectedArabic = 'سُوْقِيْنَا';

    words.forEach((word: string) => {
      const arabic = service.convertToArabic(word);
      expect(arabic).toEqual(expectedArabic);
    });
  });

  it('should process sukoons', () => {
    const words = ['jurju', 'Aay '];

    const jurju = 'جُرْجُ';
    const ay = 'أَيْ ';

    const expectedArabicWords = [jurju, ay];

    words.forEach((word: string, index: number) => {
      const arabic = service.convertToArabic(word);
      expect(arabic).toEqual(expectedArabicWords[index]);
    });
  });

  it('should not put sukoon on alif', () => {
    const english = 'waaHid';
    const expectedArabic = 'وَاحِد';

    const arabic = service.convertToArabic(english);

    expect(arabic).toEqual(expectedArabic);
  });

  it('should process tanweens', () => {
    const words = ['zaydun ', 'zaydan ', 'zaydin '];

    const zaydun = 'زَيْدٌ ';
    const zaydan = 'زَيْدًا ';
    const zaydin = 'زَيْدٍ ';

    const expectedArabicWords = [zaydun, zaydan, zaydin];

    words.forEach((word: string, index: number) => {
      const arabic = service.convertToArabic(word);
      expect(arabic).toEqual(expectedArabicWords[index]);
    });
  });

  it('should not add alif after kasratain for letters which do not accept alif', () => {
    const words = ['maljaAan ', "samaa'an "];

    const maljaAn = 'مَلْجَأً ';
    const sky = 'سَمَاءً ';

    const expectedArabicWords = [maljaAn, sky];

    words.forEach((word: string, index: number) => {
      const arabic = service.convertToArabic(word);
      expect(arabic).toEqual(expectedArabicWords[index]);
    });
  });

  it('should add shaddahs to repeated letters', () => {
    const english = 'layusakhkhiranna';
    const expectedArabic = 'لَيُسَخِّرَنَّ';

    const arabic = service.convertToArabic(english);

    expect(arabic).toEqual(expectedArabic);
  });
  /*
  it('should ', () => {
  });
  /*
  it('should ', () => {
  });
  /*
  it('should ', () => {
  });
  /*
  it('should ', () => {
  });
  /*
  it('should ', () => {
  });
  */
});
