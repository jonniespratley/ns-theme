import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';
import { TabItem } from '../props';
const iconStyle = {
  height: '16px',
  width: '16px'
};
const svgStyle = {
  pointerEvents: 'none',
  display: 'block',
  width: '16px',
  height: '16px'
}
@Component({
  tag: 'ns-theme-list-group',
  styleUrl: 'ns-theme-list-group.scss',
  shadow: false,
})
export class NsThemeListGroup {
  @Prop() items: TabItem[];
  @Event() tabClick: EventEmitter<TabItem>;
  onClickHandler(item: TabItem) {
    item.selected = true;
    this.tabClick.emit(item);
  }
  render() {
    return (
      <Host>
        <slot></slot>
        <ul class="list-group">
          {this.items && this.items.map((item) => (
            <li class={{ 'list-item': true, 'list-item--button': true, 'list-item--active': item.selected }}>
              <div class="list-item__content" onClick={() => {
                this.onClickHandler(item);
              }} role="button">
                <span class="list-item__subtitle">{item.title || 'App'}</span>
                <span class="list-item__title">{item.label}</span>
              </div>
              <div class="list-item__actions">
                <button title={`Open in ${item.label} New Window`} onClick={() => {
                  document.open(`${item.href}?chromeless=true`, `${item.title} Window`, null, true);
                }}>
                  <i class="gedi-new-window"></i>
                </button>
                <button title={`Close ${item.label} Tab`} onClick={() => {
                  document.dispatchEvent(new CustomEvent('closeTab', { detail: item }));
                }}>
                  <i class="gedi-close"></i>
                  <i class="px-icon px-utl-close " color="inherit" style={iconStyle}>
                    <svg viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet" style={svgStyle}>
                      <g id="px-utl-close"><path stroke-miterlimit="10" d="M2.3 2.3l11.4 11.4m0-11.4L2.3 13.7"></path></g></svg></i>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </Host>
    );
  }
}
