/* eslint-disable  @typescript-eslint/no-explicit-any */

// Imports
import Vue from 'vue';
import Vuetify from 'vuetify';

// Utilities
import { createLocalVue, shallowMount, Wrapper } from '@vue/test-utils';

import ImportantNote from '@/components/vuetify-alerts/ImportantNote.vue';

describe('ImportantNote.vue', () => {
  const localVue = createLocalVue();
  let wrapper: Wrapper<Vue & { [key: string]: any }>;
  let vuetify: Vuetify;

  const mountWrapper = () => {
    wrapper = shallowMount(ImportantNote, {
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

  it('should display important note', async () => {
    mountWrapper();
    await wrapper.vm.$nextTick();

    expect(wrapper.html()).toMatchInlineSnapshot(
      `"<basealert-stub color=\\"purple darken-2\\" icon=\\"mdi-head-snowflake\\"></basealert-stub>"`
    );
  });
});
