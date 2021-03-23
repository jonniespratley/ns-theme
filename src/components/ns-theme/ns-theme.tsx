import { Component, Host, h, Listen, Method, Element, Prop, State } from '@stencil/core';

import { Session, TabItem } from '../props';

//import { state } from '../../store';
@Component({
  tag: 'ns-theme',
  styleUrl: 'ns-theme.scss',
  assetsDirs: ['assets'],
  shadow: true,
})
export class NsTheme {
  themePanels: any;
  themeTabs: any;


  @Element() el: HTMLElement;

  @State() session: Session = {};
  @Prop() tabs: TabItem[] = [];

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

  connectedCallback() {
    console.log('connectedCallback');
  }
  disconnectedCallback() { }
  componentWillLoad() {
    console.log('componentWillLoad');
  }
  componentDidLoad() {
    console.log('componentDidLoad');
  }
  componentWillUpdate() { }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  componentWillRender() {
    console.log('componentWillRender');
  }


  componentDidRender() {
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
    let { tabs = [] } = this.session;

    tabs.push(tab);

    this.session.tabs = tabs;
  }

  @Method()
  async open(): Promise<boolean> {
    // ...
    return true;
  }

  render() {
    return (
      <Host>
        <ns-theme-header id="nsThemeHeader" show-menu>
          <ns-theme-tabs id="nsThemeTabs" slot="tabs"></ns-theme-tabs>
        </ns-theme-header>

        <slot name="content"></slot>

        <footer>
          <slot name="footer"></slot>
        </footer>
      </Host>
    );
  }

}
