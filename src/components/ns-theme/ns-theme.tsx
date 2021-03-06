import { Component, Host, h, Listen, Method, Element, Prop } from '@stencil/core';

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
  cacheData = state;
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
  tabManagerClickHandler() {
    //console.log('Received the custom todoCompleted event: ', event.detail);
    this.nsThemeTabsDrawer.toggle();
  }
  @Listen('drawerHeaderAction')
  drawerHeaderActionHandler(event: CustomEvent<any>) {
    console.log('Received the custom drawerHeaderAction event: ', event.detail);
  }
  @Listen('tabChange')
  tabChangeHandler(event: CustomEvent<any>) {
    console.log('Received the custom tabChange event: ', event.detail);
  }

  @Listen('tabsChange')
  tabsChangeHandler(event: CustomEvent<any>) {
    //console.log('Received the custom tabChange event: ', event.detail);
    let tabs: TabItem[] = Object.values(event.detail);
    this.nsThemeHeader.tabCount = tabs.length;
    this.nsThemeTabsList.items = tabs;
    //store.set('tabs', tabs);
    //this.cacheTabs = tabs;

    store.set('tabs', tabs);
  }

  @Listen('tabClick')
  async tabClickHandler(event: CustomEvent<any>) {
    //console.log('Received the custom tabClick event: ', event.detail);
    let tab = event.detail;
    await this.nsThemeTabs.toggleTab(tab);
    await this.nsThemePanels.togglePanel(tab);
    return tab;
  }

  @Listen('tabClose')
  tabCloseHandler(event: CustomEvent<any>) {
    console.log('Received the custom tabClose event: ', event.detail);
  }

  async componentDidRender() {
    let { cacheTabs = [] } = this;
    if (this.cacheData && this.cacheData.main) {
      let { items = [] } = this.cacheData.main;

      let defaultApp = items.find(i => i.default);
      let defaultAppIndex = [...cacheTabs].indexOf(defaultApp);
      if (defaultApp && defaultAppIndex <= 0) {
        cacheTabs.unshift(defaultApp);
      }
    }
    if (cacheTabs) {
      for await (const tab of cacheTabs) {
        await this.addTabAndPanel(tab);
      }
    }
  }

  sortMenuItems() {
    if (this.session && this.session.main?.items) {
      let sortedItems = this.session.main.items.sort((a, b) => {
        return a.order - b.order;
      });
      return sortedItems;
    }
  }

  @Method()
  async createPane(t) {
    let pane = document.createElement('div');
    pane.id = t.panelId;
    // pane.src = t.href;
    pane.style.width = '100%';
    pane.style.height = '99vh';
    pane.style.border = 'none';

    return pane;
  }

  @Method()
  async addTabAndPanel(tab, el?) {
    if (!el) {
      el = await this.createPane(tab);
    }
    let newTab = await this.addTab(tab);
    let newPanel = await this.addPanel(newTab, el);
    //return await toggleTab(newTab);
    //return this.nsThemeTabs.addTab(tab);
    let { tabs = [] } = this;
    tabs.push(newTab);
    this.tabs = tabs;
    return { newTab, newPanel };
  }

  @Method()
  async selectHomeTab() {
    let tab = await this.nsThemeTabs.selectHomeTab();
    await this.nsThemeTabs.toggleTab(tab);
    await this.nsThemePanels.togglePanel(tab);
    return tab;
  }

  @Method()
  async addTabs(tabs: TabItem[]) {
    //return await this.nsThemeTabs.addTab(tab);
    for await (const tab of tabs) {
      await this.addTabAndPanel(tab);
    }
  }

  @Method()
  async addTab(tab) {
    return await this.nsThemeTabs.addTab(tab);
  }

  @Method()
  async addPanel(tab, element) {
    return await this.nsThemePanels.addPanel(tab, element)
  }


  @Method()
  async open(): Promise<boolean> {
    // ...
    return true;
  }

  @Method()
  async getNsTabs() {
    return this.nsThemeTabs;
  }

  @Method()
  async getNsPanels() {
    return this.nsThemePanels
  }

  render() {
    return (
      <Host>

        <ns-theme-header id="nsThemeHeader"
          ref={el => this.nsThemeHeader = el as HTMLNsThemeHeaderElement}
          settings={this.session ? this.session.settings.items : []}
          user={this.session ? this.session.user : null}>
          <div slot="menu">
            <slot name="menu"></slot>
          </div>

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
