import { newSpecPage } from '@stencil/core/testing';
import { NsTheme } from '../ns-theme';

describe('ns-theme', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NsTheme],
      html: `<ns-theme></ns-theme>`,
    });
    
    expect(page.root).toEqualHtml(`
      <ns-theme>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ns-theme>
    `);
  });
});
