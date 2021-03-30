import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { NsThemeDrawer } from '../ns-theme-drawer';

describe('ns-theme-drawer', () => {

  let page: SpecPage;
  let element;

  it('should build', () => {
    expect(new NsThemeDrawer()).toBeTruthy();
  });

  beforeEach(async () => {
    page = await newSpecPage({
      components: [NsThemeDrawer],
      html: '<ns-theme-drawer header-text="Jest" anchor="right"></ns-theme-drawer>'
    });
    element = await page.doc.querySelector('ns-theme-drawer');
  });

  xit('should have set headerText element', async () => {
    expect(element.querySelector('ns-theme-drawer .theme__drawer-header-text')).toEqual('Jest');
  });

  it('renders', async () => {
    const newPage = await newSpecPage({
      components: [NsThemeDrawer],
      html: `<ns-theme-drawer></ns-theme-drawer>`,
    });
    // expect(page.root.innerHTML).toContain('theme__drawer');
    // expect(page.root.innerHTML).toContain('theme__drawer-header');
    // expect(page.root.innerHTML).toContain('theme__drawer-content');
    expect(newPage.root).toEqualHtml(`
      <ns-theme-drawer anchor="left" class="theme__drawer theme__drawer--left" header-action-text="Close All" style="transform: translate3d(0px, 0px, 0);">
        <mock:shadow-root>
          <header class="theme__drawer-header">
            <div class="theme__drawer-header-text"></div>
            <button aria-label="Close" class="btn" type="button">
              Close All
            </button>
            <slot name="header"></slot>
          </header>
          <nav class="theme__drawer-content">
            <slot></slot>
          </nav>
        </mock:shadow-root>
      </ns-theme-drawer>
    `);
  });

  it('renders with headerText', async () => {
    const newPage = await newSpecPage({
      components: [NsThemeDrawer],
      html: `<div></div>`,
    });
    let component = newPage.doc.createElement("ns-theme-drawer");
    (component as any).headerText = 'Jest';
    newPage.root.appendChild(component);
    await newPage.waitForChanges();

    //expect(Object.values(page.rootInstance.tabs).length).toBe(2);
    //let newTabs = await page.rootInstance.getTabs();
    expect(newPage.rootInstance.headerText).toBe('Jest')
    //expect(Object.values(newTabs).length).toBe(2);
  });

  it('renders with anchor=right', async () => {
    const page = await newSpecPage({
      components: [NsThemeDrawer],
      template: () => (
        `<ns-theme-drawer anchor="right" header-text="Test"></ns-theme-drawer>`
      ),
    });
    //let component = page.doc.createElement("ns-theme-drawer");
    //(component as any).headerText = 'Jest';
    //page.root.appendChild(component);
    //await page.waitForChanges();

    //expect(Object.values(page.rootInstance.tabs).length).toBe(2);
    //let newTabs = await page.rootInstance.getTabs();
    console.log(page.root);
    console.log(page.rootInstance);
    //expect(Object.values(newTabs).length).toBe(2);
  });

  it('testing class methods', async () => {
    let drawer = new NsThemeDrawer();
    drawer.headerText = 'Jest';
    expect(drawer.isOpened).toBeFalsy();
    drawer.toggle();
    expect(drawer.isOpened).toBeTruthy();
    //let component = page.doc.createElement("ns-theme-drawer");
    //(component as any).headerText = 'Jest';
    //page.root.appendChild(component);
    //await page.waitForChanges();

    //expect(Object.values(page.rootInstance.tabs).length).toBe(2);
    //let newTabs = await page.rootInstance.getTabs();

    //expect(Object.values(newTabs).length).toBe(2);
  });
});
