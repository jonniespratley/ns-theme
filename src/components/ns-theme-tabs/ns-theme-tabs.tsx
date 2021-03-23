import { Component, Host, h, Prop, Event, EventEmitter, FunctionalComponent, State, Method, Watch } from '@stencil/core';
import { TabProps, TabItem, TabsMap } from '../props';

/**
 * pointer-events: none; display: block; width: 100%; height: 100%;
 */
const iconStyles = {
  display: 'block',
  pointerEvents: 'none',
  width: '100%',
  height: '100%'
}

const HomeIcon = () => (
  <i class="px-icon px-nav-home m-0">
    <svg viewBox="0 0 32 32" preserveAspectRatio="xMidYMid meet" style={iconStyles}>
      <g id="px-fea-home"><path stroke-linejoin="round" d="M5.5 16v14.5h21V16m-25-.79L16 2.1l14.5 13.11"></path><path stroke-linejoin="round" d="M12.5 22.5h7v8h-7z"></path></g>
    </svg>
  </i>
)

const Tab: FunctionalComponent<TabProps> = ({
  id,
  label,
  title = 'App',
  href,
  panelId,
  selected,
  home,
  onClick,
  onRemove
}) => (
  <li
    aria-selected={selected ? 'true' : 'false'}
    class={{
      'ns-theme__tab-item': true,
      home: home,
      active: selected
    }}>
    <a
      href={`#${panelId}`}
      aria-controls={`pane-${id}`}
      role="tab"
      data-ns-toggle="tab"
      data-ns-target={`${panelId}`}
      data-ns-href={`${href}`}
      id={id}
      title={label}
      class={{
        'ns-theme__tab-link': true
      }}
      onClick={onClick}>

      {!home && <span class="subtitle">{title}</span>}
      {!home && <span class="title">{label}</span>}
      {home && <HomeIcon />}
    </a>
    {!home &&
      <button class="close" data-action="close" onClick={onRemove}>
        <i class="px-icon px-utl-close" color="inherit"
          style={{ height: '16px', width: '16px' }}>
          <svg viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet" ><g id="px-utl-close"><path stroke-miterlimit="10" d="M2.3 2.3l11.4 11.4m0-11.4L2.3 13.7"></path></g></svg></i>
      </button>}


  </li>
)

@Component({
  tag: 'ns-theme-tabs',
  styleUrl: 'ns-theme-tabs.scss',
  shadow: true,
})
export class NsThemeTabs {
  //@Prop() selected:number = 0;
  /**
   * The selected tab 
   */
  @State() selectedTab: TabItem;
  /**
   * The array of tab items
   */
  @State() tabs: TabsMap = {};
  /**
   * The default selected index
   */
  @Prop() selectedIndex: number = 0;

  /**
   * The default tabs to render
   */
  @Prop() items: TabItem[] = [];

  @Event() tabChange: EventEmitter<TabItem[]>;
  @Event() tabAdded: EventEmitter<TabItem>;
  @Event() tabClick: EventEmitter<TabItem>;
  @Event() tabClose: EventEmitter<any>;

  /**
   * Get the current tabs rendered
   * @returns Array of tabs
   */
  @Method()
  async getTabs() {
    return this.tabs;
  }
  /**
   * Add a tab to the tabs
   * @param tab TabItem to add
   * @returns Updated array of tabs
   */
  @Method()
  async addTab(tab: TabItem) {
    let t = { ...tab };
    let oldTabs = { ...this.tabs }
    oldTabs[t.id] = tab;
    this.tabs = oldTabs;
    this.tabAdded.emit(t);
    return t;
  }

  /**
 *  Close a tab from the tab set.
   * @param index number The index of the tab to close.
   * @returns 
   */
  @Method()
  async closeTab(tab: TabItem) {
    let oldTabs = { ...this.tabs };
    delete oldTabs[tab.id];
    this.tabClose.emit(tab);
    this.tabs = oldTabs;
    return tab;
  }

  /**
  * Handles toggling a tab's selected property.
  * @param tab The tab item to toggle
  */
  @Method()
  async toggleTab(tab: TabItem) {
    let oldTabs = { ...this.tabs }
    Object.values(oldTabs).forEach((t: TabItem) => {
      oldTabs[t.id].selected = false;
    });

    oldTabs[tab.id].selected = true;
    this.tabs = oldTabs;
  }
  @Method()
  async selectHomeTab() {
    let home = null;
    Object.values(this.tabs).forEach((t: TabItem) => {
      if(t.home){
        home = t;
       
      }
    });
    return home;
  }


  componentWillLoad() {
    [...this.items].forEach(t => {
      if (t.selected) {
        this.selectedTab = t;
      }
      this.tabs[t.id] = t;

    });
  }

  @Watch('selectedIndex')
  watchHandler(newValue: number) {
    //this.selectedTab = newValue
  }

  @Watch('tabs')
  watchTabsHandler(newValue: any) {
    this.tabChange.emit(newValue);
  }

  tabClickHandler(item: TabItem) {
    item.selected = true;
    this.tabClick.emit(item);
  }


  render() {
    return (
      <Host>
        <ul class="ns-theme__tabs">
          {  /** Home Tab */}
          {  /* Repeat Nav Items  */}
          {this.tabs && Object.values(this.tabs).map((item: TabItem) => (
            <Tab
              {...item}
              selected={item.selected}
              home={item.home}
              onRemove={() => {
                this.closeTab(item);
              }}
              onClick={(e) => {
                e.preventDefault();
                this.tabClickHandler(item);
              }}
            />))}
        </ul>
      </Host>
    );
  }

}
