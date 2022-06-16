/* eslint-disable  @typescript-eslint/no-explicit-any */

// Imports
import Vue from 'vue';
import Vuetify from 'vuetify';

// Utilities
import { createLocalVue, mount, Wrapper } from '@vue/test-utils';

import ElicitingQuestion from '@/components/vuetify-alerts/ElicitingQuestion.vue';

describe('ElicitingQuestion.vue', () => {
  const localVue = createLocalVue();
  let wrapper: Wrapper<Vue & { [key: string]: any }>;
  let vuetify: Vuetify;

  const mountWrapper = () => {
    wrapper = mount(ElicitingQuestion, {
      localVue,
      vuetify,
      stubs: ['BaseAlert'],
      slots: {
        answer: 'This is the answer',
        default: 'This is the question',
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

  it('should display component with answer hidden', async () => {
    mountWrapper();
    await wrapper.vm.$nextTick();

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display answer when the show answer button is clicked', async () => {
    mountWrapper();
    await wrapper.vm.$nextTick();

    wrapper.get('[spec-show-answer-btn]').trigger('click');
    await wrapper.vm.$nextTick();

    expect(wrapper.html()).toMatchSnapshot();
  });
});
