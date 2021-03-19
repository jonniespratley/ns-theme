import { newSpecPage } from '@stencil/core/testing';
import { NsThemePanels } from '../ns-theme-panels';

describe('ns-theme-panels', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NsThemePanels],
      html: `<ns-theme-panels></ns-theme-panels>`,
    });
    expect(page.root).toEqualHtml(`
      <ns-theme-panels>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ns-theme-panels>
    `);
  });
});
