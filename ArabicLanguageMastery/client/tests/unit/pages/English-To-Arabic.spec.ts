/* eslint-disable  @typescript-eslint/no-explicit-any */

// Imports
import Vue from 'vue';
import Vuetify from 'vuetify';

// Utilities
import { createLocalVue, mount, Wrapper } from '@vue/test-utils';

import EnglishToArabic from '@/pages/English-To-Arabic.vue';

describe('English-To-Arabic.vue', () => {
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

    const textArea = wrapper.find('[data-phonetic-text-area]');
    textArea.setValue('wa ##Allah##u Aakbaru');
    await wrapper.vm.$nextTick();

    const arabicText = wrapper.find('[data-arabic]');

    expect(arabicText.html()).toMatchSnapshot();
  });
});
