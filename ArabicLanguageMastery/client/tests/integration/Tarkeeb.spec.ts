/* eslint-disable  @typescript-eslint/no-explicit-any */

import { toMatchImageSnapshot } from 'jest-image-snapshot';
import { HiddenVerbLikeEntitiesDropdownText } from '~/constants/hidden-verb-like-entities-dropdown-text';
import { TarkeebPlaces } from '~/constants/tarkeeb-places';
import { HiddenPronounsDropdownText } from '~/constants/hidden-pronouns-dropdown-text';

const puppeteer = require('puppeteer');

let browser: any;

expect.extend({ toMatchImageSnapshot });

describe(/* Intentionally left blank to reduce file name size of images */ '', () => {
  let page: any;

  beforeEach(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:8000/tarkeeb-test');
  });

  afterEach(async () => {
    await browser.disconnect();
    await browser.close();
  });

  it('should add colour selection', async () => {
    await page.click('span[id="10"]');

    const answerElement = await page.$('#userAnswer');
    const image = await answerElement.screenshot();

    expect(image).toMatchImageSnapshot();
  });

  it('should remove colour selection if clicked and is already selected', async () => {
    await page.click('span[id="10"]');
    await page.click('span[id="10"]');

    const answerElement = await page.$('#userAnswer');
    const image = await answerElement.screenshot();

    expect(image).toMatchImageSnapshot();
  });

  it('should apply nested boxes with correct colours', async () => {
    await page.click('span[id="29"]');
    await page.click('span[id="61"]');
    await page.click(`#${TarkeebPlaces.matoof}`);

    await page.click('span[id="29"]');
    await page.click('span[id="33"]');
    await page.click(`#${TarkeebPlaces.fil}`);
    await page.$eval('#no-hidden-faail', (element: HTMLElement) =>
      element.click()
    );

    await page.click('span[id="35"]');
    await page.click(`#${TarkeebPlaces.faail}`);

    await page.click('span[id="39"]');
    await page.click('span[id="61"]');
    await page.click(`#${TarkeebPlaces.mutaalliq}`);
    await page.$eval('#no-hidden-vle', (element: HTMLElement) =>
      element.click()
    );

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

    const answerElement = await page.$('#userAnswer');
    const image = await answerElement.screenshot();

    expect(image).toMatchImageSnapshot();
  });

  it('should not add hidden faail when it is present', async () => {
    await page.click('span[id="0"]');
    await page.click('span[id="4"]');
    await page.click(`#${TarkeebPlaces.fil}`);
    await page.$eval('#no-hidden-faail', (element: HTMLElement) =>
      element.click()
    );

    const answerElement = await page.$('#userAnswer');
    const image = await answerElement.screenshot();

    expect(image).toMatchImageSnapshot();
  });

  it('should add hidden faail', async () => {
    await page.click('span[id="0"]');
    await page.click('span[id="4"]');
    await page.click(`#${TarkeebPlaces.fil}`);
    await page.$eval(
      `#${HiddenPronounsDropdownText.huwa}`,
      (element: HTMLElement) => element.click()
    );

    const answerElement = await page.$('#userAnswer');
    const image = await answerElement.screenshot();

    expect(image).toMatchImageSnapshot();
  });

  it('should remove hidden faail box including text', async () => {
    await page.click('span[id="0"]');
    await page.click('span[id="4"]');
    await page.click(`#${TarkeebPlaces.fil}`);
    await page.$eval(
      `#${HiddenPronounsDropdownText.huwa}`,
      (element: HTMLElement) => element.click()
    );

    const [faailBoxText] = await page.$x(
      `//legend/span[text()="${TarkeebPlaces.faail}"]`
    );
    faailBoxText.click();
    await page.waitForTimeout(20);

    const answerElement = await page.$('#userAnswer');
    const image = await answerElement.screenshot();

    expect(image).toMatchImageSnapshot();
  });

  it('should remove hidden faail box including text, and fil box', async () => {
    await page.click('span[id="0"]');
    await page.click('span[id="4"]');
    await page.click(`#${TarkeebPlaces.fil}`);
    await page.$eval(
      `#${HiddenPronounsDropdownText.huwa}`,
      (element: HTMLElement) => element.click()
    );

    const [faailBoxText] = await page.$x(
      `//legend/span[text()="${TarkeebPlaces.fil}"]`
    );
    faailBoxText.click();
    await page.waitForTimeout(20);

    const answerElement = await page.$('#userAnswer');
    const image = await answerElement.screenshot();

    expect(image).toMatchImageSnapshot();
  });

  it('should not add hidden shibhul fil when it is present', async () => {
    await page.click('span[id="39"]');
    await page.click('span[id="61"]');
    await page.click(`#${TarkeebPlaces.mutaalliq}`);
    await page.$eval('#no-hidden-vle', (element: HTMLElement) =>
      element.click()
    );

    const answerElement = await page.$('#userAnswer');
    const image = await answerElement.screenshot();

    expect(image).toMatchImageSnapshot();
  });

  it('should add hidden shibhul fil', async () => {
    await page.click('span[id="39"]');
    await page.click('span[id="61"]');
    await page.click(`#${TarkeebPlaces.mutaalliq}`);
    await page.$eval(
      `#${HiddenVerbLikeEntitiesDropdownText.mawjuwdun}`,
      (element: HTMLElement) => element.click()
    );

    const answerElement = await page.$('#userAnswer');
    const image = await answerElement.screenshot();

    expect(image).toMatchImageSnapshot();
  });

  it('should remove hidden shibhul fil box including text', async () => {
    await page.click('span[id="39"]');
    await page.click('span[id="61"]');
    await page.click(`#${TarkeebPlaces.mutaalliq}`);
    await page.$eval(
      `#${HiddenVerbLikeEntitiesDropdownText.mawjuwdun}`,
      (element: HTMLElement) => element.click()
    );

    const [faailBoxText] = await page.$x(
      `//legend/span[text()="${TarkeebPlaces.shibhulFil}"]`
    );
    faailBoxText.click();
    await page.waitForTimeout(20);

    const answerElement = await page.$('#userAnswer');
    const image = await answerElement.screenshot();

    expect(image).toMatchImageSnapshot();
  });

  it('should remove hidden shibhul fil box including text, and mutalliq box', async () => {
    await page.click('span[id="39"]');
    await page.click('span[id="61"]');
    await page.click(`#${TarkeebPlaces.mutaalliq}`);
    await page.$eval(
      `#${HiddenVerbLikeEntitiesDropdownText.mawjuwdun}`,
      (element: HTMLElement) => element.click()
    );

    const [faailBoxText] = await page.$x(
      `//legend/span[text()="${TarkeebPlaces.mutaalliq}"]`
    );
    faailBoxText.click();
    await page.waitForTimeout(20);

    const answerElement = await page.$('#userAnswer');
    const image = await answerElement.screenshot();

    expect(image).toMatchImageSnapshot();
  });

  it('should not mark box as incorrect when the box is correct', async () => {
    await page.click('span[id="7"]');
    await page.click(`#${TarkeebPlaces.atf}`);
    const [markButton] = await page.$x(`//span[text()="Mark"]`);
    markButton.click();
    await page.waitForTimeout(20);

    const answerElement = await page.$('#markedUserAnswer');
    const image = await answerElement.screenshot();

    expect(image).toMatchImageSnapshot();
  });

  it('should mark box as incorrect when the contents are correct but label is incorrect', async () => {
    await page.click('span[id="7"]');
    await page.click(`#${TarkeebPlaces.haal}`);
    const [markButton] = await page.$x(`//span[text()="Mark"]`);
    markButton.click();
    await page.waitForTimeout(20);

    const answerElement = await page.$('#markedUserAnswer');
    const image = await answerElement.screenshot();

    expect(image).toMatchImageSnapshot();
  });

  it('should mark box as incorrect when content is missing but label is correct', async () => {
    await page.click('span[id="0"]');
    await page.click('span[id="4"]');
    await page.click(`#${TarkeebPlaces.matoof}`);
    await page.click('span[id="0"]');
    await page.click('span[id="4"]');
    await page.click(`#${TarkeebPlaces.fil}`);
    await page.$eval('#no-hidden-faail', (element: HTMLElement) =>
      element.click()
    );
    const [markButton] = await page.$x(`//span[text()="Mark"]`);
    markButton.click();
    await page.waitForTimeout(20);

    const answerElement = await page.$('#markedUserAnswer');
    const image = await answerElement.screenshot();

    expect(image).toMatchImageSnapshot();
  });

  it('should not mark nested boxes as incorrect when correct', async () => {
    await page.click('span[id="0"]');
    await page.click('span[id="4"]');
    await page.click(`#${TarkeebPlaces.matoof}`);
    await page.click('span[id="0"]');
    await page.click('span[id="4"]');
    await page.click(`#${TarkeebPlaces.fil}`);
    await page.$eval(
      `#${HiddenPronounsDropdownText.huwa}`,
      (element: HTMLElement) => element.click()
    );
    const [markButton] = await page.$x(`//span[text()="Mark"]`);
    markButton.click();
    await page.waitForTimeout(20);

    const answerElement = await page.$('#markedUserAnswer');
    const image = await answerElement.screenshot();

    expect(image).toMatchImageSnapshot();
  });
});
