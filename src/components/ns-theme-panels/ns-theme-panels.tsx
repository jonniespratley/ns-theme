import { Component, Host, h, Element, Method, Prop, State, Watch } from '@stencil/core';
import { TabItem } from '../props';

let panelCount = 0;
@Component({
  tag: 'ns-theme-panels',
  styleUrl: 'ns-theme-panels.scss',
  shadow: false,
})
export class NsThemePanels {
  @State() selectedPanel: string;
  @State() panels: any[] = [];
  @Element() el: HTMLElement;

  @Prop({ reflect: true, mutable: true }) selectedIndex: number;

  @Watch('selectedIndex')
  watchHandler(newValue) {
    this.selectedPanel = newValue
    let p = this.panels[newValue];
    if (p) {
      this.togglePanel(p.tab);
    }
  }

  @Method()
  async closePanel(tab: TabItem) {
    let p = null;
    if (tab.id) {
      p = this.el.querySelector(`[data-tab="${tab.id}"]`)
    } else if (tab.panelId) {
      p = this.el.querySelector(`[data-panel="${tab.panelId}"]`)
    }
    if (p) {
      p.remove();
    } else {
      console.error('ns-theme-panel - Could not find panel with id ===', tab)
    }
  }

  @Method()
  async addPanel(tab: TabItem, element: any) {
    panelCount++;
    let pane = document.createElement('ns-theme-panel');
    pane.dataset.tab = tab.id;
    pane.dataset.href = tab.href;
    pane.dataset.panel = tab.panelId || `panel-${panelCount}`;
    pane.dataset.test = 'panel';
    //pane.dataset.index = `${tab.index}`;

    pane.appendChild(element);
    this.panels.push(pane.dataset);
    if (element) {
      this.el.appendChild(pane);
    } else {
      console.error('ns-theme-panel - Must provide an element!')
    }
    return pane;
  }

  clearActive() {
    let t: HTMLNsThemePanelElement = this.el.querySelector('.active');
    if (t) {
      t.setAttribute('selected', 'false');
      //t.classList.remove('active');
    }
  }

  @Method()
  async togglePanel(tab: TabItem) {
    let p: HTMLNsThemePanelElement = this.el.querySelector(`[data-tab="${tab.id}"]`);

    if (p) {
      this.clearActive()
      p.setAttribute('selected', 'true');

      //return p.classList.add('active');

      //

    } else {
      console.error('ns-theme-panel - Could not find data-panel ===', tab.id)
    }
  }

  @Method()
  async getPanels() {
    return this.panels;
  }


  @Method()
  async getPanelNodes() {
    let t = this.el.querySelectorAll('ns-theme-panel');
    return t;
  }

  @Method()
  async getActivePanel() {
    return
  }

  render() {
    return (
      <Host class="ns-theme-panels">
        <slot></slot>
      </Host>
    );
  }

}
