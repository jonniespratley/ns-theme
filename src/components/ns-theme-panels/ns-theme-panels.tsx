import { Component, Host, h, Element, Method, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'ns-theme-panels',
  styleUrl: 'ns-theme-panels.scss',
  shadow: true,
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
      console.error('ns-theme-panel - Could not find tab with #', item)
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
      console.error('ns-theme-panel - Could not find tab with #', item)
    }
  }

  componentDidLoad(){
    console.log('Hide all children', this.el.children)
  }

  render() {
    return (
      <Host>
        <div class="tab-content">
          <slot></slot>
        </div>
      </Host>
    );
  }

}
