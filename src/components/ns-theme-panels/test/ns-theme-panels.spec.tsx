import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { NsThemePanel } from '../../ns-theme-panel/ns-theme-panel';

import { NsThemePanels } from '../ns-theme-panels';

let count = 0;

function createMockTab(o) {
  count++;
  return {
    id: `tab${count}`,
    label: `Tab ${count}`,
    href: `/tab-${count}`,
    ...o
  }
}

function createMockPanel(obj) {
  let pane = document.createElement('p');
  pane.id = obj.id;
  pane.innerHTML = `This is the tab content`;
  return pane;
}

describe('ns-theme-panels', () => {

  let page: SpecPage;
  let element;

  let mockTab = createMockTab({ default: false });
  let mockPanelContent = createMockPanel();



  beforeEach(async () => {
    page = await newSpecPage({
      components: [NsThemePanels, NsThemePanel],
      html: `<ns-theme-panels></ns-theme-panels>`
    });
    element = await page.doc.querySelector('ns-theme-panels');
  });

  it('should build', () => {
    expect(new NsThemePanels()).toBeTruthy();
  });

  it('addPanel - should add panel to stack', async () => {
    let newPanel = await element.addPanel(mockTab, mockPanelContent);
    await page.waitForChanges();
    expect(page.root.querySelectorAll('[data-test="panel"]').length).toEqual(1);
    expect(element).toBeTruthy();
    expect(newPanel.dataset.test).toBe('panel');
  });

  it('should render panels', async () => {
    let t1 = createMockTab({ label: 'mock1' });
    let t2 = createMockTab({ label: 'mock2' });
    let t3 = createMockTab({ label: 'mock3' });
    await element.addPanel(t1, createMockPanel(t1));
    await element.addPanel(t2, createMockPanel(t2));
    await element.addPanel(t3, createMockPanel(t3));
    await page.waitForChanges();
    console.log(page.root.innerHTML);
    expect(page.root.querySelectorAll('[data-test="panel"]').length).toEqual(3);
  });

  it('clearActive - should remove .active panel', async () => {
    let t1 = createMockTab({ label: 'mock1' });
    let t2 = createMockTab({ label: 'mock2' });

    await element.addPanel(t1, createMockPanel(t1));
    await element.addPanel(t2, createMockPanel(t2));
    element.selectedIndex = 1;
    await page.waitForChanges();
    expect(page.root.querySelectorAll('[data-test="panel"]').length).toEqual(2);
  });

  it('getPanels - should return all panels', async () => {
    let t1 = createMockTab({ label: 'mock1' });
    let t2 = createMockTab({ label: 'mock2' });

    await element.addPanel(t1, createMockPanel(t1));
    await element.addPanel(t2, createMockPanel(t2));

    await page.waitForChanges();

    let panels = await element.getPanels();
    expect(panels.length).toBe(2);

  });

});
