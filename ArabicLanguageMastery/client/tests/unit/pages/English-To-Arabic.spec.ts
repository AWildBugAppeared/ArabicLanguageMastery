/* eslint-disable  @typescript-eslint/no-explicit-any */

// Imports
import Vue from 'vue';
import Vuetify from 'vuetify';

// Utilities
import { createLocalVue, mount, Wrapper } from '@vue/test-utils';

import EnglishToArabic from '@/pages/English-To-Arabic.vue';
import { phoneticConverterService } from '@/services/service-exporter';

describe('English-To-Arabic.vue', () => {
  let clipboardContents = '';

  Object.assign(navigator, {
    clipboard: {
      writeText: jest.fn((text) => {
        clipboardContents = text;
      }),
      readText: jest.fn(() => clipboardContents),
    },
  });

  const convertedText = 'arabic text';
  phoneticConverterService.convertToArabic = jest
    .fn()
    .mockReturnValue(convertedText);

  const localVue = createLocalVue();
  let wrapper: Wrapper<Vue & { [key: string]: any }>;
  let vuetify: Vuetify;

  const mountWrapper = () => {
    wrapper = mount(EnglishToArabic, {
      localVue,
      vuetify,
      data() {
        return {};
      },
      mocks: {},
    });
  };

  beforeEach(() => {
    vuetify = new Vuetify({
      mocks: {
        $vuetify: {},
      },
    });
    Vue.use(Vuetify);
    document.body.setAttribute('data-app', 'true');
  });

  afterEach(() => {
    wrapper.destroy();
    jest.resetModules();
    jest.clearAllMocks();
  });

  it('should convert phonetic English to Arabic', async () => {
    mountWrapper();
    await wrapper.vm.$nextTick();

    const textToConvert = 'wa ((Allah))u Aakbaru';
    const textArea = wrapper.find('[data-phonetic-text-area]');
    textArea.setValue(textToConvert);
    await wrapper.vm.$nextTick();

    const arabicText = wrapper.find('[data-arabic]');

    const converterServiceSpy = (phoneticConverterService.convertToArabic as jest.Mock)
      .mock;

    expect(
      converterServiceSpy.calls[converterServiceSpy.calls.length - 1][0]
    ).toBe(textToConvert);
    expect(
      converterServiceSpy.calls[converterServiceSpy.calls.length - 1][1]
    ).toBe(true);
    expect(arabicText.html()).toMatchSnapshot();
  });

  it('should copy the arabic text and trim trailing end space', async () => {
    mountWrapper();
    await wrapper.vm.$nextTick();

    wrapper.vm.convertedInput = 'الُّغَةُ الْعَرَبِيَّةُ ';
    const copyButton = wrapper.find('[data-copy-btn]');
    copyButton.trigger('click');
    await wrapper.vm.$nextTick();

    expect(clipboardContents).toEqual(wrapper.vm.convertedInput.trimEnd());
  });
});
