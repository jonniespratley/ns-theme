import { newSpecPage } from '@stencil/core/testing';
import { NsSpinner } from '../ns-spinner';

describe('ns-spinner', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NsSpinner],
      html: `<ns-spinner></ns-spinner>`,
    });
    expect(page.root).toEqualHtml(`
      <ns-spinner>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ns-spinner>
    `);
  });
});
