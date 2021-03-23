import { newSpecPage } from '@stencil/core/testing';
import { NsThemeListGroup } from '../ns-theme-list-group';

describe('ns-theme-list-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NsThemeListGroup],
      html: `<ns-theme-list-group></ns-theme-list-group>`,
    });
    expect(page.root).toEqualHtml(`
      <ns-theme-list-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ns-theme-list-group>
    `);
  });
});
