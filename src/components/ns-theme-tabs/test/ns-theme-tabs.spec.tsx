import { newSpecPage } from '@stencil/core/testing';
import { NsThemeTabs } from '../ns-theme-tabs';

let tabs = [
  { id: 1, label: 'tab1', href: '/test' },
  { id: 2, label: 'tab2', href: '/test2' }
];

describe('ns-theme-tabs', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NsThemeTabs],
      html: `<ns-theme-tabs></ns-theme-tabs>`,
    });
    expect(page.root).toEqualHtml(`
      <ns-theme-tabs>
        <mock:shadow-root>
          <ul class="ns-theme__tabs"></ul>
        </mock:shadow-root>
      </ns-theme-tabs>
    `);
  });

  it('renders with selected-index', async () => {
    const page = await newSpecPage({
      components: [NsThemeTabs],
      html: `<ns-theme-tabs selected-index="2"></ns-theme-tabs>`,
    });
    expect(page.root).toEqualHtml(`
      <ns-theme-tabs selected-index="2">
        <mock:shadow-root>
          <ul class="ns-theme__tabs"></ul>
        </mock:shadow-root>
      </ns-theme-tabs>
    `);
  });

  it('renders with tabs', async () => {
    const page = await newSpecPage({
      components: [NsThemeTabs],
      html: `<div></div>`,
    });
    let component = page.doc.createElement("ns-theme-tabs");
    (component as any).items = tabs;
    page.root.appendChild(component);
    await page.waitForChanges();
    expect(Object.values(page.rootInstance.tabs).length).toBe(2);
    let newTabs = await page.rootInstance.getTabs();

    expect(Object.values(newTabs).length).toBe(2);

  });
});
