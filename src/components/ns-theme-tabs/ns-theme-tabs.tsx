import { Component, Host, h, Prop, Event, EventEmitter, FunctionalComponent, State, Method, Watch } from '@stencil/core';
import { TabProps, TabItem } from '../props';

const Tab: FunctionalComponent<TabProps> = ({
  id, 
  label, 
  title = 'App',
  href, 
  panelId,
  selected, 
  onClick,
  onRemove
}) => (
  <li 
  aria-selected={selected ? 'true' : 'false'}
  class={{
    'ns-theme__tab-item': true,
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
        <span class="subtitle">{title}</span>
        <span class="title">{label}</span>
    </a>
    <button class="close" data-action="close" onClick={onRemove}>
      <i class="px-icon px-utl-close" color="inherit" 
        style={{height: '20px', width: '20px'}}>
        <svg viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet" ><g id="px-utl-close"><path stroke-miterlimit="10" d="M2.3 2.3l11.4 11.4m0-11.4L2.3 13.7"></path></g></svg></i>
    </button>
    
      
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
   * The selected tab index
   */
  @State() selectedTab: number;
  /**
   * The array of tab items
   */
  @State() tabs: TabItem[];
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
  async getTabs(){
    return this.tabs;
  }
  /**
   * Add a tab to the tabs
   * @param tab TabItem to add
   * @returns Updated array of tabs
   */
   @Method()
   async addTab(tab: TabItem) {
    let t = {...tab, index: this.tabs.length};
     this.tabs = [
       ...this.tabs,
       t
     ]
     this.tabAdded.emit(t);
     return t;
   }

   /**
  *  Close a tab from the tab set.
    * @param index number The index of the tab to close.
    * @returns 
    */
   @Method()
   async closeTab(index) {
    let {tabs} = this;
    let [tab] = tabs.splice(index, 1);
    this.tabs = [...tabs]
    this.tabClose.emit(tab);
    return tab;
   }

   componentWillLoad(){
     this.selectedTab = this.selectedIndex;
     this.tabs = [...this.items];
   }

   @Watch('selectedIndex')
   watchHandler(newValue: number) {
     this.selectedTab = newValue
   }

   @Watch('tabs')
   watchTabsHandler(newValue: any) {
     this.tabChange.emit(newValue);
   }

   tabClickHandler(item: TabItem, index: number) {
    //let index = this.tabs.indexOf(item);
    this.selectedTab = index;
    this.tabClick.emit(item);
  }

  
  render() {
    return (
      <Host>
        <ul class="ns-theme__tabs">
            {  /* Repeat Nav Items  */}
              {this.tabs && this.tabs.map((item, index) => (
                <Tab 
                  {...item} 
                  selected={this.selectedIndex === index}
                  onRemove={() => {
                    this.closeTab(index);
                  }}
                  onClick={() => {
                    this.tabClickHandler(item, index);
                  }} 
                />))}
        </ul>
      </Host>
    );
  }

}
