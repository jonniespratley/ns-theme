import { newE2EPage } from '@stencil/core/testing';

describe('ns-theme', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ns-theme></ns-theme>');

    const element = await page.find('ns-theme');
    expect(element).toHaveClass('hydrated');
  });
});
