/* eslint-disable  @typescript-eslint/no-explicit-any */

// Imports
import Vue from 'vue';
import Vuetify from 'vuetify';

// Utilities
import { createLocalVue, shallowMount, Wrapper } from '@vue/test-utils';

import LessonSummary from '@/components/vuetify-alerts/LessonSummary.vue';

describe('LessonSummary.vue', () => {
  const localVue = createLocalVue();
  let wrapper: Wrapper<Vue & { [key: string]: any }>;
  let vuetify: Vuetify;

  const mountWrapper = () => {
    wrapper = shallowMount(LessonSummary, {
      localVue,
      vuetify,
      stubs: ['BaseAlert'],
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

  it('should display Lesson Summary', async () => {
    mountWrapper();
    await wrapper.vm.$nextTick();

    expect(wrapper.html()).toMatchInlineSnapshot(
      `"<basealert-stub color=\\"blue darken-1\\" icon=\\"mdi-note-text\\">Summary</basealert-stub>"`
    );
  });
});
