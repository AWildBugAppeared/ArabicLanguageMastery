/* eslint-disable  @typescript-eslint/no-explicit-any */

import { staticPageService as service } from '@/services/service-exporter';

describe('StaticPageService', () => {
  it('should fetch the page', async () => {
    const page = await service.getPage('mawsoof-sifah');

    expect(page.title).toBe('Mawsoof Sifah');
  });

  it('should return null if no page is found', async () => {
    const page = await service.getPage('non-existent-page');

    expect(page).toBeNull();
  });
});
