import { newSpecPage } from '@stencil/core/testing';
import { NsThemeDrawer } from '../ns-theme-drawer';

describe('ns-theme-drawer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NsThemeDrawer],
      html: `<ns-theme-drawer></ns-theme-drawer>`,
    });
   // expect(page.root.innerHTML).toContain('theme__drawer');
   // expect(page.root.innerHTML).toContain('theme__drawer-header');
   // expect(page.root.innerHTML).toContain('theme__drawer-content');
    /*expect(page.root).toEqualHtml(`
      <ns-theme-drawer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ns-theme-drawer>
    `);*/
  });
});
