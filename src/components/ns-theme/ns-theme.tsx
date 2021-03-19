import { Component, Host, h, Listen, Method, Element, Prop } from '@stencil/core';

import { NavItem } from '../props';

@Component({
  tag: 'ns-theme',
  styleUrl: 'ns-theme.scss',
  assetsDirs: ['../fonts'],
  shadow: true,
})
export class NsTheme {
  themePanels: any;
  themeTabs: any;


  @Element() el: HTMLElement;
  @Prop() tabs: NavItem[] = [];
  
  @Listen('todoCompleted')
  todoCompletedHandler(event: CustomEvent<any>) {
    console.log('Received the custom todoCompleted event: ', event.detail);
  }
  
  @Listen('tabChange')
  tabChangeHandler(event: CustomEvent<any>) {
    console.log('Received the custom tabChange event: ', event.detail);
  }
  @Listen('tabClick')
  tabClickHandler(event: CustomEvent<any>) {
    console.log('Received the custom tabClick event: ', event.detail);
  }
  @Listen('tabClose')
  tabCloseHandler(event: CustomEvent<any>) {
    console.log('Received the custom tabClose event: ', event.detail);
  }

  connectedCallback() {}
  disconnectedCallback() {}
  componentWillLoad() {}
  componentDidLoad() {
    console.log('componentDidLoad');
  }
  componentWillUpdate() {}
  componentDidUpdate() {}
  componentWillRender() {}
  

  componentDidRender(){
    console.log('componentDidRender');
  }

  @Method()
  async closeTab(index) {
    //this.themeTabs
    console.log('close', index);
  }

  @Method()
  async addTab(tab) {
    //this.themeTabs
    console.log('add', tab);
    this.tabs.push(tab);
  }
  
  @Method()
  async open(): Promise<boolean> {
    // ...
    return true;
  }

  render() {
    return (
      <Host>
        <ns-theme-header id="themeHeader" headerText="" is-fixed>
          <ns-theme-tabs id="themeTabs"></ns-theme-tabs>
        </ns-theme-header>  
        
        <main>
        
          <ns-theme-panels id="themePanels">
            {this.tabs && this.tabs.map(tab => (
            <ns-theme-panel id={`${tab}`}>
              <h3>tab1</h3>
            </ns-theme-panel>  
            ))}
            
          </ns-theme-panels>
          <slot name="content"></slot>
        </main>

        
        <slot name="drawer"></slot>
        


        <footer>
        <slot name="footer"></slot>
        </footer>
      </Host>
    );
  }

}
