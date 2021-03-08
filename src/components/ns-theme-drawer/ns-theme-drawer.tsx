import { Component, Host, Prop, h, Listen } from '@stencil/core';


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
  @Prop() headerText: string;
  @Prop() position: string = 'left';
  @Prop() items:[] = [];
  @Prop() isFixed: boolean;
  @Prop({mutable: true}) isOpened: boolean;

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
  
  render() {
    return (
      <Host>
        <aside class={`theme__drawer theme__drawer--${this.position} ${this.isOpened ? 'theme__drawer--animate-in' : 'theme__drawer--animate-out'}`}>
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
          <slot></slot>

          </nav>
        </aside>
      </Host>
    );
  }

}

