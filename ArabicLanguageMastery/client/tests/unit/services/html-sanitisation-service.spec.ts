/* eslint-disable  @typescript-eslint/no-explicit-any */

import { htmlSanitisationService as service } from '@/services/service-exporter';

describe('HtmlSanitisationService', () => {
  beforeEach(() => {});

  afterEach(() => {});

  it('should sanitise content', () => {
    const unsanitisedHtml =
      '<script>some script</script><p style="color:green"></p><img />';

    const sanitisedHtml = service.sanitizeHtml(unsanitisedHtml);

    expect(sanitisedHtml).toBe('<div><p style="color:green"></p><img /></div>');
  });

  it('should style ordered lists', () => {
    const unsanitisedHtml = '<ol class="pb-2"><li>List Item 1</li></ol>';

    const sanitisedHtml = service.sanitizeHtml(unsanitisedHtml);

    expect(sanitisedHtml).toBe(
      '<div><ol class="pb-2"><li>List Item 1</li></ol></div>'
    );
  });

  it('should style unordered lists', () => {
    const unsanitisedHtml = '<ul class="pb-2"><li>List Item 1</li></ul>';

    const sanitisedHtml = service.sanitizeHtml(unsanitisedHtml);

    expect(sanitisedHtml).toBe(
      '<div><ul class="pb-2"><li>List Item 1</li></ul></div>'
    );
  });

  it('should style important sections', () => {
    const unsanitisedHtml = '[Important]This is important[/Important]';

    const sanitisedHtml = service.sanitizeHtml(unsanitisedHtml);

    expect(sanitisedHtml).toBe(
      '<div><v-alert border="left" color="purple darken-2" class="ma-2" dark><h4 class="mt-n1 pb-2">Important</h4>This is important</v-alert></div>'
    );
  });

  it('should style notes', () => {
    const unsanitisedHtml = '[Note]This is a note[/Note]';

    const sanitisedHtml = service.sanitizeHtml(unsanitisedHtml);

    expect(sanitisedHtml).toBe(
      '<div><v-alert border="left" color="teal darken-1" class="ma-2" dark><h4 class="mt-n1 pb-2">Note</h4>This is a note</v-alert></div>'
    );
  });

  it('should style summary', () => {
    const unsanitisedHtml = '[Summary]This is the summary[/Summary]';

    const sanitisedHtml = service.sanitizeHtml(unsanitisedHtml);

    expect(sanitisedHtml).toBe(
      '<div><v-alert border="left" color="blue darken-1" class="ma-2" dark><h2 class="mt-n1 pb-2">Summary</h2>This is the summary</v-alert></div>'
    );
  });

  it('should style Arabic', () => {
    const unsanitisedHtml = '((arabic))((arabic-l))';

    const sanitisedHtml = service.sanitizeHtml(unsanitisedHtml);

    expect(sanitisedHtml).toBe(
      '<div><span class="arabic">arabic</span><span class="arabic">arabic-l</span></div>'
    );
  });
});
