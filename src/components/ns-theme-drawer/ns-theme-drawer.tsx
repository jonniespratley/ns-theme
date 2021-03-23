import { Component, Host, Prop, h, Element, Listen, State, Watch, Method } from '@stencil/core';

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
  @Element() el: HTMLElement;
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
  @Prop() items: [] = [];

  /**
   * Make the drawer be in fixed position.
   */
  @Prop() isFixed: boolean;

  /**
   * The open state of the drawer.
   */
  @Prop({ mutable: true }) isOpened: boolean;

  componentDidRender() {
    this.transformDrawer()
  }

  getTranslate(x = 0, y = 0) {
    let str = `translate3d(${x}px, ${y}px, 0)`;
    return str;
  }

  transformDrawer() {
    if (this.isOpened) {
      return this.el.style.transform = '';
    }
    let { height, width } = this.el.getBoundingClientRect();
    let str = '';
    switch (this.anchor) {
      case 'top':
        str = this.getTranslate(0, -height);
        break;
      case 'bottom':
        str = this.getTranslate(0, height);
        break;
      case 'right':
        str = this.getTranslate(width, 0);
        break;
      case 'left':
        str = this.getTranslate(-width, 0);
        break;
    }
    this.el.style.transform = str;
  }

  /**
   * Usage document.dispatchEvent(new CustomEvent('toggleDrawer'))
   * @param event 
   */
  @Listen('toggleDrawer', { target: 'document' })
  toggleDrawerHandler() {
    this.isOpened = !this.isOpened;
  }

  @Listen('closeDrawer', { target: 'document' })
  closeDrawerHandler() {
    this.isOpened = false;
  }

  @Listen('openDrawer', { target: 'document' })
  openDrawer() {
    this.isOpened = true;
  }

  @Listen('click', { capture: true })
  handleClick() {
    this.isOpened = !this.isOpened;
  }

  @Method()
  async toggle() {
    this.isOpened = !this.isOpened;
  }

  render() {
    return (
      <Host class={{
        'theme__drawer': true,
        'theme__drawer--open': this.isOpened,
        [`theme__drawer--${this.anchor}`]: true
      }}>

        <header class="theme__drawer-header">
          <div>
            {this.headerText && <h3>{this.headerText}</h3>}
          </div>

          <button type="button" class="close" aria-label="Close" onClick={() => {
            document.dispatchEvent(new CustomEvent('closeDrawer'))
          }}>
            <i class="px-icon px-nav-close" color="inherit" style={{ width: '22px', height: '22px' }}>
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



      </Host>
    );
  }

}

