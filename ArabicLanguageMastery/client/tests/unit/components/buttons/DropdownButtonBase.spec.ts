/* eslint-disable  @typescript-eslint/no-explicit-any */

// Imports
import Vue from 'vue';
import Vuetify from 'vuetify';

// Utilities
import { createLocalVue, mount, Wrapper } from '@vue/test-utils';

import DropdownButtonBase from '@/components/buttons/DropdownButtonBase.vue';

describe('DropdownButtonBase.vue', () => {
  const localVue = createLocalVue();
  let wrapper: Wrapper<Vue & { [key: string]: any }>;
  let vuetify: Vuetify;

  const mountWrapper = () => {
    wrapper = mount(DropdownButtonBase, {
      localVue,
      vuetify,
      propsData: {
        buttonClasses: 'primary',
        buttonText: 'Dropdown Button',
        dropdownTextList: ['Dropdown 1', 'Dropdown 2'],
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

  describe('emitSelection', () => {
    it('should emit event with selected option', () => {
      mountWrapper();
      const selection = 'Dropdown 1';
      wrapper.vm.emitSelection(selection);

      expect(wrapper.emitted().dropdownSelected![0][0]).toEqual(selection);
    });
  });
});
