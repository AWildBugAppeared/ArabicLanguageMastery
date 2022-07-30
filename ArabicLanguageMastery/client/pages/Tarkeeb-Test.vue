<template>
  <base-page>
    <template #heading>
      {{ $convertPascalToNormalCase($options.name) }}
    </template>
    <template #default>
      <tarkeeb
        arabic="رَجَعَ وَ رَجَعَ النَّاسُ وَ دَخَلُوْا فِيْ بَيْتِ الْأَصْنَامِ"
        answer='<div id="answer" class="user-answer"><fieldset><legend><span>معطوف عليه</span></legend><fieldset><legend><span>فعل</span></legend><span id="0">ر</span><span id="1">َ</span><span id="2">ج</span><span id="3">َ</span><span id="4">ع</span><span id="5">َ</span></fieldset><fieldset><legend><span>فاعل</span></legend><span>هو</span></fieldset></fieldset><span id="6">&nbsp;</span><fieldset><legend><span>عطف</span></legend><span id="7">و</span><span id="8">َ</span></fieldset><span id="9">&nbsp;</span><fieldset><legend><span>معطوف</span></legend><fieldset><legend><span>فعل</span></legend><span id="10">ر</span><span id="11">َ</span><span id="12">ج</span><span id="13">َ</span><span id="14">ع</span><span id="15">َ</span></fieldset><span id="16">&nbsp;</span><fieldset><legend><span>فاعل</span></legend><span id="17">ا</span><span id="18">ل</span><span id="19">ن</span><span id="20">ّ</span><span id="21">َ</span><span id="22">ا</span><span id="23">س</span><span id="24">ُ</span></fieldset></fieldset><span id="25">&nbsp;</span><fieldset><legend><span>عطف</span></legend><span id="26">و</span><span id="27">َ</span></fieldset><span id="28">&nbsp;</span><fieldset><legend><span>معطوف</span></legend><fieldset><legend><span>فعل</span></legend><span id="29">د</span><span id="30">َ</span><span id="31">خ</span><span id="32">َ</span><span id="33">ل</span><span id="34">ُ</span></fieldset><fieldset><legend><span>فاعل</span></legend><span id="35">و</span><span id="36">ْ</span></fieldset><span id="37">ا</span><span id="38">&nbsp;</span><fieldset><legend><span>متعلّق</span></legend><fieldset><legend><span>جارّ</span></legend><span id="39">ف</span><span id="40">ِ</span><span id="41">ي</span><span id="42">ْ</span></fieldset><span id="43">&nbsp;</span><fieldset><legend><span>مجرور</span></legend><fieldset><legend><span>مضاف</span></legend><span id="44">ب</span><span id="45">َ</span><span id="46">ي</span><span id="47">ْ</span><span id="48">ت</span><span id="49">ِ</span></fieldset><span id="50">&nbsp;</span><fieldset><legend><span>مضاف إليه</span></legend><span id="51">ا</span><span id="52">ل</span><span id="53">ْ</span><span id="54">أ</span><span id="55">َ</span><span id="56">ص</span><span id="57">ْ</span><span id="58">ن</span><span id="59">َ</span><span id="60">ا</span><span id="61">م</span><span id="62">ِ</span></fieldset></fieldset></fieldset></fieldset></div>'
      ></tarkeeb>
    </template>
  </base-page>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TarkeebTest',

  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
