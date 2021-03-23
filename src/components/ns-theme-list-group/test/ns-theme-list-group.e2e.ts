import { newE2EPage } from '@stencil/core/testing';

describe('ns-theme-list-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ns-theme-list-group></ns-theme-list-group>');

    const element = await page.find('ns-theme-list-group');
    expect(element).toHaveClass('hydrated');
  });
});
