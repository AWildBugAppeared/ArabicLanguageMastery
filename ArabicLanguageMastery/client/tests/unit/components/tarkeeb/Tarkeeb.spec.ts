/* eslint-disable  @typescript-eslint/no-explicit-any */

// Imports
import Vue from 'vue';
import Vuetify from 'vuetify';

// Utilities
import { createLocalVue, mount, Wrapper } from '@vue/test-utils';

import Tarkeeb from '@/components/tarkeeb/Tarkeeb.vue';

describe('Tarkeeb.vue', () => {
  const localVue = createLocalVue();
  let wrapper: Wrapper<Vue & { [key: string]: any }>;
  let vuetify: Vuetify;

  const mountWrapper = () => {
    wrapper = mount(Tarkeeb, {
      localVue,
      vuetify,
      propsData: {
        arabic:
          'رَجَعَ وَ رَجَعَ النَّاسُ وَ دَخَلُوْا فِيْ بَيْتِ الْأَصْنَامِ',
        answer:
          '<div id="answer" class="user-answer"><fieldset><legend><span>معطوف عليه</span></legend><fieldset><legend><span>فعل</span></legend><span id="0">ر</span><span id="1">َ</span><span id="2">ج</span><span id="3">َ</span><span id="4">ع</span><span id="5">َ</span></fieldset><fieldset><legend><span>فاعل</span></legend><span>هو</span></fieldset></fieldset><span id="6">&nbsp;</span><fieldset><legend><span>عطف</span></legend><span id="7">و</span><span id="8">َ</span></fieldset><span id="9">&nbsp;</span><fieldset><legend><span>معطوف</span></legend><fieldset><legend><span>فعل</span></legend><span id="10">ر</span><span id="11">َ</span><span id="12">ج</span><span id="13">َ</span><span id="14">ع</span><span id="15">َ</span></fieldset><span id="16">&nbsp;</span><fieldset><legend><span>فاعل</span></legend><span id="17">ا</span><span id="18">ل</span><span id="19">ن</span><span id="20">ّ</span><span id="21">َ</span><span id="22">ا</span><span id="23">س</span><span id="24">ُ</span></fieldset></fieldset><span id="25">&nbsp;</span><fieldset><legend><span>عطف</span></legend><span id="26">و</span><span id="27">َ</span></fieldset><span id="28">&nbsp;</span><fieldset><legend><span>معطوف</span></legend><fieldset><legend><span>فعل</span></legend><span id="29">د</span><span id="30">َ</span><span id="31">خ</span><span id="32">َ</span><span id="33">ل</span><span id="34">ُ</span></fieldset><fieldset><legend><span>فاعل</span></legend><span id="35">و</span><span id="36">ْ</span></fieldset><span id="37">ا</span><span id="38">&nbsp;</span><fieldset><legend><span>متعلّق</span></legend><fieldset><legend><span>جارّ</span></legend><span id="39">ف</span><span id="40">ِ</span><span id="41">ي</span><span id="42">ْ</span></fieldset><span id="43">&nbsp;</span><fieldset><legend><span>مجرور</span></legend><fieldset><legend><span>مضاف</span></legend><span id="44">ب</span><span id="45">َ</span><span id="46">ي</span><span id="47">ْ</span><span id="48">ت</span><span id="49">ِ</span></fieldset><span id="50">&nbsp;</span><fieldset><legend><span>مضاف إليه</span></legend><span id="51">ا</span><span id="52">ل</span><span id="53">ْ</span><span id="54">أ</span><span id="55">َ</span><span id="56">ص</span><span id="57">ْ</span><span id="58">ن</span><span id="59">َ</span><span id="60">ا</span><span id="61">م</span><span id="62">ِ</span></fieldset></fieldset></fieldset></fieldset></div>',
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

  it('should not show all tarkeeb options by default', async () => {
    mountWrapper();
    await wrapper.vm.$nextTick();

    const tarkeebOptionsContainer = wrapper.find(
      '[spec-tarkeeb-options-container]'
    );
    await wrapper.vm.$nextTick();

    const buttonMatches = Array.from(
      tarkeebOptionsContainer.html().matchAll(/<\/button/gm)
    );

    expect(buttonMatches.length).toBe(24);
  });

  it('should toggle between showing all tarkeeb options and only the most popular', async () => {
    mountWrapper();
    await wrapper.vm.$nextTick();

    wrapper.find('[spec-toggle-tarkeeb-options-button]').trigger('click');
    await wrapper.vm.$nextTick();

    let tarkeebOptionsContainer = wrapper.find(
      '[spec-tarkeeb-options-container]'
    );
    await wrapper.vm.$nextTick();

    let buttonMatches = Array.from(
      tarkeebOptionsContainer.html().matchAll(/<\/button/gm)
    );

    expect(buttonMatches.length).toBe(31);

    wrapper.find('[spec-toggle-tarkeeb-options-button]').trigger('click');
    await wrapper.vm.$nextTick();

    tarkeebOptionsContainer = wrapper.find('[spec-tarkeeb-options-container]');
    await wrapper.vm.$nextTick();

    buttonMatches = Array.from(
      tarkeebOptionsContainer.html().matchAll(/<\/button/gm)
    );

    expect(buttonMatches.length).toBe(24);
  });

  it('should not show the answer by default', async () => {
    mountWrapper();
    await wrapper.vm.$nextTick();

    const answerContainer = wrapper.find('#answer');
    await wrapper.vm.$nextTick();

    expect(answerContainer.exists()).toBeFalsy();
  });

  it('should toggle between showing/hiding the answer', async () => {
    mountWrapper();
    await wrapper.vm.$nextTick();

    wrapper.find('[spec-toggle-answer]').trigger('click');
    await wrapper.vm.$nextTick();

    let answerContainer = wrapper.find('#answer');
    await wrapper.vm.$nextTick();

    expect(answerContainer.exists()).toBeTruthy();

    wrapper.find('[spec-toggle-answer]').trigger('click');
    await wrapper.vm.$nextTick();

    answerContainer = wrapper.find('#answer');
    await wrapper.vm.$nextTick();

    expect(answerContainer.exists()).toBeFalsy();
  });
});
