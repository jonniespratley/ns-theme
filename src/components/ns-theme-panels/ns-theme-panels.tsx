import { Component, Host, h, Element, Method, Prop, State, Watch } from '@stencil/core';
import { TabItem } from '../props';

@Component({
  tag: 'ns-theme-panels',
  styleUrl: 'ns-theme-panels.scss',
  shadow: false,
})
export class NsThemePanels {
  @State() selectedPanel: string;
  @State() panels:any[] = [];
  @Element() el: HTMLElement;
  
  @Prop() selectedIndex: number;

  @Watch('selectedIndex')
  watchHandler(newValue) {
    this.selectedPanel = newValue
    let p = this.panels[newValue];
    if(p){
      this.togglePanel(p.index);
    }
  }

  @Method()
  async closePanel(index) {
    let p = this.el.querySelector(`[data-index="${index}"]`);
    if(p){
      p.remove();
    } else {
      console.error('ns-theme-panel - Could not find tab id ===', index)
    }
  }

  @Method()
  async addPanel(tab:TabItem, element:any) {
    
  
    let pane = document.createElement('article');
    
    pane.dataset.tab = tab.id;
    pane.dataset.href = tab.href;
    pane.dataset.panel = tab.panelId;
    pane.dataset.index = `${tab.index}`;
    pane.appendChild(element);
    this.panels.push(pane.dataset);
    if(element){
      this.el.querySelector('section').appendChild(pane);
    } else {
      console.error('ns-theme-panel - Must provide an element!')
    }
    return pane;
  }

  clearActive(){
    let t = this.el.querySelector('.active');
    if(t){
      t.classList.remove('active');
    }
  }
  
  @Method()
  async togglePanel(index) {
    let p = this.el.querySelector(`[data-index="${index}"]`);
    if(p){
      this.clearActive()
      return p.classList.add('active');
    } else {
      console.error('ns-theme-panel - Could not find tab id ===', index)
    }
  }

  @Method()
  async getPanels(){
    return this.panels;
  }
  
  @Method()
  async getPanelNodes(){
    let t = this.el.querySelectorAll('article');
    return t;
  }

  render() {
    return (
      <Host class="ns-theme-panels">
        <section>
          <slot></slot>
        </section>
      </Host>
    );
  }

}
