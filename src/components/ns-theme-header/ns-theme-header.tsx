import { Component, Host, Prop, h, Event, EventEmitter } from '@stencil/core';
import { NavItem, IUser } from '../props';
const iconStyles = {
  display: 'block',
  width: '22px',
  height: '22px'
}

const HomeNavItem = ({ selected = false }) => (
  <div class={`theme__nav-item theme__nav-item-icon ${selected ? 'theme__nav-item--selected' : ''}`}>
    <button title="Home" class="btn theme__nav-link">
      <i class="px-icon px-nav-home m-0">
        <svg viewBox="0 0 22 22" preserveAspectRatio="xMidYMid meet" style={iconStyles}>
          <g id="px-fea-home"><path stroke-linejoin="round" d="M5.5 16v14.5h21V16m-25-.79L16 2.1l14.5 13.11"></path><path stroke-linejoin="round" d="M12.5 22.5h7v8h-7z"></path></g>
        </svg>
      </i>
    </button>
  </div>
)

const TabManagerButton = ({ onClick, title = 'Tab Manager', tabCount = 0 }) => (
  <button class="theme__nav-link theme__tab-btn" role="button" title={title} onClick={onClick}>
    <span class="px-icon square">
      <span>{tabCount}</span>
    </span>

  </button>
)
/*

const NotificationNavItem = () => (
  <li class="theme__nav-item theme__nav-item-icon ">
    <a href="#" title="Notifications" class="theme__nav-link">
      <i class="px-icon px-nav-notification m-0">
        <svg viewBox="0 0 22 22" preserveAspectRatio="xMidYMid meet" style={iconStyles}>
          <g id="px-nav-notification">
            <path d="M.5 16.5a3 3 0 0 0 3-3v-3.19A7.86 7.86 0 0 1 8.5 3a2.5 2.5 0 0 1 5 0 7.86 7.86 0 0 1 5 7.36v3.14a3 3 0 0 0 3 3" stroke-linejoin="round"></path>
            <path d="M7.5 18a3.5 3.5 0 0 0 7 0M0 16.5h22" stroke-miterlimit="10"></path>
          </g>
        </svg>
      </i>
    </a>
  </li>
)

function SearchNavItem() {
  return (<li class="theme__nav-item theme__nav-item-icon mr-1">
    <a href="#" title="Search" class="theme__nav-link">
      <i class="px-icon m-0">
        <svg viewBox="0 0 22 22" preserveAspectRatio="xMidYMid meet" focusable="false" style={iconStyles}>
          <g>
            <circle cx="8.5" cy="8.5" r="8" stroke-miterlimit="10"></circle>
            <path stroke-miterlimit="10" d="M21 21l-6.84-6.84"></path>
          </g>
        </svg>
      </i>
    </a>
  </li>);
}

const NavbarToggler = () => (
  <button class="theme__toggler collapsed" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation"
  onClick={() => {
    document.dispatchEvent(new CustomEvent('toggleDrawer'))
  }}>
    <span class="theme__toggler-icon">
      <svg viewBox="0 0 22 22" preserveAspectRatio="xMidYMid meet" focusable="false" style={iconStyles}>
        <g><path stroke-miterlimit="10" d="M0 4.5h22m-22 6h22m-22 6h22"></path></g>
      </svg>
    </span>
  </button>
)

const AddNavItem = () => (
  <li class="theme__nav-item theme__nav-item-icon mr-1">
    <a href="#" title="Add" class="theme__nav-link">
      <i class="px-icon m-0">
        <svg viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet" focusable="false" style={iconStyles}>
          <g><path stroke-linejoin="round" d="M7.5 16V1m0 15V1M0 8.5h15"></path></g>
        </svg>
      </i>
    </a>
  </li>
)


const UserNavItem: FunctionalComponent<NavItems> = ({ items }) => (
  <li class="theme__nav-item theme__dropdown theme__dropdown--right theme__user">
    <button class="theme__nav-link theme__dropdown-toggle" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <img class="theme__avatar" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/49212/profile/profile-80.jpg" alt="jonnie.spratley"/>
      
      {
       <i class="px-icon">
        <svg viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet" style={{...iconStyles, width: '16px'}}>
          <g id="px-utl-chevron"><path d="M2.4 6.2l5.5 5.5 5.5-5.5"></path></g>
        </svg>
      </i>
      }
    </button>
    <div class="theme__dropdown-menu ml-auto" aria-labelledby="userDropdown">
      {items && items.map((item: NavItem) => (
          <a class="theme__dropdown-item" 
            
            href={item.path} title={item.label}>{item.label}</a>
      ))}
      <a class="theme__dropdown-item" href="/logout" title="Logout">Log Out</a>
    </div>
  </li>
)

interface NavItemProps extends NavItem {
  onClick:() => void;
  //selected?: boolean;
}

const NavListItem: FunctionalComponent<NavItemProps> = ({
  id, label, path, icon,
  selected, 
  order,
  onClick
}) => (
  <li class={`theme__nav-item ${selected ? 'theme__nav-item--selected' : ''}`}>
    <a class="theme__nav-link" 
      onClick={onClick}
      tabindex={order}
      href={`#${path}`} 
      id={id}
      data-path={path}
      data-order={order}
      title={label}>
      <i class={`fa icon px-icon ${icon}`} ></i>
      <span aria-labelledby={label}>{label}</span>
      <span class="close">x</span>
    </a>
  </li>
)

function SearchNavItem() {
  return (<li class="theme__nav-item theme__nav-item-icon mr-1">
    <a href="#" title="Search" class="theme__nav-link">
      <i class="px-icon m-0">
        <svg viewBox="0 0 22 22" preserveAspectRatio="xMidYMid meet" focusable="false" style={iconStyles}>
          <g>
            <circle cx="8.5" cy="8.5" r="8" stroke-miterlimit="10"></circle>
            <path stroke-miterlimit="10" d="M21 21l-6.84-6.84"></path>
          </g>
        </svg>
      </i>
    </a>
  </li>);
}
*/


/**
 * @example
 * Example usage for HTML
 * ```
 *  <ns-theme-header id="headerExample4" show-menu="true" show-home="true"></ns-theme-header>
 * ```
 */
@Component({
  tag: 'ns-theme-header',
  styleUrl: 'ns-theme-header.scss',
  shadow: true,
})
export class NsThemeHeader {
  /**
   * The title for the header
   */
  @Prop() headerText: string;
  /**
   * The tabCount for the tab manager
   */
  @Prop() tabCount: number;
  /**
   * Main navigation items
   */
  @Prop() items: NavItem[] = [];
  /**
   * Profile navigation items
   */
  @Prop() profile: NavItem[] = [];
  /**
   * Settings navigation items
   */
  @Prop() settings: NavItem[] = [];
  /**
   * User properties for user menu
   */
  @Prop() user: IUser;

  /**
   * Header in fixed position or not
   */
  @Prop() isFixed: boolean;
  /**
   * Show Toggle menu button
   */
  @Prop() showMenu: boolean;
  /**
   * Show Home menu button
   */
  @Prop() showHome: boolean;

  /**
   * menuToggleClick dispatches when menu button is pressed
   */
  @Event() menuToggleClick: EventEmitter<any>;
  menuToggleClickHandler() {
    this.menuToggleClick.emit();
  }
  @Event() tabManagerClick: EventEmitter<any>;
  tabManagerClickHandler() {
    this.tabManagerClick.emit();
  }

  render() {
    return (
      <Host>
        {this.headerText && <a class="theme__navbar-brand" href="#">{this.headerText}</a>}
        <header class={`theme__header ${this.isFixed ? 'theme__header--fixed' : ''}`}>
          {this.showMenu && (
            <button class="btn theme__toggler collapsed" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation"
              onClick={() => {
                this.menuToggleClickHandler()
              }}>
              <span class="theme__toggler-icon">
                <svg viewBox="0 0 22 22" preserveAspectRatio="xMidYMid meet" focusable="false" style={iconStyles}>
                  <g><path stroke-miterlimit="10" d="M0 4.5h22m-22 6h22m-22 6h22"></path></g>
                </svg>
              </span>
            </button>
          )}
          <slot name="menu"></slot>
          <div>
            <slot name="home"></slot>
            {this.showHome && <HomeNavItem />}
          </div>
          <slot name="tabs"></slot>
          <div class="theme__user">
            <slot name="user"></slot>
          </div>
          <ul class="theme__nav">
            {this.tabCount &&
              <li class="theme__nav-item">
                <TabManagerButton tabCount={this.tabCount} onClick={() => {
                  this.tabManagerClickHandler()
                }} />
              </li>}
            {this.user &&
              <li class="theme__nav-item theme__dropdown theme__dropdown--right theme__user">
                <button class="theme__nav-link theme__dropdown-toggle" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {this.user.picture && <img class="theme__avatar" src={this.user.picture} alt={this.user.name} />}
                  <i class="gedi-user"></i>

                  {
                    <i class="px-icon">
                      <svg viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet" style={{ ...iconStyles, width: '16px' }}>
                        <g id="px-utl-chevron"><path d="M2.4 6.2l5.5 5.5 5.5-5.5"></path></g>
                      </svg>
                    </i>
                  }
                </button>
                <div class="theme__dropdown-menu ml-auto" aria-labelledby="userDropdown">
                  {this.settings && this.settings.map((item: NavItem) => (
                    <a class="theme__dropdown-item"
                      href={item.path} title={item.label}>{item.label}</a>
                  ))}
                  <a class="theme__dropdown-item" href="/logout" title="Logout">Log Out</a>
                </div>
              </li>}
          </ul>

          {/**
            <ul class="theme__nav">
              <SearchNavItem/>
              <AddNavItem/>
              <NotificationNavItem/>
              <UserNavItem/>
            </ul>
           */}
        </header>
      </Host>
    );
  }
}
