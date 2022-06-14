/* eslint-disable  @typescript-eslint/no-explicit-any */

// Imports
import Vue from 'vue';
import Vuetify from 'vuetify';

// Utilities
import { createLocalVue, shallowMount, Wrapper } from '@vue/test-utils';

import Note from '@/components/vuetify-alerts/Note.vue';

describe('Note.vue', () => {
  const localVue = createLocalVue();
  let wrapper: Wrapper<Vue & { [key: string]: any }>;
  let vuetify: Vuetify;

  const mountWrapper = () => {
    wrapper = shallowMount(Note, {
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

  it('should display note', async () => {
    mountWrapper();
    await wrapper.vm.$nextTick();

    expect(wrapper.html()).toMatchInlineSnapshot(
      `"<basealert-stub color=\\"teal darken-1\\" icon=\\"mdi-information\\"></basealert-stub>"`
    );
  });
});
