import { newE2EPage } from '@stencil/core/testing';

describe('ns-theme-tabs', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ns-theme-tabs></ns-theme-tabs>');

    const element = await page.find('ns-theme-tabs');
    expect(element).toHaveClass('hydrated');
  });
});
