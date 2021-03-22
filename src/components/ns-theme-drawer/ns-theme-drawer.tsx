import { Component, Host, Prop, h, Listen, State, Watch, Method } from '@stencil/core';
import { NavItem } from '../props';


const iconStyles = {
  display: 'block',
  width: '22px',
  height: '22px'
}

@Component({
  tag: 'ns-theme-drawer',
  styleUrl: 'ns-theme-drawer.scss',
  shadow: true,
}) 
export class NsThemeDrawer {
  @State() open: boolean;

  /**
   * The header text for the drawer.
   */
  @Prop() headerText: string;

  /**
   * The anchor position of the drawer.
   */
  @Prop() anchor: string = 'left';

  /**
   * The navigation list items.
   */
  @Prop() items:[] = [];

  /**
   * Make the drawer be in fixed position.
   */
  @Prop() isFixed: boolean;

  /**
   * The open state of the drawer.
   */
  @Prop({mutable: true}) isOpened: boolean;
  
  @Watch('isOpened')
  watchHandler(newValue: boolean) {
    console.log('The new value of activated is: ', newValue);
  }

  /**
   * Usage document.dispatchEvent(new CustomEvent('toggleDrawer'))
   * @param event 
   */
  @Listen('toggleDrawer', {target: 'document'})
  toggleDrawerHandler() {
    this.isOpened = !this.isOpened;
  }
  
  @Listen('closeDrawer', {target: 'document'})
  closeDrawerHandler() {
    this.isOpened = false;
  }
  
  @Listen('openDrawer', {target: 'document'})
  openDrawer() {
    this.isOpened = true; 
  }

  @Listen('click', { capture: true })
  handleClick() {
    this.open = !this.open;
  }

  @Method()
  async toggle(){
    this.isOpened = !this.isOpened;
  }
  
  render() {
    return (
      <Host>
        <div 
        class={{
          'theme__drawer': true,
          'open': this.isOpened,
          'close': !this.isOpened,
          [`${this.anchor}`]: true
        }}
        >
        <header class="theme__drawer-header">
            <div>
              <ns-theme-branding-bar></ns-theme-branding-bar>
            </div>

            <button type="button" class="close" aria-label="Close" onClick={() => {
              document.dispatchEvent(new CustomEvent('closeDrawer'))
            }}>
              <i class="px-icon px-nav-close" color="inherit" style={{width: '22px', height: '22px'}}>
                <svg
                  viewBox="0 0 22 22"
                  preserveAspectRatio="xMidYMid meet"
                  style={iconStyles}
                >
                  <g id="px-nav-close">
                    <path stroke-miterlimit="10" d="M3 19L19 3M3 3l16 16"></path>
                  </g>
                  </svg>
                </i>
            </button>
          </header>
          <nav class="theme__drawer-content">
            <ul class="theme__drawer-nav">
              {this.items && this.items.map((item:NavItem) => (
                <li>
                  <a href={item.path}>{item.label}</a>
                </li>
              ))}
            </ul>
            <slot></slot>
          </nav>
       
        </div>

      </Host>
    );
  }

}

