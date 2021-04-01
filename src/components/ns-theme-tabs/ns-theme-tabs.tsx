import { Component, Host, h, Prop, Event, EventEmitter, FunctionalComponent, State, Method, Watch, Listen } from '@stencil/core';
import { getLogger } from '../../utils/utils';
import { TabProps, TabItem, TabsMap } from '../props';


const log = getLogger('tabs')
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
  order,
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
      data-ns-order={order}
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

//let tabCount = 0;

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
  @Prop({ reflect: true }) selectedIndex: number;

  /**
   * The home tab that cannot be closed
   */
  @Prop({ mutable: true }) homeTab: TabItem;

  /**
   * The list of tab items that get added to tab list
   */
  @Prop() items: TabItem[] = [];

  @Event() tabChange: EventEmitter<TabItem>;
  @Event() tabsChange: EventEmitter<TabItem[]>;
  @Event() tabAdded: EventEmitter<TabItem>;
  @Event() tabClick: EventEmitter<TabItem>;
  @Event() tabClose: EventEmitter<TabItem>;


  componentWillLoad() {
    log('componentWillLoad', this);
    [...this.items].sort(this.sortByOrder).forEach(t => {
      if (t.selected) {
        this.selectedTab = t;
      }
      if (t.default || t.home) {
        this.homeTab = t;
      }
      this.tabs[t.id] = t;
    });
  }

  /**
   * Get the current tabs rendered
   * @returns Array of tabs
   */
  @Method()
  async getTabs() {
    return this.tabs;
  }
  /**
   * Get the current tabs rendered
   * @returns Array of tabs
   */
  @Method()
  async getTabsArray() {
    return Object.values(this.tabs);
  }
  @Method()
  async getTabsArraySorted() {
    let arr = Object.values(this.tabs);
    return this.sortByOrder(arr);
  }
  /**
   * Add a tab to the tabs
   * @param tab TabItem to add
   * @returns Updated array of tabs
   */
  @Method()
  async addTab(tab: TabItem) {
    let t = { ...tab };
    if (!this.homeTab && t.home) {
      this.homeTab = t;
    } else if (this.homeTab && t.home) {
      console.warn('[ns-theme-tabs]', 'home tab already present!');
      return tab;
      //throw new Error('Only 1 home tab')
    }

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
    this.tabs = oldTabs;
    this.tabClose.emit(tab);
    return tab;
  }

  /**
  * Handles toggling a tab's selected property.
  * @param tab The tab item to toggle
  */
  @Method()
  async toggleTab(tab: TabItem) {
    if (!tab) {
      return;
    }
    if (tab === this.selectedTab) {
      return;
    }
    this.selectedTab = tab;
    let oldTabs = { ...this.tabs }
    Object.values(oldTabs).forEach((t: TabItem) => {

      if (oldTabs[t.id].selected) {
        oldTabs[t.id].selected = false;
      }
    });
    if (oldTabs[tab.id]) {
      oldTabs[tab.id].selected = !tab.selected;
    }

    this.tabs = oldTabs;
    return tab;
  }

  /**
   * Select home tab finds the home tab from the tabs.
   * @returns Home tab
   */
  @Method()
  async selectHomeTab() {
    let home = null;
    home = Object.values(this.tabs).find((item) => {
      return item.home || item.default;
    });
    return this.toggleTab(home);
  }

  @Method()
  async getHomeTab() {
    return this.homeTab;
  }

  @Watch('tabs')
  watchTabsHandler(newValue: any) {
    this.tabsChange.emit(newValue);
  }

  tabClickHandler(item: TabItem) {
    item.selected = true;
    this.tabClick.emit(item);
  }

  @Listen('closeTab', { target: 'document' })
  closeTabHandler(event: CustomEvent<TabItem>) {
    this.closeTab(event.detail);
  }

  @Listen('keydown', { target: 'document' })
  handleKeyDown(ev: KeyboardEvent) {
    if (ev.key === 'ArrowRight') {
      console.log('ArrowRight pressed')
    }
    if (ev.key === 'ArrowLeft') {
      console.log('ArrowLeft pressed')
    }
  }

  sortByOrder(arr) {
    return arr.map((a, index) => {
      let o = { ...a }
      o.order = a.order || index + 1;
      if (o.home) {
        o.order = 0;
      }
      return o;
    }).sort((a, b) => a.order - b.order);
  }

  render() {

    return (

      <Host>
        <ul class="ns-theme__tabs">
          {  /** Home Tab 
          {this.homeTab && <Tab home={true}
            {...this.homeTab}
            onClick={(e) => {
              e.preventDefault();
              this.homeTab.selected = !this.homeTab.selected;
              //this.tabClickHandler(this.homeTab);
            }} />}
*/}
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
