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
        <header class="theme__header">
          <slot name="menu"></slot>
          <div>
            <slot name="home"></slot>
          </div>
          <slot name="tabs"></slot>
          <div class="theme__user">
            <slot name="user"></slot>
          </div>
          <ul class="theme__nav"></ul>
        </header>
      </mock:shadow-root>
      </ns-theme-header>
    `);
  });
});
