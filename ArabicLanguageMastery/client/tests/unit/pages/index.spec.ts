/* eslint-disable  @typescript-eslint/no-explicit-any */

// Imports
import Vue from 'vue';
import Vuetify from 'vuetify';

// Utilities
import { createLocalVue, mount, Wrapper } from '@vue/test-utils';

import index from '@/pages/index.vue';
import { Routes } from '~/constants/routes';

describe('index.vue', () => {
  const mockRoute = Routes.introductoryModule.theArabicSciences;

  const mockRouter = {
    push: jest.fn(),
  };

  const localVue = createLocalVue();
  let wrapper: Wrapper<Vue & { [key: string]: any }>;
  let vuetify: Vuetify;

  const mountWrapper = () => {
    wrapper = mount(index, {
      localVue,
      vuetify,
      mocks: {
        $route: mockRoute,
        $router: mockRouter,
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

  it('should navigate to default root on creation', async () => {
    mountWrapper();
    await wrapper.vm.$nextTick();

    expect(mockRouter.push).toHaveBeenCalledTimes(1);
    expect(mockRouter.push).toHaveBeenCalledWith(
      Routes.introductoryModule.theArabicSciences
    );
  });
});
