/* eslint-disable  @typescript-eslint/no-explicit-any */

// Imports
import Vue from 'vue';
import Vuetify from 'vuetify';

// Utilities
import { createLocalVue, mount, Wrapper } from '@vue/test-utils';

import BasePage from '@/components/Base-Page.vue';

describe('BasePage.vue', () => {
  const localVue = createLocalVue();
  let wrapper: Wrapper<Vue & { [key: string]: any }>;
  let vuetify: Vuetify;

  const mountWrapper = () => {
    wrapper = mount(BasePage, {
      localVue,
      vuetify,
      slots: {
        heading:
          '<h1>Some text in the heading slot with some ((arabic-l الْعَرَبِيَّةٌ)) added</h1>',
        default:
          '<div>Some text in the default slot with some ((الْعَرَبِيَّةٌ)) added</div>',
      },
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

  describe('render', () => {
    it('should replace any arabic in slot content with wrapped spans containing appropriate classes', async () => {
      mountWrapper();
      await wrapper.vm.$nextTick();

      expect(wrapper.html()).toMatchSnapshot();
    });
  });
});
