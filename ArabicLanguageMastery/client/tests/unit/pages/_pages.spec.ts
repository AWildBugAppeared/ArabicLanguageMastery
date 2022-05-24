/* eslint-disable  @typescript-eslint/no-explicit-any */

// Imports
import Vue from 'vue';
import Vuetify from 'vuetify';

// Utilities
import { createLocalVue, mount, Wrapper } from '@vue/test-utils';

import Page from '@/pages/_page.vue';
import {
  htmlSanitisationService,
  staticPageService,
} from '~/services/service-exporter';

describe('_page.vue', () => {
  const sanitisedHtml = '<div>sanitised hey</div>';
  htmlSanitisationService.sanitizeHtml = jest
    .fn()
    .mockReturnValue(sanitisedHtml);

  const cdnResponse = {
    content: 'Hey',
    title: 'Title',
  };
  staticPageService.getPage = jest.fn().mockReturnValue(cdnResponse);

  const pageRouteName = 'mawsoof-sifah';
  const $route = {
    params: {
      page: pageRouteName,
    },
  };

  const localVue = createLocalVue();
  let wrapper: Wrapper<Vue & { [key: string]: any }>;
  let vuetify: Vuetify;

  const mountWrapper = () => {
    wrapper = mount(Page, {
      localVue,
      vuetify,
      mocks: { $route },
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

  it('should display sanitised page content on creation', async () => {
    mountWrapper();
    await wrapper.vm.$nextTick();

    expect((staticPageService.getPage as jest.Mock).mock.calls.length).toBe(1);
    expect((staticPageService.getPage as jest.Mock).mock.calls[0][0]).toBe(
      pageRouteName
    );
    expect(
      (htmlSanitisationService.sanitizeHtml as jest.Mock).mock.calls.length
    ).toBe(1);
    expect(
      (htmlSanitisationService.sanitizeHtml as jest.Mock).mock.calls[0][0]
    ).toBe(cdnResponse.content);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
