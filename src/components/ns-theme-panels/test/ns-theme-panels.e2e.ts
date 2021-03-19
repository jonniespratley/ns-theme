import { newE2EPage } from '@stencil/core/testing';

describe('ns-theme-panels', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ns-theme-panels></ns-theme-panels>');

    const element = await page.find('ns-theme-panels');
    expect(element).toHaveClass('hydrated');
  });
});
