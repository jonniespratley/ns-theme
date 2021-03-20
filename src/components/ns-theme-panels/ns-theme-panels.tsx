import { Component, Host, h, Element, Method, Prop, State, Watch } from '@stencil/core';
import { TabItem } from '../props';

@Component({
  tag: 'ns-theme-panels',
  styleUrl: 'ns-theme-panels.scss',
  shadow: false,
})
export class NsThemePanels {
  @State() selectedTab: string;
  @Element() el: HTMLElement;
  
  @Prop() selectedIndex: number;

  @Watch('selectedIndex')
  watchHandler(newValue) {
    this.selectedTab = newValue
    this.togglePanel(newValue);
  }

  @Method()
  async closePanel(item) {
    let t = this.el.querySelector(`[id="${item}"]`);
    if(t){
      this.el.removeChild(t);  
    } else {
      console.error('ns-theme-panel - Could not find tab id ===', item)
    }
  }

  @Method()
  async addPanel(tab:TabItem, element:any) {
    //let pane = document.createElement('article');
    //pane.id = `pane-${tab.id}`;
    if(element){
      this.el.querySelector('section').appendChild(element);
    } else {
      console.error('ns-theme-panel - Must provide an element!')
    }
  }

  clearActive(){
    let t = this.el.querySelector('.active');
    if(t){
      t.classList.remove('active');
    }
  }
  
  @Method()
  async togglePanel(item) {
    let t = this.el.querySelector(`[id="${item}"]`);
    if(t){
      this.clearActive()
      //t.selected = false;
      return t.classList.add('active');
    } else {
      console.error('ns-theme-panel - Could not find tab id ===', item)
    }
  }

  componentDidLoad(){
    console.log('Hide all children', this.el.children)
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
