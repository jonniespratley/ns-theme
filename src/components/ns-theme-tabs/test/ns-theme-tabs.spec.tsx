import { newSpecPage } from '@stencil/core/testing';
import { NsThemeTabs } from '../ns-theme-tabs';

describe('ns-theme-tabs', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NsThemeTabs],
      html: `<ns-theme-tabs></ns-theme-tabs>`,
    });

    console.log(page.root);
    console.log(page.body);
    expect(page.root).toEqualHtml(`
      <ns-theme-tabs>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ns-theme-tabs>
    `);
  });
});
