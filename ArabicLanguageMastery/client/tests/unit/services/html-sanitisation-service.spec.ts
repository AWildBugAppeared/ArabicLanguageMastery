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

  it('should style notes', () => {
    const unsanitisedHtml = '[Note]Note[/Note]';

    const sanitisedHtml = service.sanitizeHtml(unsanitisedHtml);

    expect(sanitisedHtml).toBe(
      '<div><v-alert border="left" color="teal darken-1" class="ma-2" dark>Note</v-alert></div>'
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
