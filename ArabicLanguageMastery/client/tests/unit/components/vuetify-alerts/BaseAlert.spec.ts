/* eslint-disable  @typescript-eslint/no-explicit-any */

// Imports
import Vue from 'vue';
import Vuetify from 'vuetify';

// Utilities
import { createLocalVue, shallowMount, Wrapper } from '@vue/test-utils';

import BaseAlert from '@/components/vuetify-alerts/BaseAlert.vue';

describe('BaseAlert.vue', () => {
  const localVue = createLocalVue();
  let wrapper: Wrapper<Vue & { [key: string]: any }>;
  let vuetify: Vuetify;

  const mountWrapper = () => {
    wrapper = shallowMount(BaseAlert, {
      localVue,
      vuetify,
      propsData: {
        color: 'blue',
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

  it('should display base alert', async () => {
    mountWrapper();
    await wrapper.vm.$nextTick();

    expect(wrapper.html()).toMatchInlineSnapshot(`
      "<v-alert-stub color=\\"blue\\" dark=\\"true\\" tag=\\"div\\" value=\\"true\\" border=\\"left\\" closelabel=\\"$vuetify.close\\" closeicon=\\"$cancel\\" prominent=\\"true\\" class=\\"mx-2 my-5\\">
        <h2 class=\\"text-h5 mt-n1 pb-2\\"></h2>
      </v-alert-stub>"
    `);
  });
});
