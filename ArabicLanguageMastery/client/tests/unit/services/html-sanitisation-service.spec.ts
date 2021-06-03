/* eslint-disable  @typescript-eslint/no-explicit-any */

import { htmlSanitisationService as service } from '@/services/service-exporter';

describe('HtmlSanitisationService', () => {
  beforeEach(() => {});

  afterEach(() => {});

  it('should sanitise content', () => {
    const unsanitisedHtml =
      '<script>some script</script><p style="color:green"></p><img />';

    const sanitisedHtml = service.sanitizeHtml(unsanitisedHtml);

    expect(sanitisedHtml).toBe('<p style="color:green"></p><img />');
  });
});
