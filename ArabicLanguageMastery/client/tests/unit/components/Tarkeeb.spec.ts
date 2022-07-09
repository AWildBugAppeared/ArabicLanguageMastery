/* eslint-disable  @typescript-eslint/no-explicit-any */

// Imports
import Vue from 'vue';
import Vuetify from 'vuetify';

// Utilities
import { createLocalVue, mount, Wrapper } from '@vue/test-utils';

import Tarkeeb from '@/components/Tarkeeb.vue';
import { toMatchImageSnapshot } from 'jest-image-snapshot';
import { TarkeebPlaces } from '~/constants/tarkeeb-places';

const puppeteer = require('puppeteer');
expect.extend({ toMatchImageSnapshot });

describe('Tarkeeb.vue', () => {
  const localVue = createLocalVue();
  let wrapper: Wrapper<Vue & { [key: string]: any }>;
  let vuetify: Vuetify;

  const mountWrapper = () => {
    wrapper = mount(Tarkeeb, {
      localVue,
      vuetify,
      propsData: {
        arabic: 'وَ رَجَعَ النَّاسُ وَ دَخَلُوْا فِيْ بَيْتِ الْأَصْنَامِ',
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

  describe.only('render', () => {
    it('should render component with Arabic props passed in', async () => {
      mountWrapper();
      await wrapper.vm.$nextTick();

      expect(wrapper.html()).toMatchSnapshot();
    });

    it('should add colour selection', async () => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto('http://localhost:8000/tarkeeb-test');

      await page.click('span[id="10"]');
      const image = await page.screenshot();

      expect(image).toMatchImageSnapshot();
    });

    it('should remove colour selection if clicked and is already selected', async () => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto('http://localhost:8000/tarkeeb-test');

      await page.click('span[id="10"]');
      await page.click('span[id="10"]');
      const image = await page.screenshot();

      expect(image).toMatchImageSnapshot();
    });

    it('should apply nested boxes with correct colours', async () => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto('http://localhost:8000/tarkeeb-test');

      await page.click('span[id="29"]');
      await page.click('span[id="61"]');
      await page.click(`#${TarkeebPlaces.matoof}`);

      await page.click('span[id="29"]');
      await page.click('span[id="33"]');
      await page.click(`#${TarkeebPlaces.fil}`);

      await page.click('span[id="35"]');
      await page.click(`#${TarkeebPlaces.faail}`);

      await page.click('span[id="39"]');
      await page.click('span[id="61"]');
      await page.click(`#${TarkeebPlaces.mutaalliq}`);

      await page.click('span[id="39"]');
      await page.click('span[id="41"]');
      await page.click(`#${TarkeebPlaces.jaar}`);

      await page.click('span[id="44"]');
      await page.click('span[id="61"]');
      await page.click(`#${TarkeebPlaces.majroor}`);

      await page.click('span[id="44"]');
      await page.click('span[id="48"]');
      await page.click(`#${TarkeebPlaces.mudaaf}`);

      await page.click('span[id="51"]');
      await page.click('span[id="61"]');
      await page.click('#مضاف\\ إليه');

      await page.evaluate(() => {
        window.scroll(0, 0);
      });
      const image = await page.screenshot();

      expect(image).toMatchImageSnapshot();
    });
  });
});
