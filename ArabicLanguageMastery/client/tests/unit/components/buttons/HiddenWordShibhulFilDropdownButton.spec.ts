/* eslint-disable  @typescript-eslint/no-explicit-any */

// Imports
import Vue from 'vue';
import Vuetify from 'vuetify';

// Utilities
import { createLocalVue, mount, Wrapper } from '@vue/test-utils';

import HiddenWordShibhulFilDropdownButton from '@/components/buttons/HiddenWordShibhulFilDropdownButton.vue';
import { HiddenVerbLikeEntitiesDropdownText } from '~/constants/hidden-verb-like-entities-dropdown-text';
import { TarkeebPlaces } from '~/constants/tarkeeb-places';

describe('HiddenWordShibhulFilDropdownButton.vue', () => {
  const localVue = createLocalVue();
  let wrapper: Wrapper<Vue & { [key: string]: any }>;
  let vuetify: Vuetify;

  const mountWrapper = () => {
    wrapper = mount(HiddenWordShibhulFilDropdownButton, {
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

      wrapper.find(`#${TarkeebPlaces.mutaalliq}`).trigger('click');
      await wrapper.vm.$nextTick();

      expect(wrapper.html()).toMatchSnapshot();
    });
  });

  describe('setShibhulFil', () => {
    it('should emit event with null argument when vle is present', () => {
      mountWrapper();
      wrapper.vm.setShibhulFil(
        HiddenVerbLikeEntitiesDropdownText.shibhulFilPresent
      );

      expect(wrapper.emitted().shibhulFilSet![0][0]).toBeNull();
    });

    it('should emit event with argument when faail is selected', () => {
      mountWrapper();
      wrapper.vm.setShibhulFil(HiddenVerbLikeEntitiesDropdownText.mawjuwdun);

      expect(wrapper.emitted().shibhulFilSet![0][0]).toEqual(
        HiddenVerbLikeEntitiesDropdownText.mawjuwdun
      );
    });
  });
});
