/* eslint-disable  @typescript-eslint/no-explicit-any */

// Imports
import Vue from 'vue';
import Vuetify from 'vuetify';

// Utilities
import { createLocalVue, mount, Wrapper } from '@vue/test-utils';

import HiddenWordFaailDropdownButton from '@/components/buttons/HiddenWordFaailDropdownButton.vue';
import { HiddenPronounsDropdownText } from '~/constants/hidden-pronouns-dropdown-text';
import { TarkeebPlaces } from '~/constants/tarkeeb-places';

describe('HiddenWordFaailDropdownButton.vue', () => {
  const localVue = createLocalVue();
  let wrapper: Wrapper<Vue & { [key: string]: any }>;
  let vuetify: Vuetify;

  const mountWrapper = () => {
    wrapper = mount(HiddenWordFaailDropdownButton, {
      localVue,
      vuetify,
      propsData: {
        buttonClasses: 'primary',
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
    it('should render dropdown button', async () => {
      mountWrapper();
      await wrapper.vm.$nextTick();

      expect(wrapper.html()).toMatchSnapshot();
    });

    it('should render dropdown button menu', async () => {
      mountWrapper();

      wrapper.find(`#${TarkeebPlaces.fil}`).trigger('click');
      await wrapper.vm.$nextTick();

      expect(wrapper.html()).toMatchSnapshot();
    });
  });

  describe('setFaail', () => {
    it('should emit event with null argument when faail is present', () => {
      mountWrapper();
      wrapper.vm.setFaail(HiddenPronounsDropdownText.faailPresent);

      expect(wrapper.emitted().faailSet![0][0]).toBeNull();
    });

    it('should emit event with argument when faail is selected', () => {
      mountWrapper();
      wrapper.vm.setFaail(HiddenPronounsDropdownText.huwa);

      expect(wrapper.emitted().faailSet![0][0]).toEqual(
        HiddenPronounsDropdownText.huwa
      );
    });
  });
});
