import { newSpecPage } from '@stencil/core/testing';
import { NsThemeHeader } from '../ns-theme-header';

describe('ns-theme-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NsThemeHeader],
      html: `<ns-theme-header></ns-theme-header>`,
    });
    expect(page.root).toEqualHtml(`
      <ns-theme-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ns-theme-header>
    `);
  });
});
