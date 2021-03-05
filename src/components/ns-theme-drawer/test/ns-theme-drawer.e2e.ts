import { newE2EPage } from '@stencil/core/testing';

describe('ns-theme-drawer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ns-theme-drawer></ns-theme-drawer>');

    const element = await page.find('ns-theme-drawer');
    expect(element).toHaveClass('hydrated');
  });
});
