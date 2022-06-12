// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default ({ app }, inject) => {
  inject('convertPascalToNormalCase', (text) => {
    return text.replace(/[A-Z]/g, ' $&').replace(/^./, '');
  });
};
