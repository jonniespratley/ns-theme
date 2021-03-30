import { Component, Host, h, Listen, Method, Element, Prop, State } from '@stencil/core';

import { Session, TabItem } from '../props';

import state, { store } from '../store';
@Component({
  tag: 'ns-theme',
  styleUrl: 'ns-theme.scss',
  assetsDirs: ['assets'],
  shadow: true,
})
export class NsTheme {
  themePanels: any;
  themeTabs: any;
  // If `cacheData` changes we don't want to rerender the component,
  // so we DON'T decorate it with @State
  cacheData = state.session;
  cacheTabs = state.tabs;

  private nsThemePanels?: HTMLNsThemePanelsElement;
  private nsThemeTabsDrawer?: HTMLNsThemeDrawerElement;
  private nsThemeTabsList?: HTMLNsThemeListGroupElement;
  private nsThemeHeader?: HTMLNsThemeHeaderElement;
  private nsThemeTabs?: HTMLNsThemeTabsElement;

  @Element() el: HTMLElement;

  @Prop({ mutable: true, reflect: true }) session: Session;
  @Prop({ mutable: true }) tabs: TabItem[] = [];

  @Listen('tabManagerClick')
  tabManagerClickHandler(event: CustomEvent<any>) {
    console.log('Received the custom todoCompleted event: ', event.detail);
    this.nsThemeTabsDrawer.toggle();
  }
  @Listen('todoCompleted')
  todoCompletedHandler(event: CustomEvent<any>) {
    console.log('Received the custom todoCompleted event: ', event.detail);
  }
  @Listen('tabChange')
  tabChangeHandler(event: CustomEvent<any>) {
    console.log('Received the custom tabChange event: ', event.detail);
  }

  @Listen('tabsChange')
  tabsChangeHandler(event: CustomEvent<any>) {
    console.log('Received the custom tabChange event: ', event.detail);
    let tabs: TabItem[] = Object.values(event.detail);
    this.nsThemeHeader.tabCount = tabs.length;
    this.nsThemeTabsList.items = tabs;
    //store.set('tabs', tabs);
    //this.cacheTabs = tabs;

    store.set('tabs', tabs);
  }

  @Listen('tabClick')
  async tabClickHandler(event: CustomEvent<any>) {
    console.log('Received the custom tabClick event: ', event.detail);
    let tab = event.detail;
    await this.nsThemeTabs.toggleTab(tab);
    await this.nsThemePanels.togglePanel(tab);
    return tab;
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
    console.log('This session', this.session);

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

    //this.tabs = this.cacheTabs;
  }

  async componentDidRender() {
    //this.sortMenuItems();
    console.log('componentDidRender');
    if (this.cacheTabs) {
      for await (const tab of this.cacheTabs) {
        await this.addTab(tab)
      }

    }
  }

  sortMenuItems() {
    if (this.session && this.session.main?.items) {
      let sortedItems = this.session.main.items.sort((a, b) => {
        return a.order - b.order;
      });
      // TODO - SET THE DEFAULT TAB
      let defaultTab = sortedItems.find(item => item.default === true);
      if (defaultTab) {
        console.log('found default', defaultTab);
        //this.tabs.push(defaultTab);
      }
    }
  }

  @Method()
  async closeTab(index) {
    //this.themeTabs
    console.log('close', index);
  }

  @Method()
  async createPane(t) {
    let pane = document.createElement('div');
    pane.id = t.panelId;
    pane.innerHTML = `
        <h4>${t.id}</h4>
        <p>This is the tab content</p>
        `;
    return pane;
  }

  @Method()
  async addTab(tab) {
    let newTab = await this.nsThemeTabs.addTab(tab);
    let newPanel = await this.nsThemePanels.addPanel(newTab, document.createElement('div'));
    //return await toggleTab(newTab);
    //return this.nsThemeTabs.addTab(tab);
    let { tabs = [] } = this;
    tabs.push(newTab);
    this.tabs = tabs;
    return newPanel;
  }

  @Method()
  async selectHomeTab() {
    let tab = await this.nsThemeTabs.selectHomeTab();
    await this.nsThemeTabs.toggleTab(tab);
    await this.nsThemePanels.togglePanel(tab);
    return tab;
  }


  @Method()
  async open(): Promise<boolean> {
    // ...
    return true;
  }

  render() {
    return (
      <Host>
        <ns-theme-header id="nsThemeHeader"
          show-menu
          ref={el => this.nsThemeHeader = el as HTMLNsThemeHeaderElement}
          settings={this.session ? this.session.settings.items : []}
          user={this.session ? this.session.user : null}>
          <ns-theme-tabs id="nsThemeTabs"
            ref={el => this.nsThemeTabs = el as HTMLNsThemeTabsElement}
            slot="tabs"></ns-theme-tabs>
        </ns-theme-header>

        <ns-theme-panels id="nsThemePanels"
          ref={el => this.nsThemePanels = el as HTMLNsThemePanelsElement}></ns-theme-panels>
        <slot name="content"></slot>



        <ns-theme-drawer id="nsThemeTabsDrawer"
          ref={el => this.nsThemeTabsDrawer = el as HTMLNsThemeDrawerElement}
          header-text="Tab Management"
          anchor="right">
          <ns-theme-list-group id="nsThemeTabsList"
            items={this.tabs}
            ref={el => this.nsThemeTabsList = el as HTMLNsThemeListGroupElement}></ns-theme-list-group>
        </ns-theme-drawer>

        <footer>
          <slot name="footer"></slot>
        </footer>
      </Host>
    );
  }

}
