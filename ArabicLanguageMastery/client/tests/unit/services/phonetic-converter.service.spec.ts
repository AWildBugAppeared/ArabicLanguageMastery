/* eslint-disable  @typescript-eslint/no-explicit-any */

import { phoneticConverterService as service } from '@/services/service-exporter';

describe('PhoneticConverterService', () => {
  beforeEach(() => {});

  afterEach(() => {});

  it('should return the arabic alphabet', () => {
    const english =
      "a b t th j H kh d zh r z s sh S D T Z 3 g gh f q k l m n w h A I ' y";
    const expectedArabic =
      'ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ غ ف ق ك ل م ن و ه أ إ ء ي';

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
  /*
  it('should ', () => {
  });
  */
});
