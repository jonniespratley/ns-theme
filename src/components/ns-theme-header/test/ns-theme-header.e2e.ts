import { newE2EPage } from '@stencil/core/testing';

describe('ns-theme-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ns-theme-header></ns-theme-header>');

    const element = await page.find('ns-theme-header');
    expect(element).toHaveClass('hydrated');
  });
});
